import React from "react";
import { Project } from "../typings";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
            max-w-full px-10 justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 min-h-screen mt-10"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							alt="Project Image"
							src={urlFor(project?.image).url()}
							className="w-80 h-80 rounded-lg object-contain"
						/>

						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									{project.title}
								</span>{" "}
							</h4>

							<div className="flex items-center space-x-2 justify-center">
								{project.technologies.map((technology) => (
									<img
										key={technology._id}
										className="w-10 h-10 rounded-full"
										src={urlFor(technology?.image).url()}
										alt=""
									/>
								))}
							</div>

							<p className="text-lg text-center md:text-left">
								{project.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
};

export default Projects;