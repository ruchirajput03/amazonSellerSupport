"use client"
// components/ContactForm.jsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from "@/app/components/header"
import Footer from "@/app/components/footer";
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        services: {
            ecommerce: false,
            seo: false,
            webDesign: false,
            digitalMarketing: false,
            contentMarketing: false
        },
        message: '',
        acceptTerms: false
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            const checked = target.checked;
            if (name === 'acceptTerms') {
                setFormData({ ...formData, acceptTerms: checked });
            } else {
                setFormData({
                    ...formData,
                    services: {
                        ...formData.services,
                        [name]: checked
                    }
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };
    return (
        <>
        <Header/>
        <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[40px]">
            <div className="flex justify-center">
        <div className="col-lg-8 pt-[80px]">
            <h1 className="text-2xl font-bold text-center mb-2">Ready to Elevate Your Sales? Let&apos;s Connect!</h1>
            <p className="text-center text-sm mb-[80px]">
                Whether you need expert support for website and email selling or have a sales consultant, we&apos;re here to help. Reach out
                to us, and let&apos;s grow your e-commerce business together!
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-8">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 "
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
                <div className="mb-4">
                    <p className="block text-sm font-medium mb-2">Services Required?</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="ecommerce"
                                name="ecommerce"
                                checked={formData.services.ecommerce}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            <label htmlFor="ecommerce" className="text-sm"> E-commerce</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="seo"
                                name="seo"
                                checked={formData.services.seo}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            <label htmlFor="seo" className="text-sm">SEO</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="webDesign"
                                name="webDesign"
                                checked={formData.services.webDesign}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            <label htmlFor="webDesign" className="text-sm">Website Design & Development</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="digitalMarketing"
                                name="digitalMarketing"
                                checked={formData.services.digitalMarketing}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            <label htmlFor="digitalMarketing" className="text-sm">Digital Marketing</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="contentMarketing"
                                name="contentMarketing"
                                checked={formData.services.contentMarketing}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            <label htmlFor="contentMarketing" className="text-sm">Content Marketing</label>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 h-32"
                        placeholder="Type your message..."
                    ></textarea>
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label htmlFor="acceptTerms" className="text-sm">
                        I accept the <a href="#" className="underline text-black font-bold">Terms & Conditions</a>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
        </section>
        <Footer/>
        </>
    );
}