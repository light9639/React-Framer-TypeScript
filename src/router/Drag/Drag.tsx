import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from './Drag.module.css'

export default function Drag(): JSX.Element {
    const constraintsRef = useRef(null);

    return (
        <React.Fragment>
            <motion.div className={styles.container} ref={constraintsRef}>
                <motion.div className={styles.item} drag dragConstraints={constraintsRef} />
            </motion.div>
            <span className={styles.text}>드래그 해 보세요.</span>
        </React.Fragment>
    );
};