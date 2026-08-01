// import React, { useState } from "react";
// import { Col } from "react-bootstrap";
// import emailjs from "@emailjs/browser";
// import "../../app/styles/Contact.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [touched, setTouched] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });
//   const [dirty, setDirty] = useState({
//     name: false,
//     email: false,
//     message: false,
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);

//   const validateField = (name, value) => {
//     if (name === "name") {
//       return /^[A-Za-z ]{2,}$/g.test(value)
//         ? ""
//         : "(only alphabetical characters allowed; minimum 2 chars)";
//     }
//     if (name === "email") {
//       return /\S+@\S+\.\S+/g.test(value) ? "" : "(please provide email in valid format)";
//     }
//     if (name === "message") {
//       return /^[A-Za-z .,?]{25,}$/g.test(value)
//         ? ""
//         : "(minimum 25 characters; only alphanumeric chars)";
//     }
//     return "";
//   };

//   const validateAll = () => {
//     const nE = {};
//     const nT = {};
//     (Object.keys(formData)).forEach(key => {
//       nT[key] = true;
//       const e = validateField(key, formData[key]);
//       if (e) nE[key] = e;
//     })
//     setErrors(nE);
//     setTouched(nT);
//     return Object.keys(nE).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//     setDirty((d) => ({ ...d, [name]: value }));
//     if (touched[name]) {
//       setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     if (!dirty[name]) return;
//     setTouched((t) => ({ ...t, [name]: true }));
//     setErrors((e) => ({ ...e, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = (e) => {
//     e.persist();
//     e.preventDefault();
//     if (!validateAll()) return;
//     setSubmitted(true);

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_PUBLIC_KEY,
//       )
//       .then(
//         (result) => {
//           setStateMessage("Message sent!");
//           setSubmitted(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         },
//         (error) => {
//           setStateMessage("Something went wrong, please try again later");
//           setSubmitted(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         },
//       );

