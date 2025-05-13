import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

const Register = ({ toggler, setToggler, users, setUsers }) => {
  const { register, handleSubmit, reset } = useForm();

  const submithandler = (data) => {
    // console.log(data)
    data.id = nanoid();

    const copyusers = [...users]; 
    copyusers.push(data);
    setUsers(copyusers);

    reset();
  };

  console.log(users);

  return (
    <div>
      <form
        onSubmit={handleSubmit(submithandler)}
        className='w-[90%] sm:w-[60%] md:w-[40%] mx-auto mt-10 shadow-2xl bg-gray-700 text-white p-6 rounded-md shadow-md'
        autoComplete="off"
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>Let's start the journey</h2>

        <input
          {...register('name')}
          type="text"
          placeholder="Enter your name"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="off"
        />

        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="off"
        />

        <input
          {...register('password')}
          type="password"
          placeholder="********"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="new-password"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-800 transition-all"
        >
          Register
        </button>

        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setToggler(!toggler)}
            className="text-blue-400 font-medium underline"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
