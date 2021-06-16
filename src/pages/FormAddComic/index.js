import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
// import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";

const FormAddComic = () => {
  useEffect(() => {
    document.title = "Form Add Comic";
  }, []);

  const [image1, setImage1] = useState(img2);
  const [image2, setImage2] = useState(img2);

  const imageHandler1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage1(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage2(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <div className="input-group mb-3 input-width">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group input-width">
            <span className="input-group-text">Synopis</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="form-image-wrapper">
            <div className="image-wrapper">
              <div className="input-group mb-3 mt-3 input-width">
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  Comic Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  accept="image/*"
                  name="comic_image"
                  onChange={imageHandler1}
                />
              </div>
              <img src={image1} alt="" />
            </div>
            <div className="image-wrapper">
              <div className="input-group mb-3 mt-3 input-width">
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  Drop Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  accept="image/*"
                  name="drop_image"
                  onChange={imageHandler2}
                />
              </div>
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="input-group mb-3 input-width">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Options
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <button className="btn btn-primary mt-3 mb-3">Submit</button>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default FormAddComic;
