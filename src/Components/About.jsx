/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/BG2.avif";

const imageAltText = "Background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am an Android developer and web developer with a strong passion for building innovative and user-friendly applications. My technical skills span across multiple programming languages and frameworks, allowing me to create seamless experiences on both mobile and web platforms. I am always eager to learn and grow, and I thrive in collaborative environments where I can work alongside experienced professionals to solve complex challenges and deliver high-quality solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Android Development",
  "Video Editing",
  "Photo Editing",
  "Android Studio",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a passionate learner and dedicated Android and web developer, always seeking new opportunities to expand my knowledge and skills. I thrive in collaborative environments and am eager to work with experienced professionals to grow and contribute effectively.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{
          color: '#000'
        }}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
