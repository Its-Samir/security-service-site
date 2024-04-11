import Button from "./Button";

export default function Header() {
	return (
		<section className="flex flex-col items-center justify-center space-y-2 p-4 bg-gradient-to-r from-slate-100 to-transparent">
			<h1 className="text-2xl text-neutral-800 font-sans font-bold">
				Some Heading Text
			</h1>
			<p className="text-slate-600 text-center md:w-2/3 w-full md:text-base text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				nihil dicta repellat accusantium quam voluptates et quia recusandae
				voluptatum facere.
			</p>
			<div className="flex items-center gap-3">
				<Button>Services</Button>
				<Button className="bg-transparent border border-blue-600 text-blue-600 shadow-none">
					Get in Touch
				</Button>
			</div>
		</section>
	);
}