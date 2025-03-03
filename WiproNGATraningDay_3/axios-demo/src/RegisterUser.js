import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(10, 'Minimum 10 characters needed')
    .max(20, 'Maximum 20 characters allowed'),
  password: Yup.string()
    .required('Password is required')
    .min(10, 'Minimum 10 characters needed'),
  gender: Yup.string().required('Gender is required'),
});

const RegisterUser = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <Formik
        initialValues={{
          name: '',
          address: '',
          gender: '',
          email: '',
          password: '',
          slot: '',
          dob: '',
          about: '',
        }}
        validationSchema={UserSchema}
        component={RegisterForm}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
};

export function RegisterForm() {
  return (
    <Form>
      <div>
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name='name' component='div' className='error' />
      </div>

      <div>
        <label>Address</label>
        <Field name="address" type="text" />
      </div>

      <div>
        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component='div' className='error' />
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
        <ErrorMessage name="gender" component='div' className='error' />
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
  );
}

export default RegisterUser;
