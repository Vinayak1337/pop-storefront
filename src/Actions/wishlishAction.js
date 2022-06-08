import axios from "axios";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  VIEW_WISHLIST,
} from "../ActionTypes/wishlishActiontype";
import { API } from "../API";

export const viewWishlist = () => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios
      .get(`${API}/api/wishList/view_WishList`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.WishListItems);
        dispatch(viewWishlistSuccess(response.data.WishListItems));
      });
  };
};

export const viewWishlistSuccess = (items) => {
  console.log(items);
  return {
    type: VIEW_WISHLIST,
    payload: items,
  };
};

export const addToWishlist = (id) => {
  const token = localStorage.getItem("token");

  return function (dispatch) {
    axios
      .post(
        `${API}/api/wishList/add_product`,
        {
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        dispatch(addToWishlistSuccess(response.data.data.WishListItems));
        console.log(response);
      });
  };
};

export const addToWishlistSuccess = (items) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: items,
  };
};

export const removeFromWishlist = (id) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios
      .delete(`${API}/api/wishList/remove_product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(removeFromWishlistSuccess(response.data.message));
      });
  };
};

export const removeFromWishlistSuccess = (message) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: message,
  };
};
