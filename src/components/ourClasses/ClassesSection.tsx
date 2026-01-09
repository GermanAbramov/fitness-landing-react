import Heading from "../../utils/Heading"
import ClassesSlider from "./ClassesSlider"
import { baseMotion, slideLeft } from "../../utils/motionPresets";
import { motion } from "framer-motion";

const ClassesSection = () => {
    return (
        <section id="ourclasses" className="w-full bg-primarybg-light py-40">
            <div className="mx-auto w-5/6">
                <motion.div className="md:w-3/5"
                    {...baseMotion}
                    transition={{ duration: 0.7 }}
                    variants={slideLeft}
                >
                    <Heading>OUR CLASSES</Heading>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>
                <div className="mt-10 w-full"></div>
            </div>
            <div className="mt-10 w-full">
                <ClassesSlider />
            </div>
        </section>
    )
}

export default ClassesSection