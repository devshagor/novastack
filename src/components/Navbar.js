import Link from "next/link";

export default function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <Link href="/" className="site-logo">NovaStack</Link>
                    </div>
                    <div className="col-md-6 text-center">
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
                    </div>
                    <div className="col-md-3 text-end">
                        <Link href="/contact" className="btn btn-primary">Get Quote</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}