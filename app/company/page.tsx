'use client';

import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function CompanyPage() {
  const containerRef = useIntersectionObserver();

  const companyInfo = [
    { label: '会社名', value: 'BIG FOREST TRADING株式会社', valueEn: 'BIG FOREST TRADING Co., Ltd.' },
    { label: '所在地', value: '茨城県日立市十王町友部東1-4-15', valueEn: '1-4-15 Tomobe-higashi, Juo-cho, Hitachi, Ibaraki' },
    { label: '設立年月', value: '2025年8月（予定）', valueEn: 'August 2025 (planned)' },
    { label: '資本金', value: '300万円', valueEn: '3,000,000 JPY' },
    { label: '代表者', value: '大森 響', valueEn: 'Hibiki Omori' },
    { label: '連絡先', value: 'omori1492@gmail.com', valueEn: 'omori1492@gmail.com' },
    { label: '事業内容', value: '日本産水産物の輸出／海外販路開拓支援', valueEn: 'Export of Japanese seafood / Overseas market development support' },
    { label: '販売先', value: 'タイの日本食レストラン', valueEn: 'Japanese restaurants in Thailand' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C4A052]/20 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 opacity-0 animate-fade-in">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-[#C4A052] transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-[#C4A052]">会社概要</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-[#C4A052] text-sm tracking-[0.3em] mb-4 opacity-0 animate-fade-in delay-100">
              COMPANY
            </p>
            <h1 className="font-mincho text-4xl sm:text-5xl lg:text-6xl font-bold text-white opacity-0 animate-fade-in-up delay-200">
              会社概要
            </h1>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">INFORMATION</p>
              <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#0A1628] decorative-line reveal opacity-0">
                会社情報
              </h2>
            </div>

            <div className="bg-white rounded-sm shadow-lg overflow-hidden reveal opacity-0">
              <div className="divide-y divide-[#E8E8E8]">
                {companyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-3 gap-4 p-6 hover:bg-[#FAF8F5] transition-colors"
                  >
                    <div className="md:col-span-1">
                      <span className="inline-block px-3 py-1 bg-[#0A1628] text-white text-sm">
                        {info.label}
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[#0A1628] font-medium">{info.value}</p>
                      <p className="text-sm text-[#6B7280] mt-1">{info.valueEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="section-padding bg-[#0A1628]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">MESSAGE</p>
              <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-white decorative-line reveal opacity-0">
                代表メッセージ
              </h2>
            </div>

            <div className="reveal opacity-0">
              <div className="text-center mb-10">
                <h3 className="font-mincho text-2xl sm:text-3xl text-[#C4A052]">
                  泥臭く、誠実に、確実に。
                </h3>
              </div>

              <div className="text-white/80 leading-loose space-y-6">
                <p>
                  私たちBIG FOREST TRADINGは、ただの輸出会社ではありません。
                  東南アジアを中心に年間約10億円規模の商材を扱い、営業代行から自社商材の販売まで、現地で培った実績を積み重ねてきました。
                </p>
                <p>
                  これまで私自身、多くの失敗や悔しい経験をしてきました。
                  市場に合わない商品、理解不足、営業力の未熟さ…。それでも諦めることなく、現地で顧客を回り、店頭で販売し、消費者の声に耳を傾け、数字を作ってきました。
                </p>
                <p>
                  だからこそ、私たちは「本当に現地で売り切るために必要なこと」を理解しています。
                  スマートではない部分もありますが、それが私たちの強みです。
                  華やかさよりも、泥臭く、誠実に、一つひとつの案件に向き合い、必ず成果を出す。
                </p>
                <p>
                  「タイで売るなら」「東南アジアで展開するなら」
                  ——そう言っていただける存在になることが、私たちBIG FOREST TRADINGの使命であり、約束です。
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-end gap-6">
                <div className="text-right">
                  <p className="text-white/60 text-sm mb-1">代表取締役</p>
                  <p className="text-[#C4A052] font-mincho text-xl">大森 響</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">VISION</p>
              <h2 className="font-mincho text-3xl sm:text-4xl font-bold text-[#0A1628] decorative-line reveal opacity-0">
                私たちが目指すもの
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 reveal opacity-0">
              <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-[#C4A052]">
                <h3 className="font-mincho text-xl font-bold text-[#0A1628] mb-4">ミッション</h3>
                <p className="text-[#374151] leading-relaxed">
                  日本の優れた水産物を世界へ届け、生産者と消費者を繋ぐ架け橋となること。
                  単なる輸出ではなく、現地で「売り切る」ことで、日本の食文化を広げていきます。
                </p>
              </div>

              <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-[#0A1628]">
                <h3 className="font-mincho text-xl font-bold text-[#0A1628] mb-4">ビジョン</h3>
                <p className="text-[#374151] leading-relaxed">
                  「タイで売るなら BIG FOREST」と言われる存在へ。
                  東南アジアにおける日本食品輸出のトップパートナーを目指します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#122541]">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl sm:text-3xl font-bold text-white mb-6 reveal opacity-0">
            お気軽にご相談ください
          </h2>
          <p className="text-white/60 mb-8 reveal opacity-0">
            輸出・販路開拓についてのご質問やお見積りのご依頼など、<br className="hidden sm:block" />
            専門スタッフが丁寧にご対応いたします。
          </p>
          <Link
            href="/#contact"
            className="btn-primary inline-block reveal opacity-0"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
