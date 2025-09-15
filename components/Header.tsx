
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeeermsNFjHABbQ4fdzrgqrwT_HHzD08yw1IEALFhJ70slyHQ/viewform?usp=dialog', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center">
            <Link href="/" className="text-[#0F3E4D] font-sans text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
              BIG FOREST TRADING
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('business-overview')} 
              className="text-sm xl:text-base text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              事業概要
            </button>
            <button 
              onClick={() => scrollToSection('strengths')} 
              className="text-sm xl:text-base text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              強み
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm xl:text-base text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              サービス
            </button>
            <button 
              onClick={() => scrollToSection('achievements')} 
              className="text-sm xl:text-base text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              実績
            </button>
            <button 
              onClick={() => scrollToSection('company')} 
              className="text-sm xl:text-base text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              会社情報
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleContactClick}
              className="bg-[#0F3E4D] text-white px-3 sm:px-4 lg:px-6 py-2 rounded-full hover:bg-[#0A5C63] transition-colors cursor-pointer text-xs sm:text-sm lg:text-base whitespace-nowrap"
            >
              お問い合わせ
            </button>

            {/* モバイルメニューボタン */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl text-[#0F3E4D]`} />
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('business-overview')} 
                className="text-left text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer py-2"
              >
                事業概要
              </button>
              <button 
                onClick={() => scrollToSection('strengths')} 
                className="text-left text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer py-2"
              >
                強み
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer py-2"
              >
                サービス
              </button>
              <button 
                onClick={() => scrollToSection('achievements')} 
                className="text-left text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer py-2"
              >
                実績
              </button>
              <button 
                onClick={() => scrollToSection('company')} 
                className="text-left text-gray-700 hover:text-[#0F3E4D] transition-colors cursor-pointer py-2"
              >
                会社情報
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
