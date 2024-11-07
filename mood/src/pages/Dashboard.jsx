import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Emotional from '../assets/emotional.png'
import { EarthLock, Award } from 'lucide-react'
import Mockup from '../assets/Mockup.png'
import Footer from '../Components/Footer'

export function Dashboard ()  {



  return (
    <div className='bg-[#fff5DC]'>
   <div className='flex justify-between items-center bg-[#629878]'>
   <Link to="/" className="flex  items-center px-2 py-2 text-gray-900">
      <img src={Logo} className='w-12 h-12' alt="" />
      <span className="text-xl font-semibold text-[#fff5DC] capitalize">MoodTracker</span>
    </Link> 
    
    <div className='flex items-center'> 
    {/* <div className="flex space-x-4 2">
        <NavLink to="/" label="Design Inspiration" /> 
        
    </div> */}

    <div>
      <Link to="/register">
        <button className='bg-[#fff5DC] text-[#629878] mx-5 py-2 px-5 rounded-3xl font-semibold'>Register</button>
      </Link>
    </div>
    </div>

   </div>
   <div className="bg-orange-50 md:min-h-[80vh] min-h-[70vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-4 pt-10 md:py-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight tracking-wide text-center md:text-left text-gray-700">
              Track and Improve
              <span className="block mt-2">Your Emotional</span>
              <span className="block mt-2">Well-being</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-xl text-center md:text-left">
              Start your journey to better mental health today with our comprehensive tracking tools.
            </p>
            
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Link to="/register">
              <button className="bg-[#629878] text-white px-8 py-3 rounded-3xl font-medium transition-colors duration-200">
                Get Started
              </button>
              </Link>
              <button disabled  className=" cursor-not-allowed border-2 border-[#629878] text-[#629878] px-8 py-3 rounded-3xl font-medium hover:bg-orange-50 transition-colors duration-200">
               Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 ">
            <div className=" w-full aspect-square max-w-lg mx-auto">
              <img
                src={Emotional}
                alt="Emotional img"
                className="rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='flex justify-center items-center mx-7 py-10 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
      <div className='flex justify-center items-center flex-col border-2 border-[#629878] p-4 rounded-2xl'>
        <EarthLock size={50} className='text-[#629878]'/>
        <h1 className=' font-semibold  text-xl py-3'>End-to-end Encryption</h1>
        <p className='text-center font-serif font-medium'>
        Protect your data with robust end-to-end encryption, ensuring your information stays private and secure from unauthorized access.</p>
      </div>

      <div className='flex justify-center items-center flex-col border-2 border-[#629878] p-4 rounded-2xl'>
        <Award size={50} className='text-[#629878]'/>
        <h1 className=' font-semibold  text-xl py-3'>Verified by Expert</h1>
        <p className='text-center font-serif font-medium'>
        Our service is validated by industry experts, guaranteeing top-tier quality and adherence to best practices.
        </p>
      </div>

      <div className='flex justify-center items-center flex-col border-2 border-[#629878] p-4 rounded-2xl'>
        <EarthLock size={50} className='text-[#629878]'/>
        <h1 className=' font-semibold  text-xl py-3'>Comprehensive Data Protection</h1>
        <p className='text-center font-serif font-medium'>
        Experience complete data protection with state-of-the-art encryption, designed to safeguard all your sensitive information.
        </p>
      </div>
      </div>
      
    </div>

    <div className="flex flex-col md:flex-row items-center gap-16 p-12 max-w-6xl mx-auto">
      <div className="">
        <img
          src={Mockup}
          alt="iPhone 15 mockup"
          className=" h-auto w-h-auto -rotate-6"
        />
      </div>

      <div className="flex flex-col items-start space-y-8 max-w-xl">
        <div className="space-y-3">
          <p className="font-semibold bg-yellow-100 w-fit border border-[#629878] p-2 rounded-xl uppercase tracking-wide">About us</p>
          <h2 className="text-3xl font-bold text-gray-900">Why You Should Join Us</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-green-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Guided You Everyday</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-10">
              Mood tracker protects all trade data with end-to-end encryption for complete security and privacy.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-green-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Visualize Your Results</h3>
            </div>
            <p className="text-gray-600 leading-relaxed pl-10">
              Find an easier way to get real-time updates with our intuitive visualization tools.
            </p>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
   
    </div>
  )
}


// function NavLink({ to,  label }) {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link
//       to={to}
//       className={`flex items-center py-1 px-2 my-2 rounded-full text-sm font-medium ${
//         isActive
//           ? 'text-[#629878] bg-[#fff5DC]'
//           : 'text-[#fff5DC] hover:text-white hover:border-r-2 hover:border-l-2'
//       }`}
//     >
     
//       {label}
//     </Link>
//   );
// }

// NavLink.propTypes = {
//     to: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
// }

