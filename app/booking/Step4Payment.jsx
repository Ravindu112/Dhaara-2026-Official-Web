"use client";

import React, { useState, useRef } from 'react';

const Step4Payment = ({ formData, selectedSeats, prevStep, API_URL, onBookingComplete }) => {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [showTimeoutMsg, setShowTimeoutMsg] = useState(false);

    const fileInputRef = useRef(null);

    // File Drag & Drop Handlers
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Please upload payment proof.");
            return;
        }

        setIsProcessing(true);
        setStatusMsg("Securing tickets and uploading payment proof...");
        setShowTimeoutMsg(false);

        let timeoutId = setTimeout(() => {
            setShowTimeoutMsg(true);
        }, 5000);

        // Calculate Counts
        const balconyCount = parseInt(formData.balconyCount) || 0;
        let count2000 = 0, count3000 = 0, count5000 = 0;

        selectedSeats.forEach(color => {
            if (color === '#00ff00') count2000++;
            else if (color === '#45818e') count3000++;
            else if (color === '#ff9900') count5000++;
        });

        const reader = new FileReader();
        reader.onload = async function () {
            const base64Data = reader.result.split(',')[1];
            const seatsString = Array.from(selectedSeats.keys()).join(", ");
            const cleanPhone = formData.phone.replace(/\s+/g, '');

            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.countryCode + cleanPhone,
                faculty: formData.faculty,
                academicYear: formData.academicYear,
                balconyCount,
                count2000,
                count3000,
                count5000,
                seatId: seatsString,
                fileName: file.name,
                mimeType: file.type,
                file: base64Data
            };

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                });

                const result = await response.json();
                clearTimeout(timeoutId);
                setShowTimeoutMsg(false);

                if (result.status === "success") {
                    onBookingComplete({ status: 'success' });
                } else if (result.status === "conflict") {
                    setIsProcessing(false);
                    setStatusMsg("");
                    alert("Some of your selected seats were just taken by another user. The map has been updated. Please choose different seats.");
                    // Trigger the callback to handle the conflict (e.g. going back to Step 2 and refreshing map)
                    onBookingComplete({ status: 'conflict', message: result.message });
                } else {
                    setIsProcessing(false);
                    setStatusMsg("Error: " + result.message);
                }
            } catch (error) {
                clearTimeout(timeoutId);
                setShowTimeoutMsg(false);
                setIsProcessing(false);
                setStatusMsg("Network error. Please try again.");
            }
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="animate-[slideUp_0.4s_ease-out]" id="step4">
            <h3 className="border-b-2 border-[#343a40] pb-4 m-0 mb-6 text-[#e9ecef] text-xl font-semibold text-left">Step 4: Payment Details</h3>

            <div className="bg-[#2c2c2c] border-l-4 border-red-500 p-4 mb-6 rounded text-left">
                <p className="m-0 text-sm font-bold text-yellow-500">
                    ⚠️ Important: Please do not refresh or exit this page. Doing so may cause your booking information to be lost.
                </p>
            </div>

            <h4 className="mt-5 mb-2.5 text-left text-[#e9ecef] font-semibold text-base">Payment Instructions</h4>
            <div className="bg-[#2c2c2c] border-l-4 border-[#fd7e14] p-4 mb-5 rounded text-left">
                <p className="mt-0 text-sm leading-snug text-[#e9ecef] mb-3">
                    Please deposit or transfer the total amount for the number of tickets you wish to purchase to the account details provided below.
                </p>
                <p className="mb-2 font-bold text-[#e9ecef] text-sm">Bank Details:</p>
                <ul className="list-none p-0 m-0 text-sm leading-relaxed text-[#e9ecef]">
                    <li><strong>Account Number:</strong> 097 1001 4002 6683</li>
                    <li><strong>Account Name:</strong> Flair Club, University of Sri Jayewardenepura</li>
                    <li><strong>Bank:</strong> Peoples Bank</li>
                    <li><strong>Branch:</strong> Gangodawila</li>
                </ul>
            </div>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-2 text-[#e9ecef] text-sm">
                    Upload Payment Proof (Image/PDF): <br />
                    <span className="text-xs text-gray-400">
                        Maximum file size: <b>5MB</b>. Please rename the file using <b>your full name</b> before uploading.
                        Example: <b>Madhuka Dias.pdf</b>
                    </span>
                </label>
                <div className="mt-2.5">
                    <input
                        type="file"
                        id="paymentProof"
                        accept="image/*,.pdf"
                        className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0 clip-rect-0"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        disabled={file !== null || isProcessing}
                        required
                    />

                    <label
                        htmlFor="paymentProof"
                        className={`border-2 border-dashed rounded-lg p-8 text-center bg-[#2c2c2c] cursor-pointer transition-all duration-300 relative flex flex-col items-center justify-center
               ${isDragOver ? 'border-[#fd7e14] bg-[#fd7e14]/10' : 'border-[#343a40] hover:border-[#fd7e14] hover:bg-[#fd7e14]/10'}
               ${file ? 'pointer-events-none bg-[#222] border-solid border-[#444]' : ''}
             `}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className={`mb-4 transition-opacity duration-300 ${file ? 'opacity-30' : 'opacity-100'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-12 h-12 transition-colors duration-300 ${isDragOver ? 'fill-[#fd7e14]' : 'fill-[#adb5bd] group-hover:fill-[#fd7e14]'}`}>
                                <title>file-upload</title>
                                <path d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
                            </svg>
                        </div>
                        <p className={`m-0 text-[15px] text-[#e9ecef] ${file ? 'opacity-30' : 'opacity-100'}`}>
                            Drag & Drop your file here or <span className="text-[#fd7e14] font-semibold underline">Browse</span>
                        </p>

                        <div
                            className="mt-4 text-sm text-[#fd7e14] font-semibold py-2 px-3 bg-[#fd7e14]/10 rounded border border-[#fd7e14]/20 items-center justify-between gap-2.5"
                            style={{ display: file ? 'flex' : 'none', pointerEvents: 'auto' }}
                        >
                            <span id="file-name-text" className="overflow-hidden text-ellipsis whitespace-nowrap">Selected File: {file?.name}</span>
                            <span
                                className="text-[#fd7e14] font-bold cursor-pointer px-1 rounded text-lg leading-none hover:bg-[#fd7e14]/20"
                                title="Remove file"
                                onClick={removeFile}
                            >&times;</span>
                        </div>
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="w-full px-5 py-3 bg-[#fd7e14] text-white rounded-lg text-[15px] font-semibold hover:bg-[#ff9306] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0 disabled:bg-[#555] disabled:text-[#aaa] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    {isProcessing ? 'Processing...' : 'Confirm & Submit Booking \u2192'}
                </button>

                <button
                    type="button"
                    onClick={prevStep}
                    disabled={isProcessing}
                    className="w-full px-5 py-3 bg-[#495057] text-white rounded-lg text-[15px] font-semibold hover:bg-[#6a6a6a] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0 disabled:bg-[#555] disabled:text-[#aaa] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    &larr; Back to Review
                </button>
            </div>

            {statusMsg && <div className="mt-2.5 text-white font-bold text-center min-h-[20px]">{statusMsg}</div>}

            {showTimeoutMsg && (
                <div className="block text-[#ffbf00] mt-2.5 font-normal w-full text-center">
                    Processing... This may take a few moments. Do not refresh or exit this page. Please wait...
                </div>
            )}
        </div>
    );
};

export default Step4Payment;
