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
			className="flex flex-col min-h-screen text-center items-center justify-center mx-5 md:mx-20"
		>
			<h3 className="uppercase md:mt-5 tracking-[20px] text-gray-500 text-2xl">
				about
			</h3>

			<div className="flex flex-col text-center md:text-left md:flex-row justify-evenly items-center lg:mx-32 space-x-5">
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
					className="mb-5 md:mb-5 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-[400px] mt-5 md:mt-20"
				/>

				<div className="px-0 space-y-2 md:mt-10">
					<h2 className="text-2xl font-semibold">
						Here is a{" "}
						<span className="underline decoration-[#F7AB0A]">
							little
						</span>{" "}
						background
					</h2>
					<p className="text-base mt-2">
						{homePage?.backgroundInformation}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
