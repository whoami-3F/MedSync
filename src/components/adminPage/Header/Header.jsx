import {useState,useRef} from 'react'
import {Link} from 'react-router-dom'
import shou from '../../../assets/shou.jpeg' 

export default function Header(){
  const Menus = [
    // {name: "Profile", link:"/profile"},
    // {name: "your apps",link:"/your-apps"},
    // {name: "settings",link:"/settings"},
    {name: "logout", link:"/logout"}
  ];
  const [open,setOpen] = useState(false); 
  const menuRef = useRef();
  const imgRef = useRef();


  window.addEventListener('click',(e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpen(false);
    }
  })
  return(
  <header className="">
      <nav className="bg-gray-700 py-2.5 px-4 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to='/' >
            <img 
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="logo"
            />
          </Link> 

          <div className="relative">
            <img src={shou} 
              alt="user" 
              ref={imgRef}
              className="h-20 w-20 object-cover border-4 border-gray-500 rounded-full cursor-pointer"
              onClick = {()=> setOpen(!open)}
            /> 
            {open && <div 
              ref={menuRef} 
              className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-24">
              <ul>
                {
                  Menus.map((menu)=>(
                  <li key={menu.name}
                    className="p-2 text-lg cursor-pointer rounded hover:bg-gray-400"
                    >
                      <Link to={menu.link}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
 }
        </div>
        </div>
      </nav>
  </header>
  )
}
