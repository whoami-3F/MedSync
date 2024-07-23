// import logo from "../assets/react.svg"
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


function PatientFormPage() {
  return (
  <div className="bg-gray-900 min-h-screen text-white px-10 py-5">
      <div className="min-h-screen px-10">
        <div className="pb-10 pt-10">
        <h1>Welcome</h1>
        <p>Let us know more about yourself</p>
        </div>
    
        <form className="">
        {/* Personal Information section */}
        <div>
          <h1>Personal Information</h1>

          {/* first line */}
        <label className="block mb-2 ">Full name</label>
          <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <CiUser className="text-gray-400"/>
          </span>
          <input type="text" placeholder="ex:Ram kumar" 
            className="outline-none w-full rounded p-2 pl-8 bg-gray-800"/>
        </div>

          {/* Second line */}
        <div className="grid grid-cols-2 mt-3 gap-x-3">
          <div>
                  <label className="block mb-2">Email address</label>
                  <div className="relative">            
                    <span className="absolute inset-y-0 flex items-center pl-2">
                      <MdOutlineMailOutline className="text-gray-400"/>
                    </span>
                    <input type="text" placeholder="ex:testing@gmail.com" 
               className="outline-none w-full rounded p-2 pl-8 bg-gray-800"/>
          </div>
          </div>

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
          <div className="grid grid-cols-2 mt-3 gap-x-3"> 
            <div> 
              <label className="block">Date of birth</label> 
              <input type="date" 
                      className="outline-none w-full bg-gray-800 rounded p-2"/>
          </div>

            <div className="flex flex-col ">
              <label className="block">Gender</label> 

              <div className="flex gap-x-2"> 
              <div className="flex items-center border border-dashed border-gray-600 py-2 px-3 rounded">
              <input type="radio" id="male" name="Gender" value="Male" className="mx-1"/> 
              <label htmlFor="male">Male</label>
              </div>

              <div className="flex items-center border border-dashed border-gray-600 py-2 px-3 rounded">
              <input type="radio" id="female" name="Gender" value="Female" className="mx-1"/> 
              <label htmlFor="female">Female</label> 
              </div>
 
              <div className="flex items-center border border-dashed border-gray-600 py-2 px-3 rounded">
              <input type="radio" id="other" name="Gender" value="Other" className="mx-1"/>
              <label htmlFor="other">Other</label> 
              </div>
              </div>
              </div>
        </div>

          {/* Fourth line */}
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <div>
              <label className="block">Address</label>
              <input type="text" placeholder="ex:kumarigal,kathamdu,7"  
                       className="outline-none w-full bg-gray-800 rounded p-2"/>
           </div>

            <div>
              <label className="block">Occupation</label>
              <input type="text" placeholder="ex:Software developer"
                className="outline-none w-full bg-gray-800  rounded p-2"/>
            </div>
          </div>

          {/* Fifth line */}
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <div>
              <label className="block">Emergency contact name</label>
              <input type="text" placeholder="Guradian's name" 
                    className="outline-none w-full bg-gray-800 rounded p-2"/>
            </div>

            <div>
              <lable className="block mb-2">Phone number</lable>
                <div className="relative">
                  <span className="absolute inset-y-0 flex  items-center pl-2">
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
            <h1>Medical Infomration</h1>
          <div className="mt-3">
            <lable className="block">Primary care physician</lable>
            <select name="physician" id="physicianId" 
                    className="outline-none w-full p-2 bg-gray-800 rounded">
              <option value="Luffy">Luffy</option>
              <option value="Goku">Goku</option>
              <option value="Eren">Eren</option>
              <option value="Tanjiro">Tanjiro</option>
            </select>
          </div>

          {/* Second line  */}
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <div>
              <label className="block">Insurance Provider</label>
              <input type="text" placeholder="ex:Nepal life Insurance"
                      className="outline-none w-full bg-gray-800 rounded p-2"/>
            </div>

            <div>
              <label className="block">Insurance polic number</label>
              <input type="text" placeholder="ex:ABCDE123"
                      className="outline-none w-full bg-gray-800 rounded p-2"/>

            </div>
          </div>

          {/* Third line  */}
          {/* TODO: Need to Increase text box */}
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <div>
              <lable className="block">Allegies(if any)</lable>
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
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <div>
              <label className="block">Family medical history(if relevant)</label>
              <input type="text" placeholder="ex:Father died of Cancer"
                      className="outline-none w-full bg-gray-800 rounded p-2"/>

            </div>

            <div>
              <label className="block">Past medical history</label>
              <input type="text" placeholder="ex:Asthma diagnosis"
                      className="outline-none w-full bg-gray-800 rounded p-2"/>
            </div>
        </div>

          {/* Identification and Verfication */}
          <div className="mt-14">
            {/* first line */}
              <h1>Identification and Verfication</h1>
            <div className="mt-3">
              <label className="block">Identification type</label>
              <select name="identification" id="identificationId"
                       className="outline-none w-full bg-gray-800 rounded p-2" >
                <option value="birthCertificate">Birth Certificate</option>
                <option value="Citizenship">Citizenship</option>
                <option value="password">Password</option>
              </select>
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
            <h1 className="mb-5">Consent and Privacy</h1>
          <div>
            <input type="checkbox"/>
            <label>I consent to receive tretment for my health condition.</label>
          </div>

          <div>
            <input type="checkbox"/>
            <label>I consent to the use and disclosure of my health information for treatment purposes.</label>
        </div>

          <div>
            <input type="checkbox"/>
            <lable>I acknowlege that I have reviewed and agree to the privacy policy</lable>
          </div>
        </div>

        <button className="bg-green-500 p-2">Submit</button>
      </form>
    </div>
    </div>
      )
}

export default PatientFormPage
