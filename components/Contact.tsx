
export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F3E4D] mb-3 sm:mb-4">
            輸出販路のご相談はこちらから。
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            お気軽にお問い合わせください。専門スタッフがサポートいたします。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0F3E4D] mb-6 sm:mb-8">
              お問い合わせ
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="mailto:omori1492@gmail.com"
                className="group bg-[#F4F6F5] hover:bg-[#0F3E4D] text-[#0F3E4D] hover:text-white transition-all duration-300 px-8 py-6 rounded-xl flex items-center gap-4 cursor-pointer min-w-[280px]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0F3E4D] group-hover:bg-white rounded-full">
                  <i className="ri-mail-line text-white group-hover:text-[#0F3E4D] text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">メール</div>
                  <div className="text-sm opacity-80">omori1492@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:080-9343-3439"
                className="group bg-[#F4F6F5] hover:bg-[#0F3E4D] text-[#0F3E4D] hover:text-white transition-all duration-300 px-8 py-6 rounded-xl flex items-center gap-4 cursor-pointer min-w-[280px]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#0F3E4D] group-hover:bg-white rounded-full">
                  <i className="ri-phone-line text-white group-hover:text-[#0F3E4D] text-xl" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">電話</div>
                  <div className="text-sm opacity-80">080-9343-3439</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-[#F4F6F5] rounded-xl">
              <p className="text-gray-600 text-sm sm:text-base">
                営業時間：平日 9:00〜18:00<br />
                お急ぎの場合は、お電話でのお問い合わせをおすすめいたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
