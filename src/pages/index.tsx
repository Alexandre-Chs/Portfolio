import Link from "next/link";
import styles from "../styles/font/font.module.css";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showArrow, setShowArrow] = useState([false, false, false]);
  const [slide, setSlide] = useState(false);

  const router = useRouter();

  const handleClick = (
    index: number,
    e: {
      preventDefault: () => void;
      currentTarget: any;
    }
  ) => {
    //wowowowo too much setTimeout
    e.preventDefault();
    const element = e.currentTarget;
    element.style.filter = "blur(10px)";
    element.style.transition = "all .5s ease";
    setTimeout(() => {
      element.style.fontSize = "0px";
      element.style.filter = "blur(0px)";
      const newShowArrow = [...showArrow];
      newShowArrow[index] = true;
      setShowArrow(newShowArrow);
    }, 400);

    setTimeout(() => {
      setSlide(true);
      element.style.transition = "all .8s ease";
      element.style.transform = "translateX(4000px)";
      element.style.opacity = "0";
      element.style.filter = "blur(350px)";
    }, 1000);

    setTimeout(() => {
      router.push(element.href);
      setSlide(false);
    }, 1700);
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.5,
          filter: "blur(10px)",
          x: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          x: slide ? "-100%" : 0,
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        }}
        // transition={{ duration: 0.6, delay: 0.2 }}
        className="flex h-screen bg-background"
      >
        <div className="basis-1/12"></div>
        <div className="flex items-end justify-start basis-4/12 pb-[15em]">
          <div className="font-medium max-w-[80%]">
            <h1 className="pb-4 tracking-wider text-l">ALEXANDRE CHANAS</h1>
            <p className="text-sm font-normal leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              itaque minus. Beatae dolores iure non placeat ipsam temporibus
              accusantium recusandae soluta? Alias quod soluta deserunt ea unde
              ducimus sit facere!
            </p>
            <p>Current working to chez moi</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center basis-4/6 min-h-[100px]">
          <Link
            onClick={(e) => handleClick(0, e)}
            className={styles.title}
            href="/about"
          >
            A propos
            {showArrow[0] == true ? (
              <FiArrowRight
                size={150}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            ) : null}
          </Link>
          <Link
            onClick={(e) => handleClick(1, e)}
            className={styles.title}
            href="/"
          >
            Projets
            {showArrow[1] == true ? (
              <FiArrowRight
                size={100}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            ) : null}
          </Link>
          <Link
            onClick={(e) => handleClick(2, e)}
            className={styles.title}
            href="/"
          >
            Contact
            {showArrow[2] == true ? (
              <FiArrowRight
                size={100}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            ) : null}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
