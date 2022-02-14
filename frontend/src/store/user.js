import { csrfFetch } from "../store/csrf";

const REMOVE_USER = 'users/REMOVE_USER';
const ADD_ONE = 'users/ADD_ONE';

const addOneUser = user => ({
  type: ADD_ONE,
  payload: user
});

export const signup = (payload) => async (dispatch) => {
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
    const data = await response.json()
    dispatch(addOneUser(data.user))
    return response;
}

export const update = (payload) => async (dispatch) => {
    const id = payload.id;
    const response = await csrfFetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    })
    const data = await response.json();
    dispatch(addOneUser(data.user));
    return response;
}

export const remove = (payload, id) => async (dispatch, getState) => {
    console.log(payload)
    const response = await csrfFetch(`/api/users/${id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    console.log(response)
    if (response.ok){
        const newUser = await response.json()
        console.log(newUser)
        dispatch(addOneUser(newUser))
        return newUser;
    }
}

const initialState = { user: null };

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case REMOVE_USER:
            newState = Object.assign({}, state, { user: null})
            return newState;
        case ADD_ONE:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export default userReducer;
