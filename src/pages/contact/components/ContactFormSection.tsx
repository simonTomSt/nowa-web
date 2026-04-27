import { useState } from "react";
import { Send } from "lucide-react";
import { Checkbox } from "@heroui/react";
import Container from "../../../components/layout/Container";

export default function ContactFormSection() {
  const [gdpr, setGdpr] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Leave Us A Message
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              Fill in the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email address <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors duration-150 resize-none"
              />
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                GDPR Consent <span className="text-accent">*</span>
              </p>
              <Checkbox
                isSelected={gdpr}
                onChange={setGdpr}
                isRequired
              >
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to the storage of the information submitted by me on this website for the
                    purpose of responding to my inquiry.
                  </span>
                </Checkbox.Content>
              </Checkbox>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-accent/30 cursor-pointer"
            >
              <Send size={18} />
              Send
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
