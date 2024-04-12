import Button from "./Button";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between py-1 z-50 bg-white sticky top-0">
			<h1 className="text-2xl text-neutral-600">Logo</h1>
			<ul className="hidden md:flex items-center gap-4 text-slate-600">
				<li className="hover:underline px-3 rounded-full">
					<a href="#">Home</a>
				</li>
				<li className="hover:underline px-3 rounded-full">
					<a href="#">Services</a>
				</li>
				<li className="hover:underline px-3 rounded-full">
					<a href="#">About</a>
				</li>
			</ul>
			<Button>Contact Us</Button>
		</nav>
	);
}
