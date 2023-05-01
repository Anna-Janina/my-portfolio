import React from "react";

function Nav(props) {
  return (
    <div>
      <nav className="bg-[#0d9488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0">  
            </div>
              
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div>Anna Marcus</div>
                <div href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => {props.setPage("About")}} >
                    About Me
                </div>

                <div href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => {props.setPage("Portfolio")}} >
                    Portfolio
                </div>

                <div href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => {props.setPage("Contact")}} >
                    Contact
                </div>

                <div href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => {props.setPage("Resume")}} >
                    Resume
                </div>
                  
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;