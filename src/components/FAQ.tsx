import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to build a mobile app?',
    answer:
      'Most MVPs take 8–12 weeks depending on scope. AI-integrated or multi-platform builds typically run 12–20 weeks, with working staging builds delivered throughout.',
  },
  {
    id: 'faq-1b',
    question: "Do you help with Google Play's 12/20-tester closed testing requirement for app publishing?",
    answer:
      'Yes. Google Play requires new personal developer accounts to run closed testing with 14-20 opted-in testers for 14 continuous days before production access is granted. We handle full closed testing management, real opt-in testers, feedback tracking, app publishing, and store compliance.',
  },
  {
    id: 'faq-2',
    question: 'Do you build for both iOS and Android?',
    answer:
      'Yes. We build natively for both platforms, or use a shared codebase where it fits the product, and can launch on one platform first if that suits your rollout plan.',
  },
  {
    id: 'faq-3',
    question: 'Can you integrate AI into an existing app?',
    answer:
      'Yes. We regularly add AI features — recommendations, chat, search, automation — into apps that already have real users, with minimal disruption to your existing stack.',
  },
  {
    id: 'faq-4',
    question: 'What happens after the app launches?',
    answer:
      'Every plan includes a post-launch support window, and we offer ongoing maintenance retainers for monitoring, OS updates, and feature iteration after that period ends.',
  },
  {
    id: 'faq-5',
    question: 'How is pricing determined?',
    answer:
      'Pricing depends on platform count, feature complexity, and whether custom AI/ML models are involved. We scope every project during a free consultation before quoting a fixed number.',
  },
  {
    id: 'faq-6',
    question: 'Do you sign NDAs and own IP transfer agreements?',
    answer:
      'Yes. We sign NDAs before discussing product details, and full IP ownership transfers to you on project completion as standard practice.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate preview

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      {/* Background Cyber-Ocean Grids & Glow */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full -translate-y-1/2" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FAQ</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Common questions about{' '}
            <span className="cyber-ocean-gradient-text">app development</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about engaging with WakeUp AI, project timelines, and technical deliverables.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'cyber-glass-card border-cyan-400/60 shadow-[0_0_20px_rgba(0,245,212,0.15)]'
                    : 'cyber-glass border-slate-800/80 hover:border-cyan-500/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-cyan-400 text-[#030712] shadow-[0_0_10px_#00f5d4]'
                        : 'bg-slate-900 border border-slate-700 text-cyan-400'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-cyan-500/10 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have a custom question not covered here?{' '}
            <a
              href="#contact"
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
            >
              Contact our engineering team directly
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
