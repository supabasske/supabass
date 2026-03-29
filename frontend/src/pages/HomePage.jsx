import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Starfield } from '../components/backgrounds/Starfield';
import { Aurora } from '../components/backgrounds/Aurora';
import { CyclingHeadline } from '../components/CyclingHeadline';
import { AnimatedCard } from '../components/AnimatedCard';
import { SocialLinks } from '../components/SocialLinks';
import { ArrowRight, Code, Palette, Zap, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const jokes = [
  { id: 1, joke: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
  { id: 2, joke: "What's a programmer's favorite hangout place?", punchline: "The Foo Bar!" },
  { id: 3, joke: "Why did the developer go broke?", punchline: "Because he used up all his cache!" },
  { id: 4, joke: "How many programmers does it take to change a light bulb?", punchline: "None, that's a hardware problem!" },
];

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Home - Supabass Tech</title>
        <meta name="description" content="Supabass - Building tomorrow with cutting-edge technology and innovation" />
      </Helmet>

      {theme === 'dark' ? <Starfield /> : <Aurora />}

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4" data-testid="hero-section">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CyclingHeadline />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
              >
                We transform visionary ideas into powerful digital solutions. 
                Our team combines creativity, technology, and innovation to build 
                experiences that matter.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                    <Button
                      data-testid="cta-explore-button"
                      className="px-8 py-6 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      Explore Our Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      data-testid="cta-contact-button"
                      className="px-8 py-6 rounded-full border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-8"
              >
                <SocialLinks className="justify-center" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-4" data-testid="about-section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                What We Do
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Specializing in modern web development, creative design, and digital innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Code,
                  title: 'Development',
                  description: 'Building scalable, performant applications with modern frameworks and best practices.',
                  delay: 0,
                },
                {
                  icon: Palette,
                  title: 'Design',
                  description: 'Crafting beautiful, intuitive interfaces that users love to interact with.',
                  delay: 0.1,
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description: 'Optimizing every aspect to deliver lightning-fast, seamless experiences.',
                  delay: 0.2,
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
                  delay: 0.3,
                },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={item.delay} data-testid={`about-card-${index}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Jokes Section */}
        <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/20" data-testid="jokes-section">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Dev Humor
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Because every great developer needs a good laugh
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jokes.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  data-testid={`joke-card-${item.id}`}
                >
                  <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      {item.joke}
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-cyan-600 dark:text-cyan-400 font-medium"
                    >
                      {item.punchline}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};