import {useState} from 'react';
import {useForm} from 'react-hook-form' 
import {useNavigate} from 'react-router-dom' 
import { FaHandPaper } from "react-icons/fa";
import chopper from '../../assets/chopper.jpg' 
import franken from '../../assets/franken.jpg'
import shou from '../../assets/shou.jpeg'
import tsunade from '../../assets/tsunade.jpg'

function AppointmentFormPage () {

  const [selectedOption,setSelectedOption] = useState('FrankenStein'); 
  const options = [
    { value: 'FrankenStein', label: 'Dr.Franken Stein', image: franken },
    { value: 'Tsunade', label: 'Dr.Tsunade', image: tsunade },
    { value: 'TonyChopper', label: 'Dr.Tony Chopper', image: chopper },
    { value: 'ShouTucker', label: 'Dr.Shou Tucker', image: shou },
  ]; 

  const navigate = useNavigate();
  const{
    // register,
    handleSubmit,
    // formState:{errors}
  } = useForm();

  const onSubmit = () =>{
    navigate('/');
  }
  return ( 
<div className="bg-gray-900 min-h-screen text-white flex items-center justify-center px-10 pb-10">
  <div>
        <div className="pb-10 pt-10 flex flex-col items-center text-2xl">
          <div className="flex items-center">
            <h1>Hey there</h1>
            <span className="ml-2">
              <FaHandPaper />
            </span>
            </div>
        <p>Request a new appontment in 10 seconds</p>
        </div>

      <div className="w-full flex p-3 justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Doctor</label>
           <div className="mt-3 relative w-full">
        <select
        name="physician"
        id="physicianId"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="outline-none w-full p-2 bg-gray-800 text-white rounded pl-8 appearance-none">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
            </div>
                <div className="absolute inset-y-0 left-0 flex items-center px-1 
                  pointer-events-none">
        <img
          src={
            options.find((option) => option.value === selectedOption)?.image
          }
          alt={selectedOption}
          className="w-6 h-6 rounded-full"
        />
          </div>
          </div>
          </div>
            
            <div className="grid grid-cols-2 gap-x-5 mt-8">
              <div>
                <label>Reason for appointment</label>
                <textarea placeholder="ex:Annual montly check-up" rows="4"
                  className="w-full outline-none bg-gray-800 p-2 rounded mt-3">
                </textarea>
              </div>

              <div>
                <label>Additional comments/notes</label>
                <textarea placeholder="ex:Prefer afternoon appointments,if possible" rows="4"
                  className="w-full outline-none bg-gray-800 p-2 rounded mt-3"></textarea>
              </div>
            </div>

            <div className="mt-8">
              <label className="block">Expected appointment date</label>
              <input type="date" className="w-full outline-none bg-gray-800 p-2 rounded mt-3"/>
            </div>

            <button type="submit" className="bg-green-500 w-full p-2 mt-5 rounded">Submit & Continute</button>
          </form>
      </div>
    </div>
    </div>
    )
}

export default AppointmentFormPage  
