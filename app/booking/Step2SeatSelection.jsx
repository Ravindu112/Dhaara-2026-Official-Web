"use client";

import React, { useState, useEffect } from 'react';
import SeatMap from './SeatMap';

const Step2SeatSelection = ({ formData, setFormData, selectedSeats, setSelectedSeats, nextStep, prevStep, API_URL }) => {
    const isOutsider = formData.faculty === 'Outside the University/Graduate' || formData.faculty === 'University Staff';
    const [mapData, setMapData] = useState(null);
    const [stageData, setStageData] = useState(null);
    const [balconyLimit, setBalconyLimit] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showTimeout, setShowTimeout] = useState(false);

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setShowTimeout(true);
        }, 5000);

        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                clearTimeout(timeoutId);

                let parsedGrid = data.grid;
                if (!parsedGrid && data.gridCSV) {
                    const rows = data.gridCSV.split('\n');
                    parsedGrid = rows.map(row => {
                        return row.split(',').map(cellString => {
                            cellString = cellString.trim();
                            if (!cellString) return { text: '', color: '#ffffff' };

                            const parts = cellString.split('_');
                            const text = parts[0];
                            const type = parts[1]; // G, B, O
                            const status = parts[2]; // T (Ticket available), F/other (Booked)

                            let color = '#ffffff';
                            if (status !== 'T') {
                                color = '#ff0000'; // Booked
                            } else {
                                if (type === 'G') color = '#00ff00';
                                else if (type === 'B') color = '#45818e';
                                else if (type === 'O') color = '#ff9900';
                            }
                            return { text, color };
                        });
                    });
                }

                setMapData(parsedGrid);
                setStageData(data.stage);

                const limit = parseInt(data.balconyLimit) || 0;
                setBalconyLimit(limit);

                // Adjust current balconyCount if it exceeds new limit
                const userLimit = Math.min(4, limit);
                if (formData.balconyCount > userLimit) {
                    setFormData(prev => ({ ...prev, balconyCount: userLimit.toString() }));
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load map data", error);
            }
        };

        fetchData();

        return () => clearTimeout(timeoutId);
    }, [API_URL, formData.balconyCount, setFormData]);

    const handleBalconyChange = (e) => {
        setFormData({ ...formData, balconyCount: e.target.value });
    };

    const handleNext = () => {
        const balcCount = isOutsider ? 0 : (parseInt(formData.balconyCount) || 0);
        if (selectedSeats.size === 0 && balcCount === 0) {
            alert("Please select map seats or enter balcony tickets before proceeding to payment.");
            return;
        }

        // Safety check - shouldn't happen with UI constraints, but just in case
        let catCounts = {};
        selectedSeats.forEach(color => { catCounts[color] = (catCounts[color] || 0) + 1; });
        let maxViolated = false;
        for (let c in catCounts) {
            if (catCounts[c] > 4) maxViolated = true;
        }

        if (maxViolated || balcCount > 4) {
            alert("Validation Error: You have exceeded the maximum limit of 4 tickets per category. Please deselect some seats.");
            return;
        }

        nextStep();
    };

    // Calculations for Order Summary
    const countColor = (hex) => {
        let count = 0;
        selectedSeats.forEach(color => {
            if (color === hex) count++;
        });
        return count;
    };

    const balcCount = isOutsider ? 0 : (parseInt(formData.balconyCount) || 0);
    const count2000 = countColor('#00ff00');
    const count3000 = countColor('#45818e');
    const count5000 = countColor('#ff9900');

    const totalTickets = selectedSeats.size + balcCount;
    const price3000 = count3000 >= 2 ? 2500 : 3000;
    const totalAmt = (balcCount * 1500) + (count2000 * 2000) + (count3000 * price3000) + (count5000 * 5000);

    const userLimit = Math.min(4, balconyLimit);

    return (
        <div className="animate-[slideUp_0.4s_ease-out]" id="step2">
            <h3 className="border-b-2 border-[#343a40] pb-4 m-0 mb-6 text-[#e9ecef] text-xl font-semibold text-left">Step 2: Reserve Your Seats</h3>
            <div className="flex flex-col md:flex-row items-start gap-5">

                {/* Left Side: Map */}
                <div className="flex-[3] min-w-0 w-full">
                    {isLoading ? (
                        <div className="text-[#adb5bd] mb-2.5 text-center">
                            Loading...<br />
                            {showTimeout && <span className="text-[#ffc107] font-bold mt-2.5 block text-sm">This may take a few moments. Please wait...</span>}
                        </div>
                    ) : (
                        <SeatMap
                            gridData={mapData}
                            stageData={stageData}
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                        />
                    )}
                </div>

                {/* Right Side: Balcony & Buttons */}
                <div className="flex-1 min-w-0 md:min-w-[300px] md:sticky md:top-5 bg-[#1e1e1e] p-5 rounded-xl border border-[#343a40]">
                    <div className="flex justify-center gap-5 mb-5 text-[13px] flex-wrap p-2.5 bg-[#2c2c2c] rounded-lg border border-[#343a40]">
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full inline-block mr-1.5 align-middle bg-[#007d1f]"></span>Rs. 2000</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full inline-block mr-1.5 align-middle bg-[#45818e]"></span>Rs. 3000</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full inline-block mr-1.5 align-middle bg-[#ff9900]"></span>Rs. 5000</div>
                        <div className="flex items-center"><span className="w-3 h-3 rounded-full inline-block mr-1.5 align-middle bg-[#dc3545] opacity-60"></span>Booked</div>
                    </div>

                    {/* Conditionally hide balcony tickets for outsiders */}
                    {!isOutsider && (
                        <>
                            <hr className="mb-2.5 border-t border-[#343a40]" />

                            <h4 className="mt-0 mb-2.5 text-[#e9ecef] text-left font-bold">Rs. 1500 Tickets(Balcony Only)</h4>
                            <div className="flex flex-col text-left mb-5">
                                <label className="font-medium mb-2 text-[#e9ecef] text-sm">Number of Tickets:</label>
                                <select
                                    name="balconyCount"
                                    value={formData.balconyCount}
                                    onChange={handleBalconyChange}
                                    disabled={isLoading || balconyLimit <= 0}
                                    className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                                >
                                    <option value="0">0</option>
                                    {[...Array(userLimit)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <div className="text-left text-[11px] font-bold mt-[1px]" style={{ color: balconyLimit <= 0 && !isLoading ? 'red' : 'inherit' }}>
                                    {isLoading ? 'Fetching availability...' :
                                        balconyLimit <= 0 ? 'Sold out! No tickets remaining.' :
                                            `Total available seats: ${balconyLimit} (You can buy up to ${userLimit})`
                                    }
                                </div>
                                <span className="block text-xs text-amber-400 mb-2 mt-2">Seating numbers cannot be reserved for balcony tickets. Balcony seating is on a first-come, first-served basis.</span>
                                <div className="text-xs text-gray-300 mt-2 bg-[#2c2c2c] border border-[rgba(255,255,255,0.05)] p-3 rounded-lg shadow-sm">
                                    <p className="mb-1"><strong className="text-amber-400">Balcony Division:</strong> Audience will be divided into two balconies based on ticket purchase order:</p>
                                    <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-400">
                                        <li><strong className="text-gray-300">Balcony No. 01:</strong> First sold tickets</li>
                                        <li><strong className="text-gray-300">Balcony No. 02:</strong> Later sold tickets</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}

                    <hr className="mb-2.5 border-t border-[#343a40]" />

                    <div id="order-summary" className="bg-[#2c2c2c] p-4 rounded-lg border border-[#343a40] mb-4 text-left">
                        <h4 className="mt-0 mb-2.5 text-[#e9ecef]">Pricing Summary</h4>

                        {balcCount > 0 && (
                            <div className="flex items-center mb-1 text-sm">
                                <span className="flex-1">Balcony (Rs. 1500)</span>
                                <span className="w-[50px] text-center text-[#e9ecef]">x <span className="qty">{balcCount}</span></span>
                                <span className="font-medium font-mono text-right w-[80px]">Rs. {balcCount * 1500}</span>
                            </div>
                        )}

                        {count2000 > 0 && (
                            <div className="flex items-center mb-1 text-sm">
                                <span className="flex-1">Rs. 2000 Tickets</span>
                                <span className="w-[50px] text-center text-[#e9ecef]">x <span className="qty">{count2000}</span></span>
                                <span className="font-medium font-mono text-right w-[80px]">Rs. {count2000 * 2000}</span>
                            </div>
                        )}

                        {count3000 > 0 && (
                            <div className="flex items-center mb-1 text-sm">
                                <span className="flex-1">
                                    Rs. 3000 Tickets
                                    {count3000 >= 2 && <span className="ml-2 text-[#00ff00] text-[11px] font-semibold">(Special Discount: @Rs. 2500)</span>}
                                </span>
                                <span className="w-[50px] text-center text-[#e9ecef]">x <span className="qty">{count3000}</span></span>
                                <span className="font-medium font-mono text-right w-[80px]">Rs. {count3000 * price3000}</span>
                            </div>
                        )}

                        {count5000 > 0 && (
                            <div className="flex items-center mb-1 text-sm">
                                <span className="flex-1">Rs. 5000 Tickets</span>
                                <span className="w-[50px] text-center text-[#e9ecef]">x <span className="qty">{count5000}</span></span>
                                <span className="font-medium font-mono text-right w-[80px]">Rs. {count5000 * 5000}</span>
                            </div>
                        )}

                        <hr className="my-2 border-t border-dashed border-[#343a40]" />
                        <div className="flex items-center font-bold text-base text-[#ffbf00]">
                            <span className="flex-1">Total Amount:</span>
                            <span className="font-medium font-mono text-right w-[80px]">Rs. {totalAmt}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={isLoading || totalTickets === 0}
                            className="w-full px-5 py-3 bg-[#fd7e14] text-white rounded-lg text-[15px] font-semibold hover:bg-[#ff9306] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0 disabled:bg-[#555] disabled:text-[#aaa] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                        >
                            {isLoading ? 'Calculating Tickets...' :
                                totalTickets > 0 ? `Next Step (${totalTickets} Tickets) \u2192` :
                                    'Select Tickets to Continue \u2192'}
                        </button>
                        <button
                            type="button"
                            className="w-full px-5 py-3 bg-[#495057] text-white rounded-lg text-[15px] font-semibold hover:bg-[#6a6a6a] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0 disabled:bg-[#555]"
                            onClick={prevStep}
                        >
                            &larr; Back to Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2SeatSelection;
