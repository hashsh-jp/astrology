import Link from 'next/link';
import AISystemHero from '@/components/AISystemHero';

export default function Home() {
  return (
    <div className="bg-[#0B1020]">
      {/* AI System Hero Section */}
      <AISystemHero />

      {/* About Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-[#0B1020] to-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Astrologyについて
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-12 border border-white/10">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center">
                株式会社Astrologyは<br />
                <span className="text-[#00D9FF] font-semibold">「独自開発の生成AIプロダクトの販売」</span><br />
                <span className="text-[#00D9FF] font-semibold">「経営コンサルティング」</span><br />
                <span className="text-[#00D9FF] font-semibold">「SNS運営・マーケティング支援」</span><br />
                3つの事業軸を展開する<br />
                AIソリューション企業です。<br /><br />

                独自開発の動画生成AIをはじめとする生成AIプロダクトの開発・販売を通じて、
                企業のマーケティングと表現の在り方そのものを進化させるテクノロジーを提供しています。<br /><br />

                さらに、AI活用・DX推進・事業設計に強みを持つ経営コンサルティング、
                そしてSNS運営・動画マーケティング支援までを一気通貫で行い、
                「ツール」「戦略」「実行」をすべて内製で支援できる体制を構築しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              提供していること
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/50 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">独自開発 生成AIプロダクト</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  動画生成AIを中心とした独自開発の生成AIプロダクトを販売。
                  SNS動画、広告、プロモーション、ブランディング用途まで幅広く対応します。
                </p>
              <Link href="/services#ai-product" className="text-[#00D9FF] hover:text-[#00AAFF] font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/50 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SNS運用サポート</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                初期設計からテンプレート作成、運用アドバイスまで、AIプロダクトの利用をスムーズにする支援。
              </p>
              <Link href="/services#support" className="text-[#00D9FF] hover:text-[#00AAFF] font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00D9FF]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#00D9FF]/50 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI×経営コンサルティング</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  AI導入設計・DX推進・集客導線・業務効率化まで、
                  経営視点でAI活用を最適化するコンサルティングを提供します。
                </p>
              <Link href="/services#consulting" className="text-[#00D9FF] hover:text-[#00AAFF] font-semibold inline-flex items-center group">
                詳しく見る
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32 bg-[#0B1020]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              導入の流れ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "01", title: "お問い合わせ", description: "公式LINEまたはお問い合わせフォームよりご連絡ください" },
                { step: "02", title: "ヒアリング", description: "現状の課題や目標をお聞きし、最適な活用方法を検討します" },
                { step: "03", title: "プラン提案", description: "貴社に合わせたプランと利用形態をご提案いたします" },
                { step: "04", title: "利用開始", description: "アカウント発行・初期設定を行い、すぐに利用開始できます" },
                { step: "05", title: "運用サポート", description: "継続的な運用フォローで、成果を最大化します" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-[#0B1020] via-[#0F1528] to-[#0B1020] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0088FF] rounded-full filter blur-[128px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              「無料相談」はこちら
            </h2>
            <div className="pt-6">
              <Link 
                href="/contact"
                className="inline-block px-10 py-5 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#06C755]/50 transition-all duration-300 transform hover:scale-105"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
