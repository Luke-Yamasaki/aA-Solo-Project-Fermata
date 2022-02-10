export default function Albums () {
    return(
    <div>
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
            {/* <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                    <stop offset="5%"  stop-color="#C77DFF" />
                    <stop offset="95%" stop-color="#753ADB" />
                </linearGradient>
            </defs>
            <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
        </svg> */}
        </svg>
  </div>
  )
}
