import { Link } from "react-scroll"
import Logo from "../../assets/images/Logo.png"
import { footerLinks } from "../../utils/footerlinks"


const Footer = () => {
    return (
        <footer className="bg-light-pink py-16">
            <div className="mx-auto w-5/6 flex flex-col gap-16 md:flex-row md:justify-between">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="Logo" className="w-32" />
                    <p className="my-5 text-sm text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officiis delectus itaque iusto eum hic expedita fugiat nostrum voluptate voluptatum ea consequatur architecto fugit, non, aliquid aut consequuntur soluta labore
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis iusto laboriosam, omnis, ex ipsum inventore cupiditate dicta doloribus commodi possimus nulla earum unde libero impedit repellendus distinctio tempore harum
                    </p>
                    <p className="text-sm text-browntxt">
                        © Evogym All Rights Reserved.
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-lg">Links</h4>
                    {footerLinks && footerLinks.length > 0 && (
                        <div className="flex flex-col mt-3 gap-2">
                            {footerLinks.map((link, index) => (
                                <Link key={index}
                                    to={link.url}
                                    smooth={true}
                                    className="text-sm to-gray-700 hover:text-primarytxt-500 animate cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-lg">Contact us</h4>
                    <p className="my-3 text-sm text-gray-700">
                        1234 Evolve St, Fitness City, EX 56789
                    </p>
                    <a href="tel:33443928204"
                        className="text-sm text-gray-700 hover:text-primarytxt-500 transition duration-300 block">
                        (334) 439-28204
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer