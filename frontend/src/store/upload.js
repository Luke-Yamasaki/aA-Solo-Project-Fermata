import { csrfFetch } from "../store/csrf";

const SET_TRACK = "upload/setTrack";

const setTrack = (track) => ({
  type: SET_TRACK,
  payload: track,
});

export const upload = (track) => async (dispatch) => {
  const { music, image, title, id, image_url, url, description, duration, genre_Id } = track;
  console.log(track)
  const formData = new FormData();
  // formData.append("music", music);
  formData.append("title", title);
  formData.append("user_Id", id);
  formData.append("url", url);
  formData.append("duration", duration);

  // if(image) {
  //   formData.append("files", image);
  //   formData.append("files", music)
  // }

  // for single file
  if (image) {
    formData.append("image", image);
  } else if (description) {
    formData.append("description", description);
  } else {
    if (genre_Id) {
    formData.append("genre_Id", genre_Id)
    }
  }


  const res = await csrfFetch(`/api/upload/`, {
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
