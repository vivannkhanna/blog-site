import sewerMap from "./assets/images/subway.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold font-title mb-6 !text-black">throwup media</h1>
      <div className="relative flex justify-center items-center w-full">
        <img
          src={sewerMap}
          alt="Sewer Map"
          className="w-screen h-auto object-contain"
        />

        <button
          onClick={() => navigate("/interviews")}
          className="absolute top-[34%] left-[15%] -rotate-90 text-5xl font-bold text-black bg-transparent border-none p-0 cursor-pointer"
        >
          interviews
        </button>

        <button
          onClick={() => navigate("/about")}
          className="absolute top-[37%] left-[38%] -rotate-90 text-5xl font-bold text-black bg-transparent border-none p-0 cursor-pointer"
        >
          about us
        </button>

        <button
          onClick={() => window.open("https://instagram.com", "_blank")}
          className="absolute top-[34.5%] left-[49.5%] -rotate-90 text-5xl font-bold text-black bg-transparent border-none p-0 cursor-pointer"
        >
          instagram
        </button>

        <button
          onClick={() => window.open("https://tiktok.com", "_blank")}
          className="absolute top-[41.5%] left-[65.5%] -rotate-90 text-5xl font-bold text-black bg-transparent border-none p-0 cursor-pointer"
        >
          tiktok
        </button>

        <button
          onClick={() => navigate("/articles")}
          className="absolute top-[33.25%] left-[83%] text-5xl font-bold text-black bg-transparent border-none p-0 cursor-pointer"
        >
          articles
        </button>
      </div>
    </div>
  );
}