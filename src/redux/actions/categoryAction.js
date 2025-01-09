import baseUrl from "../../Api/BaseUrl";
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";

const getAllCategory = () => async (dispatch) => {
  try {
    const res = await baseUrl.get("/api/v1/categories?limit=${limit}");
    console.log(res.data);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

export default getAllCategory