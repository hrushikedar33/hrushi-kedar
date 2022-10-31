import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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
			className="flex flex-col relative h-screen text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-10 mt-10 lg:mt-16">
				<h4 className="text-3xl font-semibold text-center">
					Okay{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						Lets Talk!
					</span>{" "}
				</h4>
				<div className="space-y-3">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
						<p className="text-2xl">+91112221133</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
						<p className="text-2xl">hrushikedar33@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
						<p className="text-2xl">Pune, India</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
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
						className="py-5 px-10 bg-[#F7AB0A] rounded-md text-black font-bold text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</motion.div>
	);
};

export default ContactMe;
