import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, BarChart, Users, Activity, Settings, ChevronRight } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Overview', icon: Home },
  { id: 'sales', label: 'Sales', icon: BarChart },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ collapsed, setCollapsed, active, setActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 76 : 256 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className="relative h-screen bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-r border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-2 px-4 py-4">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-inner" />
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
          >
            FlowCRM
          </motion.span>
        )}
        <button
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
        >
          <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
            <ChevronRight size={18} />
          </motion.div>
        </button>
      </div>

      <nav className="mt-2 flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`group relative w-full overflow-hidden rounded-xl px-3 py-2.5 text-left flex items-center gap-3 transition-colors ${
                isActive
                  ? 'text-white'
                  : 'text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'
              }`}
            >
              <motion.span
                layoutId="active-bg"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className={`${
                  isActive ? 'absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg' : 'hidden'
                }`}
              />

              <span className="relative z-10 inline-flex items-center gap-3">
                <Icon size={18} />
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="px-3 py-4">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 bg-white/60 dark:bg-neutral-900/60"
          >
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Tip: {hovered ? 'Click the arrow to pin the sidebar.' : 'Hover to see more options.'}
            </p>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
}
