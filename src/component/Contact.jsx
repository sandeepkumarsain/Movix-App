import React from "react";
import { Formik } from "formik";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwtBk-xsCsu8yEeHEKN8z0tHWHdoXtEqQ",
  authDomain: "formik-c355c.firebaseapp.com",
  projectId: "formik-c355c",
  storageBucket: "formik-c355c.appspot.com",
  messagingSenderId: "799683424080",
  appId: "1:799683424080:web:81df3e07ecd95aac1b0655",
  databaseURL: "https://formik-c355c-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

const writeUserData = async (firstName, lastName, email, phone, message) => {
  try {
    // Add a new document in the "users" collection
    await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
      phone,
      message,
      createdAt: new Date(), // Optionally, add a timestamp
    });
    console.log("Document written successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

function Contact() {
  return (
    <div className="form-name">
      <h1 className="log">Please login here!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.phone) {
            errors.phone = "Required";
          } else if (!/^\d{10}$/.test(values.phone)) {
            errors.phone = "Invalid phone number, must be 10 digits";
          }
          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // Store the data in Firestore
            await writeUserData(
              values.firstName,
              values.lastName,
              values.email,
              values.phone,
              values.message
            );

            // Display the form values directly after submission
            alert(JSON.stringify(values, null, 2));
          } catch (error) {
            console.error("Submission failed: ", error);
            alert("Error submitting data, please try again.");
          }

          // Mark form submission as complete
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && <div>{errors.phone}</div>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && <div>{errors.message}</div>}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
