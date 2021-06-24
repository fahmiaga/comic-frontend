import React, { useEffect, useState } from "react";
import Card2 from "../Card2";
import sunday from "../../assets/img/sunday.jpg";
import monday from "../../assets/img/monday.jpg";
import tuesday from "../../assets/img/tuesday.jpg";
import wednesday from "../../assets/img/wednesday.jpg";
import thursday from "../../assets/img/thursday.jpg";
import friday from "../../assets/img/friday.jpg";
import saturday from "../../assets/img/saturday.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getSchedule } from "../../redux/actions/scheduleAction";

const Schedule = () => {
  const days = [
    {
      id: 0,
      day: "Sun",
      image: sunday,
    },
    {
      id: 1,
      day: "Mon",
      image: monday,
    },
    {
      id: 2,
      day: "Tue",
      image: tuesday,
    },
    {
      id: 3,
      day: "Wed",
      image: wednesday,
    },
    {
      id: 4,
      day: "Thu",
      image: thursday,
    },
    {
      id: 5,
      day: "Fri",
      image: friday,
    },
    {
      id: 6,
      day: "Sat",
      image: saturday,
    },
  ];

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.day.comics);
  const [idDay, setIdDay] = useState(0);

  useEffect(() => {
    dispatch(getSchedule(idDay, token));
  }, [dispatch, token, idDay]);

  return (
    <>
      <div className="schedule-container">
        <div className="comic-title-section">
          <i className="fas fa-calendar-alt"></i>
          <h5>COMICS SCHEDULES</h5>
        </div>
        <div className="comic-days">
          {days.map((day, i) => (
            <p
              key={i}
              className={idDay === day.id ? "schedule-active" : ""}
              style={
                idDay === day.id
                  ? { backgroundImage: `url(${day.image})` }
                  : { backgroundImage: `none` }
              }
              onClick={() => setIdDay(day.id)}
            >
              {day.day}
            </p>
          ))}
        </div>
        <div className="comic-schedule">
          {comics.slice(0, 10).map((comic, i) => (
            <Card2
              key={i}
              title={comic.title}
              description={comic.synopsis}
              image={comic.comic_image}
              genre={comic.genre}
              rating={comic.rating}
              id={comic.id}
            />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Schedule;
