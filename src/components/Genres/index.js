import React from "react";
import Card from "../Card";

const Genres = () => {
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
      <div className="genres-container">
        <div className="comic-title-section">
          <i className="fas fa-stethoscope"></i>
          <h5>COMICS GENRES</h5>
        </div>
        <div className="comic-genres">
          <div className="genres-card1">
            <div className="genres-title">
              <h5>Comedy</h5>
              <p>&gt;</p>
            </div>
            <div className="genres-wise">
              <p>Good Laughter is all we need</p>
            </div>
          </div>
          <div className="new-comic-genres">
            {data.slice(0, 4).map((comic, i) => (
              <Card
                key={i}
                title={comic.title}
                description={comic.description}
                image={comic.image}
                genre={comic.genre}
                rating={comic.rating}
              />
            ))}
          </div>
        </div>
        <div className="comic-genres">
          <div className="genres-card2">
            <div className="genres-title">
              <h5>Action</h5>
              <p>&gt;</p>
            </div>
            <div className="genres-wise">
              <p>Sometimes you need to get your adrenaline pumping</p>
            </div>
          </div>
          <div className="new-comic-genres">
            {data
              .slice(0, 4)
              .reverse()
              .map((comic, i) => (
                <Card
                  key={i}
                  title={comic.title}
                  description={comic.description}
                  image={comic.image}
                  genre={comic.genre}
                  rating={comic.rating}
                />
              ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Genres;
