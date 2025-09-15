
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              プライバシーポリシー
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 基本方針</h2>
                <p>
                  BIG FOREST TRADING株式会社（以下「当社」）は、個人情報の重要性を認識し、個人情報の保護に関する法律及び関連する法令等を遵守し、お客様の個人情報を適切に取り扱います。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 個人情報の収集</h2>
                <p>
                  当社では、以下の場合に必要な範囲で個人情報を収集させていただきます：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>お問い合わせをいただく場合</li>
                  <li>商品・サービスのご提供をする場合</li>
                  <li>資料請求をいただく場合</li>
                  <li>各種ご案内をお送りする場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
                <p>
                  収集した個人情報は、以下の目的で利用させていただきます：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>お問い合わせへの回答</li>
                  <li>商品・サービスの提供</li>
                  <li>資料・情報の送付</li>
                  <li>各種ご案内・連絡事項の通知</li>
                  <li>統計データの作成（個人を特定できない形式）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
                <p>
                  当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 個人情報の管理</h2>
                <p>
                  当社は、個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス、紛失、破損、改ざん、漏洩などを防止するため、必要かつ適切な安全管理措置を実施します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 個人情報の開示・訂正等</h2>
                <p>
                  お客様は、当社が保有するお客様の個人情報について、開示、訂正、追加、削除、利用停止、消去及び第三者提供の停止を求めることができます。お申し出については、下記のお問い合わせ先までご連絡ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookieについて</h2>
                <p>
                  当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定により無効にすることができます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
                <p>
                  当社は、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーについては、当社が別途定める場合を除いて、当サイトに掲載したときから効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">9. お問い合わせ</h2>
                <p>
                  個人情報の取扱いに関するご質問やご相談は、以下までお問い合わせください：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="font-semibold">BIG FOREST TRADING LP</p>
                  <p>メール：omori1492@gmail.com</p>
                </div>
              </section>

              <section className="text-center pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  制定日：2024年1月1日<br />
                  最終更新：2024年1月1日
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
