import axios from "axios";
import * as actionTypes from "../contants/productConstant";
import { getAccessToken } from "../../utils/common-utils";

const url='http://localhost:5000';

const options={
    headers:{"authorization":getAccessToken()
            }
}

export const getProducts= () => async (dispatch) => {
    try{
       const {data} = await axios.get(`${url}/products`,options);
       dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})

    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${url}/current/${id}`,options);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});

    }
};
