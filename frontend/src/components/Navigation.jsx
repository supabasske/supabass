import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Image, Users, Mail } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/illusions', label: 'Illusions', icon: Image },
  { path: '/community', label: 'Community', icon: Users },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50" data-testid="main-navigation">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg"
      >
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              data-testid={`nav-link-${label.toLowerCase()}`}
              className="relative px-4 py-2 rounded-full transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </span>
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
};