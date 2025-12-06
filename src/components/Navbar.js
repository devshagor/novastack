"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-md-3">
                        <Link href="/" className="site-logo">NovaStack</Link>
                    </div>

                    <div className={`col-md-6 ${open ? "open" : ""}`}>
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <Link href="/" className="nav-link">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="nav-link">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={`menu-toggle ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle Menu">
                            <span></span>
                        </div>

                    </div>

                    <div className="col-md-3 text-end">
                        <Link href="/contact" className="btn btn-cta">Get Quote</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}