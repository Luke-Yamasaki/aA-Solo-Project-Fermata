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

import "./Discover.css";

export default function Discover () {
    return(
    <div className="hme-wrapper">
        <div className="hme-container">
            <div className="sc-track-box">
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
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="myGradient" className="circle-gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stop-color="yellow" />
                    <stop offset="95%"  stop-color="#C77DFF" />
                    {/* <stop offset="95%" stop-color="pink" /> */}
                </linearGradient>
            </defs>
            <circle cx="5" cy="5" r="4" fill="url('#myGradient')">
                <animate attributeType="hueRotate" values="360" dur="10s" repeatCount="indefinite" />
            </circle>
        </svg>

  </div>
  )
}
