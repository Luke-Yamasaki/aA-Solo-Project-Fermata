import "./Home.css";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="feed-container">
          <div className="post-container">
            <h2 className="post-title">Artists You Should Know</h2>
            <h3 className="post-info">Top tracks form artists similar to ...</h3>
            <div className="artists-slideshow">
              <div className="artist-container">
                  <div className="artist-pic"></div>
                  <p>Artist Name</p>
                  <p>Top tracks</p>
              </div>
              <div className="artist-container">
                  <div className="artist-pic"></div>
                  <p>Artist Name</p>
                  <p>Top tracks</p>
              </div>
              <div className="artist-container">
                  <div className="artist-pic"></div>
                  <p>Artist Name</p>
                  <p>Top tracks</p>
              </div>
              <div className="artist-container">
                  <div className="artist-pic"></div>
                  <p>Artist Name</p>
                  <p>Top tracks</p>
              </div>
              <div className="artist-container">
                  <div className="artist-pic"></div>
                  <p>Artist Name</p>
                  <p>Top tracks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
