"use client";

import { motion } from "framer-motion";

export default function EliveUnderConstructionPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-4 py-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-[#e3e8ef] bg-white shadow-[0_20px_60px_rgba(36,50,74,0.08)]"
      >
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#25468c] via-[#3a5aa3] to-[#f39a1f]" />

        <div className="grid gap-10 px-8 py-12 md:px-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.img
              src="/logo.png"
              alt="eLive logo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 w-[160px] md:w-[200px]"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-bold uppercase tracking-[0.22em] text-[#25468c] md:text-sm"
            >
              Website Under Construction
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-4xl font-black leading-tight text-[#143066] md:text-5xl lg:text-[56px]"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-8 text-[#5f6f86] md:text-lg"
            >
              We are building a refined digital platform for eLive to better showcase our communication, event, branding, printing, and media solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Bulk SMS",
                "eLive Card",
                "Branding",
                "Media Solutions",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f3f6fb] px-4 py-2 text-sm font-semibold text-[#25468c]"
                >
                  {item}
                </span>
              ))}
            </motion.div>

      
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl bg-[linear-gradient(135deg,#25468c_0%,#3a5aa3_100%)] p-8 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Status
            </p>

            <h2 className="mt-4 text-2xl font-black">
              Launch in Progress
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
              The main website is currently under development. This page serves as the official holding page while the full platform is being finalized and tested.
            </p>

            <div className="mt-6 h-px w-full bg-white/20" />

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f39a1f]" />
              <span className="text-sm font-medium text-white/90">
                Preparing for official launch
              </span>
            </div>
          </motion.div>
        </div>

          <div className="border-t border-[#eef2f6] px-10 py-4 text-sm text-[#7b8aa0] md:px-14">
          © {new Date().getFullYear()} eLive. All rights reserved.
        </div>
      </motion.section>
    </main>
  );
}
