import React from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import findmeastreamer from "@/../public/images/findmeastreamer/findmeastreamer_desktop.png";
import juniorbook from "@/../public/images/juniorbook/juniorBook_desktop.png";

const Work = () => {
  //GPT Prompt
  const pageTransition = {
    initial: { x: "100%" },
    animate: {
      x: ["100%", "-2%", "0%"],
      transition: { duration: 1.5, ease: "anticipate" },
    },
    exit: { x: "100%" },
  };

  return (
    <div>
      <div
        className={`flex items-center justify-left w-full h-[300px] backdrop:relative overflow-hidden text-[6vw] ${styles.mainCard}`}
      >
        <Link
          href="/work/findmeastreamer"
          className={`absolute z-20 pl-12 ${styles.title}`}
        >
          FINDMEASTREAMER
        </Link>
        <div className={`${styles.card}`}></div>
      </div>
      <div
        className={`flex items-center justify-left w-full h-[300px] backdrop:relative overflow-hidden text-[6vw] ${styles.mainCard}`}
      >
        <Link
          href="/work/findmeastreamer"
          className={`absolute z-20 pl-12 ${styles.title}`}
        >
          JUNIORBOOK
        </Link>
        <div className={`${styles.card2}`}></div>
      </div>
      <div
        className={`flex items-center justify-left w-full h-[300px] backdrop:relative overflow-hidden text-[6vw] ${styles.mainCard}`}
      >
        <Link
          href="/work/findmeastreamer"
          className={`absolute z-20 pl-12 ${styles.title}`}
        >
          PHAONTOM
        </Link>
        <div className={`${styles.card}`}></div>
      </div>
    </div>
    // <motion.div
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   variants={pageTransition}
    //   className={styles.main}
    // >
    //   <div className="pb-[10em]">
    //     <div className="pl-[10em]">
    //       <Link
    //         href="/work/findmeastreamer"
    //         className={`font-[500] text-aLink ${styles.title}`}
    //       >
    //         Findmeastreamer
    //       </Link>
    //       <p className="font-light pl-[5px]">
    //         Personal project that highlights small twitch streamers.
    //       </p>
    //     </div>
    //     <div className="flex items-center justify-center pt-[5em]">
    //       <Image
    //         src={findmeastreamer}
    //         alt="Picture of the project findmeastreamer"
    //         className="w-[80%] shadow-2xl"
    //       />
    //     </div>
    //   </div>

    //   <div className="pb-[10em]">
    //     <div className="pr-[10em] text-end">
    //       <Link
    //         href="/work/juniorbook"
    //         className={`font-[500] text-aLink ${styles.title}`}
    //       >
    //         Junior Book
    //       </Link>
    //       <p className="font-light">
    //         Beginner&apos;s open-source project with reviews from seniors.
    //       </p>
    //     </div>
    //     <div className="flex items-center justify-center pt-[5em]">
    //       <Image
    //         src={juniorbook}
    //         alt="Picture of the project findmeastreamer"
    //         className="w-[80%] shadow-2xl"
    //       />
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Work;
