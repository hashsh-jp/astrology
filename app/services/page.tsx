import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス | 株式会社Astrology',
  description: '株式会社Astrologyのサービス紹介。動画生成AIプロダクト、SNS運用サポート、経営コンサルティングをご提供しています。',
};

export default function Services() {
  return (
    <div className="bg-[#0B1020] pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0088FF] rounded-full filter blur-[128px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              サービス
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              独自生成AIを中核とした<br className="sm:hidden" />
              トータルソリューション
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gradient-to-b from-[#0B1020] to-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-12 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                サービス概要
              </h2>
              <p className="text-lg text-white/80 leading-relaxed text-center">
                株式会社Astrologyは、<span className="text-[#00D9FF] font-semibold">独自の生成AI</span>を中核に、
                企業の動画マーケティングを加速させるトータルソリューションを提供しています。<br /><br />
                単なるツール提供ではなく、導入支援から運用サポート、経営コンサルティングまで、
                お客様のビジネス成果を最大化するための包括的なサービスをご用意しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Overview */}
      <section className="py-20 bg-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              提供サービス
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
              <h3 className="text-2xl font-bold text-white mb-4">独自生成AIプロダクト</h3>
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
                マネタイズに向けて、
                初期設計からテンプレート作成、投稿の書き方・販売の考え方までを丁寧にサポート。
                収益化まで並走して進めていきます。
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
              <h3 className="text-2xl font-bold text-white mb-4">経営コンサルティング</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                事業戦略、組織設計、マーケティング/販売、オペレーション、財務/KPI設計まで、
                経営の本質課題に向き合い、成果に直結する伴走型の支援を提供します。
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

      {/* Service 1: AI Product */}
      <section id="ai-product" className="py-20 bg-[#0F1528] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 rounded-full text-[#00D9FF] text-sm font-semibold mb-4">
                    サービス 01
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    生成AIプロダクト
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF]"></div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  テキストや画像などから高品質な動画を生成できる独自の生成AIプロダクトです。
                  複雑な編集作業は不要。直感的な操作で、プロ品質の動画コンテンツを短時間で制作できます。
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">主な用途</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['SNS動画', '広告動画', '紹介動画', 'マニュアル動画', 'プロモーション動画', 'ECサイト用動画'].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-white/70">
                        <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-sm text-white/60">
                    ※ 具体的な機能や仕様については、お問い合わせ時に詳しくご説明いたします。
                    貴社のニーズに合わせた最適な活用方法をご提案します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Support */}
      <section id="support" className="py-20 bg-gradient-to-b from-[#0F1528] to-[#0B1020] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 rounded-full text-[#00D9FF] text-sm font-semibold mb-4">
                    サービス 02
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    SNS運用サポート
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF]"></div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  動画生成AIの導入から運用まで、専門スタッフが手厚くサポートします。
                  初めてAIツールを導入する企業様でも、安心してご利用いただけます。
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">サポート内容</h3>
                  <div className="space-y-3">
                    {[
                      { title: '初期設定サポート', desc: 'アカウント設定から初回利用までを丁寧にサポート' },
                      { title: 'テンプレート作成', desc: '貴社ブランドに合わせたテンプレートを作成' },
                      { title: '運用アドバイス', desc: '効果的な動画活用方法をアドバイス' },
                      { title: '定期フォロー', desc: '継続的な運用支援と改善提案' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Consulting */}
      <section id="consulting" className="py-20 bg-[#0B1020] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#00D9FF]/20 rounded-full text-[#00D9FF] text-sm font-semibold mb-4">
                    サービス 03
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    経営コンサルティング
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF]"></div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  経営課題に対する実行可能な打ち手を、戦略からオペレーションまで一気通貫で設計し実行まで伴走します。
                  現場に根ざしたプラクティカルな支援で、売上・利益・組織の健全性向上にコミットします。
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">コンサルティング領域</h3>
                  <div className="space-y-3">
                    {[
                      { icon: '📊', title: '事業戦略', desc: '市場分析・ポジショニング・成長戦略の策定' },
                      { icon: '🧩', title: '組織設計・採用', desc: '組織デザイン、評価制度、採用戦略の構築' },
                      { icon: '🎯', title: 'マーケティング/販売', desc: 'ファネル設計、価格戦略、営業プロセスの最適化' },
                      { icon: '🛠️', title: '業務改善・オペレーション', desc: '業務プロセスの可視化・標準化・効率化' },
                      { icon: '💹', title: '財務・KPI設計', desc: 'KPIツリー構築、予実管理、資金計画の整備' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 bg-white/5 rounded-lg p-4 border border-white/10">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-white/60">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1020] to-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                導入の流れ
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto mb-6"></div>
              <p className="text-white/70">
                お問い合わせから利用開始まで、スムーズに進められるようサポートします
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { num: '01', title: 'お問い合わせ', desc: '公式LINEまたはお問い合わせフォームからご連絡' },
                { num: '02', title: '現状ヒアリング', desc: '課題や目標、現状の動画活用状況をヒアリング' },
                { num: '03', title: 'プラン提案', desc: '最適なプランと利用形態をご提案' },
                { num: '04', title: 'ご契約・初期設定', desc: 'アカウント発行と初期設定をサポート' },
                { num: '05', title: '運用フォロー', desc: '継続的なサポートで成果を最大化' }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00D9FF] to-[#0088FF] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">{step.num}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm text-center leading-relaxed">{step.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                料金について
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-12 border border-white/10 text-center">
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00D9FF]/20 to-[#0088FF]/20 rounded-full border border-[#00D9FF]/30">
                  <p className="text-[#00D9FF] font-bold text-lg">個別見積り制</p>
                </div>
                
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  ご利用規模や用途、必要なサポート内容によって最適なプランをご提案いたします。
                </p>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white/70">
                    「予算感だけ知りたい」<br/>
                    「まずは話を聞いてみたい」<br/>
                    まずは簡単なお問い合わせから<br/>
                    お気軽にご相談ください。
                  </p>
                </div>

                <div className="pt-6">
                  <Link 
                    href="/contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#06C755]/50 transition-all duration-300 transform hover:scale-105"
                  >
                    料金について相談する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0F1528] to-[#0B1020]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              貴社に最適なAI活用を<br className="sm:hidden" />
              ご提案します
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              まずは「うちで何ができるか」を知るところから。<br />
              お気軽にご相談ください。
            </p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#06C755]/50 transition-all duration-300 transform hover:scale-105"
            >
              公式LINEで相談する
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
