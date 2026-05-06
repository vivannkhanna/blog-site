import sewerMap from "./assets/images/subway.png";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex items-center gap-0 mb-6">
        <img
          src={logo}
          alt="Logo"
          className="rotate-[20deg] w-32 sm:w-36 md:w-40 lg:w-44 h-auto"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-title !text-black">throwup media</h1>
      </div>

      <div className="relative flex justify-center items-center w-full">
        
        <img
          src={sewerMap}
          alt="Sewer Map"
          className="w-screen h-auto object-contain"
        />

        <button
          onClick={() => navigate("/interviews")}
          className="
            absolute 
            top-[30%] left-[12.5%] 
            sm:top-[32%] sm:left-[13%]
            lg:top-[34%] lg:left-[14%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer

            transform transition-transform duration-200 hover:scale-110 hover:text-gray-600
          "
        >
          interviews
        </button>

        <button
          onClick={() => navigate("/about")}
          className="
            absolute 
            top-[33%] left-[35.5%]
            sm:top-[35%] sm:left-[35%]
            lg:top-[37%] lg:left-[37%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer

            transform transition-transform duration-200 hover:scale-110 hover:text-gray-600
          "
        >
          about us
        </button>

        <button
          onClick={() => window.open("https://www.instagram.com/throwupmm")}
          className="
            absolute 
            top-[30.5%] left-[47%]
            sm:top-[33%] sm:left-[47%]
            lg:top-[34.5%] lg:left-[48.5%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer

            transform transition-transform duration-200 hover:scale-110 hover:text-gray-600
          "
        >
          instagram
        </button>

        <button
          onClick={() => window.open("https://www.tiktok.com/@throwupmedia2")}
          className="
            absolute 
            top-[37%] left-[63%]
            sm:top-[39%] sm:left-[62%]
            lg:top-[41.5%] lg:left-[64.5%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer

            transform transition-transform duration-200 hover:scale-110 hover:text-gray-600
          "
        >
          tiktok
        </button>

        <button
          onClick={() => navigate("/articles")}
          className="
            absolute 
            top-[30%] left-[81%]
            sm:top-[31%] sm:left-[80%]
            lg:top-[33.25%] lg:left-[83%]

            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer

            transform transition-transform duration-200 hover:scale-110 hover:text-gray-600
          "
        >
          articles
        </button>

      </div>
      <Analytics />
    </div>
  );
}