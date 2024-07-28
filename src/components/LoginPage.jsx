import Logo from "../assets/react.svg";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import doctor from "../assets/doctor.webp";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = () => {
    navigate('/patient-from-page')
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full min-h-screen md:w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-6 md:p-10">
        <div className="mb-6 md:mb-10 text-center">
          <label className="text-2xl md:text-3xl font-bold">MedSync</label>
          <img src={Logo} alt="MedSync" className="mb-6 md:mb-10 w-12 h-12 md:w-16 md:h-16 mx-auto" />
          <h2 className="text-xl md:text-2xl">Hi There,</h2>
          <p className="text-sm md:text-base">Get Started with Appointments</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs md:max-w-sm">
          <div className="mb-2.5">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Full name is required' })}
              className="w-full outline-none bg-gray-800 border border-gray-700 focus:bg-gray-700 rounded p-1"
            />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-2.5">
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email address is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 focus:bg-gray-700"
            />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          </div>

          <div className="mb-4">
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1"
            />
          </div>

          <div className="mb-4">
            <button className="w-full bg-green-700 rounded p-1">Get Started</button>
          </div>
        </form>
        <p className="mt-8">@CopyRight</p>
      </div>
      <div className="hidden md:flex w-full md:w-1/2 h-64 md:h-screen">
        <img src={doctor} alt="MedSync" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default LoginPage;

