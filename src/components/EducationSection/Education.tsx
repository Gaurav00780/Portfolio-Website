"use client";

import { ChevronDown, GraduationCap, School, BookOpen, Award } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface EducationEntryProps {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  courses?: string[];
  achievements?: string[];
  icon: React.ReactNode;
}

const EducationCard = ({
  institution,
  degree,
  duration,
  gpa,
  courses = [],
  achievements = [],
  icon,
}: EducationEntryProps) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [courses, achievements]);

  return (
    <div className="px-4 md:px-[4%] mb-4">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="group border border-white/10 bg-[#0A0A0C]/60 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-150 cursor-pointer hover:border-white/20"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start md:items-center p-4 md:p-5 gap-3">
          <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-0">
            {/* Logo/Icon Wrapper */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <span className="absolute -inset-[2px] rounded-[14px] border border-white/20" />
              <div className="w-full h-full rounded-[12px] bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 relative text-white/80 group-hover:text-white transition-colors">
                {icon}
              </div>
            </div>

            {/* Text details */}
            <div className="flex flex-col justify-center min-w-0">
              <h2 className="text-lg md:text-2xl font-semibold tracking-tight leading-snug flex flex-wrap items-center gap-2 font-space-grotesk break-words text-white">
                <span className="truncate">{institution}</span>
                <span className="text-[10px] md:text-sm text-secondary font-sans font-normal border border-white/15 px-2 py-0.5 rounded-sm whitespace-nowrap bg-white/5">
                  {degree}
                </span>
              </h2>

              <div className="text-zinc-400 text-xs md:text-sm leading-tight flex items-center gap-2 mt-1">
                <span>{duration}</span>
                {gpa && (
                  <>
                    <span className="text-zinc-600">•</span>
                    <span className="text-emerald-400 font-medium">{gpa}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 text-white/70 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-180 scale-110 text-white" : ""
              }`}
          />
        </div>

        {/* EXPANDABLE CONTENT */}
        <div
          style={{ height: open ? height : 0 }}
          className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
        >
          <div
            ref={contentRef}
            className={`px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-secondary/80 leading-relaxed transition-all duration-500 ${open
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 -translate-y-2 blur-sm"
              }`}
          >
            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="space-y-2 mb-4">
                <h3 className="text-xs md:text-sm font-semibold text-white/90 flex items-center gap-1.5 uppercase tracking-wider font-space-grotesk">
                  <Award size={14} className="text-secondary" />
                  Key Achievements & Activities
                </h3>
                <div className="space-y-1.5 pl-1.5">
                  {achievements.map((item, index) => (
                    <p key={index} className="relative pl-4 text-xs md:text-sm">
                      <span className="absolute left-0 top-[8px] h-1 w-1 rounded-full bg-secondary" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Courses / Subjects */}
            {courses.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs md:text-sm font-semibold text-white/90 flex items-center gap-1.5 uppercase tracking-wider font-space-grotesk mb-2">
                  <BookOpen size={14} className="text-secondary" />
                  Key Coursework
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  const educationData = [
    {
      institution: "Mulund College of Commerce",
      degree: "Bachelor of Computer Applications (BCA) ",
      duration: "2023 - 2026",
      gpa: "CGPA: 9.12 / 10.0",
      icon: <GraduationCap size={22} className="text-secondary" />,
      achievements: [
        "Recipient of the Academic Excellence Award in All Year.",
        "Winner of the Ideation Competition At the College Level"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Web Engineering",
        "Operating Systems",
        "Software Testing"
      ]
    },
    {
      institution: "S.K. Somaiya Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2021 - 2023",
      gpa: "Percentage: 90.5%",
      icon: <School size={20} className="text-secondary" />,
      achievements: [
        "Received the High Scoring Award"
      ],
      courses: [
        "Accounting",
        "Economics",
        "Mathematics",
        "Computer Science"
      ]
    }
  ];

  return (
    <div className="flex flex-col py-8 w-full ">
      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          institution={edu.institution}
          degree={edu.degree}
          duration={edu.duration}
          gpa={edu.gpa}
          icon={edu.icon}
          achievements={edu.achievements}
          courses={edu.courses}
        />
      ))}
    </div>
  );
}
