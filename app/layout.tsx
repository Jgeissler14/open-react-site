import './css/style.css'
import Script from 'next/script'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'CloudZap',
  description: 'Lower your data costs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script>
                 {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'G-5QY6Q4E8WD', {
                     page_path: window.location.pathname,
                     });
                 `}
       </Script>
       <Script strategy="beforeInteractive">
      {`
        _linkedin_partner_id = "5106866";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}
    </Script>
    <Script src="https://snap.licdn.com/li.lms-analytics/insight.min.js" strategy="beforeInteractive" />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=5106866&fmt=gif"
      />
    </noscript>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 
