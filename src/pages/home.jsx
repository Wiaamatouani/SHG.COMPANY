
import React from "react";
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/logo.png"
import logow from "../assets/images/logow.png"
import homeimg from "../assets/images/homeimg.jpg"

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
    <>
      
    
     
    
    
     <div class="flex flex-wrap">
      
    <div class="w-full sm:w-8/12 mb-32">
    
    <header className=" top-0 left-0 right-0  z-50 ">
              <div className="lg:px-16 px-4 flex justify-between items-center py-4">
                <div className="flex -ml-10">
                  <img src={logo} alt="Sage Hospitality Group Logo" className="w-24" />
                </div>
  
                {/* Mobile Menu Button */}
                <button 
                  onClick={toggleMenu}
                  className="md:hidden focus:outline-none"
                  aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-900" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-900" />
                  )}
                </button>
  
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <ul className="flex items-center space-x-8 text-base text-black">
                    <li><a className="hover:text-[#a32104] transition-colors duration-200" href="#Home">Home</a></li>
                    <li><a className="hover:text-[#a32104] transition-colors duration-200" href="#About">About</a></li>
                    <li><a className="hover:text-[#a32104] transition-colors duration-200" href="#Services">Services</a></li>
                    <li><a className="hover:text-[#a32104] transition-colors duration-200" href="#Contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
  
              {/* Mobile Navigation */}
              <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-white border-t`}
              >
                <nav className="px-4 py-2">
                  <ul className="space-y-4">
                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item}`}
                          className="block py-2 px-4 text-black hover:text-[#a32104] transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </header>
   
  
      <div id="Home" class="container mx-auto h-full sm:p-10">
       
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold">Welcome to   <span class="text-[#a32104] ">Sage</span> Hospitality Group</h1>
            <div class="w-20 h-2 bg-[#a32104] rounded-2xl my-4"></div>
            <p class="text-xl mb-10">Elevating the art of hospitality with passion and expertise.</p>
            
 <button><a href="#explore"
  type="submit"
  class=" bg-black text-white flex items-start  font-medium px-8 py-2 rounded shadow gap-2 items-center shadow-xl text-lg  backdrop-blur-md
   lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all
    before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full
     before:bg-[#a32104] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150
      before:hover:duration-700 relative  overflow-hidden border-2 rounded-full group"
>
  Explore
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-white group-hover:fill-gray-800"
    ></path>
  </svg>
</a></button>          


          </div>
        </header>
       
      </div>
    </div>
    <img src={homeimg} alt="" className="w-full rounded-2xl p-2 h-48 object-cover sm:h-screen sm:w-4/12" />
  </div>
  <section id="About" class="py-20 -mb-8 px-6 md:px-12 lg:px-20">
    <div class="mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-center lg:gap-16 gap-12">
            <div class="md:w-1/2">
                <h1 class="text-3xl  sm:text-4xl md:text-5xl font-bold">Hospitality   with a Passion for People</h1>
            </div>
            <div class="md:w-1/2 p-4 md:p-6">
                <p class="text-gray-700 mb-6">
                    Founded by a team of hospitality professionals with a combined 75 years of international experience in restaurant operations and asset management, Sage Hospitality Group is redefining Morocco’s culinary and social landscape.
                </p>
                <p class="text-gray-700">
                    Committed to sustainability and well-being, we emphasize the use of locally sourced, fresh, and health-conscious ingredients, evolving our offerings to guide consumers toward a more balanced and nourishing lifestyle.
                </p>
            </div>
        </div>
    </div>
</section>
        <section id="Services" class="py-12 -mt-12 bg-gray-50">
  <div class="mx-auto px-4">
    <div class="flex justify-center flex-col items-center">
      <h2 class="text-3xl font-bold text-center mb-6">Our services</h2>
      <p class="mb-16">Enriching lives through Visionary Hospitality.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
   
      <div class="bg-white p-6 rounded-lg shadow-md ">
      <div class="text-green-700 text-5xl mb-8">
                <svg class="w-12 h-12 text-[#a32104]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
                </div>
        <h3 class="text-xl font-semibold mb-4">Visionary Hospitality</h3>
        <p class="text-gray-600">We enrich lives by creating exceptional experiences for our guests and communities.</p>
      </div>

     
      <div class="bg-white shadow-lg rounded-2xl p-6 ">
                <div class="text-[#a32104] text-5xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <h3 class="font-semibold text-lg">Restaurant Consulting</h3>
                <p class="text-gray-600 mt-2">Expert advice on restaurant operations, menu design, and customer experience.</p>
            </div>
    
            <div class="bg-white shadow-lg rounded-2xl p-6 ">
                <div class="text-[#a32104] text-5xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12  h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v3h12v-3c0-3.31-2.69-6-6-6z" />
                    </svg>
                </div>
                <h3 class="font-semibold text-lg">Event Planning</h3>
                <p class="text-gray-600 mt-2">Full-service event planning and execution for memorable occasions.</p>
            </div>

     
            <div class="bg-white shadow-lg rounded-2xl p-6 ">
                <div class="text-[#a32104] text-5xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a4 4 0 00-4 4v1H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V10a3 3 0 00-3-3h-1V6a4 4 0 00-4-4zm0 0V4m0 0h2m-2 0H9" />
                    </svg>
                </div>
                <h3 class="font-semibold text-lg">Culinary Innovation</h3>
                <p class="text-gray-600 mt-2">Creative and modern approaches to enhance culinary experiences.</p>
            </div>
    </div>
  </div>
</section>

<section id="explore" class="bg-white mt-10">
<div class="flex justify-center items-center ">
  <div class="text-center">
    <h2 class="text-3xl font-bold mb-8">"La Dolce Vita Side"</h2>
    <p class="mb-16 max-w-lg mx-auto">
      We craft spaces blending culinary artistry and exceptional service. Committed to sustainability, we use fresh, local ingredients to inspire a balanced, nourishing lifestyle.
    </p>
  </div>
</div>

	<div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://i.pinimg.com/736x/bb/54/80/bb5480b6ebb24b23422742687f75919d.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Art</h3>
				</a>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://i.pinimg.com/474x/3e/09/ed/3e09ede4ac038d3fcb442d42deadd2fe.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Tradition</h3>
				</a>
				<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/736x/a0/f6/e5/a0f6e54c988a6a0458393624519f581f.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Pride</h3>
					</a>
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://i.pinimg.com/474x/89/a3/ec/89a3ec211b4702cccc5c1ba4fb8b7a7f.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Kitchen</h3>
					</a>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://i.pinimg.com/736x/8e/6a/00/8e6a00615c9c66e72940d7fe4522ddc4.jpg" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Architecture</h3>
				</a>
			</div>
		</div>
	</div>
</section>
  <section  className="py-20 mb-12">
          <div className=" m-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">"Sage Hospitality Group transformed our hotel operations. Their expertise and dedication are unmatched."</p>
                  <div className="flex justify-between items-center">
          
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">Hotel Owner</p>
                    </div>
           
<div class="flex justify-center items-center  rounded-lg w-auto space-x-1 lg:space-x-2">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  
</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">"Working with Sage Hospitality Group for our corporate events has been a game-changer. Highly recommended!"</p>
                  <div className="flex justify-between  items-center">
                   
                    <div>
                      <p className="font-semibold">Ahmed Samer</p>
                      <p className="text-sm text-gray-500">Event Planner</p>
                    </div>
                    <div class="flex justify-center items-center  rounded-lg w-auto space-x-1 lg:space-x-2">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
	</svg>
  </button>

  
</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4">"The restaurant consulting services provided by Sage
                     Hospitality Group were invaluable. Our business has grown
                      significantly."




</p>
                  <div className="flex justify-between items-center">
                    
                    <div>
                      <p className="font-semibold">Hanane Slo</p>
                      <p className="text-sm text-gray-500">Restaurant Manager</p>
                    </div>
                    <div class="flex justify-center items-center  rounded-lg w-auto space-x-1 lg:space-x-2">
  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>        
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <button>
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
	</svg>
  </button>

  <button class="mr-2">
	<svg class="text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/>
	</svg>
  </button>

  
</div>
                  </div>
                </div>
                
            </div>
          </div>
        </section>
        <footer id="Contact" className="text-white bg-[#a32104] py-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center   sm:flex-row sm:justify-between sm:items-start">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={logow} width={160} height={80} alt="Sage Hospitality Logo" className="w-32 -mb-8 sm:w-40" />
            <p className="text-sm sm:text-[15px] mt-2">SAGE HOSPITALITY GROUP</p>
          </div>

          {/* Contact Information */}
          <div className="text-center  sm:text-left">
            <h3 className=" text-xl  font-bold  mt-10 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 mt-6 sm:space-y-3">
              <li>
                <a
                  href="mailto:sagehospitaty@gmail.com"
                  className="text-sm sm:text-base hover:text-gray-300  transition-colors duration-200"
                >
                  sagehospitaty@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-sm sm:text-base hover:text-gray-300 transition-colors duration-200"
                >
                  +1-555-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6 sm:mt-8">
          {/* X (Twitter) */}
          <a
            href="#"
            className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 hover:bg-white"
            aria-label="Follow us on X (Twitter)"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11.3214 8.93654L16.4919 3.05554H15.2667L10.7772 8.16193L7.1914 3.05554H3.05566L8.47803 10.7773L3.05566 16.9444H4.28097L9.022 11.5519L12.8088 16.9444H16.9446L11.3211 8.93654H11.3214ZM9.64322 10.8453L9.09382 10.0764L4.72246 3.95809H6.60445L10.1322 8.89578L10.6816 9.66469L15.2672 16.0829H13.3852L9.64322 10.8456V10.8453Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 hover:bg-white"
            aria-label="Follow us on Instagram"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:text-pink-600"
              viewBox="0 0 15 15"
              fill="currentColor"
            >
              <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 hover:bg-white"
            aria-label="Follow us on LinkedIn"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:text-blue-600"
              viewBox="0 0 13 12"
              fill="currentColor"
            >
              <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 hover:bg-white"
            aria-label="Subscribe to our YouTube channel"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover:text-red-600"
              viewBox="0 0 16 12"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z"
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-xs sm:text-sm">
            ©  SAGE HOSPITALITY GROUP™. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
