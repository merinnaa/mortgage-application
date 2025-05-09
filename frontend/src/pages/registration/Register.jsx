import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { email, password, first_name, last_name, confirmPassword } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(inputs);

    const newErrors = {};
    if (!inputs.first_name) newErrors.first_name = "First name is required";
    if (!inputs.last_name) newErrors.last_name = "Last name is required";
    if (!inputs.email) newErrors.email = "Email is required";
    if (!inputs.password) newErrors.password = "Password is required";
    if (inputs.confirmPassword !== inputs.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const body = { email, password, first_name, last_name };
      const response = await fetch("https://mortgage-application-server.vercel.app/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        toast.success("Registered Successfully");
        navigate("/thankyou");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-stone-100 flex items-center justify-center px-4">
      <form
        onSubmit={onSubmitForm}
        className="w-full max-w-md p-8 bg-white rounded-lg flex flex-col justify-start items-center gap-11"
      >
        <div className="w-full flex flex-col gap-12">
          <div className="w-full flex flex-col items-center gap-4">
            <h2 className="text-zinc-800 text-2xl font-bold">Sign up</h2>
            <p className="text-center text-zinc-800 text-base">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-500 font-bold">
                Log in
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {["first_name", "last_name", "email", "password", "confirmPassword"].map((field) => (
              <div key={field} className="flex flex-col gap-2.5">
                <div
                  className={`w-full h-10 rounded-lg outline outline-1 inline-flex justify-center items-center px-4 gap-2.5 ${
                    errors[field] ? "outline-orange-600" : "outline-black"
                  }`}
                >
                  <input
                    name={field}
                    type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                    placeholder={
                      field === "confirmPassword"
                        ? "Confirm Password"
                        : field.replace("_", " ").replace(/^./, (c) => c.toUpperCase())
                    }
                    value={inputs[field]}
                    onChange={onChange}
                    className="w-full h-full bg-transparent outline-none placeholder:text-zinc-800 text-base"
                  />
                </div>
                {errors[field] && (
                  <div className="text-orange-600 text-base">{errors[field]}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !confirmPassword
          }
          className={`w-full h-10 rounded-[48px] p-2.5 text-base font-semibold transition text-center
            ${
              first_name &&
              last_name &&
              email &&
              password &&
              confirmPassword
                ? "bg-red-400 text-white"
                : "bg-neutral-100 text-stone-500 cursor-not-allowed"
            }`}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
