import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Link from "next/link";

type Props = {
	socials: Social[];
};

const Header = ({ socials }: Props) => {
	return (
		<header className="flex flex-row sticky top-0 p-5 items-center justify-between z-20 md:mx-20">
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
				<div>
					<Link
						href={
							"https://drive.google.com/file/d/1YYbgYXQsVuvGwOJLak3sxVnoDxHaLxY2/view?usp=share_link"
						}
					>
						<div className="heroButton uppercase text-sm font-semibold tracking-wider text-gray-400">
							{"Resume"}
						</div>
					</Link>
				</div>
			</motion.div>
		</header>
	);
};

export default Header;
