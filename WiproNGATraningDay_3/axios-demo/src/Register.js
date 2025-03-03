import React from 'react';
import { Formik, Form, Field } from 'formik';

const Register = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <Formik 
        initialValues={{
          name: "",
          address: "",
          gender: "",
          email: "",
          password: "",
          slot: "",
          dob: "",
          about: ""
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text" /> 
          </div>

          <div>
            <label>Address</label>
            <Field name="address" type="text" /> 
          </div>

          <div>
            <label>Password</label>
            <Field name="password" type="password" /> 
          </div>

          <div>
            <label>Date of Birth</label>
            <Field name="dob" type="date" /> 
          </div>

          <div>
            <label>About Yourself</label>
            <Field name="about" as="textarea" /> 
          </div>

          <div>
            <label>Gender</label>
            <label>
              <Field name="gender" type="radio" value="male" /> Male
            </label>
            <label>
              <Field name="gender" type="radio" value="female" /> Female
            </label>
          </div>

          <div>
            <label>Select Slot</label>
            <Field name="slot" as="select"> 
              <option value="11-1">11-1</option>
              <option value="1-4">1-4</option>
            </Field> 
          </div>

          <button type='submit'>Register</button>
        </Form>    
      </Formik>
    </div>
  );
};

export default Register;
