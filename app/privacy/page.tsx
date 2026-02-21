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
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function PrivacyPage() {
  const containerRef = useIntersectionObserver();

  const sections = [
    {
      title: '1. 基本方針',
      content: 'BIG FOREST TRADING株式会社（以下「当社」）は、個人情報の重要性を認識し、個人情報の保護に関する法律及び関連する法令等を遵守し、お客様の個人情報を適切に取り扱います。',
    },
    {
      title: '2. 個人情報の収集',
      content: '当社では、以下の場合に必要な範囲で個人情報を収集させていただきます：',
      list: [
        'お問い合わせをいただく場合',
        '商品・サービスのご提供をする場合',
        '資料請求をいただく場合',
        '各種ご案内をお送りする場合',
      ],
    },
    {
      title: '3. 個人情報の利用目的',
      content: '収集した個人情報は、以下の目的で利用させていただきます：',
      list: [
        'お問い合わせへの回答',
        '商品・サービスの提供',
        '資料・情報の送付',
        '各種ご案内・連絡事項の通知',
        '統計データの作成（個人を特定できない形式）',
      ],
    },
    {
      title: '4. 個人情報の第三者提供',
      content: '当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：',
      list: [
        '法令に基づく場合',
        '人の生命、身体又は財産の保護のために必要がある場合',
        '公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合',
        '国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合',
      ],
    },
    {
      title: '5. 個人情報の管理',
      content: '当社は、個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス、紛失、破損、改ざん、漏洩などを防止するため、必要かつ適切な安全管理措置を実施します。',
    },
    {
      title: '6. 個人情報の開示・訂正等',
      content: 'お客様は、当社が保有するお客様の個人情報について、開示、訂正、追加、削除、利用停止、消去及び第三者提供の停止を求めることができます。お申し出については、下記のお問い合わせ先までご連絡ください。',
    },
    {
      title: '7. Cookieについて',
      content: '当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定により無効にすることができます。',
    },
    {
      title: '8. プライバシーポリシーの変更',
      content: '当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーについては、当社が別途定める場合を除いて、当サイトに掲載したときから効力を生じるものとします。',
    },
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
              <li className="text-[#C4A052]">プライバシーポリシー</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-[#C4A052] text-sm tracking-[0.3em] mb-4 opacity-0 animate-fade-in delay-100">
              PRIVACY POLICY
            </p>
            <h1 className="font-mincho text-4xl sm:text-5xl lg:text-6xl font-bold text-white opacity-0 animate-fade-in-up delay-200">
              プライバシーポリシー
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-sm shadow-lg p-8 sm:p-12 reveal opacity-0">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="pb-8 border-b border-[#E8E8E8] last:border-0 last:pb-0">
                    <h2 className="font-mincho text-xl font-bold text-[#0A1628] mb-4">
                      {section.title}
                    </h2>
                    <p className="text-[#374151] leading-relaxed">{section.content}</p>
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#374151]">
                            <span className="w-1.5 h-1.5 bg-[#C4A052] rounded-full mt-2.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Contact Section */}
                <div className="pt-8 border-t border-[#E8E8E8]">
                  <h2 className="font-mincho text-xl font-bold text-[#0A1628] mb-4">
                    9. お問い合わせ
                  </h2>
                  <p className="text-[#374151] leading-relaxed mb-6">
                    個人情報の取扱いに関するご質問やご相談は、以下までお問い合わせください：
                  </p>
                  <div className="bg-[#FAF8F5] p-6 rounded-sm">
                    <p className="font-bold text-[#0A1628] mb-2">BIG FOREST TRADING株式会社</p>
                    <p className="text-[#374151]">
                      <span className="text-[#6B7280]">メール：</span>
                      <a href="mailto:omori1492@gmail.com" className="text-[#C4A052] hover:underline">
                        omori1492@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="pt-8 border-t border-[#E8E8E8] text-center">
                  <p className="text-sm text-[#6B7280]">
                    制定日：2024年1月1日
                    <br />
                    最終更新：2024年1月1日
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
