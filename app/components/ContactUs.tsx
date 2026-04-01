"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, CheckCircle2, Sparkles, ArrowUpRight, User, MessageSquare, Terminal, Globe } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 2000);
  };

  return (
    <section className="relative py-16 bg-[#030014] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Branding Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] space-y-12 shrink-0"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-purple-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                Open for Collaboration
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
                Let's craft <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                  Something Iconic.
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                I build high-performance digital experiences that command attention. 
                Your vision, powered by the MERN stack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <ContactInfo icon={<Mail size={22}/>} label="Direct Email" value="hello@yourdomain.com" />
               <ContactInfo icon={<Globe size={22}/>} label="Availability" value="Remote • Global" />
            </div>
          </motion.div>

          {/* RIGHT: THE FORM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%]"
          >
            <form onSubmit={handleSubmit} className="relative group/form">
              <div className="relative p-8 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden">
                
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    <FloatingInput label="Full Name" icon={<User size={18}/>} />
                    <FloatingInput label="Email Address" type="email" icon={<Mail size={18}/>} />
                  </div>

                  <FloatingInput label="What are we building?" icon={<Terminal size={18}/>} />

                  {/* FIXED TEXTAREA: No scrollbar, No overlap, Matching spacing */}
                  <div className="relative group">
                    <div className="absolute right-0 top-4 text-white/10 group-focus-within:text-purple-500 transition-colors duration-500">
                        <MessageSquare size={18} />
                    </div>
                    <textarea 
                      required
                      className="peer w-full bg-transparent border-b border-white/10 py-4 pr-10 outline-none transition-all duration-500 text-lg text-gray-100 placeholder-transparent focus:border-purple-500 resize-none min-h-[50px] scrollbar-hide"
                      placeholder=" " 
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    />
                    <label className="absolute left-0 top-4 text-gray-500 text-xs font-bold tracking-widest transition-all duration-500 pointer-events-none 
                      peer-focus:-top-2 peer-focus:text-purple-400 peer-focus:text-[10px] peer-focus:font-black
                      peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-purple-400 peer-[:not(:placeholder-shown)]:text-[10px]">
                       TELL ME ABOUT YOUR VISION
                    </label>
                    <div className="absolute bottom-[5px] left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 peer-focus:w-full shadow-[0_1px_10px_rgba(168,85,247,0.5)]" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="relative w-full md:w-max px-12 h-16 rounded-2xl bg-white text-black font-black overflow-hidden flex items-center justify-center transition-all group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-3 group-hover/btn:text-white transition-colors duration-300 text-[11px] uppercase tracking-[0.3em]">
                      {loading ? "Transmitting..." : "Send Request"}
                      {!loading && <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Success Overlay */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030014]/95 rounded-[2.5rem] border border-purple-500/20 backdrop-blur-xl"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 border border-purple-500/20">
                      <CheckCircle2 size={40} className="text-purple-400" />
                    </motion.div>
                    <h3 className="text-2xl font-black italic tracking-widest text-white">SYNCED</h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// FIXED: Added pr-10 to prevent icon overlap, unified label top
const FloatingInput = ({ label, icon, type = "text" }: any) => {
  return (
    <div className="relative group">
      <div className="absolute right-0 top-4 text-white/10 group-focus-within:text-purple-500 transition-colors duration-500">
        {icon}
      </div>
      <input 
        type={type}
        required
        className="peer w-full bg-transparent border-b border-white/10 py-4 pr-10 outline-none transition-all duration-500 text-lg text-gray-100 placeholder-transparent focus:border-purple-500"
        placeholder=" "
      />
      <label className="absolute left-0 top-4 text-gray-500 text-xs font-bold tracking-widest transition-all duration-500 pointer-events-none 
        peer-focus:-top-4 peer-focus:text-purple-400 peer-focus:text-[10px] peer-focus:font-black
        peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-purple-400 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label.toUpperCase()}
      </label>
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 peer-focus:w-full shadow-[0_1px_10px_rgba(168,85,247,0.5)]" />
    </div>
  );
};

const ContactInfo = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-5">
    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-purple-400 shadow-lg">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-black">{label}</p>
      <p className="text-sm font-semibold text-gray-200 truncate">{value}</p>
    </div>
  </div>
);