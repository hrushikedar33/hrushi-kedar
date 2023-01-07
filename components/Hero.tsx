import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroudCircles from "./BackgroudCircles";
import Image from "next/image";
import Link from "next/link";
import { HomePage } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	homePage: HomePage;
};

const Hero = ({ homePage }: Props) => {
	const [text] = useTypewriter({
		words: ["Developer", "Engineer", "Learner", "Creator"],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="sectionPage">
			{/* <BackgroudCircles /> */}
			{/* //TODO: Add a background image */}
			<Image
				className="rounded-full object-cover"
				src={urlFor(homePage?.heroImage).url()}
				alt="HeroImage"
				height={250}
				width={250}
			/>
			<div className="md:p-5 z-20">
				<h1 className="mt-2 text-3xl uppercase md:text-5xl font-semibold tracking-wide">
					{homePage.name}
				</h1>
				<h2 className="mt-2 text-lg uppercase text-gray-500 tracking-widest">
					{/* TODO */}
					Software Develper
				</h2>
				<h2 className="mt-6 text-lg md:text-xl font-semibold">
					<span className="mr-3">{text}</span>
					<Cursor />
				</h2>
				<div className="mt-5 md:mb-20 space-x-2">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experiances">
						<button className="heroButton">Experiances</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
