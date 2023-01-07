import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:hrushikedar33@gmail.com?subject=${formData.subject}&body=Hi my name is${formData.name}. ${formData.message} (${formData.email})`;
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{ duration: 1.5 }}
			className="sectionPage"
		>
			<h3 className="titleText">Contact</h3>

			<div className="mt-10 lg:mt-16">
				<h4 className="text-2xl font-semibold underline decoration-[#F7AB0A]/50">
					Lets Talk!
				</h4>

				<div className="flex items-center mt-5 space-x-5 justify-center">
					<EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
					<p className="text-lg">hrushikedar33@gmail.com</p>
				</div>
				<div className="flex items-center mt-2 mb-5 space-x-5 justify-center">
					<MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
					<p className="text-lg">Pune, India</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2"
				>
					<div className="grid grid-cols-2 gap-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					></textarea>
					<button
						type="submit"
						className="py-3 bg-[#F7AB0A] rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactMe;
