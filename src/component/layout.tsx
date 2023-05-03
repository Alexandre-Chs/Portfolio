import { PropsWithChildren, useEffect, useRef } from "react";
import styles from "@/styles/layout.module.css";

export default function Layout({ children }: PropsWithChildren) {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      requestAnimationFrame(() => {
        if (cursor.current !== null) {
          const scrollX = window.scrollX || window.pageXOffset;
          const scrollY = window.scrollY || window.pageYOffset;
          // const currentLeft = parseFloat(cursor.current.style.left) + scrollX;
          // const currentTop = parseFloat(cursor.current.style.top) + scrollY;
          cursor.current.animate(
            [{ left: `${clientX + scrollX}px`, top: `${clientY + scrollY}px` }],
            { duration: 100, fill: "both" }
          );
        }
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <main>
      <div ref={cursor} className={styles.cursor}></div>
      {children}
    </main>
  );
}
