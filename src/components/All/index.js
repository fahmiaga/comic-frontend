import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Card2 from "../Card2";
import { getAllComics } from "../../redux/actions/comicAction";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { useDispatch, useSelector } from "react-redux";

const All = () => {
  SwiperCore.use([EffectCoverflow, Pagination]);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const comics = useSelector((state) => state.comics.comics);

  useEffect(() => {
    dispatch(getAllComics(token));
  }, [dispatch, token]);

  return (
    <>
      <div className="new-comic-all-container">
        <div className="comic-title-section">
          <i className="fas fa-globe"></i>
          <h5>ALL COMICS</h5>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {comics.slice(0, 8).map((comic, i) => (
            <SwiperSlide key={i}>
              <Card2
                title={comic.title}
                description={comic.synopsis}
                image={comic.comic_image}
                genre={comic.genre}
                rating={comic.rating}
                id={comic.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr />
    </>
  );
};

export default All;
