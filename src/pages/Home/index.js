import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/Redux/Action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const [show, setShow] = useState(2);
  const { dataBlog, page} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  // console.log('page: ', page);
  // console.log('dataBlog: ', dataBlog);
  useEffect(() => {
    dispatch(setDataBlog(counter, show));
  }, [show, counter, dispatch]);

  const navigate = useNavigate();

  // Function previous
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  // Function next
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  const showing = (e) => {
    setShow(e.target.value);
  }

  return (
    <div className="homepage-wrapper">
      <div className="comb-show-create">
        <div className="show-wrapper">
          <p>SHOW</p>
          <select value={show} onChange={showing}>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="create-wrapper">
          <Button
            title="Create Blog"
            onClick={() => navigate("/createblog", { replace: false })}
          />
        </div>
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:8080/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" color={"secondary"} onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button title="Next" color={"secondary"} onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
