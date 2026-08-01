// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   // AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import {
//   HOME_PROFILE_SNAPSHOT_TEXT,
//   HOME_SOCIALS_ARY,
//   HOME_SOCIALS_TEXT,
//   HOME_CONNECT_WITH_ME_TEXT,
// } from "../../lib/home-profile-data";
// import MY_IMG from "../../assets/my_photo-min.jpg";

// const SOCIALS = {
//   github: <AiFillGithub className='home-social-icon-component' />,
//   linkedin: <FaLinkedinIn className='home-social-icon-component' />,
//   instagram: <AiFillInstagram className='home-social-icon-component' />,
// };

// const HomeSnapshot = () => {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row
//           style={{
//             margin: "2%",
//             border: "1px solid #3146ff",
//             borderRadius: "20px",
//             boxShadow: "5px 5px 5px #3146ff",
//           }}
//         >
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               <span className="blue">Quick Snapshot</span>
//             </h1>
//             <p className="home-about-body">
//               {HOME_PROFILE_SNAPSHOT_TEXT}
//               <br />
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img
//                 src={MY_IMG}
//                 className="img-fluid"
//                 style={{ borderRadius: "12px", width: "200px" }}
//                 alt="avatar"
//               />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>{HOME_SOCIALS_TEXT}</h1>
//             <p>{HOME_CONNECT_WITH_ME_TEXT}</p>
//             <ul className="home-about-social-links">
//               {HOME_SOCIALS_ARY.map((item, idx) => (
//                 <li className="social-icons" key={idx}>
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="icon-colour home-social-icons"
//                   >
//                     <div className="flex flex-row justify-center items-center">
//                       {SOCIALS[item.icon]}
//                     </div>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default HomeSnapshot;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import {
  HOME_PROFILE_SNAPSHOT_TEXT,
  HOME_SOCIALS_ARY,
  HOME_SOCIALS_TEXT,
  HOME_CONNECT_WITH_ME_TEXT,
} from "../../lib/home-profile-data";

import MY_IMG from "../../assets/my_photo-min.jpg";

import "./HomeSnapshot.css";

const SOCIALS = {
  github: <AiFillGithub />,
  linkedin: <FaLinkedinIn />,
  instagram: <AiFillInstagram />,
};

const HomeSnapshot = () => {
  return (
    <Container fluid className="home-snapshot-section">
      <Container>
        <Row className="snapshot-card">
          {/* CONTENT */}

          <Col md={8} className="snapshot-content">
            <h1 className="snapshot-heading">
              <span>Snapshot</span>
            </h1>

            <p className="snapshot-description">{HOME_PROFILE_SNAPSHOT_TEXT}</p>
          </Col>

          {/* IMAGE */}

          <Col md={4} className="snapshot-avatar-wrapper">
            <Tilt>
              <div className="snapshot-avatar-card">
                <img
                  src={MY_IMG}
                  className="snapshot-avatar"
                  alt="Steve Phelps"
                />
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* SOCIAL */}

        {/* <Row>
          <Col md={12} className="snapshot-social">
            <h2>{HOME_SOCIALS_TEXT}</h2>

            <p>{HOME_CONNECT_WITH_ME_TEXT}</p>

            <ul className="snapshot-social-links">
              {HOME_SOCIALS_ARY.map((item, idx) => (
                <li key={idx} className="snapshot-social-item">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {SOCIALS[item.icon]}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
};

export default HomeSnapshot;
