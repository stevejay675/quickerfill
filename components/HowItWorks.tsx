export default function HowItWorks() {
  return (
    <section className=" bg-white  " id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Three steps. No setup. No configuration.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col ">
      
            <div className="border border-gray-200 rounded-lg overflow-hidden h-64 md:h-80">
              <img
                src="/images/step1.png"
                alt="Install QuickFiller from Chrome Web Store"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              Install the extension
            </h3>

            <p className="text-gray-600">
              Add QuickFiller from the Chrome Web Store. No account required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-64 md:h-80">
              <img
                src="/images/step2.png"
                alt="Open a form with empty fields"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              Open any form
            </h3>

            <p className="text-gray-600">
              Works on signups, checkouts, admin panels, and internal tools.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div className="border border-gray-200 rounded-lg overflow-hidden h-64 md:h-80">
              <img
                src="/images/demo2.gif"
                alt="QuickFiller instantly filling a form"
                className="w-full h-full object-cover"
              />
            </div>

             <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
              Click once to fill
            </h3>

            <p className="text-gray-600">
              Fields are populated instantly with realistic mock data.
            </p>
          </div>
        </div>

        {/* Closing line + CTA */}
        <div className="mt-16 flex flex-col items-start gap-6">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition-colors font-medium gap-3"
          >
            <img src="/images/chrome.svg" alt="" className="w-8 h-8" />
            Add QuickFiller to Chrome
          </a>
        </div>

        
      </div>

      {/* Wave Divider */}
        <div className="relative h-24">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* <path d="M0,64 C240,100 480,100 720,80 C960,60 1200,40 1440,64 L1440,120 L0,120 Z" fill="#f3f4f6" opacity="0.5"/> */}
            <path d="M0,80 C240,50 480,50 720,70 C960,90 1200,90 1440,70 L1440,120 L0,120 Z" fill="#f3f4f6"/>
          </svg>
        </div>
    </section>
  );
}