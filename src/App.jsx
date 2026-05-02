import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import kimjImg from "./assets/images/kimj.jpg";
import kuruImg from "./assets/images/kuru.png";
import effieImg from "./assets/images/effie.jpg";
import mgnaImg from "./assets/images/mgna.jpeg";
import jackzebraImg from "./assets/images/jackzebra.jpg";
import billionImg from "./assets/images/billionhappy.jpg";

function Interviews() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-black">No interviews yet, stay tuned...</h1>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-black">Page under construction...</h1>
    </div>
  );
}

function Articles() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
      
      <div className="max-w-3xl w-full text-left">
        
        <h1 className="text-5xl font-bold mb-8 text-black">
          Asian American Recognition in Underground Music
        </h1>
        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">By Lloyd (May 2nd, 2026)</h2>

        <p className="mb-6 text-lg text-black">
        Since May is Asian American and Pacific Islander Heritage Month, I wanted to share with you guys some important people in the underground scene who identify as API.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">kimj</h2>
        <img src={kimjImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        The first person I wanted to talk about is kimj. He is a Korean-American music producer from Busan (where im from!!). He has produced for so many other artists you all probably know (ex. Youngboy, ericdoa, glaive, 2hollis, Che, and etc.) He makes his own music and it sounds very electronic adjacent. He is also part of the collective My Unnies with all Asian musicians and we’ll get to some of the other members later on. I really think this is an artist you must check out. 
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> Crash out, My Unnies, I want something more
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Kuru</h2>
        <img src={kuruImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Kuru has been growing rapidly the past few months with his new album Backstage Hologram. He is a half white half asian rapper and producer from Maryland. He has been in the scene for many years even way back when quinn, blackwinterwells, and kurtains were making “hyperpop” music. Now he makes this electronic inspired rap that reminds me of music that would be in a racing game or shonen anime series. Very fast paced but also mellow at the same time. I’ve followed him through his growth and change and I believe this is really one person that you have to keep an eye out for in the upcoming years.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> Like Glue, Shibuya Transfer, Somewhere Going Home
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Effie</h2>
        <img src={effieImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Effie is truly a one of one artist. She is from Korea and is also part of the same collective as kimj. For me, she would have to be one of the best artists now in the scene. She makes this rap-and-electronic-fusion genre. Her voice is so unique it just makes you want to keep listening. Her voice reminds me of Danielle from NewJeans but instead she’s rapping on hard electronic instrumentals. What else could you ask for? Even if you don’t understand Korean, she is a must listen.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> CAN I SIP 담배, Down, LETS FIND A GOOD MANAGER
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">MGNA CRRRTA</h2>
        <img src={mgnaImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        MGNA CRRRTA is an electronic music duo. The names of the members are Farheen and Ginger. Farheen identifies as a brown woman but we do not know her exact ethnicity. They met each other on a Hunger Games Minecraft server and became close after that. They are one of the bands in the forefront pushing this new wave of EDM music that I love. Their new album Beautiful Disaster is a must listen as well as all of their other projects. 
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> Armageddon / Seventh Heaven, Pur Love, Girl Party
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Jackzebra</h2>
        <img src={jackzebraImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Jackzebra blew up around a year or two ago from comments of people calling him “Chinese Bladee”. People laughed about it but realized that his music was truly different and people eventually tapped in. He is from Shanghai, China but currently lives in Chengdu, China. He makes this dreamy like rap with hard hitting instrumental and hard 808s but his vocals that are mumbly and sleepy. I love it. He raps in all Chinese but he still collaborates with household American artists like Lucy Bedroque and kuru. I understand that this music might not be for everyone, but give it a try and you might be on the hype train like me.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> 你怎么知道, Mosquito, 硬碰硬
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Billionhappy</h2>
        <img src={billionImg} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Billionhappy is probably one of my favorite artists right now as well. Hailing from Anhui China, he is a musician as well as an important fashion figure. Definitely check out his Instagram. His music is very bright and happy. It really feels like you injected a Chinese guy with Serotonin and Caffeine and told him to rap on an EDM instrumental. His voice and instrumental just mesh together amazingly and I believe Billionhappy is someone everyone must keep an eye on. I really hope he leans towards the electronic side of music because the emotions his music gives me is unexplainable.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> 阴暗B, She Sing It, 夏天的风
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">These are just some of my favorites or ones that I know the most about. There’s so many others like… </h2>
        <p className="mb-6 text-black">
          mitsu, The Deep, SEBii, Tiffany Day, rexv2, R!R!Riot, asianrok, Bloodz Boi, yoyi, Imsickstrarry, Lazy Doll (my personal favorite)
        </p>

        <p className="mt-10 text-black">
          I hope you explore these artists and discover something new. Happy API Heritage Month!
        </p>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}