import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const RegisterLender = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    institution: "",
    confirmPassword: "",
    employee_id: "",
    role: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {
    email,
    password,
    first_name,
    last_name,
    institution,
    confirmPassword,
    employee_id,
    role
  } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(inputs);

    const newErrors = {};
    if (!first_name) newErrors.first_name = "First name is required";
    if (!last_name) newErrors.last_name = "Last Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!institution) newErrors.institution = "Institution is required";
    if (!employee_id) newErrors.employee_id = "Employee ID is required";
    if (!role) newErrors.role = "Select a role";
    if (!confirmPassword || confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const body = {
        email,
        password,
        first_name,
        last_name,
        institution,
        employee_id,
        role
      };

      const response = await fetch(
        "https://mortgage-application-server.vercel.app/auth/register-lender",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.token) {
        toast.success("Registered Successfully");
        navigate("/lender-thankyou");
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
        className="w-full max-w-md p-8 bg-white rounded-lg flex flex-col justify-start items-center gap-10"
      >
        <div className="w-full flex flex-col gap-10">
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
            {[
              { name: "first_name", type: "text", placeholder: "First Name" },
              { name: "last_name", type: "text", placeholder: "Last Name" },
              { name: "email", type: "email", placeholder: "Email Address" },
              { name: "password", type: "password", placeholder: "Password" },
              { name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
              { name: "institution", type: "text", placeholder: "Institution" },
              { name: "employee_id", type: "text", placeholder: "Employee ID" }
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-2.5">
                <div
                  className={`w-full h-10 rounded-lg outline outline-1 inline-flex justify-center items-center px-4 gap-2.5 ${
                    errors[field.name] ? "outline-orange-600" : "outline-black"
                  }`}
                >
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={inputs[field.name]}
                    onChange={onChange}
                    className="w-full h-full bg-transparent outline-none placeholder:text-zinc-800 text-base"
                  />
                </div>
                {errors[field.name] && (
                  <div className="text-orange-600 text-base">{errors[field.name]}</div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-2.5">
              <div
                className={`w-full h-10 rounded-lg outline outline-1 inline-flex justify-center items-center px-4 gap-2.5 ${
                  errors.role ? "outline-orange-600" : "outline-black"
                }`}
              >
                <select
                  name="role"
                  value={role}
                  onChange={onChange}
                  className="w-full h-full bg-transparent outline-none text-base text-zinc-800"
                >
                  <option value="">Select user type</option>
                  <option value="admin">Admin</option>
                  <option value="supervisor">Reviewer</option>
                </select>
              </div>
              {errors.role && (
                <div className="text-orange-600 text-base">{errors.role}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={
              !first_name ||
              !last_name ||
              !email ||
              !password ||
              !confirmPassword ||
              !institution ||
              !employee_id ||
              !role
            }
            className={`w-full h-10 rounded-[48px] p-2.5 text-base font-semibold transition text-center
              ${
                first_name &&
                last_name &&
                email &&
                password &&
                confirmPassword &&
                institution &&
                employee_id &&
                role
                  ? "bg-red-400 text-white"
                  : "bg-neutral-100 text-stone-500 cursor-not-allowed"
              }`}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterLender;