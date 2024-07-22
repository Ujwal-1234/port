import { React, useState, useEffect } from 'react'
import pclogo from '../assets/logo.png'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { AiTwotoneMail, AiTwotoneApi } from "react-icons/ai";
import { MdContactMail,  MdDeveloperMode } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { SiWebmoney, SiPython, SiJavascript,SiFlask, SiTailwindcss, SiMysql,SiPhp, SiReact} from "react-icons/si";
import { FaHome, FaNetworkWired, FaDatabase, FaNodeJs, FaAws, FaFileImage } from "react-icons/fa";
export default function Body() {

  return (
    <div className='section-background w-full min-h-screen'>
      <section id='home' className=' flex min-h-screen flex-wrap items-center justify-center '>
        <div className='flex flex-wrap items-center justify-center bg-black absolute bg-opacity-40 w-full h-full'>
          <div class="bg-gradient-to-br from-slate-300 border-b-2 border-black shadow-amber-50 shadow-md rounded-3xl via-slate-600 to-slate-900 p-1">
              <div class="bg-white rounded-3xl p-4">
                <h1 className='lg:text-8xl text-5xl font-semibold bg-gradient-to-r from-slate-900 via-slate-600 text-center to-slate-300 inline-block text-transparent bg-clip-text font-mono'>UJWAL KUMAR MAHATO</h1>
              </div>
            </div>
                {/* <img src={pclogo} className='lg:hidden'/> */}
            <div className='w-full flex items-center justify-center'>
              <div className="lg:typewriter lg:h-24 flex items-center p-2 bg-gradient-to-l from-teal-800 to-teal-600 rounded-lg text-2xl">
                <h1 className='lg:text-5xl text-4xl text-white text-center'> {"< Developer />"} </h1>
              </div>
            </div>
        </div>
      </section>
      <section id='products' className='flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' lg:h-5/6 lg:absolute flex flex-wrap left-0 lg:p-10 items-center justify-center w-full'>
            <div className=' w-full lg:absolute top-0 lg:h-1/6'>
              <h1 className=' text-6xl font-semibold p-10 w-full bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 text-transparent bg-clip-text font-mono'>Products</h1>
            </div>
            <div className='border h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>IOT Monitoring System</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              <b>Technologies Used</b><br/>
              React.js,
              Leaflet.js,
              Tailwind CSS,
              Node.js,
              MYSQL
              </span>
            </div>
            <div className='border h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Pattern Generator</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
                <b>Technologies Used</b><br/>
                Image Processing, OpenCV, PILL, threading, Python, PyQT
              </span>
            </div>
            <div className='border h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Modbus Controller</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              <b>Technologies Used</b><br/>
                Python, PyQT, ModbusTCP, pyModbusTCP
              </span>
            </div>
            <div className='border h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card  bg-gradient-to-l from-teal-800 to-teal-600'>
              <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Peer Review Appication</span>
              <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block font-bold'>
              <b>Technologies Used</b><br/>
                PHP, MysQL, HTML, TailwindCSS, PDO Db Communication
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id='services' className=' bg-gradient-to-tr from-teal-950 to-slate-300 flex flex-wrap items-center justify-center min-h-screen h-auto lg:p-10 w-full'>
       <div className=' lg:h-5/6 lg:absolute flex flex-wrap left-0 lg:p-10 p-2 items-center justify-center w-screen lg:w-1/2'>
        <div className=' w-full lg:absolute top-0 lg:h-1/6'>
          <h1 className=' text-6xl font-semibold p-10 w-full bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 text-transparent bg-clip-text font-mono'>Skills</h1>
        </div>
        <div className=' p-5 bg-gradient-to-br w-screen rounded-lg text-justify from-teal-200 via-slate-200 text-black to-gray-200 text-3xl font-light flex items-center justify-center'>
        In my projects, I've applied a versatile skill set in software development and full stack expertise. Using Python and JavaScript, I've built robust applications, while frameworks like React and Node.js have empowered me to create dynamic user interfaces. Proficient in AWS, I've developed scalable and secure cloud-based solutions, reflecting a commitment to innovative software development.
        </div>
       </div>
        
       <div className='lg:h-5/6 lg:w-1/2 lg:absolute right-0 flex overflow-auto flex-wrap lg:m-10 items-center justify-center lg:p-5'>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><GrTechnology className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-1 rounded-2xl text-xl'>Software Development</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Expertise in designing, developing, and deploying software solutions to meet complex requirements.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><MdDeveloperMode className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Full Stack Development</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Proficient in both front-end and back-end development, ensuring seamless integration and functionality across the entire stack.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><AiTwotoneApi className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl w-full'>APIs</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Skilled in creating and integrating RESTful APIs to facilitate communication between different software systems.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><FaDatabase className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Databases</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Experienced in designing, managing, and querying databases to store and retrieve data efficiently (DDL, DML).
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><SiWebmoney className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Web Development</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Strong background in building responsive and user-friendly web applications using modern web technologies.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><SiPython className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Python</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Proficient in Python for scripting, data analysis, and backend development tasks.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><SiJavascript  className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Javascript</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Advanced knowledge of JavaScript for developing dynamic and interactive web applications.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><SiReact  className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>ReactJS</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Specialized in building scalable and maintainable user interfaces using ReactJS.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><FaNodeJs   className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Node.js</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Competent in using NodeJS for server-side development, creating fast and scalable network applications.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><FaAws  className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>AWS</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Experienced in leveraging AWS services for cloud computing, storage, and deployment solutions.
            </span>
          </div>
          <div className='  h-80 m-4 p-4 rounded-2xl justify-center items-center shadow-inner flex flex-wrap shadow-black hover:cursor-pointer card bg-gradient-to-l from-teal-800 to-teal-600'>
          <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl m-2'><FaFileImage    className=' text-5xl'/></span>
            <span className='bg-white bg-opacity-20 font-bold block p-2 rounded-2xl text-2xl'>Image Processing</span>
            <span className='bg-white bg-opacity-20 p-2 rounded-2xl mt-4 block'>
            Proficient in using advanced techniques to analyze, manipulate, and enhance images for various applications.
            </span>
          </div>
          
       </div>
      </section>
      <section id='about' className='  bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' w-full top-0 lg:h-1/6'>
            <h1 className=' text-6xl font-semibold text-slate-300 p-3 lg:ml-10 w-full'>About</h1>
          </div>
          <div className='  text-white font-thin text-xl p-5 lg:h-5/6 overflow-auto lg:absolute flex flex-wrap left-0  items-center justify-center w-full'>
            <div className='lg:w-2/3 w-full text-justify space-y-3'>
            Hey there,<br/> 
            This is <b>Ujwal Kumar Mahato</b>, a dedicated and innovative Software Engineer and Full Stack Developer with a passion for AI/ML, IoT systems, and web development. My expertise spans across multiple domains, enabling me to create robust and scalable software solutions.<br/>

            <h2 className=' pt-2 font-bold'>Technical Skills</h2>
            <b>Programming Languages:</b> Python, JavaScript, Java, C/C++<br/>
            <b>Frontend:</b> React, NextJS, Tailwind CSS<br/>
            <b>Backend:</b> Node.js, PHP, MySQL<br/>
            <b>Cloud Platforms:</b> AWS (Lambda, SST Serverless Stack, DynamoDB, Cognito)<br/>
            <b>Frameworks & Libraries:</b> Flask, PyQt, OpenCV<br/>
            <b>Other Technologies:</b> Docker, ModbusTCP, MQTT<br/>
            <span>
              <SiPython className='inline m-4 text-5xl text-yellow-50'/>
              <SiReact className='inline m-4 text-5xl text-blue-300'/>
              <SiJavascript className='inline m-4 text-5xl text-yellow-500'/>
              <FaNodeJs className='inline m-4 text-5xl text-green-600'/>
              <SiMysql className='inline m-4 text-5xl text-blue-300' />
              <FaAws className='inline m-4 text-5xl text-amber-600'/>
              <SiPhp className='inline m-4 text-5xl text-blue-300' />
              <SiTailwindcss className='inline m-4 text-5xl text-blue-400' />
              <SiFlask className='inline m-4 text-5xl' />
            </span>
            <h2 className=' pt-2 font-bold'>Projects</h2>
            <b>IoT Monitoring Systems:</b> Developed platforms for real-time monitoring of IoT devices, integrating GPS, temperature sensors, and other custom parameters.<br/>
            <b>Camouflage Projects:</b> Contributed to camouflage technology in image processing and thermal image processing for defense applications.<br/>
            {/* <b>Universal Web App:</b> Created a centralized platform for IoT device monitoring using CustomTkinter and PyQt5 libraries.<br/> */}
            <h2 className=' pt-2 font-bold'>Contributions</h2>
            <b>Open Source:</b> Actively contributed to various open-source projects, focusing on improving functionality and user experience.<br/>
            <b>Community Involvement:</b> Engaged in tech communities, sharing knowledge and collaborating on innovative solutions.<br/>
            <h2 className=' pt-2 font-bold'>Organizations Served</h2>
            <b>Pradnya Consultant:</b> Worked as a Software Engineer, leading projects in IoT and image processing.<br/>
            <b>OSlash:</b> Gained expertise in AWS cloud technologies and serverless architectures.<br/>
            <b>RecruitNXT:</b> Developed Scalable APIs for Extensions, Mobile Applications, Web applications, using PHP, MYSQL.<br/>
            <b>Cortexai Inventions LLP:</b> Developed software for image processing and data analytics.<br/>
            <b>DRDO:</b> Collaborated on defense research projects involving advanced image processing techniques.<br/>
            <h2 className=' pt-2 font-bold'>Soft Skills</h2>
            <b>Team Efficiency:</b> Excel at driving team productivity and fostering collaboration.<br/>
            <b>Adaptability:</b>Thrive in fast-paced environments, quickly adapting to new challenges.<br/>
            <b>Communication:</b> Strong communicator, effectively conveying technical concepts to diverse audiences.<br/>
            <h2 className=' pt-2 font-bold'>Education</h2>
            <b>Bachelor of Technology in Computer Science and Technology</b>: JAIN University<br/><br/>
            I am always eager to take on new challenges and contribute to cutting-edge projects that make a significant impact.
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex flex-wrap items-center justify-center min-h-screen h-auto w-full'>
        <div className=' bg-black  flex flex-wrap items-center justify-center w-full min-h-screen lg:p-10 bg-opacity-60'>
          <div className=' w-full top-0 lg:h-1/6'>
            <h1 className=' text-6xl font-semibold lg:p-10 w-full text-white'>Contact</h1>
          </div>
          <div className=' lg:h-5/6  lg:absolute flex flex-wrap left-0 lg:p-10 items-center justify-center w-full'>
            <form>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Full Name'/>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Email'/>
              <input type='text' className=' p-5 block w-full mt-5 rounded-lg' placeholder=' Phone'/>
              <textarea name="" id="" className='block  mt-5 w-full rounded-lg p-5 h-20' placeholder='Message ...' cols="30" rows="10"></textarea>
              <input type='button' className=' hover:cursor-pointer active:border shadow-lg bg-gradient-to-br from-slate-800 via-slate-600 to-slate-500 p-5 block w-full mt-5 rounded-lg' value={"SUBMIT"}/>
            </form>
          </div>
        </div>
      </section>
      <footer className=' flex flex-wrap items-center bg-slate-900 bg-opacity-90 justify-center'>
        <div className='  lg:w-1/4 w-full items-center justify-center flex flex-wrap lg:h-20 m-10 rounded-lg'>
          <p className=' w-full flex items-center justify-center'> 
            <img src={pclogo} style={{ width: '100px'}} alt='PC Logo' />
          </p>
          <span className=' block  text-white text-justify font-thin' style={{width:'300px'}}>
            <b>UJWAL KUMAR MAHATO,</b> Passionate Software Engineer and Full Stack Developer specialized in Software Development, IoT Monitoring systems, web development, several Software technologies.
          </span>
        </div>
        <div className=' lg:w-1/4 w-full lg:h-20 m-10 text-2xl font-semibold rounded-lg'>
          <div className=' lg:ml-20'>
            <span className=' text-white underline'>QUICK LINKS</span>
            <span className=' block text-justify font-thin' style={{width:'300px'}}>
              <div className="">
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#home" className=' text-white font-thin hover:text-white'>  <FaHome className='inline'/> Home</a>
                </h2>
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee `}>
                    <a href="#products" className=' text-white font-thin hover:text-white'>  <MdProductionQuantityLimits className='inline'/> Products</a>
                </h2>
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#services" className=' text-white font-thin hover:text-white'>  <FaNetworkWired className='inline' /> Skills</a>
                </h2>
                
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee `} >
                    <a href="#about" className=' text-white font-thin hover:text-white'> <FcAbout className='inline'/> About</a>
                </h2>
                
                <h2 className={` decoration-2 text-lg block hover:underline font-bungee`}>
                    <a href="#contact" className=' text-white font-thin hover:text-white'>  <MdContactMail className='inline'/> Contact</a>
                </h2>
              </div>
            </span>
          </div>
        </div>
        <div className=' lg:w-1/4 w-full lg:h-20 m-10 rounded-lg'>
        <div className=' lg:ml-20 pb-10'>
            <span className=' underline  text-white text-2xl font-semibold'>STAY CONNECTED</span>
            <span className=' block text-justify font-thin' style={{width:'300px'}}>
              <div className=" m-2">
                <ul>
                  <li>
                    <a className='text-white font-thin hover:text-white' href='https://www.google.com/maps/place/Pradnya+Consultant/@19.9656221,73.7370278,19z/data=!4m6!3m5!1s0x3bddeca4c743e0f7:0xac0b4b9efe14ea58!8m2!3d19.9658575!4d73.7370539!16s%2Fg%2F11byyq8kqx?entry=ttu'>
                      <FaLocationDot className=' text-2xl inline text-red-500' /> Location :
                      <p className=' w-60 pl-10'> Nashik, Maharashtra 422010</p>
                    </a>
                  </li>
                  <li>
                    <a className='text-white font-thin hover:text-white' >
                      <FaPhone className=' text-2xl inline text-red-500' /> Phone Number:
                      <p className=' w-60 pl-10'>+91 9304500406</p>
                    </a>
                  </li>
                  
                  <li>
                    <a className='text-white font-thin hover:text-white' >
                      <AiTwotoneMail className=' text-2xl inline text-red-500' /> Email:
                      <p className=' w-60 pl-10'>kujwal147@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
        
      </footer>
    </div>
  )
}
