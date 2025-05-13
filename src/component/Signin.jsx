
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Signin = (props) => {
  const { toggler, setToggler, users } = props;
  const { register, handleSubmit, reset } = useForm(); // ✅ useForm hook

  const submithandler = (data) => {
    const isPresent = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

   if (isPresent) {
            toast.success("User Already Exists!");
        } else {
            toast.error("User Not Found!");
        }

    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submithandler)} // ✅ handleSubmit used properly
        className='w-[90%] sm:w-[60%] md:w-[40%] mx-auto mt-10 bg-gray-800 text-white shadow-2xl p-6 rounded-md shadow-md'
        autoComplete='off'
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>Get back to your journey</h2>

        <input
          {...register('email')}
          type='email'
          placeholder='Enter your email'
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete='off'
        />

        <input
          {...register('password')}
          type='password'
          placeholder='********'
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete='new-password'
        />

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-3 mt-6 rounded-md hover:bg-blue-800 transition-all'
        >
          Login
        </button>

        <div className='mt-4 text-sm text-center'>
          Don't have an account?{' '}
          <button
            type='button'
            onClick={() => setToggler(!toggler)}
            className='text-blue-400 font-medium underline'
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
