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
			className="sectionPage"
		>
			<h3 className="titleText">skills</h3>

			<div className="grid grid-cols-4 md:grid-cols-5 gap-5 mt-20 md:mt-10">
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
