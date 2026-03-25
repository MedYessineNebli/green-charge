import { motion } from 'framer-motion';

const Slide = ({ children, direction }) => {
    const variants = {
        initial: (dir) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        exit: (dir) => ({
            x: dir > 0 ? -1000 : 1000,
            opacity: 0,
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        }),
    };

    return (
        <motion.div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 sm:p-16 lg:p-24"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default Slide;
