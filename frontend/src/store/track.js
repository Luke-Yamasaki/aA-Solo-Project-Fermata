import { csrfFetch } from "../store/csrf";

const SET_TRACK = "upload/setTrack";
const REMOVE_TRACK = "upload/removeTrack"
const READ_TRACK = "upload/readTrack"
const UPDATE_TRACK = "upload/updateTrack"

const setTrack = (track) => ({
  type: SET_TRACK,
  payload: track,
});

const removeTrack = (track) => async(dispatch) => {
  const res = await csrfFetch(`/api/tracks/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: track,
  });

  const data = await res.json();
  dispatch(setTrack(data.track));
}

export const upload = (track) => async (dispatch) => {
  const  { music, image, title, userId, description } = track;
  const formData = new FormData();
  formData.append("music", music);
  formData.append("title", title);
  formData.append("userId", userId);

  // if(image) {
  //   formData.append("files", image);
  //   formData.append("files", music)
  // }

  // for single file
  if (image) {
    formData.append("image", image);
  } else if (description) {
    formData.append("description", description);
  } 

  const res = await csrfFetch(`/api/tracks/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  dispatch(setTrack(data.track));
};

const initialState = { track: null };

export function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_TRACK:
      // I prefer this syntax rather than the Object.assign(...)
      return { ...state, track: action.payload };
    default:
      return state;
  }
}

export default reducer;
