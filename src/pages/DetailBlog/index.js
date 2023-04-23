import React, { useEffect, useState } from "react";
import "./detailblog.scss";
import { Button, Gap } from "../../components/atoms";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const DetailBlog = () => {
  const param = useParams();
  const [data, setData] = useState({});

  const confirmDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Apakah anda yakin akan menghapus data blog ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            axios
              .delete(`http://localhost:8080/blog/post/${param.id}`)
              .then(() => {
                navigate("/");
              })
              .catch((err) => {
                console.log("err = ", err);
              });
          },
        },
        {
          label: "tidak",
          onClick: () => console.log("User tidak setuju"),
        },
      ],
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/blog/post/${param.id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err = ", err);
      });
  }, []);
  const navigate = useNavigate();
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img
          src={`http://localhost:8080/${data.image}`}
          alt="thumb"
          className="img-cover"
        />
        <div className="header-blog">
          <div className="title-author">
            <p className="blog-title">{data.title}</p>
            <Gap height={10} />
            <p className="blog-author">
              {data.author.name} - {data.createdAt.substring(0, 10)}
            </p>
          </div>
          <div className="button-wrapper">
            <Button
              title={"Edit"}
              onClick={() => navigate(`/createblog/${param.id}`)}
            />
            <Gap width={50} />
            <Button title={"Delete"} color={"danger"} onClick={confirmDelete} />
            <Gap width={50} />
            <Button title="Back" onClick={() => navigate("/")} color={"info"} />
          </div>
        </div>
        <p className="blog-body">{data.body}</p>
      </div>
    );
  } else {
    <p>Loading data...</p>;
  }
};

export default DetailBlog;
