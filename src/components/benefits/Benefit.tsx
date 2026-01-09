import { motion } from "framer-motion"
import type { BenefitsType } from "../../types/type"
import ActionButton from "../../utils/ActionButton"
import { baseMotion, slideUp, withDelay } from "../../utils/motionPresets";


type Props = BenefitsType & { index: number }

const Benefit = ({ icon, title, description, index }: Props) => {
    return (
        <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
            {...baseMotion}
            variants={slideUp}
            transition={withDelay(index, 0.2, 0.7)}
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primarybg-light p-4">
                    {icon}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <ActionButton className="animate text-sm font-bold text-primarytxt-500 underline cursor-pointer hover:text-secondarybg"
                to="contactus"
                variant="link"
            >
                Learn More
            </ActionButton>
        </motion.div>
    )
}

export default Benefit