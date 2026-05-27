import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { personalInfo } from '../data/personalInfo';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaMedium, FaPaperPlane } from 'react-icons/fa';
import ReCaptcha from 'react-google-recaptcha' ;

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null) ;
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{3,}$/;
  const NAME_REGEX = /^[a-zA-Z\s'-]+$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'user_name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!NAME_REGEX.test(value.trim())) return 'Name can only contain letters, spaces, hyphens and apostrophes';
        return '';
      case 'user_email':
        if (!value.trim()) return 'Email is required';
        if (!EMAIL_REGEX.test(value.trim())) return 'Please enter a valid email address (e.g. name@example.com)';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const err = validateField(name, value);

    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if(!captchaValue){
      alert("Please verify the captcha") ;
      return ; 
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({ user_name: '', user_email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch(() => {
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const fieldClass = (name) =>
    `contact-field ${errors[name] ? 'border-red-500/60 ring-red-500/20' : ''}`;

  const socialLinks = [
    { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: personalInfo.medium, icon: FaMedium, label: 'Medium' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-12 transition-colors duration-300">
      <SectionDecor flip />
      <div className="container relative z-0 mx-auto px-6 md:px-12">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's connect! I'm always open to discussing new opportunities."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form — left, glass panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-contact-panel p-5 sm:p-7 md:p-9"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-xs font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('user_name')}
                  placeholder="Your name"
                />
                {errors.user_name && <p className="text-xs text-red-400">{errors.user_name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="user_email" className="text-xs font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="text"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('user_email')}
                  placeholder="your.email@example.com"
                />
                {errors.user_email && <p className="text-xs text-red-400">{errors.user_email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  className={`${fieldClass('message')} resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
              </div>

              <ReCaptcha                                                                // for verificatio process
                sitekey = {import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange = {(value)=> setCaptchaValue(value)}
              />


              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] py-3.5 text-sm font-bold text-black shadow-[0_0_28px_rgba(34,197,94,0.35)] transition-all hover:shadow-[0_0_36px_rgba(34,197,94,0.45)] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaPaperPlane className="text-sm" />}
              </button>

              {submitStatus === 'success' && (
                <div className="rounded-xl border border-[#22c55e]/30 bg-black/40 px-4 py-3 backdrop-blur-sm">
                  <p className="text-center text-sm text-[#4ade80]">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="rounded-xl border border-red-500/30 bg-black/40 px-4 py-3 backdrop-blur-sm">
                  <p className="text-center text-sm text-red-400">
                    Failed to send message. Please configure EmailJS or email me directly.
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Info — right, reference layout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center lg:pt-4"
          >
            <h3 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Let&apos;s Connect
            </h3>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out!
            </p>

            <div className="mb-10 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-contact-card group flex items-center gap-4 p-4 md:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#22c55e]/30 bg-[#22c55e]/10 shadow-[0_0_16px_rgba(34,197,94,0.12)]">
                  <FaEnvelope className="text-lg text-[#4ade80]" />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs text-gray-500">Email</p>
                  <p className="truncate text-sm font-medium text-white group-hover:text-[#4ade80] transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="glass-contact-card flex items-center gap-4 p-4 md:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#22c55e]/30 bg-[#22c55e]/10 shadow-[0_0_16px_rgba(34,197,94,0.12)]">
                  <FaMapMarkerAlt className="text-lg text-[#4ade80]" />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium leading-snug text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium text-gray-500">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass-contact-card flex h-11 w-11 items-center justify-center text-gray-300 transition-all hover:border-[#22c55e]/40 hover:text-[#4ade80]"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
