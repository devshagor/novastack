import Banner from "@/components/Banner";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Cta from "@/components/Cta";


export const metadata = {
    title: "About Us",
    description: "Novastack is a digital agency that helps businesses grow online.",
};

export default function About() {
    return (
        <div className="page">
            <Banner 
                title = "About Us"
                description = "Novastack is a digital agency that helps businesses grow online."
            />
            <Story />
            <Team />
            <Vision />
            <Cta />
        </div>
    );
}
