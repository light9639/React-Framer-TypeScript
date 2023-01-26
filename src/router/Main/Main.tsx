import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "./Main.module.css";

export default function Main(): JSX.Element {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const boxRef = useRef<HTMLDivElement>(null);
    const [xValue, setXValue] = useState(0);
    const x = useMotionValue(xValue);

    const slides = [
        { id: 0, content: "🧥", background: "rgba(132, 93, 28, 1)" },
        { id: 1, content: "🥼", background: "rgba(169, 172, 174, 1)" },
        { id: 2, content: "👗", background: "rgba(127, 200, 180, 1)" },
        { id: 3, content: "🥻", background: "rgba(208, 122, 50, 1)" },
        { id: 4, content: "👚", background: "rgba(190, 118, 177, 1)" },
        { id: 5, content: "👕", background: "rgba(143, 187, 239, 1)" },
        { id: 6, content: "👘", background: "rgba(240, 163, 20, 1)" }
    ];
    const showNextSlide = () => {
        setDirection("next");
        setVisibleIndex((prev) =>
            prev === slides.length - 1 ? slides.length - 1 : prev + 1
        );
    };
    const showPrevSlide = () => {
        setDirection("prev");
        setVisibleIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };
    const slideVariants = {
        hidden: (direction: "next" | "prev") => ({
            x: direction === "next" ? 500 : -500,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 }
        }),
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        },
        exit: (direction: "next" | "prev") => ({
            x: direction === "next" ? -500 : 500,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 }
        })
    };
    const background = slides[visibleIndex].background;

    useEffect(() => {
        x.onChange(() => {
            console.log(x.get());
        });
    }, [x]);

    return (
        <div className={styles.main} ref={boxRef}>
            <motion.div
                className={styles.slider}
                animate={{ background, transition: { duration: 0.3 } }}
            >
                <AnimatePresence custom={direction}>
                    {slides.map((slide, i) =>
                        i === visibleIndex ? (
                            <motion.div
                                className={styles.slide}
                                key={slide.id}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                custom={direction}
                                drag="x"
                                dragSnapToOrigin
                                dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
                                whileTap={{ scale: 0.9 }}
                                dragConstraints={{
                                    left: -window.innerWidth,
                                    right: window.innerWidth
                                }}
                                dragElastic={false}
                                onDrag={(event, info) => {
                                    setXValue(info.point.x);
                                    x.set(info.offset.x);
                                }}
                                onDragEnd={(event, info) => {
                                    if (
                                        info.offset.x < 0 &&
                                        Math.abs(info.offset.x) >= window.innerWidth / 4
                                    ) {
                                        showNextSlide();
                                    } else if (
                                        info.offset.x > 0 &&
                                        info.offset.x >= window.innerWidth / 4
                                    ) {
                                        showPrevSlide();
                                    }
                                    setXValue(info.point.x);
                                    x.set(info.point.x);
                                }}
                            >
                                <span>{slide.content}</span>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </motion.div>
            <div className={styles.buttons}>
                <button
                    type="button"
                    className="prev"
                    onClick={showPrevSlide}
                    disabled={visibleIndex === 0}
                >
                    ᴘʀᴇᴠ
                </button>
                <button
                    type="button"
                    className="next"
                    onClick={showNextSlide}
                    disabled={visibleIndex === slides.length - 1}
                >
                    ɴᴇxᴛ
                </button>
            </div>
        </div>
    );
}
