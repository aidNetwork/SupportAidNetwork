
// import React, { useState } from 'react';
// import {
//   FaUser, FaIdCard, FaCheckCircle,
//   FaEnvelope, FaPhone, FaFilePdf, FaUpload
// } from 'react-icons/fa';
// import { supabase } from '../supabaseClient';

// export default function Empowerment() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     veteranStatus: '',
//     idCard: null,
//     ssn: '',
//     email: '',
//     resume: null,
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMessage('');

//     try {
//       let idCardUrl = '';
//       let resumeUrl = '';

//       if (formData.idCard) {
//         const idCardPath = `idcards/${Date.now()}-${formData.idCard.name}`;
//         const { error: idCardError } = await supabase.storage
//           .from('uploads')
//           .upload(idCardPath, formData.idCard);
//         if (idCardError) throw idCardError;

//         const { data: idCardData } = supabase.storage.from('uploads').getPublicUrl(idCardPath);
//         idCardUrl = idCardData.publicUrl;
//       }

//       if (formData.resume) {
//         const resumePath = `resumes/${Date.now()}-${formData.resume.name}`;
//         const { error: resumeError } = await supabase.storage
//           .from('uploads')
//           .upload(resumePath, formData.resume);
//         if (resumeError) throw resumeError;

//         const { data: resumeData } = supabase.storage.from('uploads').getPublicUrl(resumePath);
//         resumeUrl = resumeData.publicUrl;
//       }

//       const { data, error: insertError } = await supabase
//         .from('empowerment_applications')
//         .insert([
//           {
//             fullname: formData.fullName,
//             phone: formData.phone,
//             veteranstatus: formData.veteranStatus,
//             ssn: formData.ssn,
//             email: formData.email,
//             idcardurl: idCardUrl,
//             resumeurl: resumeUrl,
//           },
//         ])
//         .select();

//       if (insertError) throw insertError;

//       console.log('Inserted application:', data);
//       alert("Application submitted!");
//       setSuccessMessage("Thank you for your application. We've received it and will be in touch soon.");

//       setFormData({
//         fullName: '',
//         phone: '',
//         veteranStatus: '',
//         idCard: null,
//         ssn: '',
//         email: '',
//         resume: null,
//       });
//     } catch (error) {
//       console.error(error);
//       alert('Error submitting application, please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const jobs = [
//     "Deaf Instructor",
//     "On-site / VRI services",
//     "Data Entry",
//     "Accounting Management",
//     "Business Administration",
//     "Customer Services",
//     "Professional incentives",
//     "Work for Deaf interpreter-owned company",
//     "Ongoing assignments",
//     "ASL Tutors",
//     "ASL Mentors",
//     "Mentoring opportunities",
//     "Supportive team",
//     "Work in Home / in-person teams",
//     "Part time and full time opportunities",
//     "Administration building",
//     "Board members",
//     "Team directors",
//     "Marketing directors",
//     "Programming",

//   ];

//   return (
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-16">
//       <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-10 flex flex-col md:flex-row gap-12">

//         <div className="flex-1 max-w-lg">
//           <h2 className="text-4xl font-bold text-blue-700 text-center mb-2">
//             Job Assistance Application
//           </h2>
//           <p className="text-center text-gray-600 mb-6">
//             To ensure the accuracy of the information provided, we will conduct a thorough background check. Rest assured that your personal data is secure, confidential. <br />Benefit includes health insurance coverage, flexible work schedules, debt Relief, sick leave, life and disability Insurance.
//           </p>

