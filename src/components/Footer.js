import Link from "next/link";
import SocialMedia from "@/components/SocialMedia";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <Link href="/" className="site-logo">NovaStack</Link>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <SocialMedia />
                        <p className="copyright">&copy; {new Date().getFullYear()} NovaStack Technologies. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}