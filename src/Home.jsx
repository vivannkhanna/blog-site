import sewerMap from "./assets/images/subway.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-title mb-6 !text-black">
        throwup media
      </h1>

      <div className="relative flex justify-center items-center w-full">
        
        {/* Image */}
        <img
          src={sewerMap}
          alt="Sewer Map"
          className="w-screen h-auto object-contain"
        />

        {/* Interviews */}
        <button
          onClick={() => navigate("/interviews")}
          className="
            absolute 
            top-[30%] left-[12%] 
            sm:top-[32%] sm:left-[13%]
            lg:top-[34%] lg:left-[14%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer
          "
        >
          interviews
        </button>

        {/* About */}
        <button
          onClick={() => navigate("/about")}
          className="
            absolute 
            top-[33%] left-[34%]
            sm:top-[35%] sm:left-[35%]
            lg:top-[37%] lg:left-[37%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer
          "
        >
          about us
        </button>

        {/* Instagram */}
        <button
          onClick={() => window.open("https://instagram.com", "_blank")}
          className="
            absolute 
            top-[30.5%] left-[46%]
            sm:top-[33%] sm:left-[47%]
            lg:top-[34.5%] lg:left-[48.5%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer
          "
        >
          instagram
        </button>

        {/* TikTok */}
        <button
          onClick={() => window.open("https://tiktok.com", "_blank")}
          className="
            absolute 
            top-[37%] left-[63%]
            sm:top-[39%] sm:left-[62%]
            lg:top-[41.5%] lg:left-[64.5%]

            -rotate-90 
            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer
          "
        >
          tiktok
        </button>

        {/* Articles */}
        <button
          onClick={() => navigate("/articles")}
          className="
            absolute 
            top-[29.5%] left-[81%]
            sm:top-[31%] sm:left-[80%]
            lg:top-[33.25%] lg:left-[83%]

            text-sm sm:text-lg md:text-3xl lg:text-5xl 
            font-bold text-black

            bg-transparent border-none px-2 py-1 cursor-pointer
          "
        >
          articles
        </button>

      </div>
    </div>
  );
}