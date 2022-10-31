import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroudCircles from "./BackgroudCircles";
import Image from "next/image";
import Link from "next/link";
import { HomePage } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  homePage: HomePage;
};

const Hero = ({ homePage }: Props) => {
  const [text] = useTypewriter({
    words: ["Developer", "Engineer", "Learner", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroudCircles />

      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(homePage?.heroImage).url()}
        alt="HeroImage"
        height={200}
        width={200}
      />

      <div className="z-20">
        <h1 className="text-2xl lg:text-3xl font-semibold px-10 pb-2">
          {homePage.name}
        </h1>
        <h2 className="text-sm pb-2 uppercase text-gray-500 tracking-[15px]">
          {/* TODO */}
          Software Develper
        </h2>
        <h2 className="text-xl lg:text-2xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor />
        </h2>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiance">
            <button className="heroButton">Experiances</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
