import Button from "./Button";
import HeadingSecondary from "./HeadingSecondary";

export default function CallToAction() {
	return (
		<section className="py-8">
			<HeadingSecondary>Contact Us</HeadingSecondary>
			<div className="md:flex md:flex-row flex-col md:items-end space-y-3 gap-3">
				<div className="flex flex-col space-y-4 flex-1">
					<h1 className="text-neutral-700 text-lg font-bold font-sans">
						Still Confused?
					</h1>
					<p className="text-slate-700 text-sm md:text-base">
						If is there any query related to our services, you can
						directly contact us, or can send your email to us, we will
						reach out to you as soon as possible.
					</p>
					<Button className="w-[8rem] text-blue-600 bg-transparent border-blue-600 border shadow-none">
						Contact Us
					</Button>
				</div>
				<div className="flex flex-col space-y-3 flex-1">
					<HeadingSecondary>Send your email to us</HeadingSecondary>
					<div className="flex items-center gap-1">
						<input
							type="text"
							placeholder="Enter your email"
							className="text-slate-500 py-2 md:py-3 px-3 rounded-md border w-full focus:outline-none"
						/>
						<Button className="w-[7rem] sm:w-[8rem]">Send</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
