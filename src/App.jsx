import { Routes, Route } from "react-router-dom";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home";
import kimjImg from "./assets/images/kimj.jpg";
import kuruImg from "./assets/images/kuru.png";
import effieImg from "./assets/images/effie.jpg";
import mgnaImg from "./assets/images/mgna.jpeg";
import jackzebraImg from "./assets/images/jackzebra.jpg";
import billionImg from "./assets/images/billionhappy.jpg";
import ahksosa from "./assets/images/ahksosa.png";
import lazydoll from "./assets/images/lazydoll.png";
import aidn from "./assets/images/aidn.png";
import mexiko from "./assets/images/mexiko.jpeg";
import slayworld from "./assets/images/slayworld.jpg";
import shine from "./assets/images/shine.jpg";
import amygdala from "./assets/images/amygdala.jpeg";
import crest from "./assets/images/crest.png";
import dandg from "./assets/images/dandg.jpeg";
import e from "./assets/images/e.jpg";
import pxe from "./assets/images/pxe.jpg";
import trashisland from "./assets/images/trashisland.jpeg";
import lloydImg from "./assets/images/lloyd.png";
import vivannImg from "./assets/images/vivann.png";
import ss1 from "./assets/images/ss1.png";
import ss2 from "./assets/images/ss2.png";
import ss3 from "./assets/images/ss3.png";
import skai1 from "./assets/images/skai1.mov";
import skai2 from "./assets/images/skai2.mov";
import skai3 from "./assets/images/skai3.mov";
import sign1 from "./assets/images/sign1.png";
import sign2 from "./assets/images/sign2.png";
import sign3 from "./assets/images/sign3.png";
import sign4 from "./assets/images/sign4.png";
import sign5 from "./assets/images/sign5.png";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const articles = [
  {
    id: "top-ecco2k",
    title: "Top 12 Ecco2k Songs of All Time",
    author: "Lloyd",
    date: "May 17, 2026",
    thumbnail: sign5,

    content: (
      <>
        <p className="mb-6 text-lg text-black">
        I am a huge fan of Ecco2k’s music and his other works as well. He is probably one of my top 5 favorite musicians of all time and in conversation for my favorite human of all time (lol). Ecco2k, real name Zak Arogundade, is a member of the renowned music collective Drain Gang. He is a model, artist, fashion designer, and just a very creative person. I’ve been listening to him for the past few years (since 2020) and followed his journey making music. Today I want to talk about my personal Top 12 Ecco2k songs. Here are the guidelines:
        </p>

        <ol className="list-decimal ml-6 space-y-2 text-black mb-8">
          <li>No unreleased or songs not on streaming platforms because even though I know some of his unreleased catalog, I have never fully dove into that space. I also don't want people saying I missed a super niche unreleased song 5 people have heard. I don’t want to open that can of worms. So sorry, songs like Play Em Like Atari, guardianAngels, and HOLDMEDOWNLIKEGRAVITY will not be on this list even though they would’ve easily made my top 12.</li>
          <li>Only songs that are on Ecco’s page will be on this. That means features won’t be here. I know that there are some songs that he is featured on that sound amazing, but that is just too many songs to take into account for this 12 song list. Songs from Drain Gang tapes will still be here.</li>
          <li>Also if another artist is on the song, I will also be taking into account their verse. For example, if Bladee has a bad verse on a song but Ecco has a good verse I will judge the song on how good the song is as a whole, not just Ecco’s verse.</li>
        </ol>

        <p className="mb-6 text-lg text-black">
        Here are some songs that were so close to making it on the list but there were just better songs :(. Everyone should still check these songs out. They are still amazing.
        </p>

        <ol className="list-decimal ml-6 space-y-2 text-black mb-8">
          <li>1:1 - Ecco2k, Yung Lean, and Thaiboy Digital</li>
          <li>Western Union - Ecco2k, Bladee, and Thaiboy Digital</li>
          <li>Stalker - Ecco2k and Bladee</li>
          <li>Victim - Eco2k, Bladee, and Thaiboy Digital</li>
          <li>GT-R - Ecco2k</li>
          <li>You lose - Ecco2k, Bladee, Thaiboy Digital</li>
          <li>Nosebleed - Ecco2k and Thaiboy Digital</li>
          <li>Calcium - Ecco2k</li>
          <li>Sugar and Diesel - Ecco2k</li>
          <li>Jalouse - Ecco2k</li>
          <li>Black Boy - Ecco2k</li>
          <li>White Meadow - Ecco2k and Bladee</li>
          <li>Expression on your face - Ecco2k, Bladee, and Mechatok</li>
        </ol>

        <p className="mb-6 text-lg text-black">
        Ok, let's get into it.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">12. AAA Powerline - Ecco2k</h2>
        <img src={e} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        AAA Powerline is the opening song to Ecco2k’s personal project “E” released in 2019. This song is just flat out amazing. The song is produced by Shanti and vocals are by Ecco2k. This song’s dreamy synths mixed with the hard kicks of the drums is just superb. Ecco’s vocals also just add such a beautiful touch and almost makes this sound like meditation music you find on YouTube. The perfect association for this song would be a bubble bath after a hard day. It just makes you feel like you’re floating. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">11. Amygdala - Ecco2k & Bladee</h2>
        <img src={amygdala} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Amygdala is a single released on January 19, 2022. The song is produced by Mechatok with vocals from Ecco2k and Bladee. This song was released just about 2 months before “Crest” (A collab album between Ecco and Bladee) was released. This song exhibits the strong chemistry they have together. Ecco and Bladee’s vocals just mesh so well on the single. Bladee’s relaxed vocals open up the song and then transitions to Ecco’s signature highpitched-energetic voice as the beat is about to drop. Amazing is the only word I can describe this song with. This electronic beat mixed with Ecco and Bladee’s vocals create this colorful-candyland-like feel for the song. Hearing this song you just want to dance and groove. Definitely check this song out. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">10. First Crush - Ecco2k, Bladee, & Yung Lean</h2>
        <img src={dandg} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        First Crush is part of the Drain Gang project “D&G” released on August 7, 2017. This song features vocals from Ecco2k, Bladee and Yung Lean. It is also produced by the renowned producer, Whitearmor. For me, this is the most classic sounding “Drain Gang” song. The Whitearmor produced ambient-cloudy instrumental combined with the relaxed-highly-autotuned vocals of Bladee and Ecco’s almost omnipotent vocals. Yung Lean’s relaxed rapping also works so well here. The way Ecco’s introduced in this song is so clean. There’s no break. The transition from Bladee’s verse to Ecco’s is seamless and this little detail just adds so much to the song. This song is a must listen if you want to get into Drain Gang.
        </p>
        
        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">9. Acid Rain - Ecco2k & Bladee</h2>
        <img src={trashisland} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Acid Rain is part of the Drain Gang project named “Trash Island” released September 12, 2019. This song is produced by Mechatok and Whitearmor with vocals from Ecco2k and Bladee. This song’s instrumental is so colorful. The bouncy synths in the background with the bright keys bring this elated mood to this song that I absolutely love. Bladee’s signature relaxed voice shines in this song as it introduces this song perfectly. Then, Ecco’s bright, high, and passionate vocals come in for the hook. Then as the drop hits, Ecco’s voice changes to this extremely high shaky vocal that adds to the already chaotic drop. The drums on this drop increase in intensity from before and mixed with the vocals creates this organized chaos that I love. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">8. Happily Ever After - Ecco2k</h2>
        <img src={dandg} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Happily Ever After is part of the Drain Gang tape “D&G”. This is a solo song by Ecco and it is produced by Whitearmor again. The instrumental of this song is so positive while feeling relaxing. It’s not doing too much but doing enough at the same time. This song showcases a more regular tone from Ecco and it just works so well. His voice just sounds like his regular self. This song just sounds like sitting inside of a forest and taking in the environment. This song is one of the most experimental Ecco songs and I would say it still works super well. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">7. Don’t Ask - Ecco2k</h2>
        <img src={e} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Don’t Ask is a song off of Ecco’s solo project “E”. The song is produced by Whitearmor. This song, in my opinion, has one of the greatest soundscapes of all the songs I have ever heard. This song lacks drums so the focus is totally on Ecco’s voice and the instrumental. The xylophone-like keys, the slight bird chirps you can hear in the background, Ecco’s adlibs chanting in the background, and his high-pitched relaxed vocals with little energy makes this song sound like a futuristic tropical island. I don’t know how to explain it but the atmosphere is truly something I have never felt before. This addictive melody made by Whitearmor feels so refreshing and calming. I suggest every human being to experience this song once.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">6. Waterfall - Ecco2k, Bladee, & Thaiboy Digital</h2>
        <img src={trashisland} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Waterfall is a song off of the Drain Gang album “Trash Island”. This song features vocal performances from Ecco2k, Bladee, and Thaiboy Digital. This song is also produced by Whitearmor. This song’s ambient feel truly makes you feel entranced. The mix of the calm vocals of all of Drain Gang adds this excited feeling to this ambient instrumental. I believe that this song is one of the special songs where every member has a 10/10 performance. Thaiboy’s relaxed hook perfectly mixes with the instrumental. Bladee’s vocals bring a bright feeling to this song and Ecco’s verse brings an amazing signature passionate feeling that is expected from him. If you really want a song that shows the upsides of all Drain Gang members, this is the perfect song for that. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">5. The Flag is Raised - Ecco2k & Bladee</h2>
        <img src={crest} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        The Flag is Raised is a song from “Crest”, Ecco2k and Bladee’s collaboration album released on March 18, 2022. This song includes vocals from both of them and also, again, this song is produced by Whitearmor. I vividly remember the first time I listened to this song. Crest just dropped and I had no idea so I just sat down to listen to this album. This being the first song of the album, I just clicked on play without thinking too much. Once this song started playing, I knew this album would be one of my favorites of all time. Bladee’s energetic vocals surprisingly work so well on this song. Ecco’s vocals transcend this song into one of the greatest songs I have ever heard. The instrumental is also just so happy and jovial, it really just gives me hope for life. This song is a must listen if you really want to get into Drain Gang. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">4. Desire is a Trap - Ecco2k & Bladee</h2>
        <img src={crest} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Desire is a Trap is a song from “Crest”. The song features vocals from Ecco and Bladee and, again, it is produced by Whitearmor. This song’s instrumental is nothing less than magical. The mosquito-like synth that opens the track feels so nostalgic for something I haven’t experienced yet. The track opens with Ecco’s verse. In my opinion, this is probably one of Ecco’s best verses he has ever done on any song. The way he flows on this magical instrumental feels like frolicing in an open field on a sunny day. It is nothing short of amazing. Then Bladee shows his angelic heavily auto-tuned vocals that shine through right after Ecco’s verse. This song really has a feeling of letting go and enjoying freedom. Nothing is holding you down, just keep going. I love when Drain Gang songs have this indescribable hopeful feeling. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">3. Faust - Ecco2k & Bladee</h2>
        <img src={crest} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Faust is a song from “Crest”. The song features vocals from Ecco and Bladee and, again, it is produced by Whitearmor. The instrumental feels like what the gates of heaven would feel like. The reverbed keys with the dreamy synths in the background feel so heavenly. I don't know how else to describe this song but heaven. Ecco uses both his high voice and his normal voice in this song. The hook, where he uses his normal voice, is so addicting. It feels as if his voice is blending into the instrumental to create this ethereal feeling. Bladee also has an amazing performance in this song. His nonchalant autotuned voice shines through between Ecco’s verse as a more relaxed section of the song. Even though he has a smaller verse, it still displays his talent. I just cannot get enough of Ecco’s verse in this song. His flow and voice combined with this heavenly instrumental is so hard to top. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">2. In the Flesh - Ecco2k</h2>
        <img src={pxe} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        In the Flesh is a song from Ecco2k’s solo EP “PXE” dropped on March 31, 2021 (My birthday!!). It is actually produced and sung by Ecco. The instrumental starts off with these super distorted synths then transforms to this fairy-dreamy instrumental. This is exactly how I think fairy dust would sound like. Ecco uses his high pitched voice again in this song which will always be a hit. The main interesting thing about this song is his lyrics. It is truly emotional. He wonders if this is all there is to life. He is confused and vulnerable: showing his true colors. He talks about love as well in this track. He wants someone but still questioning the bounds of life and if he can go beyond. He also talks about his other problems like people telling him to get help and how people won’t listen to him. A lot of the messaging is ambiguous, like most of his other songs, but the way he just spills his problems into this dreamy track will forever stick with me and it is definitely one of my favorite songs of all time. 
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">1. Security! - Ecco2k</h2>
        <img src={e} className="w-64 h-64 object-cover rounded-xl mb-4"/>
        <p className="mb-4 text-black">
        Security! is a song off of Ecco’s solo project “E”. The song is produced by Mechatok and Gud. I don’t even know where to begin with this song. This is one of the only songs I will ever consider perfect. The instrumental is just superb. It doesn’t have any drums so you can really focus on this addicting digital melody. It also features some botanica (amazing genre you guys should check out) type production in some parts of the song that I just love. There is also this lead that gets introduced in the middle that makes this song just sound even more transcended. His voice in this song is a mix of his high pitched voice and his normal voice. I don’t really know how to 100 percent explain it. The energy is like his normal voice but it sounds like his high pitched voice, but I promise you, it is the best I have ever heard Ecco. The lyrics in this song are also nothing short of amazing. He talks about reaching perfection and changing himself to be who he wants to be. He mourns the fact that he’ll never reach the look that he wants and how even staring into the mirror is difficult. Ecco’s emotion shines through in these lyrics that I think about every time I listen to this song. The music video for this song is also so amazing. It shows him in a room with hanging lights and surrounded by mirrors, reflecting the lyrics of the song. The comment section of this Youtube video says some interesting things that I want to share with you guys. @VictorClvtt said “Listening to Ecco's music feels like drinking cold water through your ears, it's lovely”. @Frosty.Fingers said “This is exactly what McDonald’s sprite sounds like”. Finally, @filiphjelm4471 said “This sounds like Owl City’s Fireflies but with more ketamine and body dysmorphia”. I really want you guys to go listen to this song as it is definitely in my top 5 songs of all time. 
        </p>

        <p className="mt-10 text-black">
        I hope you guys enjoyed this article! This full thing took me upwards of 25 hours so I really hope you guys take your time to read and dive into the amazing discography of Ecco2k. If he really isn’t your cup of tea I suggest you look into the other people in Drain Gang, but just please at least go listen to some new music because of this article. 
        </p>
        <p className="mt-10 text-black">
        - Lloyd
        </p>
      </>
    ),
  },

  {
    id: "history-of-pluggnb",
    title: "A History of Pluggnb",
    author: "Vivann",
    date: "May 8, 2026",
    thumbnail: sign4,

    content: (
      <>
        <p className="mb-6 text-lg text-black">
        A re-listen to What We Have, the album by acclaimed artist Summrs, had me thinking about the genre it belongs to as a whole: pluggnb. Dominated by loud, autotuned vocals and upbeat, soft beats, pluggnb is a genre I have loved for what seems like years. It is because of this deep liking I have for these albums and artists that I wanted to revisit the complete history of pluggnb, and maybe you could be convinced to take a look and see what you think.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Early Beginnings</h2>
        <img src={mexiko} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        You may have heard of the genres dark plugg or dream plugg, and think that they have some relation to pluggnb. That is actually correct; they all stem from a precursor genre that is still being made today called plugg. The name plugg comes from the 2013 collective of rappers and producers called BeatPluggz, some of the more popular producers and artists from that era being MexikoDro and Corey Lingo. They and the whole collective showed signs of what was to come with pluggnb, using largely melodic vocal styles with “sparkly” instrumentals in the background. Playboi Carti was another artist who pioneered the melodic side of plugg with his self-titled album four years after BeatPluggz. Pluggnb wouldn't be a thing if it weren’t for this collective, and after that, we started to see pluggnb truly take shape.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">The Golden Age</h2>
        <img src={slayworld} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        XanGang is a producer that is considered to be the pioneer of pluggnb. He was closely associated with artists Summrs, Kankan, Weiland, and Autumn, all part of the label/collective Slayworld, which was officially formed in 2016. When I think of this time in music, especially the history of pluggnb, I think of the Revived EP by Summrs, a project featuring many producers such as Xangang and Goyxrd. This project was instrumental in creating many trends closely associated with pluggnb, such as sustained guitar melodies and the heavy use of sound effects that would become commonplace over time. Nina! by Autumn was also a song that shows the state of pluggnb at the time and the innovation happening in the scene. This song in particular is where I believe loud synth melodies started becoming even more popular in this space. With projects like Nothing More Nothing Less by Summrs, pluggnb maintained its spot in the scene for a while, but with the split of Slayworld in 2021 the genre started to stagnate a little more.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Current State of Pluggnb</h2>
        <img src={shine} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        With the popularity of the rage sound in today’s underground music landscape, pluggnb has sadly largely fallen to the wayside in terms of involvement today. However, there are still some contemporaries that keep evolving pluggnb even past its prime. Summrs continued to make pluggnb projects like What We Didn’t Have and B4DARAVEN, with a song like Top Off/House Arrest on the former being a prime example of pluggnb at its core. Lil Shine and Corey Lingo (yes, the one that was a part of BeatPluggz, he rarely gets his flowers for this) are probably my two favorites apart from Summrs that still make pluggnb to this day. Specifically Lil Shine’s albums Losing Myself and Lovesick showed me just how much pluggnb could still evolve when I first listened to them. Songs like Mistakes or Stars are quintessential examples of the vocal abilities of pluggnb artists, and his continued contributions to the genre are still making waves in the scene.
        </p>

        <p className="mt-10 text-black">
        Thank you so much for reading, below are some song recommendations for anyone wanting to get into pluggnb. Check these out if you’re interested!
        </p>
        <p className="mt-10 text-black">
        Z06 - Summrs, Bloods Always Thicker - Summrs, da boss - Summrs, Nun To Me 2 - Kankan, Nina! - Autumn!, Still the Same - Autumn!, Loser - Lil Shine, Stars - Lil Shine, Choose Up (feat. Corey Lingo) - Lil Shine, Mistakes - Lil Shine
        </p>
      </>
    ),
  },

  {
    id: "innovative-underground-artists",
    title: "Innovative Underrepresented Artists",
    author: "Vivann",
    date: "May 6, 2026",
    thumbnail: sign3,

    content: (
      <>
        <p className="mb-6 text-lg text-black">
        The idea for this article came from relistening to Still Slime a few days ago, the now deleted producer tape by boolymon featuring Osamason (R.I.P.). I remembered when I first listened to boolymon’s solo songs, and I loved how novel of a take they were on underground rap at the time. Appreciating artists that don’t get love from the mainstream yet is one of my favorite things about the underground, because it feels like you can see the appeal of art that the industry didn’t get to see yet. Here are three that speak out to me right now.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">Ahksosa</h2>
        <img src={ahksosa} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Probably the most criminally underrated artist I’ve come across in a while, he has been making a wide range of music since 2021. According to CashCowMusic, he actually used to model before becoming a music artist, meaning he already had an established image on social media before starting his music journey. Songs like Insta Digis show him able to raise the energy in his songs with loud horns and synths in the background, while songs like Skater P show his skill to use different voices and make the song his, even with a simplistic instrumental. I think the most groundbreaking thing about him is that he isn’t afraid to include many different voices or sounds in his projects; he is clearly proficient in his many styles, and he is someone everyone should check out.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> Insta Digis, Caution, Skater P
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">lazydoll</h2>
        <img src={lazydoll} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        The only way I could describe lazydoll is if you fused boolymon, xaviersobased, and Lil Shine together, and that honestly doesn’t really describe all of his music still. His album music for ecology shows his love for in-your-face vocals and instrumentals. Particularly, his take on the jerk sound with songs like groOoOoOow and trauma is one of my favorites. His new album absence is such an amazing 25-minute listen, with cloud-y synths and hard-hitting drums that I really haven’t found replicated anywhere else. It is hard to pick favorites from this album, but some that I love are the relaxed flow of thoughts, the fun rhythms of straycat, and the great opener anesthesia. He is definitely someone who deserves your attention, any one of his albums or the song recs below are an amazing place to start.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> crows, groOoOoOow, hitori
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-2 text-black">aidn.</h2>
        <img src={aidn} className="w-full h-64 object-cover rounded-xl mb-4" />
        <p className="mb-4 text-black">
        Okay, he’s a little more popular than the other two, but I need a good enough excuse to talk about his music. His production is defined by EDM, with heavy bass hits on every quarter note and sharp synths, giving all of his music a layered, diverse soundscape. I think where he really shines is in his vocal contributions, using a staccato delivery to complement the beat. At times, it feels like he is part of the beat, especially in songs like déjà vu, and it gives much of his music a unique feel. I think more artists of this genre should try to draw inspiration from him in this regard; his voice literally sounds like a synth in half of his songs. I think in a couple of years, especially with his new songs like harajukugirl getting better and better, he will be someone talked about everywhere. You should definitely hop on the train early.
        </p>
        <p className="mb-6 text-black">
          <b>Song Recs:</b> déjà vu, harajukugirl, dancewithme
        </p>

        <p className="mt-10 text-black">
          Thank you so much for sticking around until the end. Be sure to check some of these people out!
        </p>
      </>
    ),
  },

  {
    id: "kuru-skaiwater-beef",
    title: "Kuru and Skaiwater Beef",
    author: "Lloyd",
    date: "May 5, 2026",
    thumbnail: sign2,

    content: (
      <>
        <p className="mb-6 text-lg text-black">
        Just over a day ago, Jane Remover dissed streamer Dabo in a new song on Soundcloud. Skaiwater did not seem to like this, saying how Jane Remover is racist.
        </p>

        <div className="flex gap-4 mb-4">
          <img
            src={ss1}
            className="w-1/2 h-auto object-contain rounded-xl"
          />
          <img
            src={ss3}
            className="w-1/2 h-auto object-contain rounded-xl"
          />
        </div>
        <video
          src={skai1}
          controls
          className="w-full max-w-sm mx-auto rounded-xl mb-6"
        ></video>
        <p className="mb-4 text-black">
        This really came out of nowhere as Skaiwater really has no association with Dabo. They did do a stream together 2 months ago, but so did Jane’s friends Lucy Bedroque, slayr, Egobreak, etc. I believe that this anger is just bubbling over from the Cortis beef. If you guys don’t know, Jane Remover dissed Cortits (Kpop band) a few weeks ago on an instagram story and Skaiwater is a close affiliate with Cortis even producing their new song REDRED. As Jane Remover and Skaiwater were exchanging words on Instagram, Skaiwater shot a stray at kuru on an Instagram story. This really came out of nowhere and even surprised kuru. He is a close associate with Jane, but he denounces her actions. Kuru went on Instagram live expressing his confusion. 
        </p>
        <video
          src={skai2}
          controls
          className="w-full max-w-sm mx-auto rounded-xl mb-6"
        ></video>
        <p className="mb-4 text-black">
        Then, a video came out with skaiwater arguing with kuru over the phone.
        </p>
        
        <video
          src={skai3}
          controls
          className="w-full max-w-sm mx-auto rounded-xl mb-6"
        ></video>
        
        <p className="mb-6 text-black">A screenshot of a DM was posted by skaiwater but quickly deleted.</p>
        <img
          src={ss2}
          className="w-1/2 h-auto object-contain rounded-xl mx-auto mb-4"
        />

        <p className="mb-4 text-black">
        This situation seems to be growing as rapper Dragnutz has posted on instagram calling out skaiwater as well. This beef is very new and not everything has developed yet but so far this is the news we have. Kuru and Lucy Bedroque have a show tonight in Brooklyn so we might see them talk more about it there tonight. Videos and photos above. All video credits to kuru, skaiwater, and Kurrco.
        </p>
      </>
    ),
  },

  {
    id: "asian-american-recognition",
    title: "Asian American Recognition in Underground Music",
    author: "Lloyd",
    date: "May 2, 2026",
    thumbnail: sign1,

    content: (
      <>
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
      </>
    ),
  },
];

function Interviews() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl w-full">

        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>

        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-3xl font-bold text-black">
            No interviews yet, stay tuned...
          </h1>
        </div>

      </div>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-20">

        <div>
          <button
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition"
          >
            ← Back
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <img
              src={lloydImg}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="w-full md:w-2/3 text-black">

            <h1 className="text-5xl font-bold mb-2 text-black">Lloyd</h1>

            <h2 className="text-2xl mb-6 text-black">
              Creative Direction/Writer/Social Media
            </h2>

            <p className="mb-4">
              Hi my name is Lloyd! I am 18 years old and I am a Korean born and raised in Shanghai. I currently live in NJ. My history with music dates back to all the way to 2nd grade where I remember this Russell Westbrook Shoe commercial with “Do What I Want” by Lil Uzi Vert playing in the background. I found the song and dove right into his discography and I fell in love. I had never heard music so good in my life before and I just kept expanding my taste to Carti, Chief Keef, Future, Gucci Mane, Lil B, and so much more. I loved this trap-esque sound back in the day. I kept listening to the same music until quarantine came around and I was so bored I really started to expand my taste. I was online a lot so of course I found Bladee, Ecco2k, the rest of Drain Gang, quinn, blackwinterwells, d0llywood, NOVAGANG, and just everyone in that space. I also started listening to underground rap as well with KA$HDAMI, Summrs, Autumn, Kankan, Izaya Tiji, SSG Kobe, tana, and so much more. Ever since then, I’ve been working on music and trying to better myself. I am currently in a band with my friend called marcy2008 and I do the vocals for it. We make electronic/hyperpop music that you definitely should check out. My current favorite types/genres of music are vkei, electronic, vocaloid, rap, shoegaze, experimental pop and many other smaller genres. Hope you guys enjoy my articles!
            </p>

            <h3 className="text-3xl font-bold mt-10 mb-4">
              Favorite albums
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>All Kero Kero Bonito albums</li>
              <li>The Snow Strippers - Snow Strippers</li>
              <li>E - Ecco2k</li>
              <li>Crest - Ecco2k & Bladee</li>
              <li>Self Titled - Crystal Castles</li>
              <li>All Boolymon Producer tapes</li>
              <li>Sayso Says - Che</li>
              <li>Single Collection - Plastic Tree</li>
              <li>No More Heros Vol 1. - Hi-C</li>
              <li>&lt;/3 - Destroy Lonely</li>
            </ul>

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <img
              src={vivannImg}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="w-full md:w-2/3 text-black">

            <h1 className="text-5xl font-bold mb-2 text-black">Vivann</h1>

            <h2 className="text-2xl mb-6 text-black">
              Website Builder/Writer/Tech
            </h2>

            <p className="mb-4">
              Hi, my name is Vivann and I’m 18 years old. I started listening to underground music around 2020 and 2021, with Yeat being my favorite during that time (his old stuff is still up there). I started listening to Che around that time too, with closed captions striking out to me specifically because of how new Che’s sound was at the time. Another artist that I found was Summrs and Lil Shine, basically at the same time. I don’t think I was really ready for pluggnb before that, but it quickly became one of my favorite genres ever (I still listen to Losing Myself basically every day). Moving closer to 2024, prettifun was one of my favorite finds of the year (I love upbeat underground rap, closed captions style stuff). I also started listening to a lot of Hi-C and Charli xcx because their harsh instrumentals and vocals really spoke to me. Artists like Boolymon and Okaymar also were staples of this place in my life, and there are so many more that I am neglecting to mention.
            </p>

            <p className="mb-4">
              I think what drew me to this space within music culture is all of the branding and emphasis on image, each artist had their own identity and expression and this contributed so much to the memorability of the scene. I loved coding this website over the past few weeks, and I think it’s because with this website me and Lloyd could create an image for ourselves, and report on the culture that has been a part of our lives for so long.
            </p>

            <h3 className="text-3xl font-bold mt-10 mb-4">
              Favorite albums
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>What we have - Summrs</li>
              <li>Losing Myself - Lil Shine</li>
              <li>Pretti - prettifun</li>
              <li>Up 2 Më - Yeat</li>
              <li>Skeletrix Language - Edward Skeletrix</li>
              <li>Rest in Bass: Encore - Che</li>
              <li>B4EM - Nine Vicious</li>
              <li>How i’m feeling now - Charli xcx</li>
              <li>Eternal Atake - Lil Uzi Vert</li>
              <li>Flex Musix - OsamaSon</li>
              <li>So Much Fun - Young Thug</li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
}

function Articles() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
      <div className="max-w-5xl w-full">

        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>

        <div className="flex flex-col gap-6">

          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate(`/articles/${article.id}`)}
              className="cursor-pointer group"
            >

              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-auto object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-200"
              />

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

function ArticlePage() {
  const {id} = useParams();
  const navigate = useNavigate();

  let article = null;

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === id) {
      article = articles[i];
      break;
    }
  }

  if (!article) {
    return <div className="text-center mt-10">Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
      <div className="max-w-3xl w-full">

        <button
          onClick={() => navigate("/articles")}
          className="mb-6 px-4 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-4 text-black">
          {article.title}
        </h1>

        <h2 className="text-xl mb-8 text-gray-600">
          By {article.author} ({article.date})
        </h2>

        {article.content}

      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}