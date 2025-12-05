import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Feature from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <div className="page-content">
      <Hero />
      <Feature />
      <Testimonial />
      <Cta />
    </div>
  );
}
