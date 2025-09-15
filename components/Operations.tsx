
'use client';

export default function Operations() {
  const steps = [
    {
      step: '01',
      title: '市場・産直仕入',
      description: '築地市場での目利きと産地直送により、最高品質の水産物を調達',
      icon: 'ri-shopping-cart-line'
    },
    {
      step: '02',
      title: '集荷・品質管理',
      description: '-60℃超低温冷凍技術による品質保持と厳格な管理体制',
      icon: 'ri-shield-check-line'
    },
    {
      step: '03',
      title: '輸出手続き',
      description: '複雑な輸出書類作成から通関まで、スムーズな輸出業務',
      icon: 'ri-plane-line'
    },
    {
      step: '04',
      title: '海外販売',
      description: '現地ネットワークを活用した効果的な販売と継続的なフォロー',
      icon: 'ri-store-3-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F3E4D] mb-4">
            オペレーション
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            調達から販売まで一気通貫のプロセス
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#EFF1ED] transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#0F3E4D] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <i className={`${step.icon} text-2xl text-white`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C9A227] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F3E4D] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}