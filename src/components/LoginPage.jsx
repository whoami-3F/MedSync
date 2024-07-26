import Logo from "../assets/react.svg";
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import doctor from "../assets/doctor.webp"

function LoginPage(){
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();
  const onSubmit = () => {
    navigate('/patient-from-page')
  }
  return(
  <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-10 ">
        <div className="mb-10 text-center">
          <label>MedSync</label>
          <img src={Logo} alt="MedSync" className="mb-10 w-16 h-16 mx-auto"/>
            <h2>Hi There,...</h2>
        <p>Get Started with Apporitments</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input type="text" placeholder="Enter you name" 
                    {...register('name',
                              {required:'Full name is required',
                     })}
                   className="w-full outline-none bg-gray-800 border border-gray-700 focus:bg-gray-700  rounded p-1 " 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
          <label className="block mb-2">Email Address</label>
          <input type="email" placeholder="Enter your email" 
              {...register("email",{
                required:"Email address is required",
                 validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
              })}
             className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 focus:bg-gray-700 "
            />
                       {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} 
          </div>

          <div className="mb-4 bg-gray">
            <label className="block mb-2">Phone Numnber</label>
            <input type="tel" placeholder="Enter your phone number"
            className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 " />
            </div>
          
          <div className="mb-4">
            <button className="w-full bg-green-700 rounded p-1">Get Started</button>
          </div>
        </form>
        <div>
        </div>
        <p className="mt-8">@CopyRight</p>
      </div>
      <div className="w-1/2 flex h-screen">
        <img src={doctor} alt="MedSync" className="flex w-full h-full object-cover"/>
      </div>
    </div>
       )
}

export default LoginPage
