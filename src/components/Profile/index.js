import React, { useState } from "react";

const Profile = () => {
  const imgProfile =
    "http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg";

  const [image, setImage] = useState(imgProfile);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <div className="profile-container">
        <img src={image} alt="" />
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={imageHandler}
        />
        <label htmlFor="input">
          <p>Choose your image</p>
        </label>
        <input type="text" name="name" placeholder="Your name..." />
        <button>Submit</button>
      </div>
    </>
  );
};

export default Profile;
