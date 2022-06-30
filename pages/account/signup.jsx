import React from "react";
import styles from "./signup.module.scss";
import Image from "next/image";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import Select from "react-select";

function signup() {
  const [imgData, setImgData] = useState(null);
  const [imgShow, setImgShow] = useState(null);
  const [imgBtn, setImgBtn] = useState(true);
  const [imgName, setImgName] = useState("default.jpg");

  // const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Job Seeker", label: "Job Seeker" },
    { value: "Recruiter", label: "Recruiter" },
  ];

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    type: "",
    email: "",
    password: "",
    profileImage: "",
  });

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  const onImageChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const image = await resizeFile(file);
      const newFile = dataURIToBlob(image);
      setImgShow(image);
      setImgData(newFile);
      //localStorage.setItem("userDp",  image);
      setImgBtn(false);
    }
  };

  const imageUpload = async () => {
    const formData = new FormData();
    formData.append("profile", imgData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const res = await fetch("http://127.0.0.1:5300/account/uploaddp", {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      body: formData,
    });
    setImgName(res.data.fileName);
    setUserInfo({ ...inputs, profileImage: imgName });
  };

  const changeHandle = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const createData = async () => {
    const response = await fetch("http://127.0.0.1:5300/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <h2>Registration</h2>
          <form action="#">
            <div className={styles.inputbox}>
              <input
                type="text"
                placeholder="Enter first name"
                required
                name="firstName"
                onChange={changeHandle}
              />
            </div>
            <div className={styles.inputbox}>
              <input
                type="text"
                placeholder="Enter last name"
                required
                name="lastName"
                onChange={changeHandle}
              />
            </div>
            <div className={styles.inputbox}>
              <input
                type="text"
                placeholder="Enter your email"
                required
                name="email"
                onChange={changeHandle}
              />
            </div>
            <div className={styles.inputbox}>
              <input
                type="password"
                placeholder="Create password"
                required
                name="password"
                onChange={changeHandle}
              />
            </div>
            <div className={styles.inputbox}>
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className={styles.policy}>
              <input type="checkbox" />
              <h3>I accept all terms & condition</h3>
            </div>
            <div className={`${styles.inputbox} ${styles.button}`}>
              <input type="Submit" value="Register Now" onClick={(e)=>{e.preventDefault;
                 console.log(userInfo);
                 createData();}}/>
            </div>
            {/* <div className={styles.text}>
              <h3>
                Already have an account? <a href="#">Login now</a>
              </h3>
            </div> */}
          </form>
        </div>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            {imgBtn ? (
              <Image
                src="/assets/homeicons/jobseeker/Vector.png"
                height="136px"
                width="136px"
              />
            ) : (
              <Image
                src={imgShow}
                className="shadow"
                alt="Logo"
                height="136px"
                width="136px"
              />
            )}
          </div>
          <div className={styles.uploadContainer}>
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              required
            />
            <button
              className={styles.uploadButton}
              type="button"
              onClick={imageUpload}
            >
              Upload
            </button>
            <h3>Select Category</h3>
            <Select
              onChange={(e) => {
                userInfo.type = e.value;
              }}
              options={options}
              name="type"
              
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default signup;
