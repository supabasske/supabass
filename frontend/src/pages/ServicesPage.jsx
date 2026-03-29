import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HexagonGrid } from '../components/backgrounds/HexagonGrid';
import { FlipCard } from '../components/AnimatedCard';
import { ContactButton } from '../components/ContactButton';
import { Code2, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    details: 'React, Vue, Next.js, TypeScript, and more. We build fast, scalable, and maintainable web applications that deliver exceptional user experiences.',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that users love.',
    details: 'iOS, Android, React Native, Flutter. We create beautiful, performant mobile apps that work seamlessly across devices and platforms.',
  },
  {
    id: 3,
    icon: Globe,
    title: 'UI/UX Design',
    description: 'User-centered design that combines beauty with functionality.',
    details: 'Figma, Adobe XD, user research, prototyping. We design interfaces that are not just beautiful, but intuitive and conversion-focused.',
  },
  {
    id: 4,
    icon: Database,
    title: 'Backend Systems',
    description: 'Robust, scalable backend infrastructure for your applications.',
    details: 'Node.js, Python, databases, APIs. We build solid backend systems that can handle any scale while maintaining security and performance.',
  },
  {
    id: 5,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies.',
    details: 'AWS, Azure, GCP, Docker, Kubernetes. We help you leverage cloud technologies for scalability, reliability, and cost-effectiveness.',
  },
  {
    id: 6,
    icon: Shield,
    title: 'Security & DevOps',
    description: 'Secure development practices and automated deployment pipelines.',
    details: 'CI/CD, security audits, monitoring. We ensure your applications are secure, well-monitored, and continuously improved.',
  },
];

export const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Supabass Tech</title>
        <meta name="description" content="Explore our comprehensive range of technology services" />
      </Helmet>

      <HexagonGrid />

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your needs. Click any card to learn more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-80"
                data-testid={`service-card-${service.id}`}
              >
                <FlipCard
                  front={
                    <div className="w-full h-full p-8 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                        <service.icon className="w-10 h-10 text-cyan-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {service.description}
                      </p>
                      <p className="mt-4 text-sm text-cyan-500 dark:text-cyan-400 font-medium">
                        Click to learn more
                      </p>
                    </div>
                  }
                  back={
                    <div className="w-full h-full p-8 rounded-xl bg-cyan-500/10 dark:bg-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 shadow-lg flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                          {service.details}
                        </p>
                      </div>
                      <ContactButton 
                        type="whatsapp" 
                        message={`Hi Supabass! I'm interested in ${service.title} services.`}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      />
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};