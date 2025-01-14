import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Link from "next/link";

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
    validationSchema: Yup.object({
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
      <form onSubmit={formik.handleSubmit} className="shadow-lg bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg mx-auto">
        <p className="text-lg font-medium text-center text-gray-700 dark:text-gray-300 mb-6">Create Your Account</p>

        {/** Input Fields */}
        {["firstname", "lastname", "username", "email", "password", "confirmPassword"].map((field, idx) => (
            <div className="mb-4 dark:bg-gray-700" key={idx}>
              <input
                  type={field.includes("password") ? "password" : "text"}
                  id={field}
                  name={field}
                  placeholder={field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  value={formik.values[field as keyof typeof formik.values] as string}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`mt-1 p-3 block w-full rounded-md border ${
                      formik.touched[field as keyof typeof formik.touched] &&
                      formik.errors[field as keyof typeof formik.errors]
                          ? "border-red-500"
                          : "border-gray-300"
                  } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {formik.touched[field as keyof typeof formik.touched] &&
                  formik.errors[field as keyof typeof formik.errors] && (
                      <p className="mt-1 text-sm text-red-500">{formik.errors[field as keyof typeof formik.errors]}</p>
                  )}
            </div>
        ))}


        {/** Agree to Terms */}
        <div className="mb-4">
          <label className="flex items-center space-x-2">3652
            <input
                type="checkbox"
                name="agreeToTerms"
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
                className="h-4 w-4 dark:bg-gray-700 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">I agree to all terms and conditions</span>
          </label>
          {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.agreeToTerms}</p>
          )}
        </div>

        {/** Submit Button */}
        <button type="submit" className="w-full p-3 text-white text-sm font-semibold rounded bg-blue-600 hover:bg-blue-700">
          Register
        </button>

        {/** Already have an account */}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
  );
};

export default RegisterForm;
