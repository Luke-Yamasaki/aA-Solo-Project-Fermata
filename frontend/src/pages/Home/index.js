import "./Home.css";
import Navbar from "../../components/Navbar";
import Player from "../../components/Player";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hme-wrapper">
        <div className="hme-container">
          <div className="hme-track-box">
            <div className="hme-track-image"></div>
            <div className="hme-track-content">
              <div className="hme-track-play-info">
                  <div className="hme-track-play"></div>
                  <div className="hme-track-info">
                      <div className="hme-track-artist"></div>
                      <a className="hme-track-title" href="/tracks/:id"></a>
                  </div>
                  <div className="hme-track-genre"></div>
              </div>
              <div className="hme-track-wave-box">
                  <div className="hme-track-waveform"></div>
                  <div className="hme-track-duration-passed"></div>
              </div>
              <div className="hme-track-owner-actions">
                  <div className="hme-track-edit"></div>
                  <div className="hme-track-delete"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Player />
    </>
  );
}
