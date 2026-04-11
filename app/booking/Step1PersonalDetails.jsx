import React from 'react';

const Step1PersonalDetails = ({ formData, setFormData, nextStep }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Auto-formatter for phone
        if (name === 'phone') {
            let val = value.replace(/\D/g, '');
            if (val.startsWith('0')) val = val.substring(1);
            if (val.length > 9) val = val.substring(0, 9);

            let formatted = val;
            if (val.length > 2 && val.length <= 5) {
                formatted = val.replace(/^(\d{2})(\d+)/, '$1 $2');
            } else if (val.length > 5) {
                formatted = val.replace(/^(\d{2})(\d{3})(\d+)/, '$1 $2 $3');
            }
            setFormData({ ...formData, [name]: formatted });
            return;
        }

        // Faculty logic for external users
        if (name === 'faculty') {
            if (value === 'Outside the University/Graduate') {
                setFormData({ ...formData, faculty: value, academicYear: 'External' });
                return;
            } else if (value === 'University Staff') {
                setFormData({ ...formData, faculty: value, academicYear: 'Academic Staff' });
                return;
            }
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleNext = (e) => {
        // Basic Custom Validation logic would go here
        const cleanPhone = formData.phone.replace(/\s+/g, '');
        const isOnlyDigits = /^\d+$/.test(cleanPhone);

        if (!formData.name || !formData.email || !formData.phone || !formData.faculty || (!formData.academicYear && formData.faculty !== 'Outside the University/Graduate' && formData.faculty !== 'University Staff')) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!isOnlyDigits || cleanPhone.length !== 9) {
            alert("Please enter a valid phone number (exactly 9 digits).");
            return;
        }

        nextStep();
    };

    const isExternal = formData.faculty === 'Outside the University/Graduate' || formData.faculty === 'University Staff';

    return (
        <div className="animate-[slideUp_0.4s_ease-out]" id="step1">
            <h3 className="border-b-2 border-[#343a40] pb-4 m-0 mb-6 text-[#e9ecef] text-xl font-semibold text-left">Step 1: Personal Information</h3>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-2 text-[#e9ecef] text-sm">First Name & Last Name: (Ex: Madhuka Dias)</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                />
            </div>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-1 text-[#e9ecef] text-sm">Email Address:</label>
                <span className="block text-xs text-[#adb5bd] mb-2">Booking confirmation will be sent to this email address.</span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                />
            </div>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-2 text-[#e9ecef] text-sm">Contact Number (Preferably with WhatsApp):</label>
                <div className="flex gap-2.5">
                    <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required
                        className="w-auto min-w-[100px] p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                    >
                        <option value="+94">LK +94</option>
                        <option value="+1">US +1</option>
                        <option value="+44">GB +44</option>
                        <option value="+61">AU +61</option>
                        <option value="+91">IN +91</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="70 123 4567"
                        required
                        className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                    />
                </div>
            </div>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-2 text-[#e9ecef] text-sm">Faculty (University Staff or outside the University):</label>
                <select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                >
                    <option value="" disabled>Select your Faculty</option>
                    <option value="Outside the University/Graduate" className="text-[#ffc107] font-semibold bg-[#2c2c2c]">Outside the University/Graduate</option>
                    <option value="University Staff" className="text-[#ffc107] font-semibold bg-[#2c2c2c]">University Staff</option>
                    <option value="Faculty of Humanities & Social Sciences">Faculty of Humanities & Social Sciences</option>
                    <option value="Faculty of Management Studies & Commerce">Faculty of Management Studies & Commerce</option>
                    <option value="Faculty of Applied Sciences">Faculty of Applied Sciences</option>
                    <option value="Faculty of Technology">Faculty of Technology</option>
                    <option value="Faculty of Allied Health Sciences">Faculty of Allied Health Sciences</option>
                    <option value="Faculty of Engineering">Faculty of Engineering</option>
                    <option value="Faculty of Medical Sciences">Faculty of Medical Sciences</option>
                    <option value="Faculty of Urban & Aquatic Bio Resources">Faculty of Urban & Aquatic Bio Resources</option>
                    <option value="Faculty of Dental Sciences">Faculty of Dental Sciences</option>
                    <option value="Faculty of Computing">Faculty of Computing</option>

                </select>
            </div>

            <div className="flex flex-col text-left mb-5">
                <label className="font-medium mb-2 text-[#e9ecef] text-sm">Academic Year:</label>
                <select
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleChange}
                    required
                    disabled={isExternal}
                    className="w-full p-2.5 border border-[#343a40] rounded-lg text-[15px] bg-[#2c2c2c] text-[#e9ecef] transition-all duration-200 focus:border-[#fd7e14] focus:outline-none focus:ring-[3px] focus:ring-[#fd7e14]/25 focus:bg-[#333]"
                >
                    <option value="" disabled>Select your Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="External" hidden>External</option>
                    <option value="Academic Staff" hidden>University Staff</option>
                </select>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-5 py-3 bg-[#fd7e14] text-white rounded-lg text-[15px] font-semibold hover:bg-[#ff9306] hover:-translate-y-[1px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-200 active:translate-y-0 disabled:bg-[#555] disabled:text-[#aaa] disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    Next step &rarr;
                </button>
            </div>
        </div>
    );
};

export default Step1PersonalDetails;
