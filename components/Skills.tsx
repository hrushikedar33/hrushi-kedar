import React from "react";
import { Skill } from "../typings";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

type Props = {
	skills: Skill[];
};

const Skills = ({ skills }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
            xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				skills
			</h3>

			<div className="grid grid-cols-4 gap-5 mt-10 lg:mt-10">
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<SkillCard key={skill._id} skillType={skill} />
				))}
				{skills
					?.slice(skills.length / 2, skills.length)
					.map((skill) => (
						<SkillCard
							key={skill._id}
							skillType={skill}
							direcrionLeft
						/>
					))}
			</div>
		</motion.div>
	);
};

export default Skills;
