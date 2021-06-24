import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules

import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllComics } from "../../redux/actions/comicAction";
const NewComic = () => {
  SwiperCore.use([Pagination, Navigation]);

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics.comics);

  useEffect(() => {
    dispatch(getAllComics(token));
  }, [dispatch, token]);

  return (
    <>
      <div className="new-comic-container">
        <div className="comic-title-section">
          <i className="fas fa-fan"></i>
          <h5>LATEST COMICS RELEASES</h5>
        </div>

        {/* swiper */}

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          pagination={{
            type: "progressbar",
          }}
        >
          {comics.slice(0, 7).map((comic, i) => (
            <SwiperSlide key={i}>
              <Card
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

        {/* <div className="card-container">
          {data.map((comic, i) => (
            <Card
              key={i}
              title={comic.title}
              description={comic.description}
              image={comic.image}
              genre={comic.genre}
              rating={comic.rating}
            />
          ))}
        </div> */}
      </div>

      <hr />
    </>
  );
};

export default NewComic;
