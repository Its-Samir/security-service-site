export default function Navbar() {
	return (
		<nav className="flex items-center justify-between py-1 stikcy top-0">
			<h1 className="text-2xl text-neutral-500">Logo</h1>
			<ul className="hidden md:flex items-center gap-4">
				<li className="hover:underline py-1 px-3 rounded-full text-slate-500">
					<a href="#">Home</a>
				</li>
				<li className="hover:underline py-1 px-3 rounded-full text-slate-500">
					<a href="#">Services</a>
				</li>
				<li className="hover:underline py-1 px-3 rounded-full text-slate-500">
					<a href="#">About</a>
				</li>
			</ul>
			<button className="rounded-sm bg-blue-600 text-white shadow-md shadow-blue-600 py-2 px-3">
				Contact Us
			</button>
		</nav>
	);
}
