"use client";

import HeadingSecondary from "./HeadingSecondary";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonial() {
	return (
		<section className="space-y-3">
			<HeadingSecondary>Customers Feedback</HeadingSecondary>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
					}),
				]}
			>
				<CarouselContent className="w-auto md:w-1/2">
					<CarouselItem>
						<Card>
							<CardContent className="p-4 flex flex-col gap-4">
								<p className="text-slate-600 text-sm sm:text-xl">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</p>
								<span className="text-neutral-800 font-sans font-bold">- Username1</span>
							</CardContent>
						</Card>
					</CarouselItem>
					<CarouselItem>
						<Card>
							<CardContent className="p-4 flex flex-col gap-4">
								<p className="text-slate-600 text-sm sm:text-xl">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</p>
								<span className="text-neutral-800 font-sans font-bold">- Username2</span>
							</CardContent>
						</Card>
					</CarouselItem>
					<CarouselItem>
						<Card>
							<CardContent className="p-4 flex flex-col gap-4">
								<p className="text-slate-600 text-sm sm:text-xl">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</p>
								<span className="text-neutral-800 font-sans font-bold">- Username3</span>
							</CardContent>
						</Card>
					</CarouselItem>
				</CarouselContent>
            <CarouselPrevious className="top-[115%] left-0" />
            <CarouselNext className="top-[115%] left-8" />
			</Carousel>
		</section>
	);
}
