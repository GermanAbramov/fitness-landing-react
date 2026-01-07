import ActionButton from "../../utils/ActionButton";
import HomePageText from "../../assets/images/HomepageText.png";
import HomePageGraphic from "../../assets/images/HomePageGraphic.png";
import { motion } from "framer-motion";
import { sponsorImages } from "../../utils/sponsorImages";

const Home = () => {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 text-browntxt">
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
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
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
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
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
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