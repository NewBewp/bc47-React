import React from "react";
import { useParams } from "react-router-dom";
import movieList from "./data.json";

const MovieDetail = () => {
  const params = useParams();
  console.log("params: ", params);
  const movieDetail = movieList.find((e) => e.maPhim === params.movieId * 1);
  console.log("movieDetail: ", movieDetail);
  return (
    <div className="row">
        <div className="col-4">
            <img className="img-fluid" src={movieDetail.hinhAnh} alt="..."/>
        </div>
        <div className="col-8">
            <p className="fw-bold fs-2">{movieDetail.tenPhim}</p>
            <p >{movieDetail.moTa}</p>
            <p >{movieDetail.ngayKhoiChieu}</p>
        </div>
    </div>
  )
};

export default MovieDetail;
