import Axios from "axios";

export const setDataBlog = (page, perPage) => (dispatch) => {
  Axios.get(`http://localhost:8080/blog/posts?page=${page}&perPage=${perPage}`)
    .then((result) => {
      const responseAPI = result.data;
      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
      dispatch({ type: "UPDATE_PER_PAGE", payload: responseAPI.per_page });
    })
    .catch((err) => {
      console.log("error: ", err);
    });
};
