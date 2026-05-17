'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IMAGES = {
  hero: '/images/fresh-seafood-market.png',
  fish1: '/images/fresh-seafood-market.png',
  fish2: '/images/cold-chain-quality.png',
  fish3: '/images/overseas-market-planning.png',
  quality: '/images/cold-chain-quality.png',
  sales: '/images/overseas-market-planning.png',
  logistics: '/images/air-cargo-logistics.png',
};

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

export default function Home() {
  const containerRef = useIntersectionObserver();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/85 via-[#0A1628]/62 to-[#0A1628]/20" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#C4A052]/20 rotate-45 animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-[#C4A052]/10 rotate-12 animate-float delay-300" />

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tagline */}
            <p className="text-[#C4A052] text-sm tracking-[0.3em] mb-6 opacity-0 animate-fade-in delay-100">
              JAPANESE TASTE, READY FOR OVERSEAS MARKETS
            </p>

            {/* Main Heading */}
            <h1 className="font-mincho text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight opacity-0 animate-fade-in-up delay-200">
              <span className="text-shadow">日本の美味しさを、</span>
              <br />
              <span className="text-[#C4A052] text-shadow">海外で売れる力に。</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up delay-400">
              産地で育まれた確かな品質を、現地の食文化や流通に合わせて丁寧に届ける。
              <br className="hidden sm:block" />
              日本産水産物の輸出と海外販路づくりを支えます。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-600">
              <button
                onClick={scrollToContact}
                className="btn-primary text-base"
              >
                輸出・販路の相談をする
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary text-white border-white hover:bg-white hover:text-[#0A1628] text-base"
              >
                取り組みを相談する
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in delay-800">
          <span className="text-white/40 text-xs tracking-widest mb-3">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C4A052] to-transparent" />
        </div>
      </section>

      {/* Business Overview */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">BUSINESS</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] decorative-line reveal opacity-0">
              事業概要
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 reveal opacity-0">
              <div className="space-y-4">
                <div className="image-zoom rounded-sm overflow-hidden shadow-lg">
                  <img src={IMAGES.fish1} alt="鮮魚" className="w-full h-48 object-cover" />
                </div>
                <div className="image-zoom rounded-sm overflow-hidden shadow-lg">
                  <img src={IMAGES.fish3} alt="水産物" className="w-full h-32 object-cover" />
                </div>
              </div>
              <div className="pt-8">
                <div className="image-zoom rounded-sm overflow-hidden shadow-lg">
                  <img src={IMAGES.fish2} alt="冷凍魚" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="reveal opacity-0">
              <h3 className="font-mincho text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6">
                日本の食材を、
                <span className="text-[#C4A052]">海外で選ばれる形へ</span>
              </h3>
              <div className="space-y-4 text-[#374151] leading-relaxed">
                <p>
                  BIG FOREST TRADINGは、日本産の高品質な水産物をタイを中心とした東南アジアへ届けています。
                </p>
                <p>
                  市場や産地での調達、品質管理、輸出手続き、現地での販売設計まで、
                  食材の魅力が伝わる流れを整えます。
                </p>
                <p>
                  品質だけでなく、現地の食文化や流通に合わせた届け方を大切にしています。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E8E8E8]">
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">70+</p>
                  <p className="text-sm text-[#6B7280] mt-1">現地供給店舗</p>
                </div>
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">2t+</p>
                  <p className="text-sm text-[#6B7280] mt-1">月間取扱量</p>
                </div>
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">10年+</p>
                  <p className="text-sm text-[#6B7280] mt-1">東南アジア経験</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-[#0A1628]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">SERVICES</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-white decorative-line reveal opacity-0">
              サービス
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-ship-line',
                title: '水産物輸出',
                description: '市場や産地から選び抜いた鮮魚と、超低温管理による冷凍魚を、用途に合わせてご提案します。',
                features: ['市場・産地調達', '超低温管理', '用途別提案'],
                image: IMAGES.fish1,
              },
              {
                icon: 'ri-truck-line',
                title: '輸出サポート',
                description: '輸出書類、品質管理、物流手配まで、海外へ届けるために必要な実務を一つずつ整えます。',
                features: ['輸出手続き', '品質管理', '物流手配'],
                image: IMAGES.quality,
              },
              {
                icon: 'ri-global-line',
                title: '販路開拓支援',
                description: '現地ネットワークと販売経験を活かし、商品ごとの魅力が伝わる販路づくりを支援します。',
                features: ['現地理解', '販促企画', 'ネットワーク'],
                image: IMAGES.sales,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#122541] rounded-sm card-hover reveal opacity-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="image-zoom overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#C4A052]/10 flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-3xl text-[#C4A052]`} />
                  </div>
                  <h3 className="font-mincho text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-[#C4A052] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">STRENGTHS</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] decorative-line reveal opacity-0">
              私たちの強み
            </h2>
          </div>

          <div className="space-y-20">
            {[
              {
                number: '01',
                title: '仕入・品質管理',
                description: '高級店向けの鮮魚問屋ネットワークと、経験ある目利きによる選別。急速凍結・-60℃保管を組み合わせ、品質を丁寧に守ります。',
                image: IMAGES.fish1,
                reverse: false,
              },
              {
                number: '02',
                title: '現地理解・販路設計',
                description: 'タイでの日本食品販売歴5年、東南アジア全体で10年の経験。現地の食文化、価格感、流通に合わせた届け方を設計します。',
                image: IMAGES.sales,
                reverse: true,
              },
              {
                number: '03',
                title: '輸出・物流',
                description: '複数国向けの輸出経験をもとに、空輸・冷凍輸送・輸出手続きを一括で支援。鮮度と安定供給の両立を目指します。',
                image: IMAGES.logistics,
                reverse: false,
              },
            ].map((strength, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center reveal opacity-0 ${
                  strength.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={strength.reverse ? 'lg:order-2' : ''}>
                  <div className="image-zoom rounded-sm overflow-hidden shadow-xl">
                    <img
                      src={strength.image}
                      alt={strength.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className={strength.reverse ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mincho text-5xl font-bold text-[#C4A052]/20">
                      {strength.number}
                    </span>
                    <div className="h-px flex-1 bg-[#C4A052]/30" />
                  </div>
                  <h3 className="font-mincho text-2xl sm:text-3xl font-bold text-[#0A1628] mb-6">
                    {strength.title}
                  </h3>
                  <p className="text-[#374151] leading-relaxed text-lg">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-[#122541]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">ACHIEVEMENTS</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-white decorative-line reveal opacity-0">
              実績
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal opacity-0">
            {[
              'タイ国内のレストラン・小売店約70店舗へ供給',
              '月間取扱量：2トン以上',
              '自治体・大手メーカー向けプロモーション支援を実施',
              '明太子メーカーのタイ展開を支援',
              '青森県りんご対策協議会のタイプロモーション運営',
              '福井県産食品の2024年度タイプロモーション',
              '高級冷凍焼き芋ブランドの店舗運営及び卸販売',
              'その他、複数自治体・メーカー・飲食店支援実績',
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#1E3A5F]/50 rounded-sm border-l-2 border-[#C4A052]"
              >
                <i className="ri-check-line text-[#C4A052] text-xl mt-0.5" />
                <p className="text-white/90">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">PROCESS</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] decorative-line reveal opacity-0">
              オペレーション
            </h2>
            <p className="text-[#6B7280] mt-6 reveal opacity-0">調達から現地で届くまで、工程を一つずつ確かに。</p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-[#C4A052]/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0">
              {[
                { step: '01', title: '市場・産直仕入', icon: 'ri-shopping-cart-line', desc: '市場での目利きと産地直送により、用途に合う水産物を調達' },
                { step: '02', title: '集荷・品質管理', icon: 'ri-shield-check-line', desc: '-60℃超低温冷凍技術を活用し、品質保持と管理体制を整備' },
                { step: '03', title: '輸出手続き', icon: 'ri-plane-line', desc: '輸出書類作成から通関まで、海外へ届ける実務を支援' },
                { step: '04', title: '現地で届ける', icon: 'ri-store-3-line', desc: '現地ネットワークを活用し、継続的に選ばれる流れをつくる' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-[#0A1628] rounded-full flex items-center justify-center mx-auto relative z-10">
                      <i className={`${item.icon} text-2xl text-white`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C4A052] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-mincho text-xl font-bold text-[#0A1628] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="section-padding bg-[#0A1628]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">MESSAGE</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 decorative-line reveal opacity-0">
              代表メッセージ
            </h2>

            <div className="reveal opacity-0">
              <h3 className="font-mincho text-2xl sm:text-3xl text-[#C4A052] mb-10">
                産地の想いを、現地の食卓へ。
              </h3>

              <div className="text-white/80 leading-loose space-y-6 text-left">
                <p>
                  私たちBIG FOREST TRADINGは、日本の食材が持つ美味しさと背景を、海外の市場で自然に受け入れられる形へ整える会社です。
                  東南アジアを中心に商材を扱い、現地での販売支援から自社商材の展開まで、実務を通じて経験を積み重ねてきました。
                </p>
                <p>
                  海外で選ばれるためには、品質だけでなく、現地の食文化、価格感、流通、伝え方を丁寧に理解することが欠かせません。
                  私たちは現地のお客様の声に耳を傾けながら、商品ごとに適した届け方を考えます。
                </p>
                <p>
                  産地で大切に育まれた食材を、ただ輸出するだけで終わらせない。
                  品質を守り、背景を伝え、継続して手に取っていただける関係をつくることを大切にしています。
                </p>
                <p>
                  「タイで売るなら」「東南アジアで展開するなら」
                  そう思い出していただける存在になることが、私たちBIG FOREST TRADINGの目指す姿です。
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-right">
                <p className="text-[#C4A052] font-mincho text-lg">
                  代表取締役　大森 響
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C4A052] text-sm tracking-[0.2em] mb-3 reveal opacity-0">CONTACT</p>
            <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6 decorative-line reveal opacity-0">
              お問い合わせ
            </h2>
            <p className="text-[#6B7280] mb-12 reveal opacity-0">
              商品の輸出、販路づくり、現地展開について、お気軽にお問い合わせください。
            </p>

            <div className="bg-white p-8 sm:p-12 rounded-sm shadow-lg reveal opacity-0">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:omori1492@gmail.com"
                  className="group flex items-center gap-4 p-6 bg-[#FAF8F5] hover:bg-[#0A1628] rounded-sm transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#0A1628] group-hover:bg-[#C4A052] flex items-center justify-center rounded-sm transition-colors">
                    <i className="ri-mail-line text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#0A1628] group-hover:text-white transition-colors">メール</p>
                    <p className="text-sm text-[#6B7280] group-hover:text-white/70 transition-colors">
                      omori1492@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:080-9343-3439"
                  className="group flex items-center gap-4 p-6 bg-[#FAF8F5] hover:bg-[#0A1628] rounded-sm transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#0A1628] group-hover:bg-[#C4A052] flex items-center justify-center rounded-sm transition-colors">
                    <i className="ri-phone-line text-white text-xl" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#0A1628] group-hover:text-white transition-colors">電話</p>
                    <p className="text-sm text-[#6B7280] group-hover:text-white/70 transition-colors">
                      080-9343-3439
                    </p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-[#F0EDE8] rounded-sm">
                <p className="text-[#6B7280] text-sm">
                  営業時間：平日 9:00〜18:00
                  <br />
                  お急ぎの場合は、お電話でのお問い合わせをおすすめいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
