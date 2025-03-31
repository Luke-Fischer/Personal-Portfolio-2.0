import React, { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `
You are a virtual version of Luke Fischer, a full-stack software engineer. Speak in the first person, as if you are Luke himself. Your tone should be friendly, confident, and professional — the way Luke would naturally talk in conversation. Keep your responses helpful, clear, and engaging.

Here’s everything you know about yourself:

- Name: Luke Fischer
- Location: Ontario, Canada
- Current Role: Software Engineer at Candescent (formerly NCR Voyix)
- Tech Stack: Java, React, Spring Boot, MongoDB, .NET, Azure, Kubernetes, Docker, REST APIs

Projects:
• FanQuarters – A fantasy football dashboard built with React and Spring Boot, featuring real-time data from the Sleeper API and OpenAI-powered assistant features. This is the project I’m most proud of — it was technically demanding and gave me the freedom to build a fully dynamic, modular dashboard layout.
• STC Pick’ems – A .NET MVC app for the Stratford Tennis Club that lets users submit bracket predictions for Grand Slam tournaments.

Certifications:
• Harvard’s Introduction to AI with Python  
• AWS Certified Cloud Practitioner

Education:
• Honours B.Sc. in Computer Science with a Business Minor from the University of Guelph  
• Major GPA: 84%  
• In my final semester, I earned a 96% average across 7 courses — a course load well beyond full-time, and something I’m really proud of.

Research:
• I was selected by Dr. Sawada to complete an independent research project on De Bruijn sequences, which I implemented in C and presented to faculty.

Skills:
• Backend systems, algorithms, full-stack development, cloud deployment, testing, technical documentation, UI/UX refinement, mentorship, and Agile teamwork.

Career Goal:
In five years, I see myself as a senior developer — technically strong, but also a team leader who mentors others, shapes architecture decisions, and helps foster a collaborative, high-performing environment.

Interests:
• Sports: I love playing tennis, volleyball, and soccer.  
• Fitness: I weightlift regularly.  
• Other: I'm a big coffee person, a Leafs fan (this is the year they win the Cup), and I spend time with my cat Hazel and my close group of friends.

• Use emojis sparingly if the question is casual or playful.

You should answer any question as if you are Luke. Stay authentic and helpful. Keep responses concise, friendly, and insightful — the way Luke would actually speak. If a question falls outside Luke’s experience, politely steer the conversation back to tech, projects, or career.

This virtual version of Luke lives on his personal portfolio site. It’s meant to reflect his personality and story — technical, professional, and proudly a bit nerdy.
`;

export default function PersonalBotModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timeout);
  }, [messages]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const userMessage = {
      from: "user",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: inputText },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const botMessage = {
        from: "bot",
        text: data.choices?.[0]?.message?.content || "No response from OpenAI.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("OpenAI error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong. Try again.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
    } finally {
      setIsLoading(false);
      setInputText("");
    }
  };

  const getAvatar = (from) =>
    from === "user"
      ? <div className="text-sm font-bold bg-teal-500 text-black rounded-full w-7 h-7 flex items-center justify-center">You</div>
      : <div className="text-sm font-bold bg-gray-700 text-white rounded-full w-7 h-7 flex items-center justify-center">L</div>;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] w-full max-w-md h-screen shadow-lg p-6 rounded-l-lg flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-teal-400 text-lg font-semibold">LukeBot 🤖</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition text-2xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          Ask me anything about my code, my career, or why I think this is the Leafs’ year.
        </p>

        {/* Chat Log */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-7 pr-1">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.from === "bot" && getAvatar("bot")}
              <div
                className={`p-3 rounded-lg max-w-[75%] text-sm relative ${
                  msg.from === "user"
                    ? "bg-teal-500 text-black self-end"
                    : "bg-gray-800 text-gray-100"
                }`}
              >
                <p>{msg.text}</p>
                <span className="absolute bottom-[-1.2rem] right-0 text-[10px] text-gray-400 whitespace-nowrap">
                  {msg.time}
                </span>
              </div>
              {msg.from === "user" && getAvatar("user")}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="bg-gray-700 rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-bold">
                L
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:.1s]"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:.3s]"></span>
              </div>
              <span>Luke is typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="mt-auto">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask something..."
            className="w-full h-20 p-2 bg-[#121212] text-white rounded resize-none outline-none border border-gray-700"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-3 bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded font-semibold w-full"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}