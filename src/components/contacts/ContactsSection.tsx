import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../../utils/contactSchema'
import type { ContactFormType } from '../../utils/contactSchema'
import ContactUsPageGraphic from '../../assets/images/ContactUsPageGraphic.png'
import Heading from '../../utils/Heading'
import TextInput from '../formElements/TextInput'
import { motion } from 'framer-motion'
import { baseMotion, slideLeft, slideRight } from "../../utils/motionPresets";

const ContactsSection = () => {
    const { register, handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm<ContactFormType>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched"
    })

    const onSubmit = (data: ContactFormType) => {
        console.log("Form submitted:", data)

        setTimeout(() => {
            alert("Form submitted successfully!")
            reset()
        }, 1000)
    }

    return (
        <section id='contactus' className="mx-auto w-5/6 pb-32 pt-24">
            <motion.div className="md:w-3/5"
                {...baseMotion}
                transition={{ duration: 0.7 }}
                variants={slideLeft}
            >
                <Heading>
                    <span className="text-primarytxt-500">JOIN NOW</span> TO GET IN SHAPE
                </Heading>
                <p className="my-5">
                    Ready to take the next step? Fill out the form below to get in touch with us and start your fitness journey today! Our team is here to support you every step of the way.
                </p>
            </motion.div>
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div className="mt-10 basis-3/5 md:mt-0"
                    {...baseMotion}
                    transition={{ duration: 0.7 }}
                    variants={slideLeft}
                >
                    <form
                        className="relative z-[2]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextInput
                            placeholder='NAME'
                            register={register('name')}
                            error={errors.name}
                        />
                        <TextInput
                            type='email'
                            placeholder='EMAIL'
                            register={register('email')}
                            error={errors.email}
                        />
                        <TextInput className='resize-none'
                            type='textarea'
                            placeholder='MESSAGE'
                            register={register('message')}
                            error={errors.message}
                        />
                        <button className='cursor-pointer mt-5 rounded-lg bg-secondarybg px-20 py-3 animate hover:text-white'
                            type='submit'
                        >
                            SUBMIT
                        </button>
                        {isSubmitSuccessful && (
                            <motion.p className="mt-4 text-green-600 italic text-center font-semibold"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >Thank you for your message! We will get back to you soon.</motion.p>
                        )}
                    </form>
                </motion.div>
                <motion.div className="mt-10 basis-2/5 md:mt-0"
                    {...baseMotion}
                    transition={{ duration: 0.7 }}
                    variants={slideRight}
                >
                    <div className="w-full relative before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-(--evolve-url)">
                        <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic"
                            className="relative z-[2]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactsSection