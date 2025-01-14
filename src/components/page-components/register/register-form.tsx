import { useFormik } from "formik";
import * as Yup from "yup";
import { Logo } from "../../logo";
import React from "react";

type RegisterFormProps = {
  onRegister: (
      values: {
        firstname: string;
        lastname: string;
        username: string;
        email: string;
        password: string;
      },
      callBackFunc: (msg: string) => void
  ) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("First Name is required!"),
      lastname: Yup.string().required("Last Name is required!"),
      username: Yup.string().required("Username is required!"),
      email: Yup.string().email("Invalid email!").required("Email is required!"),
      password: Yup.string().min(6, "Password must be at least 6 characters!").required("Password is required!"),
      confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match!")
          .required("Confirm Password is required!"),
      agreeToTerms: Yup.boolean().oneOf([true], "You must agree to the terms!"),
    }),
    onSubmit: (values) => {
      const { firstname, lastname, username, email, password } = values;
      onRegister({ firstname, lastname, username, email, password }, (msg) => alert(msg));
    },
  });

  return (
      <form
          onSubmit={formik.handleSubmit}
          className="shadow-lg bg-white dark:bg-darkBackground rounded-lg px-8 py-10 w-full max-w-lg mx-auto"
      >
        {/*<div className="mb-6 text-center">*/}
        {/*  <Logo />*/}
        {/*</div>*/}

        <p className="text-sm text-center text-gray-600 mb-6">Create your account</p>

        {/* First Name */}
        <div className="mb-4">
          <input
              type="text"
              id="firstname"
              placeholder="First Name"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-3 block w-full rounded-md border ${
                  formik.touched.firstname && formik.errors.firstname ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.firstname && formik.errors.firstname && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.firstname}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-3 block w-full rounded-md border ${
                  formik.touched.lastname && formik.errors.lastname ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.lastname && formik.errors.lastname && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.lastname}</p>
          )}
        </div>

        {/* Username */}
        <div className="mb-4">
          <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-3 block w-full rounded-md border ${
                  formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.username && formik.errors.username && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-3 block w-full rounded-md border ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-3 block w-full rounded-md border ${
                  formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full p-3 rounded-md border ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.confirmPassword}</p>
          )}
        </div>

        {/* Agree to Terms */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
                type="checkbox"
                name="agreeToTerms"
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">I agree to all terms and conditions</span>
          </label>
          {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.agreeToTerms}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full p-3 text-white text-sm font-semibold rounded bg-blue-600 hover:bg-blue-700"
        >
          Register
        </button>

        {/* Already have an account */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </form>
  );
};

export default RegisterForm;
