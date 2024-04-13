import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";

export default function Footer() {
	return (
		<footer className="flex-col sm:flex-row sm:flex justify-between sm:space-y-0 space-y-4 sm:items-center bg-slate-800 text-slate-400 p-4 hover:text-white rounded-md">
			<div className="flex flex-col gap-3">
				<h1 className="text-xl md:text-2xl font-sans font-bold">Logo</h1>
				<hr className="border-slate-400" />
				<div className="flex items-center gap-4">
					<FaFacebookSquare />
					<FaSquareXTwitter />
					<FaLinkedin />
				</div>
			</div>
			<ul className="flex flex-col gap-3 mt-0">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
			<div className="flex flex-col gap-3">
				<a href="mailto:test@test.com" className="flex items-center gap-3">
					<RiMailFill size={18} /> test@test.com
				</a>
				<a href="tel:+911234567890" className="flex items-center gap-3">
					<FaPhoneAlt size={18} /> 1234567890
				</a>
			</div>
		</footer>
	);
}
