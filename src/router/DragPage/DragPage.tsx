import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from './DragPage.module.scss'

export default function DragPage() {
    const x = useMotionValue(0);
    const scale = useTransform(
        x,
        // Map x from these values:
        [-400, 0, 400],
        // Into these values:
        [3, 1, 0.1]
    );
    const rotateZ = useTransform(x, [-400, 0, 400], [-360, 0, 360]);
    const appBackground = useTransform(
        x,
        [-400, 0, 400],
        [
            "linear-gradient(150deg, rgb(150, 178, 222), rgb(0, 83, 238))",
            "linear-gradient(150deg, rgb(130, 206, 214), rgb(178, 242, 129))",
            "linear-gradient(150deg, rgb(181, 222, 150), rgb(238, 178, 0))"
        ]
    );
    const background = useTransform(
        x,
        [-400, 0, 400],
        ["rgb(60, 100, 255)", "rgb(170, 249, 166)", "rgb(248, 255, 173)"]
    );

    useEffect(() => {
        x.onChange(() => {
            console.log(x.get());
        });
    }, [x]);

    return (
        <motion.div className={styles.app} style={{ background: appBackground }}>
            <motion.div
                className={styles.box}
                drag="x"
                dragSnapToOrigin
                style={{ x, scale, rotateZ, background }}
            />
        </motion.div>
    );
}
