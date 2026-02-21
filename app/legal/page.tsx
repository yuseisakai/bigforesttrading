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

export default function LegalPage() {
  const containerRef = useIntersectionObserver();

  const legalInfo = [
    { label: '販売業者', value: 'BIG FOREST TRADING株式会社' },
    { label: '代表責任者', value: '大森 響' },
    { label: '所在地', value: '茨城県日立市十王町友部東1-4-15' },
    { label: '電話番号', value: '080-9343-3439' },
    { label: 'メールアドレス', value: 'omori1492@gmail.com' },
    { label: '商品の販売価格', value: '各商品ページに表示' },
    { label: '商品代金以外の必要料金', value: '配送料、関税（該当する場合）' },
    { label: '支払方法', value: '銀行振込、クレジットカード' },
    { label: '支払時期', value: '商品発送前までにお支払いください' },
    { label: '商品の引渡時期', value: 'ご注文確認後、通常2〜4週間以内に発送' },
    { label: '返品・交換について', value: '商品の性質上、お客様都合による返品・交換はお受けできません。商品に欠陥がある場合は、到着後7日以内にご連絡ください。' },
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
              <li className="text-[#C4A052]">特定商取引法に基づく表記</li>
            </ol>
          </nav>

          <div className="text-center">
            <p className="text-[#C4A052] text-sm tracking-[0.3em] mb-4 opacity-0 animate-fade-in delay-100">
              LEGAL NOTICE
            </p>
            <h1 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-white opacity-0 animate-fade-in-up delay-200">
              特定商取引法に基づく表記
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-sm shadow-lg overflow-hidden reveal opacity-0">
              <div className="divide-y divide-[#E8E8E8]">
                {legalInfo.map((info, index) => (
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
                      {info.label === 'メールアドレス' ? (
                        <a
                          href={`mailto:${info.value}`}
                          className="text-[#C4A052] hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : info.label === '電話番号' ? (
                        <a
                          href={`tel:${info.value}`}
                          className="text-[#C4A052] hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#0A1628]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-8 bg-white rounded-sm shadow-lg p-8 reveal opacity-0">
              <h2 className="font-mincho text-xl font-bold text-[#0A1628] mb-6">
                その他の注意事項
              </h2>
              <div className="space-y-6 text-[#374151]">
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">輸出商品について</h3>
                  <p className="leading-relaxed">
                    当社が取り扱う商品は主に輸出向け商品となります。
                    輸出先の規制や要件により、取り扱いできない商品がある場合がございます。
                    詳細についてはお問い合わせください。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">品質管理について</h3>
                  <p className="leading-relaxed">
                    水産物は-60℃の超低温で管理・輸送しております。
                    品質維持のため、輸送方法や納品スケジュールについては、
                    個別にご相談させていただきます。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-2">お取引条件について</h3>
                  <p className="leading-relaxed">
                    法人のお客様向けの卸売取引が主となります。
                    最小ロットや取引条件については、お問い合わせください。
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
