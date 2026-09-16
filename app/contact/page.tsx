import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社Astrology',
  description: '株式会社Astrologyのお問い合わせ先をご案内します。動画生成AIに関するご相談、資料請求、導入相談など、お気軽にご連絡ください。',
};

export default function Contact() {
  const LINE_URL = 'https://line.me/ti/p/pcVlZqu6-J';

  return (
    <div className="bg-[#0B1020] pt-20">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#06C755] rounded-full filter blur-[128px] animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              お問い合わせ
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0088FF] mx-auto"></div>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              ご相談・お問い合わせは<br className="sm:hidden" />
              下記のお問い合わせ先にて受け付けております
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1020] to-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Method */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-12 border border-white/10 mb-12">
              <div className="text-center space-y-6">
                <div className="inline-block p-4 bg-[#06C755]/20 rounded-2xl">
                  <svg className="w-16 h-16 text-[#06C755]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    お問い合わせ先
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    以下のボタンからLINEで友だち追加して、<br className="hidden sm:block" />
                    お気軽にメッセージをお送りください。
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#06C755] to-[#05B04A] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#06C755]/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    お問い合わせ先
                  </a>
                </div>

              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                お問い合わせにあたって
              </h3>
              <div className="space-y-4 text-white/70 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>営業時間内（平日10:00〜18:00）のお問い合わせには、当日中にご返信いたします。</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>「まずは話を聞いてみたい」「資料だけ見たい」といった気軽なお問い合わせも大歓迎です。</p>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>しつこい営業は一切いたしません。お客様のペースで検討いただけます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-[#0F1528]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              その他のお問い合わせ方法
            </h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <p className="text-white/70 mb-4">
                LINEをご利用でない場合は、以下の会社情報からお問い合わせください。
              </p>
              <div className="space-y-2 text-white/60">
                <p className="font-semibold text-white">株式会社Astrology</p>
                <p>〒141-0032 東京都品川区大崎３丁目１−５ ルミネ五反田第２ 202号室</p>
                <p className="text-sm pt-4">
                  ※メールでのお問い合わせをご希望の場合は、<br />
                  上記のお問い合わせ先にてメールアドレスをお知らせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
