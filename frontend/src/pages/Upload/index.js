import "./Upload.css";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="wrapper">
            <div className="form-container">
                <div className="upload-info-container">
                    <div className="txt-btn-container">
                        <h2 className="info-title">0% of free uploads used</h2>
                        <div className="v-btn">v</div>
                    </div>
                    <div className="storage-bar"></div>
                    <p className="storage-info">0 of 180 minutes (0%) used. </p>
                </ div>
                <form className="dragndrop-box" method="post" action="" enctype="multipart/form-data">
                    <div className="dragndrop-input">
                        <input className="dragndrop-files" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                    </div>
                    <label for="file"></label>
                        <button className="upload-btn" type="submit">Upload</button>

                    <div class="uploading-box">Uploading…</div>
                    <div class="success-box">Done!</div>
                    <div class="error-box">Error! <span></span>.</div>
                </form>
                <div className="terms-and-conditions">
                    <p>By uploading to Fermata, you agree to waive all copyrights and register you file as a Creative Commons Zero domain. </p>
                </div>
                {/* <form className="drag-drop-box" method="post" action="" enctype='multipart/form-data'>
                    <div className="upload-input">

                    </div>
                    <h3>Drag and drop your tracks and albums here</h3>
                    <input type="file"></input>
                    <input type="checkbox"></input>
                    <input type="radio"></input>
                </form> */}
            </div>
        </div>
    </>
  );
}
