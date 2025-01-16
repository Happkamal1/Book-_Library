import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="dark:bg-base-200 dark:text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md relative">
        <NavLink to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black font-bold text-xl my-1 mx-1">
          ✕
        </NavLink>
        <h3 className="font-bold text-2xl text-center mb-6">Create an Account</h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full mt-1"
              placeholder="Create a password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <NavLink to="/login" className="text-blue-500 hover:underline">Login here</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
