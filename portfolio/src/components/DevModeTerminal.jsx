import React, { useState, useRef, useEffect, useMemo } from "react";

export default function DevModeTerminal({ isOpen, onClose }) {

    const commandList = [
        "help",
        "about",
        "projects",
        "fanquarters -d",
        "fanquarters -w",
        "stc",
        "resume",
        "github",
        "linkedin",
        "email",
        "clear",
        "exit",
        "certs",
        "education",
        "debruijn"
      ];
      
      
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setHasTyped(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Delay a bit to ensure the DOM has mounted
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  }, [isOpen]);
  
  // inside your component
  const terminalHeader = useMemo(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const isLaptop = !isMobile && screenWidth >= 1024 && screenHeight <= 900;
    const randomSuffix = Math.random().toString(36).substring(5, 9).toUpperCase();
    const fakeHost = isLaptop ? `ThinkPad-${randomSuffix}` : `WORKSTATION-${randomSuffix}`;
    return `user@${fakeHost} MINGW64 ~/portfolio`;
  }, []);
  

  useEffect(() => {
    if (!isOpen) {
      setCommand("");
      setCommandHistory([]);
      setHistory([
        "Welcome to Luke's Dev Terminal 💻",
        "Type `help` to view available commands.",
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command.trim().toLowerCase();
    if (!hasTyped) setHasTyped(true);
    if (!input) return;

    let output = "";

    switch (input) {
        case "help":
            const isMobile = window.innerWidth < 768;
          
            output = isMobile
              ? `Available Commands:
          help
            Show this list
          about
            Learn more about me
          projects
            Show my major projects
          certs
            View my certifications
          education
            See my academic background
          debruijn
            View my research paper on DB seq.
          fanquarters -d
            Open FanQuarters demo video
          fanquarters -w
            Open FanQuarters live site
          stc
            Open STC Pick’ems live site
          resume
            View my resume
          github
            Open my GitHub profile
          linkedin
            Open my LinkedIn profile
          email
            Send me an email
          clear
            Clear the terminal
          exit
            Close the terminal`
              : `Available Commands:
          help               Show this list
          about              Learn more about me
          projects           Show my major projects
          certs              View my certifications
          education          See my academic background
          debruijn           View my research paper on De Bruijn sequences
          fanquarters -d     Open FanQuarters demo video
          fanquarters -w     Open FanQuarters live site
          stc                Open STC Pick’ems live site
          resume             View my resume
          github             Open my GitHub profile
          linkedin           Open my LinkedIn profile
          email              Send me an email
          clear              Clear the terminal
          exit               Close the terminal`;
            break;
          
          
        case "debruijn":
            output = "Opening De Bruijn Sequence research paper...";
            window.open("/deBruijn_Paper.pdf", "_blank");
            break;
              
      case "about":
        output = `I'm a full-stack software engineer with a passion for building scalable, real-world software that solves real user problems. I thrive at the intersection of backend systems and polished front-end experiences, and I’m always pushing myself to grow technically and creatively.

Currently, I work at Candescent (formerly NCR Voyix), where I build full-stack microservices, design APIs, automate deployments, and collaborate across teams in an agile environment.

Outside of work, you’ll find me weightlifting, playing tennis, hanging out with friends, or tracking the Leafs' playoff hopes. I code because I love the challenge and the opportunity to create things that matter.`;
        break;
        case "projects":
            output = `Projects:
          • FanQuarters
            A full-stack fantasy football dashboard using React, Spring Boot, and MongoDB. Features live data from Sleeper API, an OpenAI-powered assistant, and a dynamic UI where users can build custom dashboards with drag-and-drop panels.
            Flags:
              -d     open demo video
              -w     open the live site
          
          • STC Pick’ems
            A .NET MVC web app for the Stratford Tennis Club, allowing members to submit Grand Slam bracket predictions. Used by 30+ club members every tournament.
            Flags:
              -w     open the live site`;
            break;
          
      case "fanquarters -d":
        output = "Opening FanQuarters demo...";
        window.open("https://www.youtube.com/watch?v=9KHVDoowlio", "_blank");
        break;
      case "stc":
        output = "Opening https://stcpickems.azurewebsites.net/";
        window.open("https://stcpickems.azurewebsites.net/", "_blank");
        break;
      case "resume":
        output = "Opening resume...";
        window.open("/Luke_Fischer_Resume.pdf", "_blank");
        break;
      case "github":
        output = "Opening GitHub profile...";
        window.open("https://github.com/Luke-Fischer", "_blank");
        break;
      case "linkedin":
        output = "Opening LinkedIn...";
        window.open("https://www.linkedin.com/in/luke-fischer-/", "_blank");
        break;
      case "email":
        output = "Opening email client...";
        window.open("mailto:lukefischer.dev@gmail.com", "_blank");
        break;
      case "certs":
        output = `Certifications:
        

• Introduction to AI with Python – Harvard University (2024)
  Covered search algorithms, constraint satisfaction problems, game trees, machine learning, and NLP using Python.

• AWS Certified Cloud Practitioner – Amazon Web Services (2023)
  Learned the foundations of cloud architecture, IAM, billing models, security, and AWS global infrastructure.`;
        break;
      case "education":
        output = `University of Guelph
Honours B.Sc. in Computer Science (Minor in Business)
GPA: 84%
Graduated: December 2022

Highlights:
• Completed a rigorous program focused on systems programming, algorithms, databases, and software architecture.
• Achieved a 96% average during final semester while taking 7 advanced courses — significantly exceeding full-time workload expectations.
• Selected by Dr. Sawada for an independent research project on De Bruijn sequences — implemented core algorithms in C, wrote a 16-page academic paper, and presented findings to the department faculty.
• Developed strong foundations in Java, C, and Python alongside practical experience with Linux, shell scripting, and parallel programming.
• Balanced technical coursework with business electives in project management, economics, and operations — strengthening my cross-functional perspective.`;
        break;
      case "skills":
        output = `Languages:
Java, JavaScript, C#, Python, SQL

Frameworks & Tools:
React.js, Spring Boot, .NET MVC, MongoDB, Azure, Docker, Kubernetes, Jenkins, GitHub, Postman

Concepts:
REST APIs, Microservices Architecture, CI/CD, Testing, Agile, UI/UX`;
        break;
      case "contact":
        output = `📧 Email: lukefischer.dev@gmail.com
🔗 LinkedIn: linkedin.com/in/luke-fischer-/
💻 GitHub: github.com/Luke-Fischer

Always happy to chat!`;
        break;
      case "clear":
        setHistory([]);
        setCommand("");
        return;
      case "exit":
        onClose();
        return;
    case "fanquarters -w":
        output = "Opening FanQuarters website...";
        window.open("https://www.fanquarters.ca", "_blank");
        break;
        
      default:
        output = `Unknown command: '${input}'. Try 'help'.`;
    }

    setHistory((prev) => [...prev, `> ${command}`, output]);
    setCommandHistory((prev) => [...prev, command]);
    setCommand("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    // Autocomplete
    if (e.key === "Tab") {
      e.preventDefault();
  
      const matches = commandList.filter((cmd) => cmd.startsWith(command));
  
      if (matches.length === 1) {
        setCommand(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev,
          `> ${command}`,
          `Suggestions: ${matches.join("   ")}`,
        ]);
      }
  
      setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
    }
  
    // Command History (Up)
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
  
      const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : commandHistory.length - 1;
      setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      setHistoryIndex(newIndex);
    }
  
    // Command History (Down)
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
  
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
      if (newIndex === -1) {
        setCommand("");
      } else {
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
      setHistoryIndex(newIndex);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center px-2">
      <div className="bg-[#0d0d0d] text-green-400 font-mono w-full max-w-2xl h-[70vh] md:h-[70vh] rounded-lg border border-teal-500 p-3 md:p-4 flex flex-col shadow-2xl text-xs md:text-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 md:mb-3 text-teal-400 text-[11px] md:text-sm">
          <h2>{terminalHeader}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white text-base md:text-lg"
          >
            ×
          </button>
        </div>
  
        {/* Terminal Output */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-2 md:p-3 border border-gray-700 rounded bg-black custom-scroll"
        >
          {history.map((line, idx) => {
            const isCommand = line.startsWith("> ");
            return (
              <div
                key={idx}
                className={`whitespace-pre-wrap leading-relaxed break-words ${
                  isCommand ? "text-white font-semibold" : "text-green-400"
                }`}
              >
                {line}
              </div>
            );
          })}
  
          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-2">
            <span className="text-teal-400 text-xs md:text-sm">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white text-xs md:text-sm"
              autoComplete="off"
              placeholder={hasTyped ? "" : "Type a command..."}
            />
          </form>
        </div>
      </div>
    </div>
  );  
}
