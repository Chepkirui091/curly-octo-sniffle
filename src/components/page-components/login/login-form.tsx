import { useFormik } from "formik";
import * as Yup from "yup";
import { Logo } from "../../logo";
import React from "react";

// Define the props for LoginForm
type LoginFormProps = {
  onLogin: (values: { username: string; password: string }, callBackFunc: (msg: string) => void) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: (values) => {
      // Trigger the parent onLogin function
      onLogin(values, (msg) => alert(msg));
    },
  });

  return (
      <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-lg rounded-lg px-6 py-8 w-full max-w-md mx-auto"
      >
        {/* Logo */}
        <div className="mb-6 text-center">
          <Logo />
        </div>

        {/* Sign-in Message */}
        <p className="text-sm text-center text-gray-600 mb-4">Sign in to your account</p>

        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full rounded-md border ${
                  formik.touched.username && formik.errors.username ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.username && formik.errors.username && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.username}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full rounded-md border ${
                  formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
              } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
          {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full py-3 text-white text-sm font-semibold rounded bg-blue-600 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
  );
};

export default LoginForm;
