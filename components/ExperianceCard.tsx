import React from "react";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { Experiance } from "../typings";
import Image from "next/image";

type Props = {
	experiance: Experiance;
};

const ExperianceCard = ({ experiance }: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center justify-center flex-shrink-0 w-[450px] md:w-[600px] 
        xl:w-[900px] snap-center bg-[#292929] pb-5 hover:opacity-100 opacity-40 cursor-pointer 
        transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-contain object-center"
				src={urlFor(experiance.companyImage).url()}
				alt={experiance.company}
			/>
			<div className="px-5 md:px-10">
				<h3 className="text-xl font-light">{experiance.jobTitle}</h3>
				<p className="font-bold text-2xl mt-1">{experiance.company}</p>
				<div className="mt-2">
					{experiance.technologies.map((technology) => (
						<Image
							key={technology._id}
							className="rounded-full ml-2"
							src={urlFor(technology?.image).url()}
							alt="TechnologyImage"
							height={40}
							width={40}
						/>
					))}
				</div>

				<p className="uppercase my-5 text-gray-300">
					{new Date(experiance.dateStarted).toDateString()} -{" "}
					{experiance.isCurrentlyWorking
						? "Present"
						: new Date(experiance.dateEnded).toDateString()}
				</p>
				<ul className="list-disc space-y-2 ml-5 text-base">
					{experiance.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

export default ExperianceCard;
