import {
	ArrowRightIcon,
	BellElectricIcon,
	ShieldEllipsis,
	User2,
} from "lucide-react";
import Button from "./Button";
import HeadingSecondary from "./HeadingSecondary";

export default function Services() {
	return (
		<section id="services" className="space-y-2">
			<HeadingSecondary>Our Services</HeadingSecondary>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
				<div className="space-y-2 p-2 border-0 border-b">
					<ShieldEllipsis color="#2563eb" size={30} />
					<h3 className="text-lg md:text-xl text-neutral-600 font-bold font-sans">
						Security Consulting
					</h3>
					<p className="text-slate-700 text-sm md:text-base">
						We provide expert security consulting services tailored to
						your needs.
					</p>
					<Button className="flex gap-1 items-center bg-transparent border-blue-600 text-blue-600 shadow-none">
						Check Out <ArrowRightIcon size={16} />
					</Button>
				</div>
				<div className="space-y-2 p-2 border-0 border-b">
					<User2 color="#2563eb" size={30} />
					<h3 className="text-lg md:text-xl text-neutral-600 font-bold font-sans">
						Guard Services
					</h3>
					<p className="text-slate-700 text-sm md:text-base">
						Our trained guards ensure the safety and security of your
						premises.
					</p>
					<Button className="flex gap-1 items-center bg-transparent border-blue-600 text-blue-600 shadow-none">
						Check Out <ArrowRightIcon size={16} />
					</Button>
				</div>
				<div className="space-y-2 p-2 border-0 border-b">
					<BellElectricIcon color="#2563eb" size={30} />
					<h3 className="text-lg md:text-xl text-neutral-600 font-bold font-sans">
						Alarm Systems
					</h3>
					<p className="text-slate-700 text-sm md:text-base">
						State-of-the-art alarm 7ystems to protect your property.
					</p>
					<Button className="flex gap-1 items-center bg-transparent border-blue-600 text-blue-600 shadow-none">
						Check Out <ArrowRightIcon size={16} />
					</Button>
				</div>
			</div>
		</section>
	);
}
