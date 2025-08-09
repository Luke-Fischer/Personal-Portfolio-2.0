import React, { useState } from "react";
import { Settings } from "lucide-react";

// Local icon imports

import reactIcon from "../assets/icons/react-2.svg";
import javaIcon from "../assets/icons/java-14.svg";
import mongoIcon from "../assets/icons/mongodb-icon-1.svg";
import springIcon from "../assets/icons/spring-3.svg";
import herokuIcon from "../assets/icons/heroku-4.svg";
import jsIcon from "../assets/icons/javascript-2.svg";
import dotnetIcon from "../assets/icons/dot-net-core-7.svg";
import csharpIcon from "../assets/icons/c--4.svg";
import azureIcon from "../assets/icons/azure-2.svg";
import cssIcon from "../assets/icons/css-3.svg";
import htmlIcon from "../assets/icons/html-1.svg";
import bootstrapIcon from "../assets/icons/bootstrap-5-1.svg" ;
import visualstudioIcon from "../assets/icons/visual-studio-2013.svg";
import githubIcon from "../assets/icons/github-icon-1.svg";
import mssqlserverIcon from "../assets/icons/microsoft-sql-server-1.svg";
import dockerIcon from "../assets/icons/docker-4.svg";
import kubernetesIcon from "../assets/icons/kubernets.svg";
import redisIcon from "../assets/icons/redis.svg";
import postmanIcon from "../assets/icons/postman.svg";
import jiraIcon from "../assets/icons/jira-1.svg";
import jenkinsIcon from "../assets/icons/jenkins-1.svg";
import linuxIcon from "../assets/icons/linux-tux.svg";
import windowsIcon from "../assets/icons/microsoft-windows-22.svg";
import awsIcon from "../assets/icons/aws-2.svg";
import pythonIcon from "../assets/icons/python-5.svg";
import awsiamIcon from "../assets/icons/aws-iam.svg";
import s3Icon from "../assets/icons/amazon-s3-simple-storage-service.svg";
import cIcon from "../assets/icons/c-1.svg";
import latexIcon from "../assets/icons/latex.svg";

const skillToIcon = {
  "React.js": reactIcon,
  "Java": javaIcon,
  "MongoDB": mongoIcon,
  "Spring Boot": springIcon,
  "Heroku": herokuIcon,
  "JavaScript": jsIcon,
  ".NET Framework": dotnetIcon,
  "C#": csharpIcon,
  "Microsoft Azure": azureIcon,
  "Cascading Style Sheets (CSS)": cssIcon,
  "HTML5": htmlIcon,
  "Bootstrap": bootstrapIcon,
  "Visual Studio": visualstudioIcon,
  "GitHub": githubIcon,
  "Microsoft SQL Server": mssqlserverIcon,
  "Docker": dockerIcon,
  "Kubernetes": kubernetesIcon,
  "Redis": redisIcon,
  "Postman": postmanIcon,
  "Jira": jiraIcon,
  "Jenkins": jenkinsIcon,
  "Linux": linuxIcon,
  "Windows": windowsIcon,
  "Python": pythonIcon,
  "AWS Cloud Fundamentals": awsIcon,
  "IAM (Identity & Access Management)": awsiamIcon,
  "EC2 & S3": s3Icon,
  "C": cIcon,
  "LaTeX": latexIcon
};

export default function SkillList({ skills, initialCount = 5 }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, initialCount);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full"
          >
            {skillToIcon[skill] ? (
            <img
                src={skillToIcon[skill]}
                alt={`${skill} icon`}
                className="w-4 h-4"
            />
            ) : (
            <Settings className="w-4 h-4 text-gray-500" />
            )}
            {skill}
          </span>
        ))}
      </div>

      {skills.length > initialCount && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-teal-400 text-sm hover:underline focus:outline-none"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
