import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");

    const validateForm = () => {
        const newErrors = {};
        console.log('Validating:', formData);

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 5) {
            newErrors.message = "Message must be at least 5 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(isSubmitting);
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    title: "Portfolio contact message",
                    name: formData.name,
                    time: new Date().toLocaleTimeString(),
                    email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log(result.text);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 tracking-tight">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I’d love to hear from you. Let’s connect!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[linear-gradient(-135deg,_rgba(0,0,0,0.6),_rgba(49,46,129,0.8))] rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-6">{"Let's Connect"}</h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-medium">atharvai2005@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <p className="text-white font-medium">+917387241068</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-700">
                                <p className="text-gray-400 text-sm mb-4">Follow me on</p>
                                <div className="flex space-x-4">
                                    {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                                        >
                                            <span className="text-white text-xs font-medium">{social[0]}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[linear-gradient(-135deg,_rgba(0,0,0,0.6),_rgba(49,46,129,0.8))] rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-3 bg-black/40 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name
                                        ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                        : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`}
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    className={`w-full px-4 py-3 bg-black/40 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                                        ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                        : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`}
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project or just say hello..."
                                    className={`w-full px-4 py-3 bg-black/40 backdrop-blur-sm border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.message
                                        ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                        : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`}
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Status */}
                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-900 border border-green-700 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                                    </div>
                                    <p className="text-green-300 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-900 border border-red-700 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <p className="text-red-400 font-medium">Failed to send message</p>
                                    </div>
                                    <p className="text-red-300 text-sm mt-1">Please try again or contact me directly via email.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}