import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <dialog id="my_modal_3" className="modal dark:bg-base-200 dark:text-white">
      <div className="modal-box relative w-full max-w-md mx-auto">
        <NavLink
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          ✕
        </NavLink>

        <h3 className="font-bold text-2xl text-center mb-6">Login Here</h3>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </NavLink>
        </p>
      </div>
    </dialog>
  );
};

export default Login;
