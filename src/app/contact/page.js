"use client";

import Banner from "@/components/Banner";
import SocialMedia from "@/components/SocialMedia";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

    };

    return (
        <div className="page">
            <Banner
                title="Contact Us"
                description="Novastack is a digital agency that helps businesses grow online."
            />
            <div className="contact section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <div className="contact-info">
                                <h3>Our Phone</h3>
                                <a href="tel:+123456789">+123456789</a>
                            </div>
                            <div className="contact-info">
                                <h3>Our Email</h3>
                                <a href="mailto:info@mycompany.com">info@mycompany.com</a>
                            </div>
                            <div className="contact-info">
                                <h3>Socials</h3>
                                <SocialMedia />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="contact-heading">Send a Message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Your Name"
                                            aria-label="Your Name"
                                            type="text"
                                            className="cinput"
                                            required
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            aria-label="Email"
                                            className="cinput"
                                            required
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea
                                            placeholder="Message"
                                            aria-label="Message"
                                            className="cinput cmsg"
                                            required
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({ ...form, message: e.target.value })
                                            }
                                        />
                                        <button className="btn" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {success && (
                                <p className="success">
                                    Message sent successfully!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
