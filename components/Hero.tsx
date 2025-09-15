
'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeeermsNFjHABbQ4fdzrgqrwT_HHzD08yw1IEALFhJ70slyHQ/viewform?usp=dialog', '_blank');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-16 sm:pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 62, 77, 0.7), rgba(15, 62, 77, 0.7)), url('https://static.readdy.ai/image/94598d06be82172b82d4bd3a520590f4/1e45a15a8e2d0049ed4abec24ca9883c.png')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            良いものを必ず売り切る。
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            日本の高品質な水産物を、現地で"売れる形"に。<br className="hidden sm:block" />
            品質×現地販売力×輸出運用力で、確実な成果をお約束します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={handleContactClick}
              className="w-full sm:w-auto bg-[#C9A227] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#B8911F] transition-colors cursor-pointer whitespace-nowrap"
            >
              輸出・販路の相談をする
            </button>
            <button 
              onClick={handleContactClick}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-[#0F3E4D] transition-colors cursor-pointer whitespace-nowrap"
            >
              見積を依頼する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
