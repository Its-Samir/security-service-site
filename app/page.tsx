import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col px-4 md:px-0 w-full md:w-4/5 mx-auto">
			<Navbar />
			<Header />
		</main>
	);
}
