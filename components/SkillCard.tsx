import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
	direcrionLeft?: boolean;
	skillType: Skill;
};

const SkillCard = ({ direcrionLeft, skillType }: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					opacity: 0,
					// x: direcrionLeft ? -200 : 200,
				}}
				transition={{ opacity: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skillType?.image).url()}
				alt="skill"
				className="rounded-full h-16 w-16 xl:h-24 xl:w-24 md:h-20 md:w-20 border border-gray-500 ocobject-cover filter
				group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div
				className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
			ease-in-out group-hover:bg-white h-16 w-16 xl:h-24 xl:w-24 md:h-20 md:w-20 rounded-full z-0"
			>
				<div className="flex items-center justify-center h-full">
					<p className="uppercase font-bold opacity-100 text-black">
						{skillType?.title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
