import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Toaster } from 'sonner'
import Script from 'next/script'

import './globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700', '800'] })

export const metadata: Metadata = {
  title: 'CASTDAILY',
  description: 'CASTDAILY에서 다양한 뷰티, 라이프스타일 콘텐츠를 만나보세요.',
  openGraph: {
    title: '손톱 세로줄 그냥 나이 탓인 줄 알았는데 아니었어요 | CASTDAILY',
    description: '손톱 세로줄 원인과 해결법, 영양제 7개 직접 써본 솔직 후기',
    images: [
      {
        url: '/images/blog/nail-before.jpg',
        width: 1200,
        height: 630,
        alt: '손톱 세로줄 관리 전후 비교',
      },
    ],
    type: 'article',
    siteName: 'CASTDAILY',
  },
  twitter: {
    card: 'summary_large_image',
    title: '손톱 세로줄 그냥 나이 탓인 줄 알았는데 아니었어요 | CASTDAILY',
    description: '손톱 세로줄 원인과 해결법, 영양제 7개 직접 써본 솔직 후기',
    images: ['/images/blog/nail-before.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="facebook-domain-verification" content="zlfhncuo9syhl91crczmewr5gvhdup" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1532969721004859');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1532969721004859&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