//           {successMessage && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
//               {successMessage}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="relative">
//                 <FaUser className="absolute left-3 top-4 text-blue-500" />
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="relative">
//                 <FaPhone className="absolute left-3 top-4 text-blue-500" />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="relative">
//                 <FaCheckCircle className="absolute left-3 top-4 text-blue-500" />
//                 <input
//                   type="text"
//                   name="veteranStatus"
//                   placeholder="Veteran Status (Yes/No)"
//                   value={formData.veteranStatus}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="relative">
//                 <FaIdCard className="absolute left-3 top-4 text-blue-500" />
//                 <input
//                   type="text"
//                   name="ssn"
//                   placeholder="Social Security Number"
//                   value={formData.ssn}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-4 text-blue-500" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Upload Driver’s License / ID (Image Only)
//               </label>
//               <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition">
//                 <FaUpload className="text-blue-600 text-2xl mb-2" />
//                 <span className="text-sm text-gray-600">Click to upload an image</span>
//                 <input
//                   type="file"
//                   name="idCard"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="hidden"
//                 />
//               </label>
//               {formData.idCard && (
//                 <p className="text-sm mt-2 text-green-600">Selected: {formData.idCard.name}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Upload Resume (PDF Only)
//               </label>
//               <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition">
//                 <FaFilePdf className="text-red-600 text-2xl mb-2" />
//                 <span className="text-sm text-gray-600">Click to upload your resume</span>
//                 <input
//                   type="file"
//                   name="resume"
//                   accept="application/pdf"
//                   onChange={handleChange}
//                   className="hidden"
//                 />
//               </label>
//               {formData.resume && (
//                 <p className="text-sm mt-2 text-green-600">Selected: {formData.resume.name}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full mt-6 py-3 font-semibold rounded-lg transition ${
//                 loading
//                   ? 'bg-blue-300 cursor-not-allowed'
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               }`}
//             >
//               {loading ? 'Submitting...' : 'Submit Application'}
//             </button>
//           </form>
//         </div>

//         <aside className="flex-1 max-w-md bg-blue-100 rounded-lg p-6 shadow-inner overflow-hidden">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
//             Available Jobs
//           </h3>
//           <ul className="list-disc list-inside space-y-2 text-blue-800 text-lg">
//             {jobs.map((job, i) => (
//               <li key={i}>{job}</li>
//             ))}
//           </ul>
//         </aside>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import {
  FaUser, FaIdCard, FaCheckCircle,
  FaEnvelope, FaPhone, FaFilePdf, FaUpload
} from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import emailjs from '@emailjs/browser';

export default function Empowerment() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    veteranStatus: '',
    idCard: null,
    ssn: '',
    email: '',
    resume: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    try {
      let idCardUrl = '';
      let resumeUrl = '';

      if (formData.idCard) {
        const idCardPath = `idcards/${Date.now()}-${formData.idCard.name}`;
        const { error: idCardError } = await supabase.storage
          .from('uploads')
          .upload(idCardPath, formData.idCard);
        if (idCardError) throw idCardError;

        const { data: idCardData } = supabase.storage.from('uploads').getPublicUrl(idCardPath);
        idCardUrl = idCardData.publicUrl;
      }

      if (formData.resume) {
        const resumePath = `resumes/${Date.now()}-${formData.resume.name}`;
        const { error: resumeError } = await supabase.storage
          .from('uploads')
          .upload(resumePath, formData.resume);
        if (resumeError) throw resumeError;

        const { data: resumeData } = supabase.storage.from('uploads').getPublicUrl(resumePath);
        resumeUrl = resumeData.publicUrl;
      }

      // Save to Supabase DB
      const { data, error: insertError } = await supabase
        .from('empowerment_applications')
        .insert([{
          fullname: formData.fullName,
          phone: formData.phone,
          veteranstatus: formData.veteranStatus,
          ssn: formData.ssn,
          email: formData.email,
          idcardurl: idCardUrl,
          resumeurl: resumeUrl,
        }]);
      if (insertError) throw insertError;

      // Send email using EmailJS
      const templateParams = {
        fullName: formData.fullName,
        phone: formData.phone,
        veteranStatus: formData.veteranStatus,
        ssn: formData.ssn,
        email: formData.email,
      };

      await emailjs.send(
        'service_2vedxak',
        'template_1uipvwn',
        templateParams,
        'ya9roy-gCTaqKY_HJ'
      );

      alert("Application submitted!");
      setSuccessMessage("Thank you for your application. We've received it and will be in touch soon.");

      setFormData({
        fullName: '',
        phone: '',
        veteranStatus: '',
        idCard: null,
        ssn: '',
        email: '',
        resume: null,
      });
    } catch (error) {
      console.error(error);
      alert('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const jobs = [
    "Deaf Instructor", "On-site / VRI services", "Data Entry", "Accounting Management",
    "Business Administration", "Customer Services", "Professional incentives",
    "Work for Deaf interpreter-owned company", "Ongoing assignments", "ASL Tutors",
    "ASL Mentors", "Mentoring opportunities", "Supportive team", "Work in Home / in-person teams",
    "Part time and full time opportunities", "Administration building", "Board members",
    "Team directors", "Marketing directors", "Programming",
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-10 flex flex-col md:flex-row gap-12">
        <div className="flex-1 max-w-lg">
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-2">
            Job Assistance Application
          </h2>
          <p className="text-center text-gray-600 mb-6">
            To ensure the accuracy of the information provided, we will conduct a thorough background check.
            Rest assured that your personal data is secure, confidential.
            <br />Benefit includes health insurance coverage, flexible work schedules, debt relief, sick leave, life and disability insurance.
          </p>

          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputWithIcon icon={<FaUser />} name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" />
              <InputWithIcon icon={<FaPhone />} name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputWithIcon icon={<FaCheckCircle />} name="veteranStatus" value={formData.veteranStatus} onChange={handleInputChange} placeholder="Veteran Status (Yes/No)" />
              <InputWithIcon icon={<FaIdCard />} name="ssn" value={formData.ssn} onChange={handleInputChange} placeholder="Social Security Number" />
            </div>

            <InputWithIcon icon={<FaEnvelope />} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" />

            <FileUpload label="Upload Driver’s License / ID (Image Only)" name="idCard" accept="image/*" onChange={handleChange} file={formData.idCard} icon={<FaUpload />} />
            <FileUpload label="Upload Resume (PDF Only)" name="resume" accept="application/pdf" onChange={handleChange} file={formData.resume} icon={<FaFilePdf />} />

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-6 py-3 font-semibold rounded-lg transition ${
                loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>

        <aside className="flex-1 max-w-md bg-blue-100 rounded-lg p-6 shadow-inner overflow-hidden">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Available Jobs</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800 text-lg">
            {jobs.map((job, i) => <li key={i}>{job}</li>)}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function InputWithIcon({ icon, name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-4 text-blue-500">{icon}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function FileUpload({ label, name, accept, onChange, file, icon }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition">
        <span className="text-2xl mb-2">{icon}</span>
        <span className="text-sm text-gray-600">Click to upload</span>
        <input type="file" name={name} accept={accept} onChange={onChange} className="hidden" />
      </label>
      {file && <p className="text-sm mt-2 text-green-600">Selected: {file.name}</p>}
    </div>
  );
}
