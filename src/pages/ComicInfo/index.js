import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import JumbotronInfo from "../../components/JumbotronInfo";
import { useSelector, useDispatch } from "react-redux";
import { getComicById } from "../../redux/actions/comicAction";
import { useParams } from "react-router-dom";
import ListEpisode from "../../components/ListEpisode";
import Footer from "../../components/Footer";

const ComicInfo = () => {
  const dispatch = useDispatch();
  const comic = useSelector((state) => state.comics.comic.comic);
  const token = localStorage.getItem("token");
  const { id } = useParams();

  useEffect(() => {
    document.title = "Comic Info";
    dispatch(getComicById(id, token));
  }, [dispatch, id, token]);

  //   console.log("comic =>", comic);

  return (
    <>
      <Navbar />
      <JumbotronInfo data={comic} />
      <ListEpisode data={comic} />
      <Footer />
    </>
  );
};

export default ComicInfo;
