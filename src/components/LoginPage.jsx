import Logo from "../assets/react.svg"

function LoginPage(){
  return(
  <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-900 text-white flex flex-col justify-center items-center p-10 ">
        <div className="mb-10">       
          <label>MedSync</label>
          <img src={Logo} alt="MedSync" className="mb-10 flex"/>
            <h2>Hi There,...</h2>
        <p>Get Started with Apporitments</p>
        </div>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input type="text" placeholder="Enter you name" 
                  className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 " />
          </div>

          <div className="mb-4">
          <label className="block mb-2">Email Address</label>
          <input type="email" placeholder="Enter your email" 
             className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 " />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Phone Numnber</label>
            <input type="text" placeholder="Enter your phone number" 
                className="w-full outline-none bg-gray-800 border border-gray-700 rounded p-1 " />
          </div>
          
          <div className="mb-4">
            <button className="w-full bg-green-700 rounded p-1">Get Started</button>
          </div>
        </form>
        <p className="mt-8">@Saurav Moktan CopyRight</p>
      </div>
    </div>
       )
}

export default LoginPage
