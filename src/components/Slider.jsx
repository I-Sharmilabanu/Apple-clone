import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaApple } from "react-icons/fa";




const Slider = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: "https://media.gettyimages.com/id/1139036071/photo/sprinter-seen-from-above-with-shadow-and-copy-space.jpg?s=612x612&w=0&k=20&c=d_dz7wrk36S10sCQOughWgGx7SJSZ5snuzGDuHVF2TA=",
      title: "Fitness+",
      
    },
    {
      image: "https://media.gettyimages.com/id/1474112571/vector/retrowave-80s-style-car-illustration.jpg?s=612x612&w=0&k=20&c=POWiB0_e8vRUZmx8FR8fy58i8WT6Ca__5ShYyJG6bYE=",
      title: "Archade",
      
    },
    {
      image: "https://media.gettyimages.com/id/1958000977/photo/excited-young-woman-listening-to-music-on-wireless-headphones-over-a-mobile-app-while-sitting.jpg?s=612x612&w=0&k=20&c=39VRNB9lJhK5U09Y8vgxz4CUBlwu2BFK98ZZqQRF7Lk=",
      title: "Musis",
    },
    {
      image: "https://media.gettyimages.com/id/1980166648/photo/two-women-friends-doing-exercises-together-senior-and-mature.jpg?s=612x612&w=0&k=20&c=LEZlb8x-MMPlSoLkOyC6WwncdThxUSkTeir5hgAxHRc=",
      title: "Fitness",
      
    },
    {
      image: "https://media.gettyimages.com/id/1307457956/photo/mixed-race-family-playing-game-at-video-arcade.jpg?s=612x612&w=0&k=20&c=0Q8PVX7-UHISzc6tr8eacFJcOxcCyw81E9und2iEc0E=",
      title: "Archade",
      
    },
    {
      image: "https://media.gettyimages.com/id/589090433/photo/businessman-examining-documents-at-desk.jpg?s=612x612&w=0&k=20&c=VFzkaeX9UNuyF7nvjsfng1fyliciM6PZw7nOC4F8y5A=",
      title: "Music",
      
    },
    {
      image: "https://media.gettyimages.com/id/2027822781/photo/joyful-young-asian-mother-and-lovely-daughter-playing-games-at-the-funfair-to-win-a-prize.jpg?s=612x612&w=0&k=20&c=4AGarpoDGvVcoDLPxuBa9ZoUpwBLT72mlMMw09IvoA0=",
      title: "Archade",
    
    },
    {
      image: "https://media.gettyimages.com/id/1357014440/photo/happy-family-jogging-at-park.jpg?s=612x612&w=0&k=20&c=BbEWkBFOKZu7YmxMTU1AQNtx2wRGvIIAToB_PA6BKTs=",
      title: "Fitness+",
      
    },
    {
      image: "https://media.gettyimages.com/id/2207338377/photo/claw-machine-with-rewards.jpg?s=612x612&w=0&k=20&c=fB7XaRltFkOcF6e6Vd5_by9YG5vnPNymlU2t-sAptIw=",
      title: "Archade",
      
    },
    {
      image: "https://media.gettyimages.com/id/1280339057/photo/young-woman-relaxing-at-home-and-listening-music.jpg?s=612x612&w=0&k=20&c=mquca3mlGfnvqEx-YoXKwMnsGIbjLtsFyO1YM1p_u9o=",
      title: "Music",
      
    },
  ];

  
  const allSlides = [...slides, ...slides];

  useEffect(() => {
    const track = document.getElementById("scroll-track");
    if (!track) return;

    let animation;

    if (isPlaying) {
      animation = track.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-50%)" },
        ],
        {
          duration: 20000, 
          iterations: Infinity,
          easing: "linear",
        }
      );
    }

    return () => {
      if (animation) animation.cancel();
    };
  }, [isPlaying]);

  return (
    <div className="relative bg-gray-100 py-10 text-white overflow-hidden">
      

      
      <div className="overflow-hidden relative w-full">
        <div
          id="scroll-track"
          className="flex gap-4 w-max"
        >
          {allSlides.map((slide, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 flex flex-col justify-end p-4 transition-all duration-500 ">
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <button className="opacity-0 group-hover:opacity-100 mt-3 bg-white  text-black px-4 py-1 rounded-md inline transition-opacity duration-300">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute right-6  -translate-y-1/2 bg-black  text-white p-3 rounded-full shadow-lg transition"
      >
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    </div>
  );
};

export default Slider;