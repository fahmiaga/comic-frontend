import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateProfile } from "../../redux/actions/authAction";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Profile = () => {
  const imgProfile =
    "http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg";
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userdata"));

  const message = useSelector((state) => state.user.message);
  const [image, setImage] = useState(user.profile_image);
  const [imageData, setImageData] = useState(imgProfile);
  const [disable, setDisable] = useState(false);
  const [input, setInput] = useState({
    name: user.name,
  });
  const dispatch = useDispatch();

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImageData(e.target.files[0]);
  };

  const formData = new FormData();

  formData.append("name", input.name);
  formData.append("profile_image", imageData);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData, token));
    setDisable(true);
  };

  useEffect(() => {
    if (message.status === 200) {
      NotificationManager.success("", "Profile successfully updated", 3000);
      setDisable(false);
    }
  }, [message]);
  // console.log("user =>", message);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="profile-container">
          <img src={user.image_name === null ? imgProfile : image} alt="" />
          <input
            type="file"
            name="profile-image"
            id="input"
            accept="image/*"
            onChange={imageHandler}
          />
          <label htmlFor="input">
            <p>Choose your image</p>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            onChange={handleChange}
            value={input.name}
          />
          <button disabled={disable}>Submit</button>
        </div>
      </form>
      <NotificationContainer />
    </>
  );
};

export default Profile;
