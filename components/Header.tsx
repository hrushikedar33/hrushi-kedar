import React from "react";
import { keyFor, SocialIcon } from "react-social-Icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className="flex flex-row sticky top-0 p-5 items-center justify-between z-20 mx-5">
			<motion.div
				initial={{
					opacity: 0,
					x: -500,
					scale: 0.5,
				}}
				animate={{
					opacity: 1,
					x: 0,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="grey"
						bgColor="transparent"
					/>
				))}
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					x: +500,
					scale: 0.5,
				}}
				animate={{
					opacity: 1,
					x: 0,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<Link href={"https://mailto:hrushikedar33@gmail.com"}>
					<div>
						<SocialIcon
							className="cursor-pointer"
							network="email"
							fgColor="grey"
							bgColor="transparent"
						/>
						<p className="uppercase hidden md:inline-flex text-sm font-semibold text-gray-400">
							{"Lets Talk"}
						</p>
					</div>
				</Link>
			</motion.div>
		</header>
	);
};

export default Header;
