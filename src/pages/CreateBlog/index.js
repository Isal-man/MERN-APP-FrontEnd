import React, { useEffect, useState } from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createblog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImagePreview,
  setRemoveForm,
  updateToAPI,
} from "../../config/Redux/Action";
import axios from "axios";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (param.id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:8080/blog/post/${param.id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body));
          dispatch(setImagePreview(`http://localhost:8080/${data.image}`));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const onSubmit = () => {
    if (isUpdate) {
      updateToAPI(form, param.id);
    } else {
      postToAPI(form);
    }
    dispatch(setRemoveForm());
    navigate("/");
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <p className="title">{isUpdate ? "Update" : "Create New"} Blog Post</p>
      <Input
        label="Post title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-wrapper">
        <div className="back-action">
          <Button title="Back" color={"info"} onClick={() => navigate("/")} />
        </div>
        <div className="save-action">
          <Button
            title={isUpdate ? "update" : "save"}
            color={"success"}
            onClick={onSubmit}
          />
        </div>
      </div>
      <Gap height={35} />
    </div>
  );
};

export default CreateBlog;
