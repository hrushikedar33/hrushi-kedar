import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperiance from "../components/WorkExperiance";
import { HomePage, Experiance, Skill, Project, Social } from "../typings";
import { fetchExperiances } from "../utils/fetchExperiances";
import { fetchHomePage } from "../utils/fetchHomePage";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
	homePage: HomePage;
	experiances: Experiance[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ homePage, experiances, skills, projects, socials }: Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Hrushikesh Kedar</title>
			</Head>

			{/* header //TODO: change it to layout in navbar */}
			<Header socials={socials} />

			{/* Hero */}
			<section id="hero" className="snap-start">
				<Hero homePage={homePage} />
			</section>

			{/* About */}
			<section id="about" className="snap-center">
				<About homePage={homePage} />
			</section>

			{/* Experiance */}
			<section id="experiance" className="snap-center">
				<WorkExperiance expereinces={experiances} />
			</section>

			{/* Skills */}
			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>

			{/* Contact */}
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const homePage: HomePage = await fetchHomePage();
	const experiances: Experiance[] = await fetchExperiances();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			homePage,
			experiances,
			skills,
			projects,
			socials,
		},

		revalidate: 10,
	};
};
