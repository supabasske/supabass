import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Waves } from '../components/backgrounds/Waves';
import { AnimatedCard } from '../components/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Users, Award, Rocket, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2021', title: '50+ Projects', description: 'Delivered exceptional solutions to clients worldwide' },
  { year: '2022', title: 'Industry Recognition', description: 'Awarded Best Innovation in Tech Solutions' },
  { year: '2023', title: 'Global Expansion', description: 'Opened offices in 5 countries across 3 continents' },
  { year: '2024', title: '100+ Team Members', description: 'Built a diverse team of talented professionals' },
  { year: '2025', title: 'Future Forward', description: 'Continuing to push boundaries and innovate' },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Working with this team has been transformative. They delivered beyond our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, Innovation Labs',
    content: 'Exceptional technical expertise combined with creative problem-solving. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, Digital Co.',
    content: 'Their attention to detail and commitment to quality is unmatched. A true partnership.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

export const CommunityPage = () => {
  return (
    <>
      <Helmet>
        <title>Community - Supabass Tech</title>
        <meta name="description" content="Join our growing community of innovators and creators" />
      </Helmet>

      <Waves />

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
              Our Community
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Together we're building the future of technology
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24" data-testid="community-stats">
            {[
              { icon: Users, value: '100+', label: 'Team Members' },
              { icon: Award, value: '250+', label: 'Projects Delivered' },
              { icon: Rocket, value: '50+', label: 'Happy Clients' },
              { icon: Heart, value: '15+', label: 'Countries' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-center"
                data-testid={`stat-card-${index}`}
              >
                <stat.icon className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <section className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 text-center mb-16"
            >
              Our Journey
            </motion.h2>
            <div className="relative" data-testid="timeline">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30 -translate-x-1/2 hidden md:block" />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  data-testid={`milestone-${index}`}
                >
                  <div className="flex-1">
                    <AnimatedCard delay={0}>
                      <div className="text-cyan-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                    </AnimatedCard>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 shadow-lg flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 text-center mb-16"
            >
              What People Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="testimonials">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={testimonial.id} delay={index * 0.1} data-testid={`testimonial-${testimonial.id}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic">"{testimonial.content}"</p>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16 px-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-cyan-500/20"
            data-testid="join-cta-section"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Be part of something amazing. Let's build the future together.
            </p>
            <Link to="/contact">
              <Button
                data-testid="join-cta-button"
                className="px-10 py-6 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.section>
        </div>
      </main>
    </>
  );
};