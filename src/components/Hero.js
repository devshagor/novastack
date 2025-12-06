import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero text-center">
            <div className="container">
                <div className="content-wrap">
                    <h1 className="title">Driving Business Growth Through Smart Technology</h1>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </p>
                    <div className="dual-btn">
                        <Link href="/contact" className="btn btn-primary">Join the Waitlist</Link>
                        <Link href="/contact" className="btn btn-secondary">Explore More Features</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}