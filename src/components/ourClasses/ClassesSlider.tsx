import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { classesData } from "../../utils/ClassesData";
import type { ClassType } from "../../types/type";
import ClassCard from "./ClassCard";

const ClassesSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={
                {
                    0: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1440: { slidesPerView: 3 },
                    1650: { slidesPerView: 4 }
                }
            }
            className="px-4"
        >
            {classesData.map((item: ClassType, index: number) => (
                <SwiperSlide key={`${item.title}-${index}`}
                    className="flex justify-center items-center"
                >
                    <ClassCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ClassesSlider