'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'サービス',
      links: [
        { label: '水産物輸出', href: '/#services' },
        { label: '販路開拓支援', href: '/#services' },
        { label: '品質管理', href: '/#strengths' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { label: '会社概要', href: '/company' },
        { label: '代表メッセージ', href: '/company#message' },
        { label: '実績', href: '/#achievements' },
      ],
    },
    {
      title: '法的情報',
      links: [
        { label: 'プライバシーポリシー', href: '/privacy' },
        { label: '特定商取引法に基づく表記', href: '/legal' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Wave Decoration */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C4A052] to-transparent opacity-30" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col">
                <span className="text-white text-base tracking-[0.2em] font-light group-hover:text-[#C4A052] transition-colors">
                  BIG FOREST
                </span>
                <span className="text-[#C4A052] text-xs tracking-[0.15em]">
                  TRADING
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              日本の高品質な水産物を、タイ・東南アジアへ。
              調達から販売まで一気通貫でサポートいたします。
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:omori1492@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#C4A052] transition-colors text-sm"
              >
                <i className="ri-mail-line text-[#C4A052]" />
                omori1492@gmail.com
              </a>
              <a
                href="tel:080-9343-3439"
                className="flex items-center gap-3 text-white/60 hover:text-[#C4A052] transition-colors text-sm"
              >
                <i className="ri-phone-line text-[#C4A052]" />
                080-9343-3439
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <i className="ri-map-pin-line text-[#C4A052] mt-0.5" />
                <span>茨城県日立市十王町友部東1-4-15</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#C4A052] text-sm font-medium tracking-wider mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs tracking-wider">
              &copy; {currentYear} BIG FOREST TRADING Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/40 text-xs">
              <span>営業時間：平日</span>
              <span className="text-[#C4A052]">9:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
