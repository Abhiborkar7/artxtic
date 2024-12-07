const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto text-balance">
      <div className="rounded-xl border border-white bg-transparent text-white shadow group grid aspect-square place-items-center gap-6 overflow-hidden p-6 text-center transition-shadow hover:shadow-lg">
        <div className="space-y-1 lg:space-y-3">
          <p className="font-tomato text-3xl font-semibold lg:text-4xl">Generate Images in bulk.</p>
          <p className="text-xs text-gray-200 md:text-sm lg:text-base">With our cutting edge AI you can generate images in bulk with whatever settings you like.</p>
        </div>
        <div className="relative aspect-square w-36 lg:w-52">
          <img
            src="/bulk-example/bulk-1.jpg"
            alt=""
            className="-rotate-6 translate-x-8 -translate-y-12 opacity-50 absolute rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 z-1"
          />
          <img
            src="/bulk-example/bulk-2.jpg"
            alt=""
            className="-rotate-6 -translate-x-28 translate-y-8 opacity-50 absolute rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 z-2"
          />
          <img
            src="/bulk-example/bulk-3.jpg"
            alt=""
            className="-rotate-6 translate-x-28 translate-y-12 opacity-50 absolute rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 z-3"
          />
          <img
            src="/bulk-example/bulk-4.jpg"
            alt=""
            className="undefined absolute rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 z-10"
          />
        </div>
      </div>

      <div className="rounded-xl border border-white bg-transparent text-white shadow aspect-square overflow-hidden p-6 text-center transition-shadow hover:shadow-lg">
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <div className="relative w-full max-w-[16rem] lg:max-w-[20rem]">
            <img
              src="/reference-image.jpg"
              className="rounded-lg object-cover shadow-lg transition-transform hover:scale-105"
              alt="Reference image example"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          <div className="space-y-3">
            <p className="font-tomato text-2xl font-semibold lg:text-4xl">Reference Images</p>
            <p className="text-sm text-gray-200 lg:text-base">Use your own images as reference to generate similar styles</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white bg-transparent text-white shadow group relative aspect-square overflow-hidden p-6 text-center transition-shadow hover:shadow-lg">
        <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 space-y-1 lg:space-y-3">
          <p className="font-tomato text-2xl font-semibold mix-blend-lighten lg:text-5xl">Sick background.</p>
        </div>
        <div className="relative aspect-square w-full">
          <img
            src="/single-example/single-1.jpg"
            alt=""
            className="-rotate-6 top-0 right-0 opacity-50 absolute aspect-square w-36 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 lg:w-52"
          />
          <img
            src="/single-example/single-2.jpg"
            alt=""
            className="-rotate-3 opacity-50 bottom-0 right-0 absolute aspect-square w-36 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 lg:w-52"
          />
          <img
            src="/single-example/single-3.jpg"
            alt=""
            className="rotate-12 opacity-50 bottom-0 left-0 absolute aspect-square w-36 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 lg:w-52"
          />
          <img
            src="/single-example/single-4.jpg"
            alt=""
            className="rotate-6 opacity-50 top-0 left-0 absolute aspect-square w-36 rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 lg:w-52"
          />
        </div>
      </div>

      <div className="rounded-xl border border-white bg-transparent text-white shadow group aspect-square overflow-hidden p-6 transition-shadow hover:shadow-lg">
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <img
              src="/videos-mockup.webp"
              alt="complex editor"
              className="w-full shadow-lg transition-transform group-hover:scale-105"
            />
          </div>
          <div className="font-tomato text-xl font-semibold md:text-2xl lg:text-3xl">
            Generate engaging
            <svg
              viewBox="0 -0.5 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-8 fill-none md:w-10 lg:w-12"
            >
              <path
                d="M19.5 19H9.5C7.29086 19 5.5 17.2091 5.5 15V5"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                strokeWidth="0"
                d="M15.619 7.25C15.2048 7.25 14.869 7.58579 14.869 8C14.869 8.41421 15.2048 8.75 15.619 8.75V7.25ZM19.5 8.75C19.9142 8.75 20.25 8.41421 20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25V8.75ZM20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25C19.0858 7.25 18.75 7.58579 18.75 8H20.25ZM18.75 11.607C18.75 12.0212 19.0858 12.357 19.5 12.357C19.9142 12.357 20.25 12.0212 20.25 11.607H18.75ZM20.0765 8.47973C20.3414 8.16133 20.2981 7.68844 19.9797 7.42349C19.6613 7.15855 19.1884 7.20188 18.9235 7.52027L20.0765 8.47973ZM15.5 12.807L16.0038 13.3626C16.0298 13.339 16.054 13.3137 16.0765 13.2867L15.5 12.807ZM13.931 12.868L13.4663 13.4567L13.4718 13.461L13.931 12.868ZM12.882 12.04L13.3467 11.4513L13.3429 11.4483L12.882 12.04ZM11.2 12.223L10.6226 11.7443C10.6152 11.7532 10.608 11.7623 10.601 11.7716L11.2 12.223ZM11.072 12.375L11.6074 12.9002C11.6112 12.8963 11.615 12.8923 11.6187 12.8884L11.072 12.375ZM7.83052 14.6088C7.54048 14.9046 7.54508 15.3794 7.8408 15.6694C8.13652 15.9595 8.61138 15.9549 8.90141 15.6592L7.83052 14.6088ZM15.619 8.75H19.5V7.25H15.619V8.75ZM18.75 8V11.607H20.25V8H18.75ZM18.9235 7.52027L14.9235 12.3273L16.0765 13.2867L20.0765 8.47973L18.9235 7.52027ZM14.9962 12.2514C14.8266 12.4052 14.5711 12.4151 14.3901 12.275L13.4718 13.461C14.228 14.0465 15.2953 14.005 16.0038 13.3626L14.9962 12.2514ZM14.3956 12.2793L13.3466 11.4513L12.4173 12.6287L13.4663 13.4567L14.3956 12.2793ZM13.3429 11.4483C12.5051 10.7957 11.3004 10.9268 10.6226 11.7443L11.7773 12.7017C11.9377 12.5082 12.2228 12.4772 12.4211 12.6317L13.3429 11.4483ZM10.601 11.7716C10.5774 11.8029 10.5521 11.833 10.5252 11.8616L11.6187 12.8884C11.6826 12.8203 11.7427 12.7489 11.7989 12.6744L10.601 11.7716ZM10.5365 11.8498L7.83052 14.6088L8.90141 15.6592L11.6074 12.9002L10.5365 11.8498Z"
                fill="#4ade80"
              ></path>
            </svg>
            videos of your product.
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3 md:space-y-6">
        <div className="rounded-xl border border-white bg-transparent text-white shadow flex flex-1 items-center justify-center p-6 transition-shadow hover:shadow-lg">
          <p className="font-tomato text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">artxtic.</p>
        </div>
        <div className="rounded-xl border border-white bg-transparent text-white shadow flex flex-1 flex-col justify-between p-6 transition-shadow hover:shadow-lg">
          <div className="flex h-full justify-around">
            <img
              src="/company/twitter.svg"
              alt=""
              className="w-12 md:translate-y-6 lg:w-16"
            />
            <img
              src="/company/youtube.svg"
              alt=""
              className="w-12 md:-translate-y-10 lg:w-16"
            />
            <img
              src="/company/tiktok.svg"
              alt=""
              className="w-12 md:translate-y-8 lg:w-16"
            />
            <img
              src="/company/instagram.svg"
              alt=""
              className="w-12 md:w-16 md:-translate-y-10"
            />
          </div>
          <p className="text-center font-tomato text-xl font-extrabold">One click upload.</p>
        </div>
      </div>

      <div className="rounded-xl border border-white bg-transparent text-white shadow group aspect-square overflow-hidden p-6 transition-shadow hover:shadow-lg">
        <div className="relative flex h-full flex-col justify-between">
          <div className="relative">
            <img
              src="/video-editor.png"
              alt="complex editor"
              className="w-full transition-transform group-hover:scale-105"
            />
            <img
              src="/confused.svg"
              alt=""
              className="absolute -right-10 -top-10 w-24"
            />
          </div>
          <p className="font-tomato text-2xl font-semibold lg:text-4xl">No need of complex softwares.</p>
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
