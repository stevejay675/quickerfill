  export default function Hero() {
    return (
      <section className=" bg-gradient-to-b from-gray-50 to-white ">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Effortless Form Filling
                <br />
                for Devs & QA
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md">
                Instantly Populate Forms with Realistic Mock Data with a single click.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium shadow-md hover:shadow-lg">
                  Add to Browser
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/images/hero.png" 
                  alt="QuickFiller form filling demonstration"
                  className="w-full h-auto "
                />
              </div>
              
              {/* Decorative Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-0">
                <div className="absolute md:hidden top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-teal-200 rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative h-24">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64 C240,100 480,100 720,80 C960,60 1200,40 1440,64 L1440,120 L0,120 Z" fill="#f3f4f6" opacity="0.5"/>
            {/* <path d="M0,80 C240,50 480,50 720,70 C960,90 1200,90 1440,70 L1440,120 L0,120 Z" fill="#f3f4f6"/> */}
          </svg>
        </div>
      </section>
    );
  }