import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
	return (
		<main className="flex space-y-3 min-h-screen flex-col px-4 md:px-0 w-full md:w-4/5 xl:w-[70rem] mx-auto">
			<Navbar />
			<Header />
			<Services />
			<Achievements />
			<Testimonial />
			<CallToAction />
			<Footer />
			<div className="pb-2 text-center text-sm">
				<span>Copyright 2024</span>
			</div>
		</main>
	);
}
