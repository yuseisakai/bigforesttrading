
'use client';

export default function Company() {
  const companyInfo = [
    { label: '会社名', value: 'BIG FOREST TRADING株式会社' },
    { label: '所在地', value: '茨城県日立市十王町友部東1-4-15' },
    { label: '設立年月', value: '2025年8月（予定）' },
    { label: '資本金', value: '300万円' },
    { label: '代表者', value: '大森 響' },
    { label: '連絡先', value: 'omori1492@gmail.com' },
    { label: '事業内容', value: '日本産水産物の輸出／海外販路開拓支援' },
    { label: '販売先', value: 'タイの日本食レストラン' }
  ];

  return (
    <section id="company" className="py-12 sm:py-16 lg:py-20 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-2 sm:mb-4">
            会社情報
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            確かな実績と信頼のネットワーク
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="space-y-4 sm:space-y-6">
              {companyInfo.map((info, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 pb-3 sm:pb-4 gap-1 sm:gap-0">
                  <dt className="font-semibold text-[#0F3E4D] text-sm sm:text-base sm:w-1/3">
                    {info.label}
                  </dt>
                  <dd className="text-gray-700 text-sm sm:text-base sm:w-2/3 sm:text-right break-words">
                    {info.value}
                  </dd>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="font-bold text-[#0F3E4D] mb-3 sm:mb-4 text-sm sm:text-base">日本語表記</h3>
                  <div className="space-y-2 text-gray-700 text-xs sm:text-sm">
                    <p><strong>会社名：</strong>BIG FOREST TRADING株式会社</p>
                    <p><strong>事業内容：</strong>日本産水産物の輸出／海外販路開拓支援</p>
                    <p><strong>販売先：</strong>タイの日本食レストラン</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F3E4D] mb-3 sm:mb-4 text-sm sm:text-base">English</h3>
                  <div className="space-y-2 text-gray-700 text-xs sm:text-sm">
                    <p><strong>Company:</strong> BIG FOREST TRADING Co., Ltd.</p>
                    <p><strong>Business:</strong> Export of Japanese seafood / overseas market development</p>
                    <p><strong>Sales:</strong> Japanese Restaurant in Thailand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
