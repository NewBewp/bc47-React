import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Child from "./Child";

const DemoUseEffect = () => {
    const [number, setNumber] = useState(100);
    const [like, setLike] = useState(100);
    useEffect(() => {}, []); //mảng dependencie
    // th1: rất ít sử dụng,chạy ít nhất 1 lần
    useEffect(() => {
        console.log("useEffect TH1: ");
    });

    //th2:
    //  chạy duy nhất 1 lần sau khi component render xong
    // sử dụng để call api, tương tác DOM

    useEffect(() => {
        console.log("useEffect TH2: ");
    }, []);

    // th3: chạy mỗi khi dependencie thay đổi
    useEffect(() => {
        console.log("useEffect TH3: ");
    }, [number, like]);

    //th4
    useEffect(() => {
        console.log("useEffect TH4: ");
        const time = setInterval(() => {
            console.log("Hello");
        }, 1000);

        return () => {
            clearInterval(time);

            console.log("useEffect TH4 return: ");
        };
    }, []);

    //example call api
    const [movieList, setMoiveList] = useState([]);
    const getMovie = async () => {
        const dataMovie = await axios({
            method: "GET",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            headers: {
                TokenCybersoft:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjAxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjc0NTYwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA2ODkzMjAwfQ.-axBsmkeW5i-ufzRXjqOhPEUumPXCQLTot5UjBRmtdQ",
            },
        });
        console.log("dataMovie: ", { dataMovie });

        setMoiveList(dataMovie?.data?.content);
    };
    useEffect(() => {
        getMovie();
    }, []);

    console.log("RENDER");
    return (
        <div>
            <h1>DemoUseEffect</h1>
            <p className="fs-3 mt-3">Number: {number}</p>
            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    setNumber(number + 10);
                }}
            >
                + Number
            </button>
            <button
                className="btn btn-danger mt-3"
                onClick={() => {
                    setNumber(number - 10);
                }}
            >
                - Number
            </button>
            <p className="fs-3 mt-3">Like: {like}</p>
            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    setLike(like + 10);
                }}
            >
                + like
            </button>
            <button
                className="btn btn-danger mt-3"
                onClick={() => {
                    setLike(like - 10);
                }}
            >
                - like
            </button>
        </div>
    );
    <Child/>
};

export default DemoUseEffect;
