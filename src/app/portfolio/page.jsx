"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "NimbusX",
      desc: "NimbusX is a web-based code editor enabling users to write and run HTML, CSS, and JavaScript programs. It provides a real-time preview of the output, enhancing learning and development efficiency by allowing immediate testing and debugging of code within a single integrated environment.",
      img: "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/NimbusX",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "NimbusAI",
      desc: "NimbusAI is like a companion for the NimbusX code editor. NimbusAI is a ques/ans AI that replies to your questions with the most suitable answers with the help of OpenAIApi.",
      img: "https://images.pexels.com/photos/18069694/pexels-photo-18069694/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/NimbusAI",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Image Selector",
      desc: "The Image Selector app is a powerful and intuitive tool designed for users to seamlessly browse, search, and select high-quality images directly from the Unsplash API. With access to Unsplash's vast collection of stunning, royalty-free photos, the app provides an easy way to find the perfect image for any project. ",
      img: "https://images.pexels.com/photos/3850271/pexels-photo-3850271.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/Image-Selector",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Nivera Chat",
      desc: "Nivera Chat is an all-in-one music app that lets you dive into an expansive world of sound. Explore and enjoy music from all genres—whether you're into pop, rock, jazz, classical, hip-hop, or indie, Nivera Chat has something for everyone. With an easy-to-use interface, users can discover new tracks, create playlists, and immerse themselves in the music they love, along with an interactive chatbot and an easter egg too.",
      img: "https://images.pexels.com/photos/356006/pexels-photo-356006.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/Nivera-chat",
    },
    {
      id: 5,
      color: "from-red-300 to-blue-300",
      title: "JavaScript Mastery",
      desc: "This repository is a comprehensive guide that covers all essential topics of JavaScript, ranging from basic to intermediate levels. Each concept is explained in a clear and concise manner, complete with example code and comments to help you understand how JavaScript works in real-world applications.",
      img: "https://images.pexels.com/photos/11035547/pexels-photo-11035547.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/JavaScript",
    },
    {
      id: 6,
      color: "from-blue-300 to-violet-300",
      title: "React Mastery",
      desc: "This repository serves as a comprehensive guide to learning React, covering key concepts from the basics to intermediate-level topics. It provides well-structured explanations, example code, and in-depth comments to help you build solid foundations and practical React skills.",
      img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://github.com/Aryan-Mac01/React-Mastery",
    },
  ];
const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <motion.div
      className="h-full no-scrollbar"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Repo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
         {/* <h1 className="text-8xl">Do you have a project?</h1> */}
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer and DevOps Engg 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;