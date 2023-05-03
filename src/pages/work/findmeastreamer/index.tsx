import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mainImageProject from "@/../public/images/findmeastreamer/findmeastreamer_desktop.png";
import midjourneyInspi from "@/../public/images/findmeastreamer/samourai-midjourney.png";
import samouraiMidJourney from "@/../public/images/findmeastreamer/idea-midjourney.png";
import phase2Findmeastreamer from "@/../public/images/findmeastreamer/findmeastreamer2.png";
import phase3Findmeastreamer from "@/../public/images/findmeastreamer/findmeastreamer3.png";
import phase0Findmeastreamer from "@/../public/images/findmeastreamer/sketchFindmeastreamer.png";
import japanInspiration from "@/../public/images/findmeastreamer/japaninspi.png";
import clsx from "clsx";

const Findmeastreamer = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(7px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory"
    >
      <div className="snap-start text-xl font-light h-screen flex flex-col justify-center w-[80%] m-auto">
        <h1 className="font-[900] text-[6rem] pb-20">Findmeastreamer</h1>

        <p className="leading-10">
          The idea of my project is to highlight streamers every hour through a
          free random draw. The objective is to help streamers gain visibility
          by being featured on the website. This highlighting is random, giving
          all registered streamers a chance.
        </p>
        <div className="flex items-center justify-between pt-20">
          <div className="w-[50%]">
            <p className="font-bold">Technologies</p>
            <p className="pt-4">
              I used the following technologies for the project:
            </p>
            <ul className="list-disc pl-[3rem]">
              <li>Front-end: Tailwind CSS and React mainly.</li>
              <li>Back-end: MySQL.</li>
              <li>Deployment: Docker and a VPS (Virtual Private Server).</li>
            </ul>
          </div>
          <div className="w-[50%]">
            <p className="font-bold">Team</p>
            <p className="pt-4">
              For the project, I mostly worked alone, but I was occasionally
              assisted by an experienced friend when I needed help with coding
              or using a technology. His valuable contribution helped me
              overcome some challenges and make progress in my project.
            </p>
          </div>
        </div>
      </div>
      <motion.div className="snap-start flex flex-col items-center justify-center w-[100vw] h-screen">
        <Image
          src={mainImageProject}
          alt="Picture of the author"
          className={clsx("w-[80%] shadow-2xl")}
        />
        <p className="text-xs">Home page screenshot.</p>
      </motion.div>
      <div className="h-screen snap-start flex flex-col w-[80%] m-auto">
        <h2 className="font-[900] text-[4rem]">Inspiration and design</h2>
        <p className="w-1/2 pt-4">
          Being able to work with Photoshop, I used Midjourney to generate
          images which I then modified to include it in my backgrounds. This
          allowed my site to have a more professional and pleasant look. My idea
          was to have nice universes for the user.
        </p>
        <div className="flex flex-col items-center justify-center pt-20">
          <div className="flex items-center justify-center">
            <Image
              src={midjourneyInspi}
              alt="idea of midjourney proposal"
              className="w-[50%] h-full"
            />
            <Image
              src={japanInspiration}
              alt="japan black and white inspiration"
              className="w-[50%] h-full pl-6"
            />
          </div>
          <div className="flex items-center justify-center pt-6">
            <p className="w-[70%]">
              I had the idea of doing a white and red theme and a white and
              black on the theme of samurai. Here are the first sketches via
              Midjourney for inspiration.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen snap-start flex flex-col w-[80%] m-auto">
        <h2 className="font-[900] text-[4rem]">First sketches</h2>
      </div>
    </motion.div>
  );
};

export default Findmeastreamer;
