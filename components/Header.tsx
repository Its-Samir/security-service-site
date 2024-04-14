import Button from "./Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export default function Header() {
	return (
		<section
			style={{
				background:
					"linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/image3.jpg') ",
				backgroundPosition: "top",
				backgroundSize: "100% 200%",
			}}
			className="flex flex-col text-white items-center justify-center space-y-2 p-4 bg-gradient-to-r from-slate-100 to-transparent py-[4rem]"
		>
			<h1 className="text-3xl md:text-5xl font-sans font-bold text-center">
				Some Heading Text
			</h1>
			<p className="text-center md:w-2/3 w-full md:text-base text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				nihil dicta repellat accusantium quam voluptates et quia recusandae
				voluptatum facere.
			</p>
			<div className="flex items-center gap-3">
				<Button>Services</Button>
				<div className="flex items-center gap-4">
					<FaFacebookSquare size={24} />
					<FaSquareXTwitter size={24} />
					<FaLinkedin size={24} />
				</div>
			</div>
		</section>
	);
}
