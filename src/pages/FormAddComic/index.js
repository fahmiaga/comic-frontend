import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
// import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../../redux/actions/genreAction";
import { addComic } from "../../redux/actions/comicAction";

const FormAddComic = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Form Add Comic";
    dispatch(getAllGenres(token));
  }, [dispatch, token]);

  const genres = useSelector((state) => state.genre.genres);

  const [imageData1, setImageData1] = useState(null);
  const [imageData2, setImageData2] = useState(null);
  const [image1, setImage1] = useState(img2);
  const [image2, setImage2] = useState(img2);
  const [input, setInput] = useState({
    title: "",
    synopsis: "",
    // comic_image: imageData1,
    // drop_image: imageData2,
    genre: "",
  });
  const [disable, setDisable] = useState(false);

  const message = useSelector((state) => state.comics.message);

  const imageHandler1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage1(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImageData1(e.target.files[0]);
  };
  const imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage2(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImageData2(e.target.files[0]);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const formData = new FormData();
  formData.append("title", input.title);
  formData.append("synopsis", input.synopsis);
  formData.append("genre", input.genre);
  formData.append("comic_image", imageData1);
  formData.append("drop_image", imageData2);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComic(token, formData));
    setDisable(true);
  };

  useEffect(() => {
    if (message.status === 201) {
      setDisable(false);
    }
  }, [message]);

  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 input-width has-validation">
              <span className="input-group-text" id="basic-addon1">
                Title
              </span>
              <input
                type="text"
                className={
                  message.status === 422
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="title"
                onChange={handleChange}
              />
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {message.status === 422 ? message.message.errors.title[0] : ""}
              </div>
            </div>
            <div className="input-group input-width has-validation">
              <span className="input-group-text">Synopis</span>
              <textarea
                className={
                  message.status === 422
                    ? "form-control is-invalid"
                    : "form-control"
                }
                aria-label="With textarea"
                name="synopsis"
                onChange={handleChange}
              ></textarea>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                {message.status === 422
                  ? message.message.errors.synopsis[0]
                  : ""}
              </div>
            </div>
            <div className="form-image-wrapper">
              <div className="image-wrapper">
                <div className="input-group mb-3 mt-3 input-width has-validation">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile01"
                  >
                    Comic Image
                  </label>
                  <input
                    type="file"
                    className={
                      message.status === 422
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="inputGroupFile01"
                    accept="image/*"
                    name="comic_image"
                    onChange={imageHandler1}
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please insert an image.
                  </div>
                </div>
                <img src={image1} alt="" />
              </div>
              <div className="image-wrapper">
                <div className="input-group mb-3 mt-3 input-width has-validation">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupFile01"
                  >
                    Drop Image
                  </label>
                  <input
                    type="file"
                    className={
                      message.status === 422
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    id="inputGroupFile01"
                    accept="image/*"
                    name="drop_image"
                    onChange={imageHandler2}
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please insert an image.
                  </div>
                </div>
                <img src={image2} alt="" />
              </div>
            </div>
            <div className="input-group mb-3 input-width">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Genre
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="genre"
                onChange={handleChange}
              >
                <option>Choose your genre...</option>
                {genres.map((genre, i) => (
                  <option key={i} value={genre.genre}>
                    {genre.genre}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary mt-3 mb-3" disabled={disable}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default FormAddComic;
