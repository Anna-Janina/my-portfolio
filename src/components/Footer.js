import React from "react";


function Footer() {
  return (
    <div className="fixed bottom-0 w-full">
      <nav className="bg-[#0d9488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <p>© 2023 Anna Marcus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
  

export default Footer;