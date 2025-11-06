import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const stagger = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, type: 'spring', stiffness: 300, damping: 24 },
  }),
};

function SalesOverview() {
  const bars = [45, 80, 62, 90, 50, 70, 96];
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 shadow-sm">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">Sales overview</h3>
        <span className="text-xs text-neutral-500">Last 7 days</span>
      </div>
      <div className="mt-4 grid h-40 grid-cols-7 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: i * 0.06 }}
            className="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-t from-indigo-600 via-purple-500 to-pink-500"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: i * 0.06 + 0.2 }}
              className="absolute inset-0 bg-white"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RecentActivities() {
  const items = [
    { id: 1, text: 'New deal closed - $12,400 by Alex' },
    { id: 2, text: 'Meeting scheduled with Acme Corp' },
    { id: 3, text: 'Contact updated - Sarah Chen' },
    { id: 4, text: 'Invoice sent to Nova LLC' },
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 shadow-sm">
      <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-white">Recent activity</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.08 }}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300"
          >
            {item.text}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';
function ContactsList() {
  const [openId, setOpenId] = useState(null);
  const contacts = [
    { id: 1, name: 'Sarah Chen', company: 'Acme Corp', email: 'sarah@acme.com' },
    { id: 2, name: 'Diego Alvarez', company: 'Nova LLC', email: 'diego@nova.io' },
    { id: 3, name: 'Priya Patel', company: 'Stellar Labs', email: 'priya@stellar.ai' },
  ];
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 shadow-sm">
      <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-white">Contacts</h3>
      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {contacts.map((c) => {
          const open = openId === c.id;
          return (
            <li key={c.id} className="py-2">
              <button
                onClick={() => setOpenId(open ? null : c.id)}
                className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{c.name}</p>
                  <p className="text-xs text-neutral-500">{c.company}</p>
                </div>
                <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-neutral-500">
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    className="overflow-hidden px-2"
                  >
                    <div className="mt-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 p-3 text-sm">
                      <p className="text-neutral-600 dark:text-neutral-300">Email: {c.email}</p>
                      <div className="mt-2 flex gap-2">
                        <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white shadow hover:bg-indigo-500">Message</button>
                        <button className="rounded-lg border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60">View</button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Dashboard({ onNewContact }) {
  useEffect(() => {}, []);
  return (
    <div className="space-y-6">
      <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 overflow-hidden rounded-2xl">
          <div className="relative h-64 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-neutral-950/80 dark:via-neutral-950/30" />
          </div>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          custom={2}
          className="lg:col-span-1"
        >
          <SalesOverview />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <motion.div variants={stagger} initial="hidden" animate="show" custom={1} className="lg:col-span-2">
          <RecentActivities />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" animate="show" custom={2} className="lg:col-span-1">
          <ContactsList />
        </motion.div>
      </div>

      <motion.button
        onClick={onNewContact}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-3 text-white shadow-xl"
      >
        <Plus size={18} />
        New Contact
      </motion.button>
    </div>
  );
}
