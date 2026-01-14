export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} QuickFiller. All rights reserved.
          </div>

          {/* Right */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Use
            </a>

            {/* <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Chrome Web Store
            </a> */}

            <a
              href="mailto:support@quickfiller.dev"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
