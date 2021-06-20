import React, { useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
// import { useSelector, useDispatch } from "react-redux";
// import { getDays } from "../../redux/actions/scheduleAction";
import sunday from "../../assets/img/sunday.jpg";
import monday from "../../assets/img/monday.jpg";
import tuesday from "../../assets/img/tuesday.jpg";
import wednesday from "../../assets/img/wednesday.jpg";
import thursday from "../../assets/img/thursday.jpg";
import friday from "../../assets/img/friday.jpg";
import saturday from "../../assets/img/saturday.jpg";
import { useHistory } from "react-router-dom";

const AddSchedule = () => {
  const dayData = [
    {
      id: 0,
      day: "Sunday",
      image: sunday,
    },
    {
      id: 1,
      day: "Monday",
      image: monday,
    },
    {
      id: 2,
      day: "Tuesday",
      image: tuesday,
    },
    {
      id: 3,
      day: "Wednesday",
      image: wednesday,
    },
    {
      id: 4,
      day: "Thursday",
      image: thursday,
    },
    {
      id: 5,
      day: "Friday",
      image: friday,
    },
    {
      id: 6,
      day: "Saturday",
      image: saturday,
    },
  ];

  // const token = localStorage.getItem("token");
  // const dispatch = useDispatch();
  // const days = useSelector((state) => state.day.days);
  const history = useHistory();

  useEffect(() => {
    document.title = "Comic Schedule";
    // dispatch(getDays(token));
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <div className="schedule-button-wrapper">
            {dayData.map((image, i) => (
              <div
                key={i}
                className="days-button"
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: "cover",
                }}
                onClick={() => history.push(`/comic-schedule/${image.id}`)}
              >
                <p>{image.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default AddSchedule;
