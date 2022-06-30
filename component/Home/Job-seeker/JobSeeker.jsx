import React from "react";
import styles from "./jobSeeker.module.scss";
import Image from "next/image";

const JobSeeker = () => {
  return (
    <div className={styles.uploadResume}>
      <div className={styles.headind}>
        <h2>Upload Resume</h2>
      </div>
      <div className={styles.content}>
        <div>
          <p>Create Account</p>
          <div>
            <Image src='/assets/homeicons/jobseeker/undraw_Join_re_w1lh.png' height='56px' width='56px' />
           </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <p>Upload Details</p>
          <div>
          <Image src='/assets/homeicons/jobseeker/undraw_Online_test_re_kyfx.png' height='56px' width='56px' />
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <p>Get your dream Job</p>
          <div>
          <Image src='/assets/homeicons/jobseeker/undraw_learning_sketching_nd4f.png' height='56px' width='56px' />
          </div>
        </div>
      </div>
      <div className={styles.button}></div>
    </div>
  );
};

export default JobSeeker;

{
  /* <p className={styles.sectionHeading}>For Job Seekers</p>
      <div className={styles.flexWrapperOne}>
        <div className={styles.flexWrapperTwo}>
          <p className={styles.getAJobYouWantIn3SimpleSteps}>
            Get a job you want in 3 Simple Steps
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi repellendus laudantium exercitationem dolorem repudiandae debitis cumque aperiam suscipit, officia fugit dolor neque perferendis sunt? Quidem, sunt sequi fugiat dolorem iure blanditiis ut commodi. Voluptate maxime asperiores doloremque sequi nemo ad, sapiente sunt, tempore adipisci unde natus odio dicta quas similique hic incidunt molestias. Voluptate libero facere dolor consequatur ipsa a atque nemo blanditiis maiores. Consectetur accusamus eos, nobis ex eaque reiciendis a nihil similique tempore doloribus dolore quo vel voluptatum nostrum odio aliquam sapiente voluptatibus in provident, temporibus blanditiis harum et est fugiat. Facilis necessitatibus, tempore, iste, nam alias nobis repellendus pariatur dolorum odit unde sapiente nulla earum dolore. Dolorum tempora vitae voluptatem ex quis obcaecati tenetur, provident eveniet libero optio sunt laborum omnis architecto nemo aliquid placeat cum iste sint perferendis recusandae odio natus! Enim consequuntur, molestiae vitae vero ducimus velit veniam at veritatis omnis animi aliquid voluptatem reiciendis repudiandae, repellendus corporis alias culpa aspernatur nesciunt ratione, laboriosam mollitia id accusantium cupiditate consectetur. Dolores sapiente error nemo, placeat cum nulla dolore id autem at minima veritatis, eveniet, sed harum aliquam vitae suscipit quisquam? Quibusdam voluptate quaerat possimus aliquid soluta iste atque nostrum aut eaque delectus eius eveniet ratione quidem quae, ut architecto enim asperiores consectetur unde minus molestias perspiciatis pariatur? Enim aliquid est labore. Inventore a expedita necessitatibus, illum, quaerat itaque ex sint, esse provident ipsum labore quia cumque rem sequi fugit voluptate maiores blanditiis ullam aliquid perferendis unde officiis laudantium. Fugiat ducimus voluptas temporibus maiores laborum commodi facere reprehenderit dolorum eligendi eveniet nostrum, numquam nulla eum neque placeat architecto? At itaque sapiente dicta ab laborum? Similique vitae illo eos ducimus, suscipit, tenetur recusandae consequatur quis eum voluptate expedita dolorem iure minima accusamus explicabo alias molestiae esse atque inventore error cupiditate sapiente ipsa sed eaque? Magnam, eos quisquam!
          </p>
          <div className={styles.jobSeekerRegister}>
            <img
              alt=""
              className={styles.bxupload}
              src="https://static.overlay-tech.com/assets/6da4d876-5a14-46c2-8e0e-0c6dae07a307.svg"
            />
            <div className={styles.relativeWrapperOne}>
              <div className={styles.frame28} />
              <p className={styles.register}>Register</p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapperThree}>
          <p className={styles.num1CreateAccount}>1.CREATE ACCOUNT</p>
          <img
            alt=""
            className={styles.image3}
            src="https://static.overlay-tech.com/assets/d10b14dc-f2ea-4f88-a639-3138ac53b6a8.png"
          />
          <p className={styles.num2UploadDetails}>2.UPLOAD DETAILS</p>
          <img
            alt=""
            className={styles.image4}
            src="https://static.overlay-tech.com/assets/49a89ab2-7382-488f-859b-ec63f80755fd.png"
          />
          <p className={styles.num3GetYourDreamJob}>3.GET YOUR DREAM JOB</p>
        </div>
      </div> */
}
