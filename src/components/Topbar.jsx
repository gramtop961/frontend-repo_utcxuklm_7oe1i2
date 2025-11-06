import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, User, Moon, Sun } from 'lucide-react';

export default function Topbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="relative flex-1 max-w-md">
          <input
            className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-10 py-2 text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search contacts, deals, activities..."
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        </div>

        <div className="ml-4 flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70"
            aria-label="Toggle theme"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {dark ? (
                <motion.span key="moon" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                  <Moon size={16} className="text-neutral-200" />
                </motion.span>
              ) : (
                <motion.span key="sun" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                  <Sun size={16} className="text-amber-500" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70">
            <Bell size={16} className="text-neutral-500" />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white shadow">
              3
            </span>
          </button>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-2 py-1.5 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70"
            >
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <span className="hidden sm:block text-sm font-medium text-neutral-800 dark:text-neutral-100">Alex</span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="absolute right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl"
                >
                  <div className="px-3 py-3">
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Alex Morgan</p>
                    <p className="text-xs text-neutral-500">alex@flowcrm.io</p>
                  </div>
                  <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
                  <ul className="p-1 text-sm text-neutral-700 dark:text-neutral-300">
                    <li className="rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Profile</li>
                    <li className="rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Settings</li>
                    <li className="rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">Logout</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
