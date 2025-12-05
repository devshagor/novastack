import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Feature from "@/components/Service";

export default function Home() {
  return (
    <div className="page-content">
      <Hero />
      <Feature />
    </div>
  );
}
