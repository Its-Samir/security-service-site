import HeadingSecondary from "./HeadingSecondary";

export default function Achievements() {
	return (
		<section className="space-y-3">
			<HeadingSecondary>
				Our Achievements
			</HeadingSecondary>
			<div className="flex items-center gap-3">
				<div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"></div>
				<div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"></div>
				<div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"></div>
				<div className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"></div>
			</div>
			<div className="w-full h-[10rem] border"></div>
		</section>
	);
}
