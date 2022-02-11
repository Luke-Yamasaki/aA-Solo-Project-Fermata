import { useState } from "react";
import { upload } from "../../store/upload";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Upload.css";

const Upload = () => {
  const [music, setMusic] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre_Id, setGenre_Id] = useState(null);
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const user_Id = sessionUser.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(upload({ music, image, title, user_Id, url, description, duration, genre_Id  }))
      .then(() => {
        setMusic(null);
        setImage(null);
        setTitle("");
        setDescription('');
        setGenre_Id(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateMusic = (e) => {
    const file = e.target.files[0];
    if (file) setMusic(file);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    if(file) setImage(file);
  }


  const titleCancelBtn = document.getElementsByClassName('upl-title-cancel-btn')[0];
  const descriptionCancelBtn = document.getElementsByClassName('upl-description-cancel-btn')[0];

  const genreDropdown = document.getElementsByClassName('upl-genre-dropdown');
  const musicInput = document.getElementsByClassName('upl-music-select')[0];
  const imageInput = document.getElementsByClassName('upl-image-select')[0];
  const titleInput = document.getElementsByClassName('upl-title-input')[0];
  const descriptionInput = document.getElementsByClassName('upl-description-input')[0];

  const titleLabelDiv = document.getElementsByClassName('upl-title-div')[0];
  const descriptionLabelDiv = document.getElementsByClassName('upl-description-div')[0];
  const musicLabelDiv = document.getElementsByClassName('upl-music-div')[0];
  const imageLabelDiv = document.getElementsByClassName('upl-image-div')[0];
  const genreLabelDiv = document.getElementsByClassName('upl-genre-div')[0];

  const titleLabel = document.getElementsByClassName('upl-title-label')[0];
  const descriptionLabel = document.getElementsByClassName('upl-description-label')[0];
  const musicLabel = document.getElementsByClassName('upl-music-label')[0];
  const imageLabel = document.getElementsByClassName('upl-image-label')[0];
  const genreLabel = document.getElementsByClassName('upl-genre-label')[0];


  const uploadBtn = document.getElementsByClassName('upl-upload-btn')[0];

  if(!sessionUser) return (
    <Redirect to="/login" />
  );

  const titleKeyUp = (e) => {
    // e.preventDefault();
    titleCancelBtn.style.opacity = '100%';

  }

  const descriptionKeyUp = (e) => {
    // e.preventDefault();
    descriptionCancelBtn.style.opacity = '100%'
    descriptionInput.value.length ? uploadBtn.style.opacity = "100%" : uploadBtn.style.opacity = "25%";

  }

  const titleFocus = (e) => {
    // e.preventDefault();
    titleLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    titleLabelDiv.style.width = '130px';
    titleLabel.style.color = "white";
    titleLabel.style.letterSpacing = "0.5px";
    titleLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    titleInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    titleInput.style.height = "40px"
    if(titleInput.value.length > 0) {
      titleCancelBtn.style.opacity = '100%'
    }
    return
  }

  const descriptionFocus = (e) => {
    // e.preventDefault();
    descriptionLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    descriptionLabelDiv.style.width = '130px';
    descriptionLabel.style.color = "white";
    descriptionLabel.style.letterSpacing = "0.5px";
    descriptionLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    descriptionInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    descriptionInput.style.height = "40px"
    if(descriptionInput.value.length > 0) {
      descriptionCancelBtn.style.opacity = '100%'
    }
    return
  }

  const titleBlur = (e) => {
    e.stopPropagation();
    titleLabelDiv.style.backgroundImage = 'none';
    titleLabelDiv.style.background = 'white';
    titleLabel.style.color = 'black';
    titleInput.style.border = '1px solid black';
    titleCancelBtn.style.marginTop = "-29px"
    if(titleInput.value.length === 0) titleCancelBtn.style.opacity='0%';
  }

  const descriptionBlur = (e) => {
    e.stopPropagation();
    descriptionLabelDiv.style.backgroundImage = 'none';
    descriptionLabelDiv.style.background = 'white';
    descriptionLabel.style.color = 'black';
    descriptionInput.style.border = '1px solid black';
    descriptionCancelBtn.style.marginTop = "-29px"
    if(descriptionInput.value.length === 0) descriptionCancelBtn.style.opacity='0%';
  }

  const titleClear = () => {
    setTitle('');
    return titleCancelBtn.style.opacity = '0%';
  }

  const descriptionClear = () => {
    setDescription('');
    return descriptionCancelBtn.style.opacity = '0%';
  }

  const genreSelect = (e) => {
    // e.preventDefault();
  }

  const musicSelect = (e) => {
    // e.preventDefault();

  }

  const imageSelect = (e) => {

  }

  return (
    <>
      <form className="upl-login-container" onSubmit={handleSubmit}>
        <h1 className="upl-login-header">Upload your track!</h1>
        <ul className="upl-login-error-list">
          {errors.map((error, idx) => (
            <li className="upl-login-error-item" key={idx}>{error}</li>
          ))}
        </ul>
        <div className="upl-input-container">
          <div className="upl-music-input-box">
            <div className="upl-music-label-div" >
              <label className="upl-music-label">Choose an MP3 or WAV file</label>
            </div>
            <input
                className="upl-music-input"
                type="file"
                onChange={updateMusic}
                required
              />
          </div>
          <div className="upl-image-input-box">
            <div className="upl-image-label-div" >
              <label className="upl-image-label">Choose a cover image</label>
            </div>
            <input
                className="upl-image-input"
                type="file"
                onChange={updateImage}
                required
              />
          </div>
          <div className="upl-title-input-box">
            <div className="upl-title-label-div">
              <label className="upl-title-label">Track name</label>
            </div>
            <input
              className="upl-title-input"
              type="text"
              placeholder="Enter a title for your track..."
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              onKeyUp={(e) => titleKeyUp(e)}
              onFocus={(e) => titleFocus(e)}
              onBlur={(e) => titleBlur(e)}
              required
            />
            <div className="upl-title-cancel-btn" onClick={() => titleClear()}></div>
          </div>
          <div className="upl-description-input-box">
            <div className="upl-description-label-div">
              <label className="upl-description-label">Description</label>
            </div>
            <input
              className="upl-description-input"
              type="text"
              placeholder="Enter a description for your track..."
              autoComplete="off"
              onChange={(e) => setDescription(e.target.value)}
              onKeyUp={(e) => descriptionKeyUp(e)}
              onFocus={(e) => descriptionFocus(e)}
              onBlur={(e) => descriptionBlur(e)}
              required
            />
            <div className="upl-description-cancel-btn" onClick={() => descriptionClear()}></div>
          </div>
          <div className="upl-genre-select-box">
            <div className="upl-genre-label-div">
              <label className="upl-genre-label">Genre</label>
            </div>
            <input
              className="upl-title-input"
              type="text"
              placeholder="Enter a title for your track..."
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              onKeyUp={(e) => titleKeyUp(e)}
              onFocus={(e) => titleFocus(e)}
              onBlur={(e) => titleBlur(e)}
              required
            />
            <div className="upl-description-cancel-btn" onClick={() => descriptionClear()}></div>
          </div>
        </div>
        <button className="upl-login-btn" type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
