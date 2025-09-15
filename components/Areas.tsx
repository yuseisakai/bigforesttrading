
'use client';

export default function Areas() {
  const categories = [
    {
      title: '高級鮮魚',
      items: ['本マグロ', 'ブリ', 'サバ', 'アジ', 'イワシ'],
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/46638865477cf08728037441cd347233.png'
    },
    {
      title: 'Pro-Frozen',
      items: ['超低温マグロ', '冷凍ブリ', '加工品', '刺身用', '業務用'],
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/0791dec373d1d6857a4894148f2e5106.png'
    },
    {
      title: '自治体支援',
      items: ['地域ブランド', '特産品', 'プロモ企画', '輸出支援', '販路開拓'],
      image: 'https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/66fa2039e6fbcbaf28910e798fe48a2d.png'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-2 sm:mb-4">
            展開エリア & カテゴリ
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            日本からタイを中心とした東南アジア全域へ
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0F3E4D] mb-4 sm:mb-6 text-center">
              展開マップ
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#C9A227] rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <i className="ri-map-pin-line text-lg sm:text-xl lg:text-2xl text-white" />
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-[#0F3E4D]">日本</div>
                <div className="text-xs sm:text-sm text-gray-600">築地・産地直送</div>
              </div>
              <div className="flex items-center rotate-90 sm:rotate-0">
                <i className="ri-arrow-right-line text-2xl sm:text-3xl text-[#0A5C63]" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#0F3E4D] rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <i className="ri-global-line text-lg sm:text-xl lg:text-2xl text-white" />
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-[#0F3E4D]">東南アジア</div>
                <div className="text-xs sm:text-sm text-gray-600">タイ・シンガポール他</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <div 
                className="w-full h-36 sm:h-40 lg:h-48 bg-cover bg-center rounded-lg sm:rounded-xl mb-4 sm:mb-6"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#0F3E4D] mb-3 sm:mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <i className="ri-check-line text-[#C9A227] mr-2 text-sm sm:text-base" />
                    <span className="text-sm sm:text-base text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
