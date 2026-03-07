"use client";
import { useState, useEffect } from 'react';

// Use Tailwind instead of styles.css

import Step1PersonalDetails from './Step1PersonalDetails';
import Step2SeatSelection from './Step2SeatSelection';
import Step3Review from './Step3Review';
import Step4Payment from './Step4Payment';
import Step5Success from './Step5Success';

const API_URL = 'https://script.google.com/macros/s/AKfycbxAbCoAN5rXPY16NqOHMGW9ctjR73PQ6ad2yNSOLVjeUdc4KABp7JS8L795Ujo18QgpCw/exec';

const initialFormState = {
    name: '',
    email: '',
    countryCode: '+94',
    phone: '',
    faculty: '',
    academicYear: '',
    balconyCount: '0'
};

const BookingContainer = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormState);

    // selectedSeats uses a Map: key -> colorHex (simulating the JS)
    const [selectedSeats, setSelectedSeats] = useState(new Map());

    // Restore State from SessionStorage on Mount
    useEffect(() => {
        const stored = sessionStorage.getItem('bookingState');
        if (stored) {
            const state = JSON.parse(stored);
            setFormData({
                name: state.name || '',
                email: state.email || '',
                countryCode: state.countryCode || '+94',
                phone: state.phone || '',
                faculty: state.faculty || '',
                academicYear: state.academicYear || '',
                balconyCount: state.balconyCount || '0'
            });
            if (state.selectedSeats) {
                setSelectedSeats(new Map(state.selectedSeats));
            }
            setCurrentStep(state.step || 1);
        }
    }, []);

    // Save State to SessionStorage on Update
    useEffect(() => {
        const state = {
            step: currentStep,
            ...formData,
            selectedSeats: Array.from(selectedSeats.entries())
        };
        sessionStorage.setItem('bookingState', JSON.stringify(state));
    }, [currentStep, formData, selectedSeats]);

    const nextStep = () => {
        setCurrentStep(prev => prev + 1);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const resetForm = () => {
        setFormData(initialFormState);
        setSelectedSeats(new Map());
        setCurrentStep(1);
        sessionStorage.removeItem('bookingState');
    };

    const handleBookingComplete = (result) => {
        if (result.status === 'success') {
            // Clear session immediately upon success
            sessionStorage.removeItem('bookingState');
            setFormData(initialFormState);
            setSelectedSeats(new Map());
            setCurrentStep(5);
        } else if (result.status === 'conflict') {
            // Seats taken, go back to step 2 to pick again
            setSelectedSeats(new Map());
            setCurrentStep(2);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-5 bg-[#121212] font-sans text-[#e9ecef]">
            <h2 className="text-[#e9ecef] mb-5 font-semibold tracking-tight text-2xl text-center">Seat Reserving Portal - Dhaara 2026</h2>
            <div className="bg-[#1e1e1e] p-6 sm:p-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] w-full border border-[#343a40] max-w-[600px] mb-5 transition-all duration-300 ease-in-out md:max-w-6xl">
                <form id="bookingForm" onSubmit={(e) => e.preventDefault()}>

                    {currentStep === 1 && (
                        <Step1PersonalDetails
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                        />
                    )}

                    {currentStep === 2 && (
                        <Step2SeatSelection
                            formData={formData}
                            setFormData={setFormData}
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            API_URL={API_URL}
                        />
                    )}

                    {currentStep === 3 && (
                        <Step3Review
                            formData={formData}
                            selectedSeats={selectedSeats}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}

                    {currentStep === 4 && (
                        <Step4Payment
                            formData={formData}
                            selectedSeats={selectedSeats}
                            prevStep={prevStep}
                            API_URL={API_URL}
                            onBookingComplete={handleBookingComplete}
                        />
                    )}

                    {currentStep === 5 && (
                        <Step5Success
                            resetForm={resetForm}
                        />
                    )}

                </form>
            </div>
        </div>
    );
};

export default BookingContainer;
