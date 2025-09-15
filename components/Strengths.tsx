
'use client';

export default function Strengths() {
  const strengths = [
    {
      icon: 'ri-eye-line',
      title: '仕入・品質管理',
      titleEn: 'Sourcing & Quality',
      description: '高級店専門の鮮魚問屋ネットワークとプロ目利き師による選別。最新設備で急速凍結・-60℃保管し、徹底管理を実現。',
      descriptionEn: 'Network with high-end seafood wholesalers and expert inspectors. Flash-frozen & stored at -60°C in latest facilities for strict quality control.',
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/0791dec373d1d6857a4894148f2e5106.png'
    },
    {
      icon: 'ri-global-line',
      title: '販売・営業力',
      titleEn: 'Sales & Marketing',
      description: 'タイでの日本食品販売歴5年、東南アジア全体での日本食品販売歴10年の実績。自治体・大手メーカー販促支援によるタイ市場理解と、高い営業力・交渉力・販売設計力。',
      descriptionEn: '5 years in Japanese food sales in Thailand, 10 years across Southeast Asia. Deep Thai market insight from promotional work with municipalities and major manufacturers, plus strong sales and negotiation skills.',
      image: 'https://readdy.ai/api/search-image?query=Business%20meeting%20between%20Japanese%20seafood%20exporter%20and%20Thai%20restaurant%20buyers%20in%20modern%20Bangkok%20office%20with%20fresh%20seafood%20samples%20and%20professional%20negotiation%20atmosphere&width=600&height=400&seq=sales-1&orientation=landscape'
    },
    {
      icon: 'ri-truck-line',
      title: '輸出・物流',
      titleEn: 'Export & Logistics',
      description: '営業代行実績も含む複数国向け輸出による価格交渉力。空輸・冷凍輸送の柔軟性と輸出手続き一括対応。',
      descriptionEn: 'Price negotiation from multi-country exports incl. sales agency work. Flexible air & frozen shipping with one-stop export procedures.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20cargo%20airplane%20loading%20refrigerated%20containers%20with%20Japanese%20seafood%20exports%20at%20international%20airport%20with%20efficient%20cold%20chain%20logistics%20and%20professional%20handling&width=600&height=400&seq=logistics-1&orientation=landscape'
    }
  ];

  return (
    <section id="strengths" className="py-12 sm:py-16 lg:py-20 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-2 sm:mb-4">
            強み・特徴 / Strengths
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            長年培った経験と確かな技術で、お客様の成功をサポートします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-full h-36 sm:h-40 lg:h-48 bg-cover bg-center rounded-lg sm:rounded-xl mb-4 sm:mb-6"
                style={{ backgroundImage: `url('${strength.image}')` }}
              />
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#0F3E4D] rounded-full mb-4 sm:mb-6 mx-auto">
                <i className={`${strength.icon} text-lg sm:text-xl lg:text-2xl text-white`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F3E4D] mb-1 sm:mb-2 text-center">
                {strength.title}
              </h3>
              <h4 className="text-base sm:text-lg font-semibold text-[#C9A227] mb-3 sm:mb-4 text-center">
                {strength.titleEn}
              </h4>
              <div className="bg-[#EFF1ED] rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm mb-2 sm:mb-3">
                  {strength.description}
                </p>
                <p className="text-gray-600 leading-relaxed text-xs">
                  {strength.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
