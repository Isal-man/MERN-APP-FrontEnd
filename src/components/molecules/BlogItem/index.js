import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";
import { Button } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const navigate = useNavigate();
  const { title, image, name, date, body } = props;
  
  return (
    <div className="blog-item">
      <img src={image} alt="post" className="image-thumb" />
      <div className="content-detail">
        <div className="header-blog">
          <div className="title-author">
            <p className="title">{title}</p>
            <p className="author">
              {name} - {date.substring(0, 10)}
            </p>
          </div>
          <div className="button-detail">
            <Button title="Detail" color={'info'} onClick={() => navigate(`/detailblog/${props._id}`)} />
          </div>
        </div>
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

export default BlogItem;
