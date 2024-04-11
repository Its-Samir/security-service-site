import { cn } from "@/lib/utils";

export default function Button({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			className={cn(
				"rounded-sm bg-blue-600 text-white shadow-md shadow-blue-600 py-2 px-3 text-sm",
				className
			)}
		>
			{children}
		</button>
	);
}
