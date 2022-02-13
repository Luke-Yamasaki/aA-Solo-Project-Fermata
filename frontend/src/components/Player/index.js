import "./Player.css"

export function Player ({ track }) {
    const wave = track;
    const duration = track;
    const artist = track;
    const title = track;
    const image = track;

    return (
        <div className="plyr-container">
            <button className="plyr-play-btn"></button>
            <button className="plyr-stop-btn"></button>
            <div className="plyr-playback-info">
                <div className="plyr-current-duration">Remaining</div>
                <div className="plyr-progress-bar">Progress bar</div>
                <div className="plyr-total-duration">Duration</div>
            </div>
            <div className='plyr-slider-container'>Slider
                <input type="range" min="0" max='100' value='50' className='plyr-volume-slider'></input>
            </div>
            <div className="plyr-track-box">
                <div className='plyr-track-image'></div>
                <div className="plyr-track-info">
                    <a className='plyr-track-artist' href="/users/:id"></a>
                    <a className="plyr-track-title" href="/tracks/:id"></a>
                </div>
            </div>
        </div>
    )
}
