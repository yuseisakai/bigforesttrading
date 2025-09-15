
'use client';

export default function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:omori1492@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:080-9343-3439', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-3 sm:mb-4">
            輸出販路のご相談はこちらから。
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            お気軽にお問い合わせください。専門スタッフがサポートいたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleEmailClick}
              className="bg-[#0F3E4D] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0A5C63] transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
            >
              <i className="ri-mail-line text-lg sm:text-xl" />
              omori1492@gmail.com
            </button>
            
            <button
              onClick={handlePhoneClick}
              className="bg-[#C9A227] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#B8911F] transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
            >
              <i className="ri-phone-line text-lg sm:text-xl" />
              080-9343-3439
            </button>
          </div>
        </div>

        <div className="bg-[#F4F6F5] rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0F3E4D] mb-3 sm:mb-4">
              お問い合わせ内容について
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base text-gray-700">
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>輸出に関するご相談</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>販路開拓のサポート</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>お見積もり依頼</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>商品の品質管理</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>輸送・物流のご相談</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-green-600 mr-2 text-base sm:text-lg" />
                <span>その他のご質問</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
