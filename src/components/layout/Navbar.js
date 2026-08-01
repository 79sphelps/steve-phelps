// import React, { useState, useEffect } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// // import { ImBlog } from "react-icons/im";
// import { AiFillStar } from "react-icons/ai";
// import {
//   NAV_LINKS_ARY,
//   ICON_BREAKPOINT_WIDTH,
//   PROFESSIONAL_TITLE,
//   GITHUB_URL,
// } from "../../lib/navbar-data";
// import MY_IMG from "../../assets/my_photo-min.jpg";

// const NavBar = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   const scrollHandler = () => {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", scrollHandler);

//   const useWindowSize = () => {
//     const [windowSize, setWindowSize] = useState({
//       width: undefined,
//       height: undefined,
//     });

//     useEffect(() => {
//       // only execute all the code below in client side
//       if (typeof window !== "undefined") {
//         const handleResize = () => {
//           setWindowSize({
//             width: window.innerWidth,
//             height: window.innerHeight,
//           });
//         };
//         window.addEventListener("resize", handleResize);
//         handleResize();
//         return () => window.removeEventListener("resize", handleResize);
//       }
//     }, []);
//     return windowSize;
//   };

//   const size = useWindowSize();

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand
//           href="/"
//           className="logo-text d-flex"
//           style={{ marginBottom: "2px" }}
//         >
//           <img src={MY_IMG} className="img-fluid logo" alt="brand" />
//           {PROFESSIONAL_TITLE}
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => updateExpanded(expand ? false : "expanded")}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             {NAV_LINKS_ARY.map((item, idx) => (
//               <Nav.Item key={idx}>
//                 <Nav.Link
//                   as={Link}
//                   to={item.to}
//                   onClick={() => updateExpanded(false)}
//                   className="navbar-item-text"
//                 >
//                   <div className="flex flex-row items-center">
//                     {size.width > ICON_BREAKPOINT_WIDTH ? item.icon : null}{" "}
//                     {item.text}
//                   </div>
//                 </Nav.Link>
//               </Nav.Item>
//             ))}
//             <Nav.Item className="fork-btn">
//               <Button
//                 href={GITHUB_URL}
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <div className="flex flex-row items-center">
//                   {size.width > ICON_BREAKPOINT_WIDTH ? (
//                     <CgGitFork
//                       style={{ fontSize: "1.2em", marginRight: "5px" }}
//                     />
//                   ) : null}
//                   <AiFillStar style={{ fontSize: "1.1em" }} />
//                 </div>
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;




// import React, { useEffect, useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

// import { CgGitFork } from "react-icons/cg";
// import { AiFillStar } from "react-icons/ai";

// import {
//   NAV_LINKS_ARY,
//   ICON_BREAKPOINT_WIDTH,
//   PROFESSIONAL_TITLE,
//   GITHUB_URL,
// } from "../../lib/navbar-data";

// import MY_IMG from "../../assets/my_photo-min.jpg";

// import "./Navbar.css";

// const NavBar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("scroll", handleScroll);

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);

//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Navbar
//       expanded={expanded}
//       fixed="top"
//       expand="lg"
//       className={scrolled ? "premium-navbar scrolled" : "premium-navbar"}
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="navbar-brand-wrapper">
//           <img src={MY_IMG} className="navbar-avatar" alt="Steve Phelps" />

//           <span>{PROFESSIONAL_TITLE}</span>
//         </Navbar.Brand>

//         <Navbar.Toggle
//           aria-controls="navbar-nav"
//           onClick={() => setExpanded(expanded ? false : true)}
//           className="premium-toggler"
//         >
//           <span />
//           <span />
//           <span />
//         </Navbar.Toggle>

//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto align-items-lg-center">
//             {NAV_LINKS_ARY.map((item, index) => (
//               <Nav.Item key={index}>
//                 <Nav.Link
//                   as={Link}
//                   to={item.to}
//                   onClick={() => setExpanded(false)}
//                   className="premium-nav-link"
//                 >
//                   <div className="nav-link-content">
//                     {width > ICON_BREAKPOINT_WIDTH && item.icon}

//                     <span>{item.text}</span>
//                   </div>
//                 </Nav.Link>
//               </Nav.Item>
//             ))}

//             <Nav.Item className="fork-btn">
//               <Button
//                 href={GITHUB_URL}
//                 target="_blank"
//                 className="github-button"
//               >
//                 <CgGitFork />

//                 <AiFillStar />
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

import React, {
  useEffect,
  useState,
} from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import {
  CgGitFork,
} from "react-icons/cg";

import {
  AiFillStar,
} from "react-icons/ai";


import {
  NAV_LINKS_ARY,
  ICON_BREAKPOINT_WIDTH,
  PROFESSIONAL_TITLE,
  GITHUB_URL,
} from "../../lib/navbar-data";


import MY_IMG from "../../assets/my_photo-min.jpg";


import "./Navbar.css";



const NavBar = () => {


  const [
    expanded,
    setExpanded,
  ] = useState(false);



  const [
    scrolled,
    setScrolled,
  ] = useState(false);



  const [
    hidden,
    setHidden,
  ] = useState(false);



  const [
    width,
    setWidth,
  ] = useState(
    window.innerWidth
  );




  useEffect(() => {


    let lastScrollY =
      window.scrollY;



    let ticking = false;




    const handleScroll = () => {


      if (!ticking) {


        window.requestAnimationFrame(() => {


          const currentScrollY =
            window.scrollY;



          setScrolled(
            currentScrollY > 20
          );



          /*
            Hide navbar while scrolling down.
            Keep visible when scrolling up.
          */

          if (
            currentScrollY >
            lastScrollY &&
            currentScrollY > 120 &&
            !expanded
          ) {

            setHidden(true);

          }
          else {

            setHidden(false);

          }




          /*
            Reset when back at top.
          */

          if(currentScrollY < 20){

            setHidden(false);

          }




          lastScrollY =
            currentScrollY;


          ticking = false;


        });


        ticking = true;

      }

    };




    const handleResize = () => {


      setWidth(
        window.innerWidth
      );


    };




    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive:true,
      }
    );



    window.addEventListener(
      "resize",
      handleResize
    );




    return () => {


      window.removeEventListener(
        "scroll",
        handleScroll
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


    };


  },[
    expanded
  ]);






  const handleNavClick = () => {


    setExpanded(false);


    setHidden(false);


  };






  return (


    <Navbar

      expanded={expanded}

      fixed="top"

      expand="lg"


      className={`
        premium-navbar
        ${scrolled ? "scrolled" : ""}
        ${hidden ? "hidden" : ""}
      `}


    >



      <Container>



        <Navbar.Brand

          as={Link}

          to="/"

          onClick={handleNavClick}

          className="navbar-brand-wrapper"

        >


          <img

            src={MY_IMG}

            className="navbar-avatar"

            alt="Steve Phelps"

          />



          <span>

            {PROFESSIONAL_TITLE}

          </span>


        </Navbar.Brand>





        <Navbar.Toggle

          aria-controls="navbar-nav"

          className="premium-toggler"


          onClick={() =>
            setExpanded(
              !expanded
            )
          }


        >


          <span />

          <span />

          <span />


        </Navbar.Toggle>






        <Navbar.Collapse

          id="navbar-nav"

        >



          <Nav

            className="
              ms-auto
              align-items-lg-center
            "

          >



            {
              NAV_LINKS_ARY.map(
                (item,index)=>(


                <Nav.Item

                  key={index}

                >


                  <Nav.Link


                    as={Link}


                    to={item.to}


                    onClick={
                      handleNavClick
                    }


                    className="
                      premium-nav-link
                    "


                  >


                    <div

                      className="
                        nav-link-content
                      "

                    >


                      {
                        width >
                        ICON_BREAKPOINT_WIDTH &&
                        item.icon
                      }



                      <span>

                        {item.text}

                      </span>



                    </div>


                  </Nav.Link>



                </Nav.Item>


              ))
            }





            <Nav.Item

              className="fork-btn"

            >



              <Button


                href={GITHUB_URL}


                target="_blank"


                rel="noopener noreferrer"


                className="
                  github-button
                "


              >



                <CgGitFork />

                <AiFillStar />



              </Button>



            </Nav.Item>




          </Nav>




        </Navbar.Collapse>





      </Container>



    </Navbar>



  );


};



export default NavBar;