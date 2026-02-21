'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-[#FAF8F5]">
        <div className="container-custom text-center py-20">
          <div className="max-w-2xl mx-auto">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="font-mincho text-[120px] sm:text-[160px] lg:text-[200px] font-bold text-[#0A1628]/10 leading-none">
                404
              </span>
            </div>

            {/* Message */}
            <h1 className="font-mincho text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              ページが見つかりません
            </h1>
            <p className="text-[#6B7280] mb-10 leading-relaxed">
              お探しのページは移動または削除された可能性があります。
              <br />
              URLをご確認いただくか、以下のリンクからお探しください。
            </p>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-block">
                トップページへ
              </Link>
              <Link href="/#contact" className="btn-secondary inline-block">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
