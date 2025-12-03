import Link from 'next/link';
import type { ReactNode } from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/50 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed mb-6">{description}</p>
      <Link href={href} className="text-[#00D9FF] hover:text-[#00AAFF] font-semibold inline-flex items-center group">
        詳しく見る
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

