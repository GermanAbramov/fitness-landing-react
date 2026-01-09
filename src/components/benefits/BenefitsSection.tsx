import { motion } from "framer-motion"
import ActionButton from "../../utils/ActionButton"
import BenefitsPageGraphic from "../../assets/images/BenefitsPageGraphic.png"
import Benefit from "./Benefit"
import Heading from "../../utils/Heading"
import { benefits } from "../../utils/BenefitData"
import { baseMotion, slideLeft, slideRight } from "../../utils/motionPresets";


const BenefitsSection = () => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div className="md:my-5 md:w-3/5"
                {...baseMotion}
                transition={{ duration: 0.7 }}
                variants={slideLeft}
            >
                <Heading>MORE THAN JUST A GYM.</Heading>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and class get you to your ultimate fitness goals with ease. We provide care into each and every member.
                </p>
            </motion.div>
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
                {benefits.map((benefits, index) => (
                    <Benefit
                        key={benefits.title}
                        index={index}
                        {...benefits}
                    />
                ))}
            </motion.div>
            <motion.div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
                <motion.div className="flex-1"
                    {...baseMotion}
                    transition={{ duration: 0.7 }}
                    variants={slideLeft}
                >
                    <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto" />
                </motion.div>
                <motion.div className="flex-1 relative"
                    {...baseMotion}
                    transition={{ duration: 0.7 }}
                    variants={slideRight}
                >
                    <div className="before:absolute hidden md:block before:-left-20 before:-top-20 before:z-[1] before:content-(--abstract-waves-url)">
                        <Heading>
                            MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primarytxt-500"> FIT</span>
                        </Heading>
                    </div>
                    <div className="">
                        <p className="my-5">
                            Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.
                            Amet massa vitae tortor condimentum lacinia quis vel eros donec.
                            Viverra justo nec ultrices dui sapien eget mi proin sed.
                        </p>
                        <p className="mb-5">
                            Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.
                            Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-16 justify-center md:justify-between items-center gap-8">
                        <ActionButton variant="button">
                            Join Now
                        </ActionButton>
                        <div className="before:z-[-1] relative before:content-(--sparkles-url)"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default BenefitsSection