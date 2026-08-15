import React, { useState } from 'react';
import { useSkills } from '../context/SkillsContext';
import { X, Send, Bot, User, Sparkles, Terminal, ChevronRight } from 'lucide-react';

export default function MCopilotDrawer({ isOpen, onClose, onOpenContact }) {
  const { categories } = useSkills();
  const [messages, setMessages] = useState([
    {
      sender: 'copilot',
      text: 'WELCOME TO AI COPILOT INTELLIGENCE ENGINE. I am Ridham\'s AI Portfolio Assistant. Ask me anything about his technical stack, project history, or engineering background.'
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const quickPrompts = [
    'What is Ridham’s core tech stack?',
    'Tell me about his top projects',
    'Is Ridham available for hire?',
    'How do I contact him?'
  ];

  const handleSend = (queryText) => {
    const textToSubmit = queryText || input;
    if (!textToSubmit.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: textToSubmit }];
    setMessages(newMessages);
    setInput('');

    // Generate intelligent M Copilot response
    setTimeout(() => {
      let reply = '';
      const q = textToSubmit.toLowerCase();

      if (q.includes('stack') || q.includes('skill') || q.includes('technology') || q.includes('learn')) {
        const catSummary = categories
          .map(cat => `${cat.title.split(' /// ')[1] || cat.title}: ${cat.skills.map(s => s.name.split('(')[0].trim()).join(', ')}`)
          .join(' | ');
        reply = `Ridham's current stack — ${catSummary}. He updates these live in the Skills section. Check it out!`;
      } else if (q.includes('project') || q.includes('work') || q.includes('built')) {
        reply = 'Ridham has built real projects including his portfolio (React + Vite + OriginKit), a Hackathon FastAPI decoupled app, The Odin Project builds, and a WIP Docker ML pipeline. Check the Projects section!';
      } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
        reply = 'Ridham is available for high-performance software engineering projects and full-stack contracts! Click the CONTACT /// button in the menu or contact modal to send a direct message.';
      } else {
        reply = `AI COPILOT DATA: "${textToSubmit}" - Ridham is an engineering student building full-stack web apps, ML pipelines, and DevOps automation. Currently learning FastAPI, Docker, GitHub Actions, and scikit-learn.`;
      }

      setMessages((prev) => [...prev, { sender: 'copilot', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-black border-l border-zinc-800 flex flex-col h-full shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="m-stripe-vertical h-5"></div>
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-sky-400" />
              <span className="font-bold text-sm tracking-widest text-white uppercase">
                AI COPILOT /// ASSISTANT
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="button-icon w-8 h-8 hover:bg-zinc-800"
          >
            <X size={16} />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'copilot' && (
                <div className="w-7 h-7 bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-sky-400" />
                </div>
              )}

              <div
                className={`p-4 rounded-none max-w-[80%] text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-zinc-800 text-white border border-zinc-700'
                    : 'bg-zinc-950 text-zinc-300 border border-zinc-900 font-light'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-bold text-xs shrink-0">
                  U
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="p-4 border-t border-zinc-900 bg-zinc-950/50 space-y-2">
          <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase mb-2">QUICK QUERIES ///</div>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="text-[11px] font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1 border border-zinc-800 text-left flex items-center gap-1"
              >
                <span>{prompt}</span>
                <ChevronRight size={10} className="text-sky-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-zinc-800 bg-black flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI Copilot about Ridham..."
            className="text-input text-xs flex-1"
          />
          <button
            onClick={() => handleSend()}
            className="button-primary px-4 h-12"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
