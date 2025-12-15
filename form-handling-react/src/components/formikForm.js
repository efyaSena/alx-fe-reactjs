import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const FormikForm = () => {

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {errors.name && touched.name && <div>{errors.name}</div>}

          <Field name="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
