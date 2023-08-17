//rafce
import React, { useState } from "react";
import filmList from "./data.json";
import { generatePath, useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "../constant/config";
import { useQueryUrl } from "../hooks/useQueryUrl";
import qs from "qs";

const BaiTapMovie = () => {
  console.log({ filmList });
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ movieName: "" });

  console.log("movieName: ", searchParams.get("movieName"));
  const [inputValue, setInputValue] = useState();
  //   console.log("inputValue: ", inputValue);

  const [queryParams, setQueryParams] = useQueryUrl();
  console.log("queryParams: ", queryParams);

  const movieSearch = filmList.filter((item) => {
    return item.tenPhim
      .toLocaleLowerCase()
      .includes(searchParams.get("movieName")?.toLocaleLowerCase());
  });
  console.log("movieSearch: ", movieSearch);

  console.log(
    qs.stringify({
      name: "Kien",
    })
  );

  return (
    <div>
      <div className="row">
        <div className="mb-3">
          <input
            type="text"
            value={inputValue || ""}
            className="form-control"
            placeholder="Nhập tên phim"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            
            onKeyDown={(event) => {
              event.key == "Enter" &&
                setQueryParams({
                  movieName: inputValue || undefined,
                });
            }}
          />
          <button
            className="btn btn-outline-warning mt-3"
            onClick={() => {
              setQueryParams({
                movieName: inputValue || undefined,
              });
            }}
          >
            search
          </button>
        </div>
        {(queryParams?.movieName ? movieSearch : filmList).map((film) => (
          <div className="col-3 mt-3" key={film.maPhim}>
            <div className="card">
              <img
                className="img-fluid"
                src={film.hinhAnh}
                alt="..."
                style={{ height: 450 }}
              />
              <div className="card-body">
                <p className="fw-bold" style={{ height: 50 }}>
                  {film.tenPhim}
                </p>
                <p className="mt-3">{film.moTa.substring(0, 50)}</p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    const path = generatePath(PATH.moviDetail, {
                      movieId: film.maPhim,
                    });
                    navigate(path);
                    console.log("path: ", path);
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaiTapMovie;
