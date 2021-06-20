import React, { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addContent } from "../../redux/actions/contentAction";
import { useParams } from "react-router-dom";

const FormAddContent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const message = useSelector((state) => state.content.message);

  useEffect(() => {
    document.title = "Form Add Content";
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }

    for (let i = 0; i < e.target.files.length; i++) {
      setImageData((image) => [...image, e.target.files[i]]);
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  const handleSubmit = (e) => {
    setDisable(true);
    const formData = new FormData();
    for (let i = 0; i < imageData.length; i++) {
      formData.append("image[]", imageData[i]);
    }
    e.preventDefault();
    dispatch(addContent(id, token, formData));
  };

  useEffect(() => {
    if (message.status === 201) {
      setDisable(false);
    }
  }, [message]);

  console.log(message);
  return (
    <>
      <AdminNavbar />
      <div className="admin-comic-container">
        <div className="content-comic-container">
          <form onSubmit={handleSubmit}>
            <div className="content-image-wrapper">
              <input
                type="file"
                id="file"
                name="image[]"
                multiple
                onChange={handleImageChange}
              />
              <div className="label-holder">
                <label htmlFor="file" className="label">
                  <i className="fas fa-image"></i>
                </label>
              </div>
              <div className="result">{renderPhotos(selectedFiles)}</div>
              <button
                className="btn btn-primary button-image"
                disabled={disable}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default FormAddContent;
