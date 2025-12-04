import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="nav">
            <h2>NovaStack</h2>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}