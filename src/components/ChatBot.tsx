import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ArrowRight, User, MessageSquare } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  quickReplies?: string[];
};

type ConversationStep =
  | "welcome"
  | "budget"
  | "area"
  | "type"
  | "lead_name"
  | "lead_email"
  | "lead_phone"
  | "summary"
  | "free";

const BUDGETS = ["Under €500K", "€500K – €1M", "€1M – €3M", "€3M+"];
const AREAS = ["Palmeraie", "Medina", "Hivernage", "Golf Resorts"];
const TYPES = ["Villa", "Riad", "Modern Home"];

const assistantMsg = (text: string, quickReplies?: string[]): Message => ({
  id: crypto.randomUUID(),
  role: "assistant",
  text,
  quickReplies,
});

const userMsg = (text: string): Message => ({
  id: crypto.randomUUID(),
  role: "user",
  text,
});

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<ConversationStep>("welcome");
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", budget: "", area: "", type: "" });
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  useEffect(scrollToBottom, [messages, typing]);

  const addAssistant = useCallback((text: string, quickReplies?: string[]) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, assistantMsg(text, quickReplies)]);
    }, 800 + Math.random() * 400);
  }, []);

  // Initialize on open
  useEffect(() => {
    if (open && messages.length === 0) {
      addAssistant(
        "Welcome to Dar·Marrakech. I'm your private concierge, here to help you discover exceptional properties in Marrakech. How may I assist you today?",
        ["Browse villas", "Search by budget", "Book a visit", "Contact an advisor"]
      );
    }
  }, [open, messages.length, addAssistant]);

  const handleUserInput = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, userMsg(text)]);
    setInput("");

    const lower = text.toLowerCase();

    switch (step) {
      case "welcome":
        if (lower.includes("browse") || lower.includes("villa")) {
          setStep("budget");
          addAssistant("Excellent choice. To better assist you, may I know your preferred budget range?", BUDGETS);
        } else if (lower.includes("budget") || lower.includes("search")) {
          setStep("budget");
          addAssistant("Of course. What budget range are you considering?", BUDGETS);
        } else if (lower.includes("visit") || lower.includes("book")) {
          setStep("lead_name");
          addAssistant("I'd be delighted to arrange a private viewing. May I have your name, please?");
        } else if (lower.includes("contact") || lower.includes("advisor")) {
          setStep("lead_name");
          addAssistant("I'll connect you with one of our advisors. Could you share your name?");
        } else {
          setStep("budget");
          addAssistant("Thank you. Let me guide you through our collection. What is your preferred budget?", BUDGETS);
        }
        break;

      case "budget":
        setLead((p) => ({ ...p, budget: text }));
        setStep("area");
        addAssistant("Wonderful. Which area of Marrakech interests you most?", AREAS);
        break;

      case "area":
        setLead((p) => ({ ...p, area: text }));
        setStep("type");
        addAssistant("And what type of property are you looking for?", TYPES);
        break;

      case "type":
        setLead((p) => ({ ...p, type: text }));
        setStep("lead_name");
        addAssistant("Perfect. To share our curated selection with you, may I have your name?");
        break;

      case "lead_name":
        setLead((p) => ({ ...p, name: text }));
        setStep("lead_email");
        addAssistant(`Thank you, ${text}. Could you share your email address so we can send you our exclusive listings?`);
        break;

      case "lead_email":
        setLead((p) => ({ ...p, email: text }));
        setStep("lead_phone");
        addAssistant("And a phone number where our advisor can reach you? (Optional — type 'skip' to continue)");
        break;

      case "lead_phone":
        if (lower !== "skip") setLead((p) => ({ ...p, phone: text }));
        setStep("summary");
        addAssistant(
          "Thank you. One of our advisors will be in touch shortly with a curated selection tailored to your preferences. Is there anything else I can help you with?",
          ["Browse more properties", "No, thank you"]
        );
        break;

      case "summary":
        if (lower.includes("no") || lower.includes("thank")) {
          setStep("free");
          addAssistant("It was a pleasure assisting you. We look forward to welcoming you to Marrakech. À bientôt.");
        } else {
          setStep("budget");
          addAssistant("Of course. What budget range would you like to explore?", BUDGETS);
        }
        break;

      default:
        addAssistant(
          "Thank you for your message. One of our advisors will follow up with you. Is there anything else?",
          ["Browse villas", "Contact an advisor"]
        );
        setStep("welcome");
        break;
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald text-primary-foreground shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            aria-label="Open chat"
          >
            <MessageSquare size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] rounded-2xl shadow-2xl border border-border bg-background flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-emerald">
              <div>
                <h3 className="font-serif text-lg text-primary-foreground tracking-wide">Private Concierge</h3>
                <p className="text-xs text-primary-foreground/70 font-sans tracking-widest uppercase">Dar·Marrakech</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-1">
                        <MessageSquare size={13} className="text-emerald" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] px-4 py-2.5 text-sm font-sans leading-relaxed rounded-2xl ${
                        msg.role === "user"
                          ? "bg-emerald text-primary-foreground rounded-br-sm"
                          : "bg-secondary text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <User size={13} className="text-accent" />
                      </div>
                    )}
                  </div>

                  {/* Quick replies */}
                  {msg.quickReplies && msg.id === messages[messages.length - 1]?.id && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-9">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleUserInput(qr)}
                          className="text-xs font-sans px-3 py-1.5 rounded-full border border-emerald/30 text-emerald hover:bg-emerald hover:text-primary-foreground transition-colors duration-200"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <MessageSquare size={13} className="text-emerald" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserInput(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message…"
                  className="flex-1 bg-secondary/50 border border-border rounded-full px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald/30 transition-shadow"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-full bg-emerald text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:shadow-md transition-all duration-200"
                  aria-label="Send message"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
