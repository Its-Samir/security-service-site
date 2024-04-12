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
				<CarouselContent>
					<CarouselItem>
						<Card>
							<CardContent className="p-4">
								<CardDescription>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</CardDescription>
								<CardFooter className="p-0">- Username1</CardFooter>
							</CardContent>
						</Card>
					</CarouselItem>
					<CarouselItem>
						<Card>
							<CardContent className="p-4">
								<CardDescription>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</CardDescription>
								<CardFooter className="p-0">- Username2</CardFooter>
							</CardContent>
						</Card>
					</CarouselItem>
					<CarouselItem>
						<Card>
							<CardContent className="p-4">
								<CardDescription>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Eligendi, rem?
								</CardDescription>
								<CardFooter className="p-0">- Username3</CardFooter>
							</CardContent>
						</Card>
					</CarouselItem>
				</CarouselContent>
            <CarouselPrevious className="top-[125%] left-0" />
            <CarouselNext className="top-[125%] left-8" />
			</Carousel>
		</section>
	);
}
