import React from "react";
import { Link } from "react-scroll";
import type { SectionId } from "../../types/type";

type Props = {
    children: React.ReactNode;
    section: SectionId;
    onClick: (sectionId: SectionId) => void;
    activeSection: SectionId | null;
};

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {
    const isActive = activeSection === section;

    return (
        <Link
            to={section}
            onClick={() => onClick(section)}
            className={`animate hover:text-primarytxt-300 cursor-pointer capitalizey ${isActive ? "text-primarytxt-500" : ""}`}>
            {children}
        </Link>
    );
};

export default CustomLink;
