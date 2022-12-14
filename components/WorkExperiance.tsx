import { motion } from "framer-motion";
import React from "react";
import { Experiance } from "../typings";
import ExperianceCard from "./ExperianceCard";

type Props = {
	expereinces: Experiance[];
};

const WorkExperiance = ({ expereinces }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="sectionPage"
		>
			<h3 className="titleText">experiance</h3>

			<div
				className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden z-20 
			snap-x snap-mandatory 
			scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-10"
			>
				{/* experiance card */}
				{expereinces?.map((experiance) => (
					<ExperianceCard
						key={experiance._id}
						experiance={experiance}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default WorkExperiance;
