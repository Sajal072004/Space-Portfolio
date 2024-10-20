import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-20">
        <ProjectCard
          src="/linkup.png"
          title="LinkUp"
          description="A social media platform where users can follow friends, post updates, and engage with stories. Built using Next.js, Prisma, and PostgreSQL."
          link="https://link-up-silk.vercel.app"
          key="1"
        />
        <ProjectCard
          src="/krishiseva.png"
          title="Krishi Seva"
          description="An online marketplace designed for farmers, featuring tools like disease prediction, discussion forums, and a chatbot for agricultural support."
          link="https://krishi-seva-web-design-second-repo.vercel.app/"
          key="1"
        />
        <ProjectCard
          src="/interviewiq.png"
          title="InterviewIQ"
          description="A platform to help job seekers prepare for technical interviews by practicing coding challenges and getting personalized feedback."
          link="https://interviewiq.vercel.app/"
          key="1"
        />
        <ProjectCard
          src="/cryptotracker.png"
          title="Crypto Tracker"
          description="A web app to track cryptocurrency prices in real time, with features to view price history and set custom alerts for market changes."
          link="https://cryptotracker-lovat.vercel.app/"
          key="1"
        />
        <ProjectCard
          src="/financemate.png"
          title="FinanceMate"
          description="A personal finance tool that helps users manage their budgets, track expenses, and visualize spending habits through easy-to-read charts."
          link="https://financemate.vercel.app/"
          key="1"
        />
        <ProjectCard
          src="/tomato.png"
          title="Tomato - Food Delivery"
          description="A food delivery app that allows users to browse menus, place orders, and track their food in real time. Offers smooth navigation and user-friendly design."
          link="https://food-delivery-frontend-no0l.onrender.com/"
          key="1"
        />
        <ProjectCard
          src="/portfolio.png"
          title="My Portfolio"
          description="A personal portfolio website showcasing my projects, skills, and experiences. Designed to highlight my work in web development and software engineering."
          link="https://sajalnamdeo.vercel.app"
          key="1"
        />
        <ProjectCard
          src="/moviestream.png"
          title="MovieStream"
          description="A movie streaming platform that offers users the ability to search for and watch trailers of their favorite films, with a clean, user-friendly interface."
          link="https://moviestream-wine.vercel.app"
          key="1"
        />
        <ProjectCard
          src="/syncstream.png"
          title="SyncStream"
          description="SyncStreamis a video calling platform enabling seamless virtual meetings with features like screen sharing, chat, and secure video calls."
          link="https://syncstream-ten.vercel.app/"
          key="1"
        />
      </div>
    </div>
  );
};

export default Projects;
