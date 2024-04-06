import { getAccessToken } from '../../utils/common-utils';
import * as actionTypes from '../contants/cartConstant'
import axios from 'axios';

const url='http://localhost:5000';

const options={
    headers:{"authorization":getAccessToken()
            }
}


export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${url}/current/${id}`,options);
     dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error.message});
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({type: actionTypes.REMOVE_FROM_CART, payload: id})

};
