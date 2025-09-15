
'use client';

export default function Services() {
  const services = [
    {
      title: '鮮魚・冷凍魚',
      subtitle: '鮮凍力シリーズ',
      description: '築地直送の最高級鮮魚から、独自の超低温冷凍技術による冷凍魚まで幅広く取り扱い。',
      features: ['築地直送', '超低温冷凍', '品質保証'],
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/d0d53ae08fffd99db13c27822c7c6276.png'
    },
    {
      title: '輸出サポート',
      subtitle: '日本産水産物',
      description: '複雑な輸出手続きから現地販売まで、一気通貫でサポートいたします。',
      features: ['輸出手続き', '品質管理', '現地販売'],
      image: 'https://readdy.ai/api/search-image?query=International%20shipping%20documents%20and%20certificates%20for%20Japanese%20seafood%20export%20with%20official%20stamps%20and%20quality%20assurance%20papers%20in%20professional%20office%20environment&width=800&height=500&seq=service-2&orientation=landscape'
    },
    {
      title: '販路開拓支援',
      subtitle: '海外営業・プロモーション',
      description: '現地ネットワークを活用した効果的な販路開拓とマーケティング支援。',
      features: ['現地営業', '販促企画', 'ネットワーク'],
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/71682286fdcfc8046a74e80b77ce2bf6.png'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-2 sm:mb-4">
            サービス
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            調達から販売まで、トータルソリューションをご提供
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div 
                  className="w-full h-48 sm:h-64 lg:h-80 bg-cover bg-center rounded-xl sm:rounded-2xl shadow-lg"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} px-2 sm:px-0`}>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F3E4D] mb-1 sm:mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#C9A227] mb-3 sm:mb-4 font-semibold">
                  {service.subtitle}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-[#EFF1ED] text-[#0F3E4D] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
