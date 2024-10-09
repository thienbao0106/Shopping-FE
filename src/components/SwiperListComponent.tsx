/* eslint-disable @typescript-eslint/no-explicit-any */
// import Swiper JS
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperListComponentProps = {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
  slidesPerView: number;
  spaceBetween: number;
};

const SwiperListComponent = ({
  data,
  renderItem,
  slidesPerView,
  spaceBetween,
}: SwiperListComponentProps) => {
  return (
    <main>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-80"
      >
        {data.map((item: any) => (
          <>
            <SwiperSlide>{renderItem(item)}</SwiperSlide>
          </>
        ))}
      </Swiper>
    </main>
  );
};

export default SwiperListComponent;
