"use client";

import { useState } from "react";
  import {
    personalInfo,
    education,
    experiences,
    certificates,
    projects,
    skills,
  } from "./utils/constant";
import type { Education, Certificate, Project, Skills as SkillSet } from "./utils/constant";



// Main App component
export default function HomePage() {
  // State for toggling dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const [submissionStatus, setSubmissionStatus] = useState<string>("");

  // Function to toggle the dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  // Define color classes based on the current mode
  const bgMain = isDarkMode ? "bg-[#121212]" : "bg-gray-100";
  const textMain = isDarkMode ? "text-gray-200" : "text-gray-800";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";
  const borderPrimary = isDarkMode ? "border-gray-600" : "border-gray-300";
  const bgCard = isDarkMode ? "bg-[#1e1e1e]" : "bg-white";
  const textHeading = isDarkMode ? "text-gray-100" : "text-gray-900";
  const linkColor = isDarkMode ? "text-[#6c5ce7]" : "text-blue-600";
  const linkHoverColor = isDarkMode
    ? "hover:text-[#8d82eb]"
    : "hover:text-blue-800";
  const buttonBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const buttonText = isDarkMode ? "text-gray-200" : "text-gray-800";
  const inputBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const inputBorder = isDarkMode ? "border-gray-700" : "border-gray-300";

  return (
    <div
      className={`${bgMain} min-h-screen ${textMain} font-sans p-4 md:p-12 antialiased transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto py-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h1 className={`text-4xl font-bold ${textHeading}`}>
              {personalInfo.name}
            </h1>
            <p className={`text-lg ${textSecondary} mt-2`}>
              {personalInfo.location}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`${linkHoverColor}`}
            >
              {personalInfo.email}
            </a>
            <div className="flex space-x-4 mt-2">
              <a href={personalInfo.github} className={`${linkHoverColor}`}>
                GitHub
              </a>
              <a href={personalInfo.linkedin} className={`${linkHoverColor}`}>
                LinkedIn
              </a>
              <a href={personalInfo.twitter} className={`${linkHoverColor}`}>
                Twitter
              </a>
            </div>
          </div>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`mt-4 md:mt-0 md:ml-6 p-2 rounded-full ${buttonBg} ${buttonText} transition-colors duration-300`}
            aria-label={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sun"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m4.93 19.07 1.41-1.41" />
                <path d="m17.66 6.34 1.41-1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </header>

        {/* Education Section */}
        <section className="mb-12">
          <h2
            className={`text-3xl font-bold mb-6 ${textHeading} border-b ${borderPrimary} pb-2`}
          >
            Education
          </h2>
          <div
            className={`${bgCard} p-6 rounded-lg shadow-md transition-colors duration-300`}
          >
            <h3 className={`text-xl font-semibold ${textHeading}`}>
              {(education as Education).institute}
            </h3>
            <p className={`mt-2 ${textSecondary}`}>
              {(education as Education).degree}
            </p>
            <p className={`${textSecondary}`}>
              GPA: {(education as Education).gpa}
            </p>
            <p className={`${textSecondary}`}>
              {(education as Education).years}
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2
            className={`text-3xl font-bold mb-6 ${textHeading} border-b ${borderPrimary} pb-2`}
          >
            Projects
          </h2>
          <div className="grid gap-8">
            {(projects as Project[]).map((project, index) => (
              <div
                key={index}
                className={`${bgCard} p-6 rounded-lg shadow-md transition-colors duration-300`}
              >
                <div className="flex flex-col md:flex-row-reverse md:items-center gap-6">
                  {project.screenshot && (
                    <div className="w-full md:w-1/2">
                      <img
                        src={project.screenshot}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-auto rounded-lg mb-4 md:mb-0 object-cover"
                      />
                    </div>
                  )}
                  <div className="w-full md:w-1/2">
                    <h3 className={`text-xl font-semibold ${textHeading}`}>
                      {project.title}
                    </h3>
                    <p className={`mt-2 ${textSecondary} leading-relaxed`}>
                      {project.description}
                    </p>
                    <div className="mt-4 flex space-x-4 text-sm">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className={`py-1 px-3 rounded-full border ${borderPrimary} inline-block ${linkColor} ${linkHoverColor} transition-colors duration-300`}
                        >
                          Live
                        </a>
                      )}
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          className={`py-1 px-3 rounded-full border ${borderPrimary} inline-block ${linkColor} ${linkHoverColor} transition-colors duration-300`}
                        >
                          Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <h2
            className={`text-3xl font-bold mb-6 ${textHeading} border-b ${borderPrimary} pb-2`}
          >
            Certificates
          </h2>
          <div className="grid gap-8">
            {(certificates as Certificate[]).map((certificate, index) => (
              <div
                key={index}
                className={`${bgCard} p-6 rounded-lg shadow-md transition-colors duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {certificate.certificateImage && (
                    <img
                      src={certificate.certificateImage}
                      alt={`Certificate for ${certificate.title}`}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className={`text-xl font-semibold ${textHeading}`}>
                      {certificate.title}
                    </h3>
                    <p className={`mt-2 ${textSecondary} leading-relaxed`}>
                      {certificate.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  {certificate.link && (
                    <button
                      onClick={() => window.open(certificate.link!, "_blank")}
                      className={`py-2 px-4 rounded-full ${buttonBg} ${buttonText} text-sm transition-colors duration-300`}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2
            className={`text-3xl font-bold mb-6 ${textHeading} border-b ${borderPrimary} pb-2`}
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`${bgCard} p-6 rounded-lg shadow-md transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold ${textHeading}`}>
                Languages & Frameworks
              </h3>
              <p className={`mt-2 ${textSecondary}`}>
                {(skills as SkillSet).languages}
              </p>
              <p className={`mt-2 ${textSecondary}`}>
                {(skills as SkillSet).frameworks}
              </p>
            </div>
            <div
              className={`${bgCard} p-6 rounded-lg shadow-md transition-colors duration-300`}
            >
              <h3 className={`text-xl font-semibold ${textHeading}`}>
                Database & Coursework
              </h3>
              <p className={`mt-2 ${textSecondary}`}>
                {(skills as SkillSet).databases}
              </p>
              <p className={`mt-2 ${textSecondary}`}>
                {(skills as SkillSet).coursework}
              </p>
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
}
