import * as React from "react";
import { motion } from "framer-motion";
import styles from './Hover.module.scss'

export default function Hover(): JSX.Element {
    return (
        <React.Fragment>
            <motion.div
                className={styles.container}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            />
        </React.Fragment>
    )
};