import React from "react";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { Experiance } from "../typings";

type Props = {
	experiance: Experiance;
};

const ExperianceCard = ({ experiance }: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] 
        xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer 
        transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
				src={urlFor(experiance.companyImage).url()}
				alt={experiance.company}
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">{experiance.jobTitle}</h4>
				<p className="font-bold text-2xl mt-1">{experiance.company}</p>
				<div className="flex space-x-2 my-2">
					{experiance.technologies.map((technology) => (
						<img
							key={technology._id}
							className="h-10 w-10 rounded-full"
							src={urlFor(technology.image).url()}
						/>
					))}
				</div>

				<p className="uppercase py-5 text-gray-300">
					{new Date(experiance.dateStarted).toDateString()} -{" "}
					{experiance.isCurrentlyWorking
						? "Present"
						: new Date(experiance.dateEnded).toDateString()}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					{experiance.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperianceCard;
