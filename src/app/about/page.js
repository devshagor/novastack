import Banner from "@/components/Banner";
import Story from "@/components/Story";


export const metadata = {
    title: "About Us",
    description: "Novastack is a digital agency that helps businesses grow online.",
};

export default function About() {
    return (
        <div className="page">
            <Banner />
            <Story />
        </div>
    );
}
