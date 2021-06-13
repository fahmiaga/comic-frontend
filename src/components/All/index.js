import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import Card2 from "../Card2";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

const All = () => {
  SwiperCore.use([EffectCoverflow, Pagination]);

  const data = [
    {
      title: "Naruto",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa. aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a6bf3c3-ed4e-4d52-85b6-2692a3b8eeac/db0mv0x-c384c1d8-83b1-46ac-818c-6d9e48bd1f96.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhNmJmM2MzLWVkNGUtNGQ1Mi04NWI2LTI2OTJhM2I4ZWVhY1wvZGIwbXYweC1jMzg0YzFkOC04M2IxLTQ2YWMtODE4Yy02ZDllNDhiZDFmOTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Lq3DoFywlo7yEnba1PjFGv-2yUtkPqUGd-tsad769H4",
      genre: "Action",
      rating: "4.5",
    },
    {
      title: "One Piece",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, ",
      image:
        "https://i.pinimg.com/originals/46/4c/36/464c362413cd05a572850891b568d648.png",
      genre: "Horror",
      rating: "4",
    },
    {
      title: "Attack on Titan",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/510nRVPG%2BAL._AC_.jpg",
      genre: "Action",
      rating: "4",
    },
    {
      title: "One Punch Man",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque ",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c387cb2d-7107-497b-864c-f64b491d42fd/das4tbr-e3efa0f7-233c-4f77-8630-24fcbc6463d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzODdjYjJkLTcxMDctNDk3Yi04NjRjLWY2NGI0OTFkNDJmZFwvZGFzNHRici1lM2VmYTBmNy0yMzNjLTRmNzctODYzMC0yNGZjYmM2NDYzZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zF_r13XD9p2YHiJhF5UaFpe-Vg0a5XJGSTdnLZ_7o-4",
      genre: "Comedy",
      rating: "4.5",
    },
    {
      title: "Bleach",
      description:
        " deleniti sunt fuga culpa. aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa",
      image:
        "https://i.pinimg.com/736x/83/77/b9/8377b9b73ebdd25f6aadde028dd65643.jpg",
      genre: "Comedy",
      rating: "4.5",
    },
    {
      title: "Fairy Tail",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa. aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, ",
      image: "https://i.kym-cdn.com/photos/images/facebook/000/969/362/1db.jpg",
    },
    {
      title: "Fullmetal Alchemist",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolorem aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa. aspernatur iure dicta non ipsum saepe maiores reiciendis? Eaque molestiae cupiditate, deleniti sunt fuga culpa",
      image:
        "https://www.gamulator.com/img/roms/fullmetal-alchemist-trading-card-game-ds-cover-xenophobia.jpg",
    },
  ];

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
          {data.map((comic, i) => (
            <SwiperSlide key={i}>
              <Card2
                title={comic.title}
                description={comic.description}
                image={comic.image}
                genre={comic.genre}
                rating={comic.rating}
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
