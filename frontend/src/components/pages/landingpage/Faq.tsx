import { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col items-center justify-around md:flex-row mx-44 mt-44 mb-44">
      <div className="space-y-3">
        <p className="relative text-center font-tomato text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
          Faq
        </p>
        <span className="inline-block font-poly-sans text-base">
          Still got questions?
          <a
            href="mailto:"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline h-9 p-0 text-base underline group relative text-emerald-400"
          >
            Mail us
            <svg
              className="absolute -top-1 right-0 h-10 w-10 fill-rose-400 stroke-rose-400 opacity-0 transition-opacity group-hover:opacity-100"
              viewBox="0 0 99 91"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728"
                strokeWidth="1.83638"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </span>
      </div>

      <div className="w-full md:w-1/2">
        {/* FAQ Item 1 */}
        <div className="border-b" key="0">
          <h3 className="flex">
            <button
              type="button"
              onClick={() => toggleFAQ(0)} // Toggle for the first FAQ item
              className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 font-tomato text-sm font-semibold sm:text-base md:text-lg"
            >
              What is artxtic?
              <svg
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === 0 ? "rotate-180" : ""}`}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          {openIndex === 0 && (
            <div className="mb-4 text-sm">
              <p>Artxtic is a platform for generating creative visuals using AI.</p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b" key="1">
          <h3 className="flex">
            <button
              type="button"
              onClick={() => toggleFAQ(1)} // Toggle for the second FAQ item
              className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 font-tomato text-sm font-semibold sm:text-base md:text-lg"
            >
              Can I generate multiple images at once?
              <svg
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === 1 ? "rotate-180" : ""}`}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          {openIndex === 1 && (
            <div className="mb-4 text-sm">
              <p>Yes, you can generate multiple images by selecting the required options.</p>
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b" key="2">
          <h3 className="flex">
            <button
              type="button"
              onClick={() => toggleFAQ(2)} // Toggle for the third FAQ item
              className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 font-tomato text-sm font-semibold sm:text-base md:text-lg"
            >
              How do reference images work?
              <svg
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === 2 ? "rotate-180" : ""}`}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          {openIndex === 2 && (
            <div className="mb-4 text-sm">
              <p>Reference images help the AI understand the style or theme you want.</p>
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div className="border-b" key="2">
          <h3 className="flex">
            <button
              type="button"
              onClick={() => toggleFAQ(3)} // Toggle for the third FAQ item
              className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 font-tomato text-sm font-semibold sm:text-base md:text-lg"
            >
              What types of visuals can I create?
              <svg
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === 2 ? "rotate-180" : ""}`}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h3>
          {openIndex === 3 && (
            <div className="mb-4 text-sm">
              <p>
                You can create a wide variety of visuals, including illustrations, landscapes, and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq;