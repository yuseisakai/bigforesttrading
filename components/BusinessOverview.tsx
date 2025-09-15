'use client';

export default function BusinessOverview() {
  return (
    <section id="business-overview" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F3E4D] mb-4">
            事業概要 / Business Overview
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0F3E4D] rounded-full flex items-center justify-center mr-4">
                    <i className="ri-leaf-line text-white text-xl"></i>
                  </div>
                  <div className="text-[#0F3E4D] font-bold text-2xl">
                    BIG FOREST TRADING
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 font-semibold">
                  日本産の高品質水産物をタイを中心に東南アジアへ輸出!!
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  国内集荷から海外輸出までワンストップで対応。
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0F3E4D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F3E4D] mb-2">
                      鮮魚・冷凍魚（鮮凍力シリーズ）
                    </h3>
                    <p className="text-gray-600">
                      Fresh fish & Pro- Frozen seafood (SENTO-RYOKU series)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0F3E4D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F3E4D] mb-2">
                      日本産水産物の輸出サポート
                    </h3>
                    <p className="text-gray-600">
                      Export support for Japanese seafood
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0F3E4D] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F3E4D] mb-2">
                      海外販路開拓・営業支援
                    </h3>
                    <p className="text-gray-600">
                      Overseas market development & sales support
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6">
                  <div className="flex-1">
                    <div className="bg-yellow-300 text-[#0F3E4D] px-4 py-2 rounded-lg text-center font-bold mb-2">
                      市場・産直調達
                    </div>
                    <p className="text-sm text-gray-700 text-center">Fish market / port</p>
                  </div>
                  <div className="mx-4">
                    <i className="ri-arrow-right-line text-2xl text-[#0F3E4D]"></i>
                  </div>
                  <div className="flex-1">
                    <div className="bg-yellow-300 text-[#0F3E4D] px-4 py-2 rounded-lg text-center font-bold mb-2">
                      国内集荷・品質管理
                    </div>
                    <p className="text-sm text-gray-700 text-center">Collection / QC</p>
                  </div>
                  <div className="mx-4">
                    <i className="ri-arrow-right-line text-2xl text-[#0F3E4D]"></i>
                  </div>
                  <div className="flex-1">
                    <div className="bg-yellow-300 text-[#0F3E4D] px-4 py-2 rounded-lg text-center font-bold mb-2">
                      海外販売
                    </div>
                    <p className="text-sm text-gray-700 text-center">Overseas Sales</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/d0d53ae08fffd99db13c27822c7c6276.png"
                  alt="高品質な日本産水産物"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/46638865477cf08728037441cd347233.png"
                  alt="市場での水産物販売"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/ca924c58b3899a4f32f1d42111f0e290.png"
                  alt="高級水産物の輸出"
                  className="w-full h-48 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}