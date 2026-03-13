import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Zynzi and how does it work?",
    answer:
      "Zynzi is a caregiving management app designed to simplify daily tasks, track schedules, and connect with the community effortlessly. You can manage everything from one clean dashboard in real-time.",
  },
  {
    question: "Is my data safe with Zynzi?",
    answer:
      "Absolutely. We use end-to-end encryption, secure cloud storage, and strict privacy protocols. Your personal and caregiving data is 100% protected and never shared without consent.",
  },
  {
    question: "Can I use Zynzi on multiple devices?",
    answer:
      "Yes! Zynzi syncs seamlessly across smartphones, tablets, and desktops. Log in from anywhere and all your updates stay perfectly synchronized.",
  },
  {
    question: "Do I need any special skills to use Zynzi?",
    answer:
      "Not at all. Zynzi is built for simplicity. The interface is intuitive, with smart onboarding and helpful tips to get you started in minutes.",
  },
  {
    question: "How can I join the waitlist?",
    answer:
      "Simply enter your email in the waitlist form on the homepage. You’ll receive early access and exclusive updates as soon as the app is ready.",
  },
  {
    question: "What kind of support does Zynzi offer?",
    answer:
      "We provide 24/7 customer support via chat and email. Our team is always ready to assist you, from troubleshooting to tips for maximizing your experience.",
  },
];

export default function FAQ() {
  // Set to null so all answers are hidden by default
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0F1C3A] py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header with Brand Gradient */}
        <div className="text-center mb-16 reveal visible">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-brand">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about Zynzi. Can't find the answer? 
            Reach out to our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass border-white/10 rounded-2xl transition-all duration-300 ${
                activeIndex === i ? "ring-1 ring-[#3DA0E4]/50 shadow-[0_0_20px_rgba(61,160,228,0.1)]" : ""
              }`}
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  activeIndex === i ? "text-[#3DA0E4]" : "text-white"
                }`}>
                  {faq.question}
                </span>
                
                {/* Brand Color Plus/Minus Symbol */}
                <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
                  activeIndex === i 
                  ? "bg-[#3DA0E4] border-[#3DA0E4] rotate-0" 
                  : "border-white/20 group-hover:border-[#3DA0E4]"
                }`}>
                  {activeIndex === i ? (
                    <Minus className="w-5 h-5 text-[#0F1C3A]" strokeWidth={3} />
                  ) : (
                    <Plus className="w-5 h-5 text-[#3DA0E4]" strokeWidth={3} />
                  )}
                </div>
              </button>

              {/* Animated Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-white/70 leading-relaxed text-base border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand visual element */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1F4494]/20 to-[#3DA0E4]/20 border border-[#3DA0E4]/20 text-center">
            <p className="text-white font-medium">Still have questions?</p>
           <a href="/contact">
            <button className="mt-4 px-8 py-3 bg-[#3DA0E4] hover:bg-[#1F4494] text-white rounded-full font-bold transition-all transform hover:scale-105">
                Contact Support
            </button>
           </a>
        </div>
      </div>
    </section>
  );
}