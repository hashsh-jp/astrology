import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B1020] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#0088FF] bg-clip-text text-transparent">
              Astrology
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              自社開発の動画生成AIを中核とした<br />
              AIソリューション企業
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">ナビゲーション</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#ai-product" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  動画生成AIプロダクト
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  運用・導入サポート
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                  AI活用コンサルティング
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">会社情報</h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>株式会社Astrology</p>
              <p>代表取締役：小池拓実</p>
              <p className="leading-relaxed">
                〒141-0032<br />
                東京都品川区大崎３丁目１−５<br />
                ルミネ五反田第２ 202号室
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} 株式会社Astrology. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/contact" className="text-white/60 hover:text-[#00D9FF] transition-colors text-sm">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
