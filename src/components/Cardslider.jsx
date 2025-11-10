import React, { useState }  from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDot } from "react-icons/go";

import { GoDotFill } from "react-icons/go";


function Cardslider(){
    const[currentImages,setCurrentImage]=useState(0);
    const images=[
        {
            index:0,
            url:"https://media.gettyimages.com/id/1856842591/photo/welsh-actor-christian-bale-on-the-set-of-american-psycho-based-on-the-novel-by-bret-easton.jpg?s=612x612&w=0&k=20&c=kW96HgajxIsNb4-GhRq9mcq4U0yr2xLAEkLGD8-AnJ4=",

            content:"Explore"
        },
        {
            index:1,
            url:"https://media.gettyimages.com/id/80417015/photo/academy-award-nominee-fran-walsh-philippa-boyens-peter-jackson-for-best-adapted-screenplay-in.jpg?s=612x612&w=0&k=20&c=LBFh6oXELj93VNtkHnOlvP2Vx_yBNE_xn6ZobCKFHS0="

        },
        {
            index:2,
            url:"https://media.gettyimages.com/id/2218084635/photo/philadelphia-pennsylvania-musiq-soulchild-performs-during-roots-picnic-2025-at-the-mann-at.jpg?s=612x612&w=0&k=20&c=UzhSH6Kz7Pjn_p3-Wa5TW7084KS6fiC3E3AnEDSzlzA="
        },
        {
            index:3,
            url:"https://media.gettyimages.com/id/81584107/photo/new-york-cast-of-the-lion-king-perform-on-stage-during-the-62nd-annual-tony-awards-at-radio.jpg?s=612x612&w=0&k=20&c=B181_9Hwe0is95ZouHmCZvmRDs-w8e2FlBuzyZoohmM="
        },
        {
            index:4,
            url:"https://media.gettyimages.com/id/50605023/photo/disney-exec-don-frantz-wearing-pirate-costume-playing-recorder-while-leading-unident-children.jpg?s=612x612&w=0&k=20&c=X8VkjGu3f0kvXVzJgUVkoowD_dojRmS7M2J5XYU0nNY="
        }
    ];
    const handleNext=()=>{
        if(currentImages=== images.length-1){
            setCurrentImage(0)
        }else{
            setCurrentImage((prev) => prev+1);
        }
    }
    const handlePrev =() =>
{
           if(currentImages===0)
           {
            setCurrentImage(images.length-1)
           }
           else{
            setCurrentImage((prev)=> prev-1);
           }
}    
return( 
        <div className="md:h-screen flex  items-center justify-center ">
            <div className="flex  flex-col gap-2">
                                <div className="md:w-[900px] md:h-[600px] bg-gray-300 relative">

                                <img className="md:w-full md:h-full p-4 object-fit rounded-[40px]" src={images[currentImages].url}/>
               
                <div 
                onClick={handlePrev} className="absolute top-[50%] left-1 transform -translate-y-1/2 bg-white rounded-full">
                    <IoIosArrowBack size={50}/>
                    
                </div>
                 <div 
                 onClick={handleNext} className="absolute top-[50%] right-1 transform -translate-y-1/2 bg-white rounded-full">
                    <IoIosArrowForward size={50}/>
                    
                </div>
                </div>
                <div className="flex justify-center">
                    {images.map(item =>(
                        <div>
                            {item.index===currentImages ?<GoDotFill onClick= {() =>setCurrentImage(item.index)} size={30}/>:<GoDot onClick= {() =>setCurrentImage(item.index)} size={30} size={30}/>}</div>
                    ))}
                </div>

            </div>
           
        </div>
    )
}
export default Cardslider