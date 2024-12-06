const Footer = () => {
  return (
    <>
      <div className="mt-10 lg:mt-24">
      </div>
      <div className="px-4 sm:px-8 md:px-14 lg:px-20"><hr className="h-0.5 w-full bg-gray-200" /></div>
      <div className="space-y-4 py-4 md:space-y-6 lg:space-y-8 container mx-auto">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-prose space-y-4">
            <p className="font-tomato text-2xl font-extrabold lg:text-3xl">artxtic</p>
            <p className="text-sm md:text-base">artxtic make it easier to generate high quality products images and videos all at one place without any hassel.</p>
          </div>
          <div className="flex justify-around md:gap-8 lg:gap-10">
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">App</p>
              <div className="l space-y-2 pl-2 text-sm text-white sm:text-base md:text-lg">
                <a href="#feature" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  Features
                </a>
                <a href="#waitlist" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  Waitlist
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">
                Company

              </p>
              <div className="space-y-2 pl-2 text-sm text-white sm:text-base md:text-lg">
                <a href="#about" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  About
                </a>
                <a href="/carrers" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  Carrers
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">
                Support
              </p>
              <div className="space-y-2 pl-2 text-sm text-white sm:text-base md:text-lg">
                <a href="#faq" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  Faq
                </a>
                <a href="mailto:" className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 block">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm md:text-base">
            ©2024 artxtic
          </p>
          <div className="flex text-white">
            <a href="/privacy-policy" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 text-xs md:text-sm lg:text-base">
              Privacy Policy
            </a>
            <a href="/term-condition" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-white underline-offset-4 hover:underline h-9 px-4 py-2 text-xs md:text-sm lg:text-base">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer