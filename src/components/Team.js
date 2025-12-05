import Link from "next/link";
import Image from "next/image";

export default function Team() {
    return (
        <div className="section-padding team">
            <div className="container">

                <div className="row text-center justify-content-center">
                    <div className="col-md-7">
                        <div className="section-heading">
                            <span>Meet Our Team</span>
                            <h2>Our team always ready to help succeed.</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <div className="team-item">
                            <div className="team-image">
                                <Link href="#">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="Team Member"
                                        width={120}
                                        height={120}
                                    />
                                </Link>
                            </div>
                            <div className="team-content">
                                <h3 className="author-name">
                                    <Link href="#">Shagor Ahmed</Link>
                                </h3>
                                <p className="author-position">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}