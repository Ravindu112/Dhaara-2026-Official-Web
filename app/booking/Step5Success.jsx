import React from 'react';

const Step5Success = ({ resetForm }) => {
    return (
        <div className="animate-[slideUp_0.4s_ease-out] text-center" id="step5">
            <div className="w-16 h-16 bg-[#28a745] text-white rounded-full flex items-center justify-center text-3xl my-5 mx-auto shadow-[0_4px_10px_rgba(40,167,69,0.4)]">
                &#10003;
            </div>
            <h3 className="m-0 mb-2.5 text-[#28a745] text-2xl font-semibold">Booking Successful!</h3>
            <p className="mt-0 mb-5 leading-snug text-[#e9ecef]">
                Your booking details have been submitted. You will receive a confirmation email shortly.
            </p>
            <button
                type="button"
                className="w-full px-5 py-3 mt-4 bg-[#fd7e14] text-white rounded-lg text-[15px] font-semibold hover:bg-[#ff9306] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0"
                onClick={resetForm}
            >
                Book Another Ticket
            </button>
        </div>
    );
};

export default Step5Success;
