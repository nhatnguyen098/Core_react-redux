import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import Loading from "../../Atoms/Loading";
// import {Redirect} from 'react-router-dom'
// import Button from "../../Atoms/Button";
import * as Yup from "yup";
import "./style.scss";
interface IFormLogin {
  email: string;
  password: string;
}
interface ILogin {
  handleSubmit: (val: IFormLogin) => void;
  loading: boolean;
}
const Index: React.FC<ILogin> = ({ handleSubmit, loading }) => {
  const owlClass = "p-login";
  const refs = React.useRef<any>(null);
  React.useEffect(() => {
    refs.current.focus();
  }, []);
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  // const handleSubmit = (val: IFormLogin) => {
  //   console.log(val)
  //   return <Redirect to={"/"} />
  // };
  return loading ? (
    <Loading />
  ) : (
    <Container className={owlClass}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group as={Col} md={12} controlId="email">
              <Form.Label className="pr-5 mb-3">Email:</Form.Label>

              <Form.Control
                name="email"
                type="email"
                className="mb-3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
                ref={refs}
              />
              {errors.email && touched.email ? (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} md={12} controlId="password">
              <Form.Label className="pr-5 mb-3">Password:</Form.Label>

              <Form.Control
                name="password"
                type="password"
                className="mb-3"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              {errors.password && touched.password ? (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              ) : null}
            </Form.Group>

            <div className={`text-center`}>
              <Button className={`${owlClass}-btn`} type="submit">
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Index;
