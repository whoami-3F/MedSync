// import logo from "../assets/react.svg"

function PatientFormPage() {
  return (
  <div>
      <form>

        {/* Personal Information section */}
        
        <div>
          <h1>Personal Information</h1>
        <div>
          <label className="block mb-2">Full name</label>
          <input type="text" placeholder="ex:Ram kumar"
                 className="outline-none border border-gray-700 rounded p-1"/>
        </div>

        <div className="grid md:grid-cols-2">
          <div>
            <label className="block">Email address</label>
            <input type="text" placeholder="ex:testing@gmail.com"
              className="outline-none border border-gray-700 rounded p-1"/>
          </div>

          <div>
            <label className="block">Phone number</label>
            <input type="tel" placeholder="+977-9800000000" 
                   className="outline-none border border-gray-700 rounded p-1"/>
          </div>
        </div>


          <div className="grid md:grid-cols-2"> <div> <label className="block">Date of birth</label> <input type="date" /> </div>

        </div>
        </div>



      </form>
    </div>
      )
}

export default PatientFormPage
