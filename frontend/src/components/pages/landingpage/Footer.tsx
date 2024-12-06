const Footer = () => {

  return (
    <>

      <footer className="space-y-4 py-4 md:space-y-6 lg:space-y-8 text-center md:text-left mx-44 mt-32 ">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-prose space-y-4">
            <p className="font-tomato text-2xl font-extrabold lg:text-3xl">artxtic</p>
            <p className="text-sm md:text-base">artxtic makes it easier to generate high-quality product images and videos all at one place without any hassle.</p>
          </div>
          <div className="flex justify-around md:gap-8 lg:gap-10">
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">App</p>
              <div className="space-y-2 pl-2 text-sm text-gray-500 sm:text-base md:text-lg">
                <a href="#feature" className=" hover:underline h-9 px-4 py-2 block">Features</a>
                <a href="#waitlist" className=" hover:underline h-9 px-4 py-2 block">Waitlist</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">Company</p>
              <div className="space-y-2 pl-2 text-sm text-gray-500 sm:text-base md:text-lg">
                <a href="#about" className=" hover:underline h-9 px-4 py-2 block">About</a>
                <a href="/careers" className=" hover:underline h-9 px-4 py-2 block">Careers</a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-tomato text-base font-semibold md:text-lg lg:text-xl">Support</p>
              <div className="space-y-2 pl-2 text-sm text-gray-500 sm:text-base md:text-lg">
                <a href="#faq" className=" hover:underline h-9 px-4 py-2 block">FAQ</a>
                <a href="mailto:" className=" hover:underline h-9 px-4 py-2 block">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm md:text-base">©2024 artxtic</p>
          <div className="flex text-gray-500">
            <a href="/privacy-policy" className=" hover:underline h-9 px-4 py-2 text-xs md:text-sm lg:text-base">Privacy Policy</a>
            <a href="/terms-condition" className=" hover:underline h-9 px-4 py-2 text-xs md:text-sm lg:text-base">Terms & Conditions</a>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
