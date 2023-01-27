import React from 'react'
import { motion } from 'framer-motion'
import styles from "./Appear.module.scss";

export default function Appear() {
    return (
        <React.Fragment>
            <motion.div
                className={styles.container}
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            />
        </React.Fragment>
    )
}