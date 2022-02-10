// import "./Upload.css";
// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
// const { setTokenCookie, requireAuth } = require('../../utils/auth');
// const { User } = require('../../db/models');
// const { singleMulterUpload, singlePublicFileUpload, multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");

// const router = express.Router();

// const validateUpload = [

//     handleValidationErrors
// ];

// router.post(
//   "/",
//   singleMulterUpload("music"),
//   validateSignup,
//   asyncHandler(async (req, res) => {
//     const { email, password, username } = req.body;
//     const profileImageUrl = await singlePublicFileUpload(req.file);
//     const user = await User.signup({
//       username,
//       email,
//       password,
//       profileImageUrl,
//     });

//     setTokenCookie(res, user);

//     return res.json({
//       user,
//     });
//   })
// );

// router.put(
//   "/:id",
//   singleMulterUpload("image"),
//   asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const profileImageUrl = await singlePublicFileUpload(req.file);
//     await User.update({ profileImageUrl }, { where: { id } });

//     res.json({ profileImageUrl });
//   })
// );

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const users = await User.findAll();

//     res.json(users);
//   })
// );

// module.exports = router;

// export default function Home() {
//   return (
//     <>
//         <div className="wrapper">
//             <div className="form-container">
//                 <div className="upload-info-container">
//                     <div className="txt-btn-container">
//                         <h2 className="info-title">0% of free uploads used</h2>
//                         <div className="v-btn">v</div>
//                     </div>
//                     <div className="storage-bar"></div>
//                     <p className="storage-info">0 of 180 minutes (0%) used. </p>
//                 </ div>
//                 <form className="dragndrop-box" method="post" action="" encType="multipart/form-data">
//                     <div className="dragndrop-input">
//                         hi
//                         <input className="dragndrop-files" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
//                     </div>
//                     <label for="file"></label>
//                         <button className="upload-btn" type="submit">Upload</button>

//                     {/* <div class="uploading-box">Uploading…</div>
//                     <div class="success-box">Done!</div>
//                     <div class="error-box">Error! <span></span>.</div> */}
//                 </form>
//                 <div className="terms-and-conditions">
//                     <p>By uploading to Fermata, you agree to waive all copyrights and register you file in the Creative Commons Zero domain. </p>
//                 </div>
//                 {/* <form className="drag-drop-box" method="post" action="" enctype='multipart/form-data'>
//                     <div className="upload-input">

//                     </div>
//                     <h3>Drag and drop your tracks and albums here</h3>
//                     <input type="file"></input>
//                     <input type="checkbox"></input>
//                     <input type="radio"></input>
//                 </form> */}
//             </div>
//         </div>
//     </>
//   );
// }
