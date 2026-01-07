import { useState, useEffect } from "react";
import Logo from "../../assets/images/Logo.png";
import ActionButton from "../../utils/ActionButton";
import CustomLink from "./CustomLink";
import { navLinks, type SectionId } from "../../types/type";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const NavBar = () => {
    const [activeSection, setActiveSection] = useState<SectionId | null>(navLinks[0]?.id || null);

    const [isTopPage, setIsTopPage] = useState<boolean>(true)
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    const isAboveMediaScreen = useMediaQuery("(min-width: 1120px)");

    const navBarBg = isTopPage ? "" : "bg-light-pink drop-shadow";

    useEffect(() => {
        const handleScroll = () => {
            setIsTopPage(window.scrollY === 0);

            navLinks.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetBottom - 100) {
                        setActiveSection(id);
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    const handleSetActive = (sectionId: SectionId) => {
        setActiveSection(sectionId);
    }

    return (
        <nav className="relative h-18">
            <div className={`${navBarBg} ${isTopPage ? "py-4" : "py-6"} animate fixed top-0 z-30 w-full`}>
                <div className="mx-auto w-5/6 flex-between">
                    <div className="flex-between gap-20 w-full">
                        <img src={Logo} alt="Logo" />
                        {isAboveMediaScreen ? (
                            <div className="flex-between w-full">
                                <div className="flex-between gap-8 text-sm">
                                    {navLinks.map(link => (
                                        <CustomLink
                                            key={link.id}
                                            section={link.id}
                                            onClick={handleSetActive}
                                            activeSection={activeSection}>
                                            {link.label}
                                        </CustomLink>
                                    ))}
                                </div>
                                <div className="flex-between gap-8">
                                    <button className="rounded-md bg-primarybg px-10 py-2 cursor-pointer hover:bg-secondarybg hover:text-white animate">Sign in</button>
                                    <ActionButton to="contactus" variant="link">Become a member</ActionButton>
                                </div>
                            </div>) : (
                            <>
                                <button
                                    className="rounded-full bg-secondarybg p-2 animate cursor-pointer"
                                    onClick={() => setIsMenuToggled((prev) => !prev)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white animate" />
                                </button>
                                {!isAboveMediaScreen && isMenuToggled && (
                                    <div className="fixed top-0 h-screen right-0 z-40 w-75 bg-light-pink drop-shadow-xl animate">
                                        <button className="flex justify-end p-6 cursor-pointer"
                                            onClick={() => setIsMenuToggled(false)}
                                        >
                                            <XMarkIcon className="h-7 w-7 text-gray-600 animate" />
                                        </button>
                                        <div className="ml-[20%] flex flex-col gap-10 text-xl">
                                            {navLinks.map(link => (
                                                <CustomLink
                                                    key={link.id}
                                                    section={link.id}
                                                    onClick={handleSetActive}
                                                    activeSection={activeSection}>
                                                    {link.label}
                                                </CustomLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