//     e.target.reset();
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Col size={12} sm={12} className="px-1">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           placeholder="Name"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.name && (!!errors.name && (touched.name || submitted)) && (
//           <div style={{ color: "tomato" }}>{errors.name}</div>
//         )}
//       </Col>
//       <Col size={12} sm={12} className="px-1">
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           placeholder="Email Address"
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.email && (!!errors.email && (touched.email || submitted)) && (
//           <div style={{ color: "tomato" }}>{errors.email}</div>
//         )}
//       </Col>
//       <textarea
//         rows="6"
//         name="message"
//         value={formData.message}
//         placeholder="Message"
//         onChange={handleChange}
//         onBlur={handleBlur}
//       ></textarea>
//       {errors.message && (!!errors.message && (touched.message || submitted)) && (
//         <div style={{ color: "tomato" }}>{errors.message}</div>
//       )}
//       <button
//         type="submit"
//         style={(Object.values(errors).every(e => e === ''))
//             ? { color: "dodgerblue" }
//             : { color: "tomato" }}
//       >{(Object.values(errors).every(e => e === '')) ? "Submit" : "Check for Errors"}</button>

//       {stateMessage && <p>{stateMessage}</p>}
//     </form>
//   );
// };

// export default ContactForm;



// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// import "./ContactForm.css";


// const INITIAL_FORM_STATE = {
//   name: "",
//   email: "",
//   message: "",
// };

// const INITIAL_TOUCH_STATE = {
//   name: false,
//   email: false,
//   message: false,
// };


// const ContactForm = () => {

//   const [formData, setFormData] = useState(INITIAL_FORM_STATE);

//   const [touched, setTouched] = useState(INITIAL_TOUCH_STATE);

//   const [errors, setErrors] = useState({});

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [status, setStatus] = useState({
//     type: "",
//     message: "",
//   });


//   const validateField = (field, value) => {

//     const trimmedValue = value.trim();

//     switch(field){

//       case "name":

//         if (!trimmedValue) {
//           return "Please enter your name.";
//         }

//         if (trimmedValue.length < 2) {
//           return "Name must contain at least 2 characters.";
//         }

//         if (!/^[a-zA-Z\s'-]+$/.test(trimmedValue)) {
//           return "Please enter a valid name.";
//         }

//         return "";


//       case "email":

//         if (!trimmedValue) {
//           return "Please enter your email address.";
//         }

//         if (
//           !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
//         ) {
//           return "Please enter a valid email address.";
//         }

//         return "";


//       case "message":

//         if (!trimmedValue) {
//           return "Please enter a message.";
//         }

//         if (trimmedValue.length < 25) {
//           return "Message should be at least 25 characters.";
//         }

//         return "";


//       default:
//         return "";
//     }
//   };


//   const validateForm = () => {

//     const nextErrors = {};

//     Object.entries(formData).forEach(([field,value]) => {

//       const error = validateField(field,value);

//       if(error){
//         nextErrors[field] = error;
//       }

//     });

//     return nextErrors;
//   };


//   const handleChange = (event) => {

//     const {
//       name,
//       value
//     } = event.target;


//     setFormData(previous => ({
//       ...previous,
//       [name]: value,
//     }));


//     if(touched[name]){

//       setErrors(previous => ({
//         ...previous,
//         [name]: validateField(name,value),
//       }));

//     }
//   };


//   const handleBlur = (event) => {

//     const {
//       name,
//       value
//     } = event.target;


//     setTouched(previous => ({
//       ...previous,
//       [name]: true,
//     }));


//     const error = validateField(name,value);


//     setErrors(previous => ({
//       ...previous,
//       [name]: error,
//     }));

//   };


//   const clearStatus = () => {

//     setTimeout(() => {

//       setStatus({
//         type:"",
//         message:"",
//       });

//     },5000);

//   };


//   const handleSubmit = async (event) => {

//     event.preventDefault();


//     const validationErrors = validateForm();


//     setTouched({
//       name:true,
//       email:true,
//       message:true,
//     });


//     setErrors(validationErrors);


//     if(Object.keys(validationErrors).length > 0){
//       return;
//     }


//     setIsSubmitting(true);


//     try {

//       await emailjs.sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         event.currentTarget,
//         process.env.REACT_APP_PUBLIC_KEY
//       );


//       setStatus({
//         type:"success",
//         message:
//           "Thanks for reaching out! I'll get back to you soon.",
//       });


//       setFormData(INITIAL_FORM_STATE);

//       event.target.reset();


//     } catch(error){

//       setStatus({
//         type:"error",
//         message:
//           "Something went wrong. Please try again.",
//       });


//     } finally {

//       setIsSubmitting(false);

//       clearStatus();

//     }

//   };


//   const renderError = (field) => {

//     if(!touched[field] || !errors[field]){
//       return null;
//     }


//     return (
//       <div
//         className="contact-error"
//         role="alert"
//       >
//         {errors[field]}
//       </div>
//     );

//   };


//   return (

//     <div className="contact-form-card">

//       <form
//         className="contact-form"
//         onSubmit={handleSubmit}
//         noValidate
//       >


//         <div className="contact-field">

//           <label htmlFor="name">
//             Name
//           </label>

//           <input
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Your name"
//             value={formData.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             aria-invalid={Boolean(errors.name)}
//           />

//           {renderError("name")}

//         </div>



//         <div className="contact-field">

//           <label htmlFor="email">
//             Email
//           </label>

//           <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="you@example.com"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             aria-invalid={Boolean(errors.email)}
//           />

//           {renderError("email")}

//         </div>



//         <div className="contact-field">

//           <label htmlFor="message">
//             Message
//           </label>

//           <textarea
//             id="message"
//             rows="7"
//             name="message"
//             placeholder="Tell me about your project..."
//             value={formData.message}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             aria-invalid={Boolean(errors.message)}
//           />

//           {renderError("message")}

//         </div>



//         <button
//           className="contact-submit"
//           type="submit"
//           disabled={isSubmitting}
//         >

//           {
//             isSubmitting
//               ? "Sending..."
//               : "Send Message"
//           }

//         </button>



//         {
//           status.message && (

//             <div
//               className={`contact-status ${status.type}`}
//               role="status"
//             >
//               {status.message}
//             </div>

//           )
//         }


//       </form>

//     </div>

//   );

// };


// export default ContactForm;


import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";


const INITIAL_FORM_STATE = {
  name:"",
  email:"",
  message:"",
};


const INITIAL_TOUCH_STATE = {
  name:false,
  email:false,
  message:false,
};


const ContactForm = () => {

  const [formData,setFormData] = useState(INITIAL_FORM_STATE);

  const [touched,setTouched] = useState(INITIAL_TOUCH_STATE);

  const [errors,setErrors] = useState({});

  const [isSubmitting,setIsSubmitting] = useState(false);

  const [status,setStatus] = useState({
    type:"",
    message:"",
  });



  const validateField = (field,value)=>{

    const trimmed=value.trim();


    switch(field){

      case "name":

        if(!trimmed)
          return "Please enter your name.";

        if(trimmed.length < 2)
          return "Name must contain at least 2 characters.";

        return "";


      case "email":

        if(!trimmed)
          return "Please enter your email.";

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
          return "Please enter a valid email.";

        return "";


      case "message":

        if(!trimmed)
          return "Please enter a message.";

        if(trimmed.length < 25)
          return "Message should be at least 25 characters.";

        return "";


      default:

        return "";

    }

  };



  const handleChange=(event)=>{

    const {
      name,
      value
    } = event.target;


    setFormData(prev=>({
      ...prev,
      [name]:value
    }));


    if(touched[name]){

      setErrors(prev=>({
        ...prev,
        [name]:validateField(name,value)
      }));

    }

  };



  const handleBlur=(event)=>{

    const {
      name,
      value
    }=event.target;


    setTouched(prev=>({
      ...prev,
      [name]:true
    }));


    setErrors(prev=>({
      ...prev,
      [name]:validateField(name,value)
    }));

  };



  const handleSubmit=async(event)=>{

    event.preventDefault();


    const validationErrors={};


    Object.entries(formData).forEach(([field,value])=>{

      const error=validateField(field,value);

      if(error)
        validationErrors[field]=error;

    });


    setTouched({
      name:true,
      email:true,
      message:true
    });


    setErrors(validationErrors);


    if(Object.keys(validationErrors).length)
      return;


    setIsSubmitting(true);


    try{

      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.currentTarget,
        process.env.REACT_APP_PUBLIC_KEY
      );


      setStatus({
        type:"success",
        message:"Thanks for reaching out! I'll get back to you soon."
      });


      setFormData(INITIAL_FORM_STATE);

      event.target.reset();


    }
    catch(error){

      setStatus({
        type:"error",
        message:"Something went wrong. Please try again."
      });

    }
    finally{

      setIsSubmitting(false);

    }

  };



  const renderError=(field)=>{

    if(!touched[field] || !errors[field])
      return null;


    return (
      <div className="contact-error">
        {errors[field]}
      </div>
    );

  };



  return (

    <form
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >


      <div className="contact-field">

        <label htmlFor="name">
          Name
        </label>


        <input
          id="name"
          name="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
          onBlur={handleBlur}
        />


        {renderError("name")}

      </div>



      <div className="contact-field">

        <label htmlFor="email">
          Email
        </label>


        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="you@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
        />


        {renderError("email")}

      </div>



      <div className="contact-field">

        <label htmlFor="message">
          Message
        </label>


        <textarea
          id="message"
          name="message"
          rows="7"
          value={formData.message}
          placeholder="Tell me about your project..."
          onChange={handleChange}
          onBlur={handleBlur}
        />


        {renderError("message")}

      </div>



      <button
        className="contact-submit"
        disabled={isSubmitting}
      >

        {isSubmitting ? "Sending..." : "Send Message"}

      </button>



      {
        status.message &&
        <div className={`contact-status ${status.type}`}>
          {status.message}
        </div>
      }


    </form>

  );

};


export default ContactForm;