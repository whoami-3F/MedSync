import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import {useState} from 'react';
import chopper from '../../assets/chopper.jpg' 
import franken from '../../assets/franken.jpg'
import shou from '../../assets/shou.jpeg'
import tsunade from '../../assets/tsunade.jpg'
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form'

function PatientFormPage() { 
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit =() =>{
    navigate('/appointment-form-page')
  }
  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/appointment-form-page')
  // }

const [selectedOption,setSelectedOption] = useState('FrankenStein'); 
  const options = [
    { value: 'FrankenStein', label: 'Dr.Franken Stein', image: franken },
    { value: 'Tsunade', label: 'Dr.Tsunade', image: tsunade },
    { value: 'TonyChopper', label: 'Dr.Tony Chopper', image: chopper },
    { value: 'ShouTucker', label: 'Dr.Shou Tucker', image: shou },
  ];  
 
  return (
  <div className="bg-gray-900 min-h-screen text-white px-10 pb-10 ">
      <div className="min-h-screen px-10">
        <div className="pb-10 pt-10 flex flex-col items-center text-2xl">
          <div className="flex items-center">
            <h1>Welcome</h1>
            <span className="ml-2">
              <FaHandPaper />
            </span>
            </div>
        <p>Let us know more about yourself</p>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-7xl">

        {/* Personal Information section */}
        <div>
          <p className="text-xl font-bold mb-3">Personal Information</p>

          {/* first line */}
        <label className="block mb-2 ">Full name</label>
       <div className={`relative ${errors.name ? 'mb-7': '' }`}>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <CiUser className="text-gray-400"/>
              </span>
                <div className="absolute">
              </div>
              <input
                type="text"
                placeholder="ex: Ram Kumar"
                {...('name', {
                  required: "Full name is required",
                })}
                className="outline-none w-full rounded p-2 pl-8 bg-gray-800"
              />
                <p className="absolute text-red-500 -bottom-6 left-0">{errors.name && errors.name.message}</p>
            </div>
              
          {/* Second line */}
        <div className="grid grid-cols-2 mt-3 gap-x-5">
          <div className={`relative ${errors.email ? 'mb-6':''}`}>
                  <label className="block mb-2">Email address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 flex items-center pl-2">
                      <MdOutlineMailOutline className="text-gray-400"/>
                    </span>
                    <input type="text" placeholder="ex:testing@gmail.com" 
                    className="outline-none w-full rounded p-2 pl-8 bg-gray-800"
                            {...register("email",{
                        required:"Email address is required",
                        pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address"
                }
                      })}
                    />
                    <p className="absolute text-red-500 -bottim-6 left-0">{errors.email && errors.email.message}</p>
          </div>
          </div>

                {/* phone number section  */}
          <div>
            <label className="block mb-2">Phone number</label>
              <div className="relative">
                    <span className="absolute inset-y-0 flex items-center pl-2">
                      <FaPhone className="text-gray-400"/>
                    </span>
            <input type="tel" placeholder="+977-9800000000" 
                 className="outline-none w-full bg-gray-800 rounded p-2 pl-8"/>
          </div>
        </div>
        </div>

          {/* Third line */}
          <div className="grid grid-cols-2 mt-3 gap-x-5"> 
            <div> 
              <label className="block">Date of birth</label> 
              <input type="date" 
                      className="outline-none w-full bg-gray-800 rounded p-2"
                    {...register('date',{
                      required: "Date need to be filled",
                    })}
                  />
                    {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

          </div>

            <div className="flex flex-col ">
              <label className="block">Gender</label> 
              <div className="flex gap-x-5"> 

              <div className="flex items-center border border-dashed  border-gray-600 px-3 py-1.5 rounded cursor-pointer">
              <input type="radio" id="male" name="Gender" value="Male" className="mx-1 cursor-pointer hidden peer "/> 
              <label htmlFor="male" className="flex text-sm items-center cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white  px-2 py-1 rounded">Male</label>
              </div>

              <div className="flex items-center border border-dashed border-gray-600  px-3 rounded cursor-pointer">
              <input type="radio" id="female" name="Gender" value="Female" className="mx-1 cursor-pointer hidden peer"/> 
               <label htmlFor="female" className="flex items-center cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white px-2 py-0.5 rounded">Female</label> 
              </div> 

              <div className="flex items-center border border-dashed border-gray-600  px-3 rounded cursor-pointer">
              <input type="radio" id="other" name="Gender" value="Other" className="mx-1 cursor-pointer hidden peer"/>
               <label htmlFor="other" className="flex items-center cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white px-2 py-0.5  rounded">Other</label>
              </div>

              </div>
              </div>
        </div>

          {/* Fourth line */}
          <div className="grid grid-cols-2 mt-3 gap-x-5">
            <div>
              <label className="block">Address</label>
              <input type="text" placeholder="ex:kumarigal,kathamdu,7"  
                       className="outline-none w-full bg-gray-800 rounded p-2" 
                  />
           </div>

            <div>
              <label className="block">Occupation</label>
              <input type="text" placeholder="ex:Software developer"
                className="outline-none w-full bg-gray-800  rounded p-2"/>
            </div>
          </div>

          {/* Fifth line */}
          <div className="grid grid-cols-2 mt-3 gap-x-5">
            <div>
              <label className="block">Emergency contact name</label>
              <input type="text" placeholder="Guradian's name" 
                    className="outline-none w-full bg-gray-800 rounded p-2"
                    {...register('EmergencyContact',{
                      required: "Emergency Contact is required"
                    })} 
                  />
                     {errors.EmergencyContact  && <p className="text-red-500 text-sm">{errors.EmergencyContact.message}</p>}
            </div>

            <div>
              <label className="block">Phone number</label>
                <div className="relative">
                  <span className="absolute inset-y-0 flex items-center pl-2">
                    <FaPhone className="text-gray-400"/>
                  </span>
              <input type="text" placeholder="ex:+977-9800000000"
                      className="outline-none w-full bg-gray-800 rounded p-2 pl-8"/>
            </div>
            </div>
          </div>
        </div>


        {/* Medical Information Section */}
        <div className="mt-14">
          {/* First line */}
             <p className="text-xl font-bold mb-2">Medical Infomration</p>
              <label className="block">Physician</label>
        <div className="mt-3 relative w-full">
        <select
        name="physician"
        id="physicianId"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="outline-none w-full p-2 bg-gray-800 text-white rounded pl-9 appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
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
          className="w-7 h-7 rounded-full"
        />
          </div>
          </div>

          {/* Second line  */}
          <div className="grid grid-cols-2 mt-3 gap-x-5">
            <div>
              <label className="block">Insurance Provider</label>
              <input type="text" placeholder="ex:Nepal life Insurance"
                      className="outline-none w-full bg-gray-800 rounded p-2"
                    {...register('insuraceProvider',{
                      required:'Insurance Provider need to filled'
                    })}
                  />
                  {errors.insuraceProvider &&<p className="text-red-500 text-sm">{errors.insuraceProvider.message}</p> }
            </div>

            <div>
              <label className="block">Insurance polic number</label>
              <input type="text" placeholder="ex:ABCDE123"
                      className="outline-none w-full bg-gray-800 rounded p-2"
                    {...register('insuraceNumber',{
                      required:'Insurance polic number is required'
                    })}
                  />
                  {errors.insuraceNumber &&  <p className="text-red-500">{errors.insuraceNumber.message}</p>}
            </div>
          </div>

          {/* Third line  */}
          {/* TODO: Need to Increase text box */}
          <div className="grid grid-cols-2 mt-3 gap-x-5">
            <div>
              <label className="block">Allegies(if any)</label>
              <input type="text" placeholder="ex:Peanuts,Dust"
                      className="outline-none w-full bg-gray-800  rounded p-2"/>
            </div>
          
            <div>
              <label className="block">Current medications</label>
              <input type="text" placeholder="ex:Need Sleeping pills to sleep"
                      className="outline-none w-full  bg-gray-800 rounded p-2"/>
            </div>
          </div>

          {/* Fourth line */}
          <div className="grid grid-cols-2 mt-3 gap-x-5">
            <div>
              <label className="block">Family medical history(if relevant)</label>
                <textarea placeholder="ex:Father died of Cancer" rows="4" 
                           className="outline-none w-full bg-gray-800 rounded p-2"
                  ></textarea>
            </div>

            <div>
              <label className="block">Past medical history</label>
                  <textarea  placeholder="ex:Asthma diagnosis" rows="4" 
                        className="outline-none w-full bg-gray-800 rounded p-2"></textarea>
            </div>
        </div>

          {/* Identification and Verfication */}
          <div className="mt-10">
            {/* first line */}
              <p className="text-xl font-bold mb-2">Identification and Verfication</p>
            <div className="mt-3 relative">
              <label className="block">Identification type</label>
              <select name="identification" id="identificationId"
                       className="outline-none w-full bg-gray-800 rounded p-2 appearance-none" >
                <option value="birthCertificate">Birth Certificate</option>
                <option value="Citizenship">Citizenship</option>
                <option value="password">Password</option>
              </select>
                  <div className="pointer-events-none absolute inset-y-9 right-0 flex px-2">
                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>

                </div>
          </div>

          {/* second line */}
          <div className="mt-3">
            <label className="block">Identification Number</label>
            <input type="text" placeholder="ex:123-134-188"
                    className="outline-none w-full bg-gray-800  rounded p-2"/>
          </div>

          {/* third line */}
          <div className="mt-3">
            <label className="block">Identification Document</label>
            <input type="file" className="" />
          </div>
        </div>

        {/* Consent and Privacy  */}
        <div className="mt-14" >
            <p className="text-xl font-bold mb-5">Consent and Privacy</p>
          <div>
            <input type="checkbox" className="cursor-pointer"/>
            <label className="mx-2">I consent to receive tretment for my health condition.</label>
          </div>

          <div>
            <input type="checkbox" className="cursor-pointer"/>
            <label className="mx-2">I consent to the use and disclosure of my health information for treatment purposes.</label>
        </div>

          <div>
            <input type="checkbox" className="cursor-pointer"/>
            <label className="mx-2">I acknowlege that I have reviewed and agree to the privacy policy</label>
          </div>
        </div>

        <button className="bg-green-500 w-full p-2 mt-5 rounded">Submit & Continute</button>
      </form>
      </div>
    </div>
    </div>
      )
}

export default PatientFormPage
