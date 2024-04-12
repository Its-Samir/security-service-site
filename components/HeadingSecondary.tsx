export default function HeadingSecondary({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h1 className="text-2xl md:text-3xl text-neutral-800 font-sans font-bold">
			{children}
		</h1>
	);
}
