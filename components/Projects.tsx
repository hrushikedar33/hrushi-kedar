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
			className="flex flex-col min-h-screen items-center justify-center mx-5 md:mx-20"
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
				projects
			</h3>

			<div className="w-full flex mb-10 overflow-x-scroll snap-x snap-mandatory overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10"
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

						<div className="px-0 md:px-10 max-w-5xl">
							<h4 className="text-2xl mt-2 font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									{project.title}
								</span>{" "}
							</h4>

							<div className="flex items-center mt-5 space-x-2 justify-center">
								{project.technologies.map((technology) => (
									<Image
										key={technology._id}
										className="rounded-full ml-2"
										src={urlFor(technology?.image).url()}
										alt="Technology Image"
										width={40}
										height={40}
									/>
								))}
							</div>

							<p className="text-base mt-5 text-center md:text-left">
								{project.summary}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* <div className="w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div> */}
		</motion.div>
	);
};

export default Projects;
