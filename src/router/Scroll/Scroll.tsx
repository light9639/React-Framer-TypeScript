import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./Scroll.module.css";

export default function Scroll(): JSX.Element {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className={styles.main}>
            <span className={styles.text}>스크롤을 내려 보세요.</span>
            <div className={styles.wrapper}>
                <motion.div
                    className={styles.container}
                    style={{
                        scale
                    }}
                >
                    <motion.div
                        className={styles.item}
                        style={{
                            scaleY: scrollYProgress
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};