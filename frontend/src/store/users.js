import { response } from "express";
import { csrfFetch } from "./csrf";

const GET_USERS = "users/get_users";

const USER_ADDED = 'user/User_ADDED'

const addUser = () => ({
  type: USER_ADDED,
  user,
})

export const fetchUser = (dataWeExpect) => async(dispatch) => {
  const { userId, body, title } = payload;

  const response = await fetch('', {
    method: 'POST',
    body: JSON.stringify({
      userName,
      body,
      userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if(!response.ok) throw response;

  const data = await response.json();

  return data;
};


const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const getAllUsers = () => async (dispatch) => {
  const res = await csrfFetch("/api/users");
  const data = await res.json();
  dispatch(getUsers(data));
};

const initialState = {};

export function usersReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_USERS:
      const allUsers = {};
      action.payload.forEach((user) => {
        allUsers[user.id] = user;
      });
      return allUsers;
    default:
      return state;
  }
}

export default usersReducer;
