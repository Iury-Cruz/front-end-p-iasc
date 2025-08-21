import tticon from "./icons/23-y-o-riajulislam.png"
import logicicon from "./icons/logic-zero_wing.png"
import JSIcon from "./icons/JS-Flat-Icons.png"
import ReactJS from "./icons/React-Pixel_Perfect.png"
import Tailwindicon from "./icons/tailwind-Freepik.png"
import FireBaseicon from "./icons/firebase-phatplus.png"
import GitHubicon from "./icons/Github-Roundicons.png"
import Reduxicon from "./icons/Redux-Icons8.png"
import BootStrapicon from "./icons/BootStrap-Freepik.png"
import uidesignicon from "./icons/ui-design-smashingstocks.png"
import img1 from "./img/D-Tive-BG.png"
import img2 from "./img/EdgeInn-BG.png"
import img3 from "./img/Web-DgPg-BG.png"
import img4 from "./img/Login-Pg-BG.png"
import img5 from "./img/webanimalswpg-BG.png"

import discordic from "./icons/discord-freepik.png"
import youtubeic from "./icons/youtube-freepik.png"
import facebookic from "./icons/facebook-freepik.png"
import githubic from "./icons/github-pixel-perfect.png"
import instagramic from "./icons/instagram-freepik.png"
import linkedinic from "./icons/linkedin-freepik.png"

import React, {useState, useEffect} from "react"








