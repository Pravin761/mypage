import { ReactNode } from 'react';
import { ParticlesBackground } from './ParticlesBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <ParticlesBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}