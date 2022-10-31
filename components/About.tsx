import React from "react";
import { motion } from "framer-motion";
import { HomePage } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	homePage: HomePage;
};

const About = ({ homePage }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				about
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				src={urlFor(homePage?.profilePic).url()}
				alt="AboutImage"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] mt-16 lg:mt-16"
			/>

			<div className="px-0 space-y-3 md:px-10 md:mt-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]">
						little
					</span>{" "}
					background
				</h4>
				<p className="text-base">{homePage?.backgroundInformation}</p>
			</div>
		</motion.div>
	);
};

export default About;
