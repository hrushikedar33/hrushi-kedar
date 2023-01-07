import React from "react";
import { Project } from "../typings";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="sectionPage"
		>
			<h3 className="titleText">projects</h3>

			<div
				className="w-full flex overflow-x-scroll snap-x snap-mandatory 
			overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
			>
				{projects.map((project) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col 
						items-center justify-center p-10"
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

						<div className="flex flex-col px-0 md:mx-10 md:px-10 max-w-5xl">
							<div className="flex items-center justify-center mt-2 space-x-2">
								<h4 className="text-2xl font-semibold">
									{project.title}
								</h4>
								<h4 className="text-2xl font-semibold">|</h4>
								<SocialIcon
									className="cursor-pointer"
									url={project?.linkToBuild}
									network="github"
									fgColor="grey"
								/>
							</div>

							<div className="flex items-center mt-5 space-x-2 justify-center">
								{project.technologies.map((technology) => (
									<div key={technology._id}>
										<Image
											className="rounded-full"
											src={urlFor(
												technology?.image
											).url()}
											alt="Technology Image"
											width={40}
											height={40}
										/>
									</div>
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
