'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Image URLs from original site
const IMAGES = {
  hero: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/1e45a15a8e2d0049ed4abec24ca9883c.png',
  fish1: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/d0d53ae08fffd99db13c27822c7c6276.png',
  fish2: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/46638865477cf08728037441cd347233.png',
  fish3: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/ca924c58b3899a4f32f1d42111f0e290.png',
  quality: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/0791dec373d1d6857a4894148f2e5106.png',
  sales: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/71682286fdcfc8046a74e80b77ce2bf6.png',
  thailand: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/66fa2039e6fbcbaf28910e798fe48a2d.png',
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/70 to-[#0A1628]/90" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#C4A052]/20 rotate-45 animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-[#C4A052]/10 rotate-12 animate-float delay-300" />

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tagline */}
            <p className="text-[#C4A052] text-sm tracking-[0.3em] mb-6 opacity-0 animate-fade-in delay-100">
              JAPANESE SEAFOOD EXPORT
            </p>

            {/* Main Heading */}
            <h1 className="font-mincho text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight opacity-0 animate-fade-in-up delay-200">
              <span className="text-shadow">良いものを</span>
              <br />
              <span className="text-[#C4A052] text-shadow">必ず売り切る。</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up delay-400">
              日本の高品質な水産物を、現地で"売れる形"に。
              <br className="hidden sm:block" />
              品質×現地販売力×輸出運用力で、確実な成果をお約束します。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-600">
              <button
                onClick={scrollToContact}
                className="btn-primary text-base"
              >
                輸出・販路のご相談
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary text-white border-white hover:bg-white hover:text-[#0A1628] text-base"
              >
                お見積りを依頼
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
              事業内容
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
                日本産水産物の
                <span className="text-[#C4A052]">輸出・販路開拓</span>
              </h3>
              <div className="space-y-4 text-[#374151] leading-relaxed">
                <p>
                  BIG FOREST TRADINGは、日本の高品質な水産物をタイを中心とした東南アジアへ輸出しています。
                </p>
                <p>
                  築地直送の最高級鮮魚から、独自の超低温冷凍技術（-60℃）による冷凍魚まで、
                  厳選された水産物を現地の日本食レストランや小売店へお届けしています。
                </p>
                <p>
                  単なる輸出だけでなく、現地での販路開拓から継続的な販売支援まで、
                  一気通貫でサポートいたします。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E8E8E8]">
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">70+</p>
                  <p className="text-sm text-[#6B7280] mt-1">供給店舗数</p>
                </div>
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">2t+</p>
                  <p className="text-sm text-[#6B7280] mt-1">月間取扱量</p>
                </div>
                <div className="text-center">
                  <p className="font-mincho text-3xl font-bold text-[#C4A052]">10年+</p>
                  <p className="text-sm text-[#6B7280] mt-1">東南アジア実績</p>
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
                description: '築地直送の鮮魚から超低温冷凍魚まで、高品質な日本産水産物をタイへ輸出。複雑な輸出手続きも一括対応いたします。',
                features: ['築地直送', '超低温冷凍（-60℃）', '輸出手続き代行'],
              },
              {
                icon: 'ri-store-3-line',
                title: '販路開拓支援',
                description: 'タイでの5年、東南アジア全体での10年の実績を活かし、現地のネットワークを通じて最適な販売先を開拓します。',
                features: ['現地市場調査', '販売先マッチング', 'プロモーション支援'],
              },
              {
                icon: 'ri-customer-service-2-line',
                title: '継続販売サポート',
                description: '販売して終わりではなく、継続的なフォローアップで安定した取引関係の構築をサポートいたします。',
                features: ['定期フォロー', '在庫管理支援', '現地対応'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#122541] p-8 rounded-sm card-hover reveal opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
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
                description: '高級店専門の鮮魚問屋ネットワークとプロ目利き師による厳選。最新設備での急速凍結・-60℃保管により、鮮度と品質を徹底管理しています。',
                image: IMAGES.quality,
                reverse: false,
              },
              {
                number: '02',
                title: '販売・営業力',
                description: 'タイでの日本食品販売歴5年、東南アジア全体で10年の実績。自治体・大手メーカー販促支援で培った市場理解と、高い営業力・交渉力が強みです。',
                image: IMAGES.sales,
                reverse: true,
              },
              {
                number: '03',
                title: '輸出・物流',
                description: '複数国向け輸出による価格交渉力と、空輸・冷凍輸送の柔軟な対応力。輸出手続きから現地配送まで一括対応いたします。',
                image: IMAGES.thailand,
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
              'タイ国内のレストラン・小売店約70店舗に納品',
              '月間取扱量：2トン以上',
              '自治体・大手メーカー向け販促支援案件を多数実施',
              '明太子メーカーのタイ営業代行',
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
            <p className="text-[#6B7280] mt-6 reveal opacity-0">調達から販売まで一気通貫のプロセス</p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-[#C4A052]/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0">
              {[
                { step: '01', title: '市場・産直仕入', icon: 'ri-shopping-cart-line', desc: '築地市場での目利きと産地直送による調達' },
                { step: '02', title: '集荷・品質管理', icon: 'ri-shield-check-line', desc: '-60℃超低温冷凍による品質保持' },
                { step: '03', title: '輸出手続き', icon: 'ri-plane-line', desc: '書類作成から通関までスムーズに対応' },
                { step: '04', title: '海外販売', icon: 'ri-store-3-line', desc: '現地ネットワークを活用した販売' },
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
                泥臭く、誠実に、確実に。
              </h3>

              <div className="text-white/80 leading-loose space-y-6 text-left">
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
              輸出販路のご相談はこちらから。お気軽にお問い合わせください。
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
