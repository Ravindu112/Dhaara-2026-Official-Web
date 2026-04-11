import React from 'react';

const Step3Review = ({ formData, selectedSeats, nextStep, prevStep }) => {

    const countColor = (hex) => {
        let count = 0;
        selectedSeats.forEach(color => {
            if (color === hex) count++;
        });
        return count;
    };

    const balcCount = parseInt(formData.balconyCount) || 0;
    const count2000 = countColor('#00ff00');
    const count3000 = countColor('#45818e');
    const count5000 = countColor('#ff9900');

    const price3000 = count3000 >= 2 ? 2500 : 3000;
    const totalAmt = (balcCount * 1500) + (count2000 * 2000) + (count3000 * price3000) + (count5000 * 5000);
    const seatsString = Array.from(selectedSeats.keys()).join(", ") || 'None';

    return (
        <div className="animate-[slideUp_0.4s_ease-out]" id="step3">
            <h3 className="border-b-2 border-[#343a40] pb-4 m-0 mb-6 text-[#e9ecef] text-xl font-semibold text-left">Step 3: Review Booking</h3>

            <div id="review-container" className="shadow-[0_2px_4px_rgba(0,0,0,0.2)] bg-[#2c2c2c] border border-[#343a40] p-6 text-left rounded-lg mb-6">
                <h4 className="mt-0 border-b-2 border-[#fd7e14] pb-1.5 mb-2.5 font-semibold text-[#e9ecef] text-base">Booking Summary</h4>
                <div id="reviewDetails" className="mb-4 leading-relaxed text-[#e9ecef] text-sm">
                    <strong>Name:</strong> {formData.name || 'N/A'}<br />
                    <strong>Email:</strong> {formData.email || 'N/A'}<br />
                    <strong>Phone:</strong> {formData.countryCode} {formData.phone || 'N/A'}<br />
                    <strong>Faculty:</strong> {formData.faculty || 'N/A'}<br />
                    <strong>Academic Year:</strong> {formData.academicYear === 'Academic Staff' ? 'University Staff' : (formData.academicYear || 'N/A')}
                </div>

                <h4 className="mt-0 border-b-2 border-[#fd7e14] pb-1.5 mb-2.5 font-semibold text-[#e9ecef] text-base">Ticket Details</h4>
                <div id="reviewTickets" className="leading-relaxed text-[#e9ecef] text-sm">
                    {balcCount > 0 && <span>Balcony Tickets (Rs. 1500): {balcCount}<br /></span>}
                    {count2000 > 0 && <span>Rs. 2000 Tickets: {count2000}<br /></span>}
                    {count3000 > 0 && <span>Rs. 3000 Tickets: {count3000} {count3000 >= 2 && <span className="ml-1 text-[#00ff00] text-[11px] font-semibold">(Special Discount: @Rs. 2500)</span>}<br /></span>}
                    {count5000 > 0 && <span>Rs. 5000 Tickets: {count5000}<br /></span>}

                    <strong>Selected Map Seats:</strong> {seatsString}<br />
                    <br />
                    <span className="text-base font-bold text-[#ffbf00]">
                        Total Amount: Rs. {totalAmt}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
                <button
                    type="button"
                    onClick={nextStep}
                    className="w-full px-5 py-3 bg-[#fd7e14] text-white rounded-lg text-[15px] font-semibold hover:bg-[#ff9306] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0"
                >
                    Proceed to Payment &rarr;
                </button>
                <button
                    type="button"
                    className="w-full px-5 py-3 bg-[#495057] text-white rounded-lg text-[15px] font-semibold hover:bg-[#6a6a6a] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0"
                    onClick={prevStep}
                >
                    &larr; Back to Selection
                </button>
            </div>
        </div>
    );
};

export default Step3Review;
