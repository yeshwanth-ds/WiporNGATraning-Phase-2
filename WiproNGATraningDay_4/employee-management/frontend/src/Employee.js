// Employee.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Employee = ({ refreshEmployees }) => {
    const initialValues = {
        name: "",
        address: "",
        dept: "",
        manager: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        address: Yup.string().required("Address is required"),
        dept: Yup.string().required("Department is required"),
        manager: Yup.string().required("Manager is required")
    });

    const onSubmit = async (values, { resetForm }) => {
        try {
            await axios.post("http://localhost:5000/employees", values);
            refreshEmployees();  // Refresh employee list after adding
            resetForm();
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <label htmlFor="address">Address: </label>
                            <Field type="text" id="address" name="address" />
                            <ErrorMessage name="address" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <label htmlFor="dept">Department: </label>
                            <Field type="text" id="dept" name="dept" />
                            <ErrorMessage name="dept" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <label htmlFor="manager">Manager: </label>
                            <Field type="text" id="manager" name="manager" />
                            <ErrorMessage name="manager" component="div" style={{ color: "red" }} />
                        </div>
                        <button type="submit">Add Employee</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Employee;
