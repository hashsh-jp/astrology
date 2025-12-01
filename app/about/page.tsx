import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '会社概要 | 株式会社Astrology',
  description: '株式会社Astrologyの会社概要。自社開発の動画生成AIを中核としたAIソリューション企業として、次世代の動画マーケティングを実現します。',
};

export default function About() {
  return (
    <div className="bg-[#0B1020] pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D9FF] rounded-full filter blur-[128px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              会社概要
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              自社開発の動画生成AIで<br className="sm:hidden" />
              ビジネスの未来を創造する
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1020] to-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                代表メッセージ
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  現代のビジネスにおいて、動画コンテンツは欠かせない存在となりました。
                  しかし、多くの企業が「動画を作りたいが、時間もコストもかかる」という課題に直面しています。
                </p>
                
                <p className="text-lg">
                  株式会社Astrologyは、この課題をAIの力で解決します。
                  私たちが開発した動画生成AIは、単なるツールではありません。
                  企業のマーケティング活動を加速させ、ビジネスの成長を支援するパートナーです。
                </p>

                <p className="text-lg">
                  「AIを道具として、より多くの企業に届ける」
                  この思想のもと、私たちは受託開発ではなく、<span className="text-[#00D9FF] font-semibold">自社プロダクト</span>として
                  動画生成AIを開発・提供しています。
                </p>

                <p className="text-lg">
                  継続的なアップデートと、お客様との対話を通じて、
                  常に進化し続けるプロダクトを目指しています。
                  私たちと共に、次世代の動画マーケティングを実現しませんか。
                </p>

                <div className="pt-8 border-t border-white/20 mt-8">
                  <p className="text-right text-lg">
                    <span className="text-white/60">株式会社Astrology</span><br />
                    <span className="text-white font-semibold text-xl">代表取締役　小池 拓実</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                会社情報
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <table className="w-full">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 sm:px-8 py-6 text-white/60 font-semibold w-1/3 sm:w-1/4">
                      会社名
                    </td>
                    <td className="px-6 sm:px-8 py-6 text-white">
                      株式会社Astrology
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-6 text-white/60 font-semibold">
                      代表取締役
                    </td>
                    <td className="px-6 sm:px-8 py-6 text-white">
                      小池 拓実
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-6 text-white/60 font-semibold">
                      所在地
                    </td>
                    <td className="px-6 sm:px-8 py-6 text-white">
                      〒141-0032<br />
                      東京都品川区大崎３丁目１−５<br />
                      ルミネ五反田第２ 202号室
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-6 text-white/60 font-semibold align-top">
                      事業内容
                    </td>
                    <td className="px-6 sm:px-8 py-6 text-white">
                      <ul className="space-y-2">
                        <li>• AI開発・販売</li>
                        <li>• 経営コンサルティング</li>
                        <li>• 自社開発「動画生成AI」プロダクトの企画・開発・販売</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-6 text-white/60 font-semibold">
                      お問い合わせ
                    </td>
                    <td className="px-6 sm:px-8 py-6">
                      <Link 
                        href="/contact"
                        className="inline-flex items-center text-[#00D9FF] hover:text-[#00AAFF] font-semibold transition-colors"
                      >
                        公式LINE経由でお問い合わせ
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 bg-gradient-to-b from-[#0F1528] to-[#0B1020]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                アクセス
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-4 text-white/80">
                <p className="text-lg font-semibold text-white">
                  〒141-0032 東京都品川区大崎３丁目１−５ ルミネ五反田第２ 202号室
                </p>
                <div className="space-y-2">
                  <p><span className="text-white/60">最寄り駅：</span>JR山手線・東急池上線「五反田駅」徒歩5分</p>
                  <p className="text-sm text-white/60">
                    ※ご来社の際は事前にお問い合わせください
                  </p>
                </div>
              </div>

              {/* Google Maps Embed Area */}
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
                <p className="text-white/40">Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1020]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-white/70">
              動画生成AIの活用方法や、導入についてのご質問など<br className="hidden sm:block" />
              公式LINEでお気軽にお問い合わせください。
            </p>
            <Link 
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#06C755]/50 transition-all duration-300 transform hover:scale-105"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
