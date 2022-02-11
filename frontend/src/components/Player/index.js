import "./Player.css"

export function Player () {
    return (
        <div className="">
            <button></button>
            <button></button>
            <div>
                <div>Remaining</div>
                <div>Progress bar</div>
                <div>Duration</div>
            </div>
            <div className='plyr-slider-container'>Slider
                <input type="range" min="0" max='100' value='50' className='plyr-volume-slider'></input>
            </div>
            <div className="plyr-track-box">
                <img className='plyr-track-image'></img>
                <div className="plyr-track-info">
                    <a className='plyr-track-artist' href="/users/:id"></a>
                    <a className="plyr-track-title" href="/tracks/:id"></a>
                </div>
            </div>
        </div>
    )
}
