import React, { useState } from "react";
import {
  FaUser, FaPhone, FaIdCard, FaEnvelope,
  FaCheckCircle, FaUpload, FaHome, FaRing,
} from "react-icons/fa";

export default function Mobility() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    ssn: "",
    idCard: null,
    veteran: "",
    maritalStatus: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      console.log(formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        address: "",
        ssn: "",
        idCard: null,
        veteran: "",
        maritalStatus: "",
        email: "",
        phone: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">
          Mobility Assistance Form
        </h2>
        <p className="text-center text-blue-600 text-lg mb-12 max-w-xl mx-auto font-light">
          To ensure the accuracy of the information provided, we will conduct a thorough background check. Rest assured that your personal data is secure, confidential.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingInput icon={<FaUser />} label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <FloatingInput icon={<FaHome />} label="Address" name="address" value={formData.address} onChange={handleChange} required />
            <FloatingInput icon={<FaIdCard />} label="Social Security Number" name="ssn" value={formData.ssn} onChange={handleChange} required />
            <FloatingInput icon={<FaCheckCircle />} label="Veteran Status (Yes/No)" name="veteran" value={formData.veteran} onChange={handleChange} required />
            <FloatingInput icon={<FaRing />} label="Marital Status" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
            <FloatingInput icon={<FaEnvelope />} label="Email Address" name="email" value={formData.email} onChange={handleChange} required type="email" />
            <FloatingInput icon={<FaPhone />} label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required type="tel" />
          </div>

          <div>
            <label className="block mb-3 text-sm font-semibold text-blue-700">
              Driver’s License / ID (Image Only)
            </label>
            <label
              htmlFor="idCard"
              className="flex flex-col items-center justify-center h-36 border-4 border-dashed border-blue-400 rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 transition relative text-blue-700"
            >
              <FaUpload className="text-4xl mb-3" />
              <span className="text-sm font-medium">Click or drag to upload image</span>
              <input
                id="idCard"
                type="file"
                name="idCard"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                required
              />
            </label>
            {formData.idCard && (
              <p className="mt-2 text-green-700 font-semibold text-center">
                Selected: {formData.idCard.name}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`w-full py-4 rounded-3xl font-extrabold text-lg tracking-wide transition shadow-lg ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting...
                </span>
              ) : submitted ? "Submitted ✅" : "Submit Application"}
            </button>

            {submitted && !loading && (
              <p className="text-green-600 mt-4 text-sm font-semibold">Application submitted successfully!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function FloatingInput({ icon, label, name, value, onChange, required = false, type = "text" }) {
  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 text-xl pointer-events-none">
        {icon}
      </div>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="peer w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-4 text-gray-900
          focus:border-blue-600 focus:ring-2 focus:ring-blue-400 transition"
      />
      <label
        htmlFor={name}
        className={`absolute left-14 text-gray-400 text-lg select-none transition-all
          peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:-translate-y-0
          ${value ? 'top-3 text-sm text-blue-600 -translate-y-0' : 'top-1/2 -translate-y-1/2'}`}
      >
        {label}
      </label>
    </div>
  );
}
