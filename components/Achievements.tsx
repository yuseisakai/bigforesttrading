
'use client';

export default function Achievements() {
  const stats = [
    { number: '70+', label: '供給店舗数', icon: 'ri-store-2-line' },
    { number: '2t+', label: '月間取扱量', icon: 'ri-scales-3-line' },
    { number: '-60℃', label: '超低温管理', icon: 'ri-temp-cold-line' },
    { number: '10年+', label: '東南アジア実績', icon: 'ri-time-line' }
  ];

  const achievements = [
    {
      title: 'タイ国内のレストラン・小売店約70店舗に納品',
      titleEn: 'Supplying to approx. 70 restaurants and retailers in Thailand',
      description: ''
    },
    {
      title: '月間取扱量：2トン以上',
      titleEn: 'Monthly handling volume: over 2 tons',
      description: ''
    },
    {
      title: '自治体・大手メーカー向け販促支援案件を多数実施',
      titleEn: 'Multiple promotional projects for municipalities and major manufacturers',
      description: ''
    },
    {
      title: '明太子メーカーのタイ営業代行',
      titleEn: 'Sales agency for mentaiko manufacturer in Thailand',
      description: ''
    },
    {
      title: '青森県りんご対策協議会のタイプロモーション運営',
      titleEn: 'Promotion operations in Thailand for Aomori Apple Council',
      description: ''
    },
    {
      title: '福井県産食品の2024年度タイプロモーション',
      titleEn: '2024 promotion of Fukui-produced foods in Thailand',
      description: ''
    },
    {
      title: '高級冷凍焼き芋ブランドの店舗運営及び卸販売',
      titleEn: 'Store operation and wholesale sales of premium frozen baked sweet potato brand',
      description: ''
    },
    {
      title: 'その他、複数自治体・メーカー・飲食店支援実績',
      titleEn: 'Additional support for multiple municipalities, manufacturers, and restaurants',
      description: ''
    }
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-2 sm:mb-4">
            実績 / Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            数字で証明する確かな成果と信頼のパートナーシップ
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#0F3E4D] rounded-full mb-2 sm:mb-3 lg:mb-4 mx-auto">
                <i className={`${stat.icon} text-lg sm:text-xl lg:text-2xl text-white`} />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0F3E4D] mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#B5C9D1] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              {achievements.slice(0, 4).map((achievement, index) => (
                <div key={index} className="text-[#0F3E4D]">
                  <div className="flex items-start mb-1 sm:mb-2">
                    <span className="text-sm sm:text-base lg:text-lg font-bold mr-2 sm:mr-3 mt-0.5">•</span>
                    <span className="text-sm sm:text-base font-bold leading-relaxed">{achievement.title}</span>
                  </div>
                  <div className="flex items-start ml-4 sm:ml-5 lg:ml-6">
                    <span className="text-xs sm:text-sm leading-relaxed">• {achievement.titleEn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#B5C9D1] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="space-y-4 sm:space-y-6">
              {achievements.slice(4).map((achievement, index) => (
                <div key={index + 4} className="text-[#0F3E4D]">
                  <div className="flex items-start mb-1 sm:mb-2">
                    <span className="text-sm sm:text-base lg:text-lg font-bold mr-2 sm:mr-3 mt-0.5">•</span>
                    <span className="text-sm sm:text-base font-bold leading-relaxed">{achievement.title}</span>
                  </div>
                  <div className="flex items-start ml-4 sm:ml-5 lg:ml-6">
                    <span className="text-xs sm:text-sm leading-relaxed">• {achievement.titleEn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
