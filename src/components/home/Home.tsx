import ActionButton from "../../utils/ActionButton";
import HomePageText from "../../assets/images/HomePageText.png";
import HomePageGraphic from "../../assets/images/HomePageGraphic.png";
import { motion } from "framer-motion";
import { sponsorImages } from "../../utils/sponsorImages";
import { baseMotion, slideLeft, slideRight, slideUp, withDelay } from "../../utils/motionPresets";



const Home = () => {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 text-browntxt">
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div className="md:-mt-20"
                        {...baseMotion}
                        transition={{ duration: 0.7 }}
                        variants={slideLeft}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 md:before:content-(--evolve-url) before:z-[-1]">
                                <img src={HomePageText} alt="home-page" />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    <motion.div className="mt-8 flex items-center justify-center md:justify-start gap-8"
                        {...baseMotion}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        variants={slideLeft}
                    >
                        <ActionButton to="contactus" variant="link">Join now</ActionButton>
                        <ActionButton className="animate rounded-md bg-primarybg px-10 py-2 hover:bg-secondarybg cursor-pointer hover:text-white"
                            to="contactus"
                            variant="link"
                        >
                            Learn more
                        </ActionButton>
                    </motion.div>
                </div>
                <motion.div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
                    {...baseMotion}
                    transition={{ duration: 0.5 }}
                    variants={slideRight}
                >
                    <img className="w-200px" src={HomePageGraphic} alt="" />
                </motion.div>
            </div>
            <div className="h-[150px] w-full bg-light-pink py-10 flex items-center justify-center">
                <div className="mx-auto w-5/6 flex items-center justify-between gap-8">
                    {sponsorImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className=""
                            {...baseMotion}
                            variants={slideUp}
                            transition={withDelay(index, 0.2, 0.7)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home 