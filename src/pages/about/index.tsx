import React from "react";
import styles from "../../styles/page.module.css";
import { motion } from "framer-motion";

const index = () => {
  const pageTransition = {
    initial: { x: "100%" }, // Position initiale en dehors de l'écran à droite
    animate: {
      x: ["100%", "-2%", "0%"], // Déplace la page de 100% à -10% puis revient à 0%
      transition: { duration: 1.5, ease: "anticipate" }, // Durée de l'animation et effet d'accélération
    },
    exit: { x: "100%" }, // Position de sortie en dehors de l'écran à droite
  };

  return (
    <div className="p-4 overflow-hidden">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className={styles.main}
      >
        <p>SALUT TOI</p>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fuga
          placeat rerum, exercitationem excepturi a possimus. Esse perspiciatis
          exercitationem ratione nulla sint suscipit dolor officiis architecto
          repellendus error, itaque et!
        </div>
      </motion.div>
    </div>
  );
};

export default index;