function Portfolio(){

    const slides = [

    {
        id:1,
        imgUrl:img1,
        title:"D-Tive",
        description:"That is a similar version of a famous ws. "
    },
    {
        id:2,
        imgUrl:img2,
        title:"Home-Page",
        description:"That is another similar version of a famous ws. "
    },
    {
        id:3,
        imgUrl:img3,
        title:"Web-Dog",
        description:"I love animals and soon ill add more features on it. "
    },
    {
        id:4,
        imgUrl:img4,
        title:"Login-Page",
        description:"Aaaand there we go, one of my first ones. Login Page "
    },
    {
        id:5,
        imgUrl:img5,
        title:"Web-Animal",
        description:"Another one about animals xD. Yeah, i love it! "
    }
]

const [currentSlide, setCurrentSlide] = useState(0)

useEffect(()=>{

    const interval = setInterval(() => {
        
        setCurrentSlide(prev =>(prev + 1) % slides.length)

    }, 5000);
    return(()=> clearInterval(interval))
},[])








    return(

            

        <>
            <body className="bg-gray-500" ></body>
            <header id="Home" className="w-[100%] h-[80vh] bg-[url(./img/bg-h-wps.jpg)] bg-no-repeat bg-cover bg-center ">
                <div className="flex justify-center w-[100%]">
                    <nav className="bg-black p-3 mt-2 w-[99%] rounded-md fixed top-0 z-50">
                        <ul className="flex justify-around text-[#BABABF] font-semibold text-[18px] ">
                            <li  className="hover:bg-[red] text-center bg-[#2C2C30] rounded-full   p-0 cursor-pointer transition delay-[0.25s] w-[10%] flex justify-center items-center max-md:hidden max-sm:hidden">

                                <a href="#Home">Home</a>   

                            </li>
                            <li className="hover:bg-[red] text-center bg-[#2C2C30] rounded-full   p-0 cursor-pointer transition delay-[0.25s] w-[10%]  flex justify-center items-center max-md:hidden max-sm:hidden">

                                <a href="#Projects">Projects</a>

                            </li>
                            <li className="hover:bg-[red] text-center bg-[#2C2C30] rounded-full   p-0 cursor-pointer transition delay-[0.25s] w-[10%]  flex justify-center items-center max-md:hidden max-sm:hidden">

                                <a href="#Skills">Social</a>

                            </li>
                            <li className="hover:bg-[red] text-center bg-[#2C2C30] rounded-full   p-0 cursor-pointer transition delay-[0.25s] w-[10%]  flex justify-center items-center max-md:hidden max-sm:hidden">

                                <a href="">Education</a>

                            </li>


                            <div className="w-[30%] flex justify-end text-center max-md:w-[100%] max-md:justify-center max-sm:w-[100%] max-sm:justify-center">
                                <li className="bg-[#E2DCCB] hover:bg-[#15ECB3] hover:text-[black] text-[#4D381A] font-extrabold rounded-sm p-3 cursor-pointer
                                transition delay-[0.5] w-[50%] max-sm:w-[90%]">

                                    <a href="#lfwork">Available for Work</a>

                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>
            <section>
                <div className="w-[100%] border-[3px] border-white">
                    <nav>
                        <ul className="flex w-[100%] justify-around border-[5px] border-black bg-black font-bold font-mono underline ">

                            {/* Front-End Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#4C5C75] text-[#4C5C75] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=front+end+explanation&sxsrf=AE3TifMmWiU5aXgpmsr1CZ3eXhYQVHu8tA%3A1755300131496" target="_blank"><img className="w-[60px]" src={uidesignicon} alt="" /></a>Front-End</li>

                            {/* 23 Years Old Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#D50000] text-[#D50000] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=23+years+old+explained&sxsrf=AE3TifNHhduJvwzqMR9esqlZWsRQNHirTg%3A1755300058572" target="_blank"><img className="w-[60px]" src={tticon} alt="" /></a>Years</li>

                            {/* Logic Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#72D561] text-[#72D561] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=programming+logic+explained&sxsrf=AE3TifO4t0LikMIkIQj5Ej5I0x3hp5srng%3A1755299996338" target="_blank"><img className="w-[60px]" src={logicicon} alt="" /></a>Logic</li>

                            {/* JavaScript Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#F6AE24] text-[#F6AE24] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=javascript+explained&sxsrf=AE3TifNZja23SfQv34Xw3AqJIk1n4CLshQ%3A1755299989814" target="_blank"><img className="w-[60px]" src={JSIcon} alt="" /></a>JavaScript</li>

                            {/* ReactJS Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#008290] text-[#008290] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%] "><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=reactjs+explained&sxsrf=AE3TifOiAJccODMy3spjolIc46DasZ_8fg%3A1755300155517" target="_blank"><img className="w-[60px]" src={ReactJS} alt="" /></a>ReactJS</li>

                            {/* Tailwind CSS Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#FE5CA7] text-[#FE5CA7] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=tailwind+explained&sxsrf=AE3TifNPZFeGkQox25NMpe7EewbnovPlfQ%3A1755300192349" target="_blank"><img className="w-[60px]" src={Tailwindicon} alt="" /></a>TailwindCSS</li>

                            {/* Firebase Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#FFDE55] text-[#FFDE55] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=firebase+explained&sxsrf=AE3TifMMlxs6hsm7EqLk6DD6R3oDoVFPGA%3A1755300244549" target="_blank"><img className="w-[60px]" src={FireBaseicon} alt="" /></a>FireBase</li>

                            {/* GitHub Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#3E77BF] text-[#3E77BF] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=github+explained&sxsrf=AE3TifNr93PWv7N-7JhVJ3ABoQHFGfkBlg%3A1755300328425" target="_blank"><img className="w-[60px]" src={GitHubicon} alt="" /></a>GitHub</li>

                            {/* Redux Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#624E97] text-[#624E97] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=redux+explained&sxsrf=AE3TifPsUOW0EckEpeGc9f0hiJsltQBLtw%3A1755300358839" target="_blank"><img className="w-[60px]" src={Reduxicon} alt="" /></a>Redux</li>

                            {/* BootStrap Section */}

                            <li className="w-[10%] h-[110px] text-center border-[5px] border-[#5E3B7F] text-[#5E3B7F] max-md:flex flex-col max-md:justify-around max-md:border-none max-md:text-transparent max-md:h-[14vh] max-md:w-[7%] max-sm:border-none max-sm:text-transparent max-sm:h-7 max-sm:w-[7%]"><a className="flex justify-center mt-1.5" href="https://www.google.com/search?q=bootstrap+explained&sxsrf=AE3TifP939sRS47dQzSHyn6gCBNqJzJgdQ%3A1755300391472" target="_blank"><img className="w-[60px]" src={BootStrapicon} alt="" /></a>BootStrap</li>


                        </ul>
                    </nav>
                </div>


                <div id="Projects" className="w-[100%] h-[100vh] bg-gray-800 flex flex-col justify-center items-center text-[80px] text-black font-serif border-white border-b-[2px] border-t-[2px] max-md:h-[50%] max-sm:h-[50%]">

                        {/* Feed Div */}
                        
                        <img className="w-[100%] h-[100%] object-cover border-[2px] rounded-1xl border-black mt-10 " src={slides[currentSlide].imgUrl} alt={slides[currentSlide].title} />
                        <h2 className="text-[0px]  underline mt-2 max-md:text-[0px] max-sm:text-[0px]">{slides[currentSlide].title}</h2>
                </div>
                <div className="w-[100%] h-[100vh] bg-neutral-950 max-md:h-[40vh] max-sm:h-[40vh]">
                
                    <nav>
                        <div className="w-[100%] flex justify-start text-[40px] text-white" >
                        </div>
                            <ul id="Skills" className="w-[100%] h-[50vh]  flex justify-around items-center  mt-3  bg-[url(./img/bg-lang-ul.jpg)] bg-cover bg-center bg-no-repeat max-sm:flex-col max-md:h-[10vh] max-sm:h-[10vh]">
                            </ul>
                            

                            
                             <ul className="w-[100%] h-[20vh] flex justify-around items-center bg-black max-md:h-[30vh] max-sm:h-[15vh]">
                                <div className="w-[100%] h-[10vh] flex justify-around items-start bg-black">
                                    <li id="facebookmdicon" className="w-[15%] h-[25vh] rounded-[20px] border-[2px] hover:bg-[#1877F2] border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">

                                        <a href="https://www.facebook.com/profile.php?id=61551441587983" target="_blank">
                                            <img className="w-[60px]
                                            transition delay-[0.5s] hover:w-[80px]"  src={facebookic} alt="" />
                                        </a>

                                    </li>
                                    <li id="instagrammdicon" className="w-[15%] h-[25vh] rounded-[20px] border-[2px] hover:bg-pink-700 border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">

                                        <a href="https://www.instagram.com/iuryajcruz/" target="_blank">
                                            <img className="w-[60px] transition delay-[0.5s] hover:w-[80px]" src={instagramic} alt="" />
                                        </a>

                                    </li>
                                    <li className="w-[15%] h-[25vh] hover:bg-[#181717] rounded-[20px] border-[2px] border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">

                                        <a href="https://github.com/Iury-Cruz" target="_blank">
                                            <img className="w-[60px] transition delay-[0.5s] hover:w-[80px] " src={githubic} alt="" />
                                        </a>

                                    </li>
                                    <li className="w-[15%] h-[25vh] hover:bg-[#FF0000] rounded-[20px] border-[2px] border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">

                                        <a href="https://www.youtube.com/@tecno5377" target="_blank">
                                            <img className="w-[60px] transition delay-[0.5s] hover:w-[80px] " src={youtubeic} alt="" />
                                        </a>

                                    </li>
                                    <li className="w-[15%] h-[25vh] hover:bg-[#0A66C2] rounded-[20px] border-[2px] border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">
                                        
                                        <a id="lfwork" href="https://www.linkedin.com/in/iuryajsouza/" target="_blank">
                                            <img className="w-[60px] transition delay-[0.5s] hover:w-[80px] " src={linkedinic} alt="" />
                                        </a>

                                    </li>  

                                    <li className="w-[15%] h-[25vh] hover:bg-[#5865F2] rounded-[20px] border-[2px] border-[gray] text-white text-center flex justify-center items-center bg-white hover:cursor-pointer transition delay-[0.5s] max-md:h-[15vh] max-md:rounded-xl max-sm:h-[10vh] max-sm:rounded-xl">
                                        
                                        <a href="">
                                            <img className="w-[60px] transition delay-[0.5s] hover:w-[80px]" src={discordic} alt="" />
                                        </a>

                                    </li>  
                                </div>
                            </ul>
                    </nav>

                </div>
            </section>
            <section className="w-full h-[30vh] flex justify-center items-center text-[50px] font-bold bg-white">
                <h3>Soon. :D</h3>
            </section>
        
        
        </>

    )


}

export default Portfolio