'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <footer className="bg-[#0F3E4D] text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-xl sm:text-2xl font-[`Pacifico`] font-bold mb-3 sm:mb-4">
              BIG FOREST TRADING
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              良いものを必ず売り切る。<br />
              日本の高品質な水産物を世界へ。
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <i className="ri-mail-line mr-2 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm">omori1492@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">サービス</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">鮮魚・冷凍魚</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">輸出サポート</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">販路開拓支援</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer">マーケティング</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">会社情報</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><button onClick={() => scrollToSection('company')} className="hover:text-white transition-colors cursor-pointer">会社概要</button></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors cursor-pointer">特定商取引法</Link></li>
              <li><button onClick={handleContactClick} className="hover:text-white transition-colors cursor-pointer">お問い合わせ</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p>&copy; 2024 BIG FOREST TRADING LP. All rights reserved.</p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Made with Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
