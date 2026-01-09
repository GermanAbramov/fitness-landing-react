import { useState } from 'react'

type Props = {
    title: string;
    description?: string;
    image: string;
}

const ClassCard = ({ title, description, image }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="relative cursor-pointer mx-auto h-[380px] w-full max-w-[450px] px-4 sm:px-0"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen(open => !open)}
        >
            <div className={"absolute z-20 flex h-full w-full flex-col items-center justify-center px-5 bg-primarybg text-white text-center transition-opacity duration-500" +
                (open ? " opacity-90" : " opacity-0")}
            >
                <p className="text-2xl font-semibold">{title}</p>
                {description && <p className="mt-5 text-sm">{description}</p>}
            </div>
            <img src={image} alt={title}
                className="h-full w-full object-cover object-center rounded-md shadow-md"
            />
        </div>
    )
}

export default ClassCard