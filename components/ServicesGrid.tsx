import ServiceCard from '@/components/ServiceCard';

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Service 1 */}
      <ServiceCard
        title="独自開発 生成AIプロダクト"
        description={
          '動画生成AIを中心とした独自開発の生成AIプロダクトを販売。\nSNS動画、広告、プロモーション、ブランディング用途まで幅広く対応します。'
        }
        href="/services#ai-product"
        icon={
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        }
      />

      {/* Service 2 */}
      <ServiceCard
        title="SNS運用サポート"
        description={
          'マネタイズに向けて、\n初期設計からテンプレート作成、投稿の書き方・販売の考え方までを丁寧にサポート。\n収益化まで並走して進めていきます。'
        }
        href="/services#support"
        icon={
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />

      {/* Service 3 */}
      <ServiceCard
        title="経営コンサルティング"
        description={
          '事業戦略、組織設計、マーケティング/販売、オペレーション、財務/KPI設計まで、\n経営の本質課題に向き合い、成果に直結する伴走型の支援を提供します。'
        }
        href="/services#consulting"
        icon={
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        }
      />
    </div>
  );
}

