import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

const Register = ({ toggler, setToggler, users, setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' });

  const submithandler = (data) => {
    data.id = nanoid();

    const copyusers = [...users, data];
    setUsers(copyusers);
    toast.success("User Created Successfully!");

    reset();
  };

  console.log(users);

  return (
    <div>
      <form
        onSubmit={handleSubmit(submithandler)}
        className='w-[90%] sm:w-[60%] md:w-[40%] mx-auto mt-10 shadow-2xl bg-gray-700 text-white p-6 rounded-md'
        autoComplete="off"
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>Let's start the journey</h2>

        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          placeholder="Enter your name"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md text-white'
        />
        {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

        <input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Enter your email"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md text-white'
        />
        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'At least 6 characters required',
            },
          })}
          type="password"
          placeholder="********"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md text-white'
          autoComplete="new-password"
        />
        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

        <button
          disabled={!isValid}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-800 transition-all"
        >
          Register
        </button>

        <div className="mt-4 text-sm text-center">
          Already have an account?{' '}
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
