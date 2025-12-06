import Link from "next/link";

export default function Cta() {
    return (
        <section className="cta section-padding">
            <div className="container">
                <h2>Ready to Get Started?</h2>
                <Link href="/contact" className="btn btn-cta">Get Started</Link>
            </div>
        </section>
    )
}