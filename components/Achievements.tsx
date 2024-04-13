"use client";

import { useState } from "react";
import HeadingSecondary from "./HeadingSecondary";
import Image from "next/image";

export default function Achievements() {
	const [currentImg, setCurrentImg] = useState("/image4.jpg");

	return (
		<section className="space-y-3">
			<HeadingSecondary>Our Achievements</HeadingSecondary>
			<div className="flex items-center gap-3">
				<div
					onClick={(e) =>
						setCurrentImg(
							e.currentTarget.firstElementChild?.getAttribute("src")!
						)
					}
					className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"
				>
					<Image
						src="/image4.jpg"
						alt="img"
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
				</div>
				<div
					onClick={(e) =>
						setCurrentImg(
							e.currentTarget.firstElementChild?.getAttribute("src")!
						)
					}
					className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"
				>
					<Image
						src="/image3.jpg"
						alt="img"
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
				</div>
				<div
					onClick={(e) =>
						setCurrentImg(
							e.currentTarget.firstElementChild?.getAttribute("src")!
						)
					}
					className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"
				>
					<Image
						src="/programmer.jpg"
						alt="img"
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
				</div>
				<div
					onClick={(e) =>
						setCurrentImg(
							e.currentTarget.firstElementChild?.getAttribute("src")!
						)
					}
					className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] border"
				>
					<Image
						src="/programmer2.jpg"
						alt="img"
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
				</div>
			</div>
			<div className="w-[25rem] border">
				<Image
					src={currentImg}
					alt="img"
					width={500}
					height={500}
					style={{ width: "auto", height: "auto" }}
				/>
			</div>
		</section>
	);
}
