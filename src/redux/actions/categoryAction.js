import baseUrl from "../../Api/BaseUrl";
import useGetData from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../type";

export const getAllCategory = (limit) => async (dispatch) => {

  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};
export const getAllCategoryPage = (page) => async (dispatch) => {

  try {
    const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    })
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = useInsertDataWithImage(`/api/v1/categories`, formData);
    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + e,
    });
  }
};
