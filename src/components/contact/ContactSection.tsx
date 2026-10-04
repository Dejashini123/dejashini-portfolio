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
      // Build mailto action link containing all structured project inquiry details
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
          `Project Description / Details:\n${data.description}\n\n` +
          `Looking forward to hearing from you!\n`
      );

      const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

      // Simulate network processing state
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Trigger mail client with structured inquiry
      window.location.href = mailtoUrl;

      setSubmittedSuccess(true);
      setFallbackNotice(
        "A pre-filled draft was generated in your email client so you can review and send it directly. If your mail client did not open automatically, please send your email directly to dejashini123@gmail.com."
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
      className="py-24 bg-[#11152E] text-white relative overflow-hidden"
    >
      {/* Background Gradients & Glow */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#5865F2]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#7548E8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Start A Conversation"
          badgeVariant="cyan"
          title="Have an Idea? Let's Make It Happen."
          subtitle="Whether you need a modern website, an automation tool, an AI-powered application, or simply want to discuss an interesting opportunity, I'd love to hear from you."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#171B38] rounded-3xl p-8 border border-[#7548E8]/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                I am responsive via email, phone, and professional networks. Feel free
                to connect through whichever platform suits you best.
              </p>

              {/* Direct channels list */}
              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#5865F2]/15 border border-white/10 hover:border-[#5865F2]/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#5865F2]/20 text-[#67E8F9] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#67E8F9] transition-colors break-all">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#7548E8]/15 border border-white/10 hover:border-[#7548E8]/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#7548E8]/20 text-[#C4B5FD] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#C4B5FD] transition-colors">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-pink-500/20 text-[#F5B8D5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Row */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block uppercase mb-4">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#5865F2]/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold"
                  >
                    <GithubIcon className="w-5 h-5 text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#FFA116]/20 border border-white/10 hover:border-[#FFA116]/50 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold"
                  >
                    <LeetCodeIcon className="w-5 h-5 text-[#FFA116]" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Response time promise */}
            <div className="bg-gradient-to-r from-[#5865F2]/10 to-[#7548E8]/10 rounded-2xl p-4 border border-[#5865F2]/20 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#67E8F9] flex-shrink-0" />
              <span>
                Prompt turnaround: I typically respond to all project inquiries and messages within 24 hours.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171B38] rounded-3xl p-8 sm:p-10 border border-[#7548E8]/30 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#5865F2]/20 text-[#67E8F9]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Project Inquiry & Contact Form
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill in your details below to start our discussion.
                  </p>
                </div>
              </div>

              {submittedSuccess && fallbackNotice && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block font-bold text-white">
                      Thank you for reaching out!
                    </strong>
                    <p className="text-slate-300 leading-relaxed">{fallbackNotice}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-[#F5B8D5]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Sharma"
                      {...register("fullName", { required: "Full name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-pink-400 mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-[#F5B8D5]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="maya@company.com"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-pink-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Organization & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Company / Organization <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech Studio"
                      {...register("organization")}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Budget <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flexible / Discuss"
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Type <span className="text-[#F5B8D5]">*</span>
                    </label>
                    <select
                      {...register("projectType", { required: true })}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors cursor-pointer"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      {...register("preferredContact")}
                      className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors cursor-pointer"
                    >
                      <option value="Email">Email</option>
                      <option value="Phone / WhatsApp">Phone / WhatsApp</option>
                      <option value="LinkedIn">LinkedIn</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Project Description / Opportunity Details <span className="text-[#F5B8D5]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about what you'd like to build, timeline expectations, or relevant project specs..."
                    {...register("description", {
                      required: "Please provide a brief project description",
                      minLength: {
                        value: 15,
                        message: "Description should be at least 15 characters",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-[#11152E] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] transition-colors resize-none"
                  />
                  {errors.description && (
                    <span className="text-[11px] text-pink-400 mt-1 block">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                {/* Submission Note */}
                <div className="p-3 rounded-xl bg-white/5 text-[11px] text-slate-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#67E8F9] flex-shrink-0" />
                  <span>
                    Submitting this form prepares an email draft with your details in your email application for direct dispatch.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] shadow-[0_0_25px_rgba(88,101,242,0.4)] hover:shadow-[0_0_35px_rgba(88,101,242,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing Your Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
