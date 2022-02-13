import "./Discover.css";

export default function Discover () {
    return(
    <div className="dsc-wrapper">
        <div className="dsc-container">
            <div className="dsc-track-box">
                <div className="dsc-track-image"></div>
                <div className="dsc-track-content">
                    <div className="dsc-track-play-info">
                        <div className="dsc-track-play"></div>
                        <div className="dsc-track-info">
                            <div className="dsc-track-artist"></div>
                            <a className="dsc-track-title" href="/tracks/:id"></a>
                        </div>
                        <div className="dsc-track-genre"></div>
                    </div>
                    <div className="dsc-track-wave-box">
                        <div className="dsc-track-waveform"></div>
                        <div className="dsc-track-duration-passed"></div>
                    </div>
                    <div className="dsc-track-owner-actions">
                        <div className="dsc-track-edit"></div>
                        <div className="dsc-track-delete"></div>
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
