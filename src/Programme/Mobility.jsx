import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaIdCard,
  FaEnvelope,
  FaCheckCircle,
  FaUpload,
  FaHome,
  FaRing,
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 md:p-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">
          Mobility Assistance Form
        </h2>
        <p className="text-center text-blue-600 text-lg mb-12 max-w-xl mx-auto font-light">
          To ensure the accuracy of the information provided, we will conduct a thorough background check. Rest assured that your personal data is secure, confidential
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Inputs in two columns */}
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingInput
              icon={<FaUser />}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              autoComplete="name"
            />
            <FloatingInput
              icon={<FaHome />}
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              type="text"
              autoComplete="street-address"
            />

            <FloatingInput
              icon={<FaIdCard />}
              label="Social Security Number"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              required
              type="text"
              autoComplete="off"
            />
            <FloatingInput
              icon={<FaCheckCircle />}
              label="Veteran Status (Yes/No)"
              name="veteran"
              value={formData.veteran}
              onChange={handleChange}
              required
              type="text"
              autoComplete="off"
            />

            <FloatingInput
              icon={<FaRing />}
              label="Marital Status"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
              type="text"
              autoComplete="off"
            />
            <FloatingInput
              icon={<FaEnvelope />}
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              autoComplete="email"
            />

            <FloatingInput
              icon={<FaPhone />}
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              type="tel"
              autoComplete="tel"
            />
          </div>

          {/* Upload at bottom full width */}
          <div>
            <label className="block mb-3 text-sm font-semibold text-blue-700">
              Driver’s licenses/ ID (Image Only)
            </label>
            <label
              htmlFor="idCard"
              className="flex flex-col items-center justify-center h-36 border-4 border-dashed border-blue-400 rounded-2xl cursor-pointer bg-blue-50 hover:bg-blue-100 transition relative text-blue-700"
            >
              <FaUpload className="text-4xl mb-3" />
              <span className="text-sm font-medium">
                Click or drag to upload image
              </span>
              <input
                id="idCard"
                type="file"
                name="idCard"
                accept="image/*"
                required
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
            {formData.idCard && (
              <p className="mt-2 text-green-700 font-semibold text-center">
                Selected: {formData.idCard.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-extrabold text-lg tracking-wide hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-300/50 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

// FloatingInput component with animated label and icon
function FloatingInput({
  icon,
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  autoComplete,
}) {
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
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-2xl border border-gray-300 bg-white py-4 pl-14 pr-4 text-gray-900 placeholder-transparent
          focus:border-blue-600 focus:ring-2 focus:ring-blue-400
          transition
          "
      />
      <label
        htmlFor={name}
        className="absolute left-14 top-1/2 -translate-y-1/2 text-gray-400 text-lg cursor-text select-none
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400
          peer-focus:top-3 peer-focus:-translate-y-0 peer-focus:text-blue-600 peer-focus:text-sm
          transition-all"
      >
        {label}
      </label>
    </div>
  );
}
