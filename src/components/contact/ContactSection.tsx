import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { siteConfig } from "../../data/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../common/BrandIcons";

interface ContactFormData {
  fullName: string;
  email: string;
  organization?: string;
  projectType: string;
  budget?: string;
  description: string;
  preferredContact: string;
}

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [fallbackNotice, setFallbackNotice] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      projectType: "Website Development",
      preferredContact: "Email",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFallbackNotice(null);

    try {
      const subject = encodeURIComponent(
        `[Project Inquiry / Opportunity] ${data.projectType} — from ${data.fullName}`
      );
      const body = encodeURIComponent(
        `Hello Dejashini,\n\n` +
          `Name: ${data.fullName}\n` +
          `Email: ${data.email}\n` +
          `Organization: ${data.organization || "N/A"}\n` +
          `Project Type: ${data.projectType}\n` +
          `Estimated Budget: ${data.budget || "Not Specified"}\n` +
          `Preferred Contact Method: ${data.preferredContact}\n\n` +
          `Project Description / Opportunity Details:\n${data.description}\n\n` +
          `Looking forward to hearing from you!\n`
      );

      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

      await new Promise((resolve) => setTimeout(resolve, 600));

      window.open(mailtoUrl, "_self");

      setSubmittedSuccess(true);
      setFallbackNotice(
        `A pre-filled draft was generated in your email client. If it did not open automatically, please send your email directly to ${siteConfig.email}.`
      );
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background Gradients & Glow */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Direct Channels"
          badgeVariant="peach"
          title="Have an Idea? Let's Start a Conversation."
          subtitle="Whether you need a modern web platform, an AI prototype, custom Python automation, or want to discuss full-time or freelance roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="rounded-3xl p-8 border shadow-warm-md paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <h3
                className="text-2xl font-display-serif font-bold mb-2 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Get in Touch Directly
              </h3>
              <p
                className="text-sm leading-relaxed mb-8 font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                I am responsive via email, phone, and professional networks. I'll get back to you promptly.
              </p>

              {/* Direct channels list */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 group"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="p-3 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#DCA996]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>
                      Email Address
                    </span>
                    <span className="text-sm font-semibold break-all" style={{ color: "var(--text-primary)" }}>
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 group"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="p-3 rounded-xl border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Phone className="w-5 h-5 text-[#B9A5CF]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div
                  className="flex items-center gap-4 p-4 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div
                    className="p-3 rounded-xl border flex items-center justify-center shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <MapPin className="w-5 h-5 text-[#EFC8B8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>
                      Location
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span
                  className="text-[11px] font-mono uppercase tracking-wider block mb-3.5 font-semibold"
                  style={{ color: "var(--text-muted)" }}
                >
                  Professional Networks
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-1 text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#DCA996]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-1 text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl border transition-all hover:-translate-y-0.5 flex flex-col items-center justify-center gap-1 text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <LeetCodeIcon className="w-5 h-5 text-[#EFC8B8]" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Prompt Turnaround Badge */}
            <div
              className="rounded-2xl p-4 border text-xs font-mono flex items-center gap-3 paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <Sparkles className="w-5 h-5 text-[#DCA996] flex-shrink-0" />
              <span>
                Prompt turnaround: I actively reply to messages within 24 hours.
              </span>
            </div>
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="lg:col-span-7">
            <div
              className="rounded-3xl p-8 sm:p-10 border shadow-warm-lg relative paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2.5 rounded-xl border flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <MessageSquare className="w-5 h-5 text-[#DCA996]" />
                </div>
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Project Inquiry & Contact Form
                  </h3>
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    Send structured details to start our conversation.
                  </p>
                </div>
              </div>

              {submittedSuccess && fallbackNotice && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block font-bold">
                      Thank you for reaching out!
                    </strong>
                    <p className="leading-relaxed">{fallbackNotice}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Full Name <span className="text-[#DCA996]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      {...register("fullName", { required: "Full name is required" })}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email Address <span className="text-[#DCA996]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Organization & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Company / Organization <span className="text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Innovations"
                      {...register("organization")}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Project Budget <span className="text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flexible / Discuss"
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>

                {/* Project Type & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Project Type <span className="text-[#DCA996]">*</span>
                    </label>
                    <select
                      {...register("projectType", { required: true })}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors cursor-pointer"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Python Automation">Python Automation</option>
                      <option value="AI/ML Application">AI/ML Application</option>
                      <option value="Internship or Job Opportunity">Internship or Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Preferred Contact
                    </label>
                    <select
                      {...register("preferredContact")}
                      className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors cursor-pointer"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <option value="Email">Email</option>
                      <option value="Phone / WhatsApp">Phone / WhatsApp</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Project Details / Goals <span className="text-[#DCA996]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about what you'd like to build, timeline expectations, or relevant project specs..."
                    {...register("description", {
                      required: "Please provide a brief description",
                      minLength: {
                        value: 15,
                        message: "Description should be at least 15 characters",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  />
                  {errors.description && (
                    <span className="text-[11px] text-rose-500 mt-1 block">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                {/* Submission Note */}
                <div
                  className="p-3.5 rounded-2xl border text-[11px] font-mono flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-muted)",
                  }}
                >
                  <AlertCircle className="w-4 h-4 text-[#DCA996] flex-shrink-0" />
                  <span>
                    Submitting prepares an email draft with your inquiry details in your default email application.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-mono font-bold text-xs text-[#FAF7F2] shadow-warm-md hover:shadow-warm-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  style={{
                    backgroundColor: "var(--accent-plum)",
                    border: "1px solid var(--accent-dusty-peach)",
                  }}
                >
                  {isSubmitting ? (
                    <span>Preparing Your Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#EFC8B8]" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
