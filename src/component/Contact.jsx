import React from "react";
import { Formik } from "formik";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
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
const database = getDatabase(app);

// Function to write user data to Firebase
const writeUserData = (firstName, lastName, email, phoneNumber, message) => {
  set(ref(database, "users/" + email.replace(".", "_")), {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });
};

const Contact = () => (
  <div>
    <h1>Submit your details!</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "First name is required";
        }
        if (!values.lastName) {
          errors.lastName = "Last name is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Phone number is required";
        } else if (!/^\d{10}$/.test(values.phoneNumber)) {
          errors.phoneNumber = "Phone number must be 10 digits";
        }
        if (!values.message) {
          errors.message = "Message is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Store the data in Firebase
        writeUserData(
          values.firstName,
          values.lastName,
          values.email,
          values.phoneNumber,
          values.message
        );

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
          </label>
          {errors.firstName && touched.firstName && errors.firstName}

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
          </label>
          {errors.lastName && touched.lastName && errors.lastName}

          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </label>
          {errors.email && touched.email && errors.email}

          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
          </label>
          {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}

          <label>
            Message:
            <textarea
              name="message"
              placeholder="Your message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </label>
          {errors.message && touched.message && errors.message}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Contact;
