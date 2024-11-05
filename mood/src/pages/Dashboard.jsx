import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Logo from '../assets/Logo.png'
import Emotional from '../assets/emotional.png'
import { EarthLock, Award } from 'lucide-react'
import Mockup from '../assets/Mockup.png'

export function Dashboard ()  {



  return (
    <div className='bg-[#fff5DC]'>
   <div className='flex justify-between items-center bg-[#629878]'>
   <Link to="/" className="flex  items-center px-2 py-2 text-gray-900">
      <img src={Logo} className='w-12 h-12' alt="" />
      <span className="text-xl font-semibold text-[#fff5DC] capitalize">MoodTracker</span>
    </Link> 
    
    <div className="flex space-x-4 2">
        <NavLink to="/" label="Article" />
        <NavLink to="/" label="About" /> 
        <NavLink to="/" label="Licenses" />
    </div>

    <div>
      <Link to="/register">
        <button className='bg-[#fff5DC] text-[#629878] mx-5 py-2 px-5 rounded-3xl font-semibold'>Register</button>
      </Link>
    </div>

   </div>
   <div className="bg-orange-50 md:min-h-[80vh] min-h-[70vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-4 pt-10 md:py-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-serif text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight tracking-wide text-center md:text-left text-gray-700">
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
              <button className="border-2 border-[#629878] text-[#629878] px-8 py-3 rounded-3xl font-medium hover:bg-orange-50 transition-colors duration-200">
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

    <footer className="bg-[#629878] text-[#fff5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="MoodTracker Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold tracking-tight">MoodTracker</span>
            </div>
            <p className="text-[#fff5DC]/90 leading-relaxed">
              MoodTracker is dedicated to helping you understand and improve your emotional 
              well-being through daily tracking and insightful data visualization. Our platform 
              is built with privacy in mind, offering secure and user-friendly tools to support 
              your mental health journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto lg:ml-0">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="" 
                className="hover:text-white transition-colors duration-200 w-fit"
              >
                About Us
              </Link>
              <Link 
                to="" 
                className="hover:text-white transition-colors duration-200 w-fit"
              >
                Contact
              </Link>
              <Link 
                to="" 
                className="hover:text-white transition-colors duration-200 w-fit"
              >
                Privacy Policy
              </Link>
              <Link 
                to="" 
                className="hover:text-white transition-colors duration-200 w-fit"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#fff5DC]/20">
          <p className="text-center text-sm text-[#fff5DC]/80">
            &copy; {new Date().getFullYear()} MoodTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}


function NavLink({ to,  label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-1 px-2 my-2 rounded-full text-sm font-medium ${
        isActive
          ? 'text-[#629878] bg-[#fff5DC]'
          : 'text-[#fff5DC] hover:text-white hover:border-r-2 hover:border-l-2'
      }`}
    >
     
      {label}
    </Link>
  );
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

