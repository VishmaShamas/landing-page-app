import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function FAQs() {
  const { profile } = useTheme();
  const faqs = Array.isArray(profile?.faqs) ? profile.faqs : [];
  const [showAll, setShowAll] = useState(false);

  if (!faqs.length) return null;

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 2);

  return (
    <section className="section-spacing relative">
      <div className="container-responsive">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20" style={{ animation: "fadeIn 1s ease-out" }}>
            <h2 className="text-5xl font-bold mb-6" style={{ color: "var(--theme-text)" }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-2xl max-w-3xl mx-auto" style={{ color: "var(--theme-text)", opacity: 0.8 }}>
              Everything you need to know about Web3 domains and NetZylo's services
            </p>
          </div>

          <div className="space-y-8">
            {visibleFaqs.map((faq, index) => (
              <div
                key={faq._id ?? index}
                className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-500"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.1}s both`,
                  background: "linear-gradient(135deg, rgba(86, 77, 240, 0.1), rgba(62, 209, 206, 0.05))",
                  border: "1px solid rgba(86, 77, 240, 0.2)",
                }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: "var(--theme-text)" }}>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, var(--theme-accent), var(--theme-container))" }}
                  >
                    Q
                  </span>
                  {faq.question}
                </h3>
                <div className="pl-12">
                  <p className="text-lg leading-relaxed" style={{ color: "var(--theme-text)", opacity: 0.9 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {faqs.length > 2 && (
            <div className="mt-10 text-center">
              <button
                className="px-5 py-2 rounded-md border transition hover:shadow"
                style={{ borderColor: "rgba(86,77,240,0.4)", color: "var(--theme-text)" }}
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
