import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components to improve initial page load
const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: true,
  loading: () => <div className="h-16 bg-background animate-pulse" />
});

const HeroSection = dynamic(() => import('@/components/HeroSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

const SkillsSection = dynamic(() => import('@/components/SkillsSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-background animate-pulse" />
});

const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: true,
  loading: () => <div className="h-32 bg-background animate-pulse" />
});

const ClientProgressBar = dynamic(() => import('@/components/ClientProgressBar'), {
  ssr: true
});

const BackToTopButton = dynamic(() => import('@/components/BackToTopButton'), {
  ssr: true
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative overflow-hidden dark:bg-background">
      {/* Progress Bar */}
      <ClientProgressBar />
      
      {/* Navbar Component */}
      <Suspense fallback={<div className="h-16 bg-background animate-pulse" />}>
      <Navbar />
      </Suspense>
      
      {/* Main Sections */}
      <Suspense fallback={<div className="h-screen bg-background animate-pulse" />}>
      <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-background animate-pulse" />}>
      <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-background animate-pulse" />}>
      <SkillsSection />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-background animate-pulse" />}>
      <ProjectsSection />
      </Suspense>

      <Suspense fallback={<div className="h-screen bg-background animate-pulse" />}>
      <ContactSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-background animate-pulse" />}>
      <Footer />
      </Suspense>
      
      {/* Back to top button */}
      <BackToTopButton />
    </main>
  );
}
