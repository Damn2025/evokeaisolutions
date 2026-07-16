import './globals.css';
import FloatingActionButtons from '../components/FloatingActionButtons';

export const metadata = {
  title: 'Evoke AI | Custom AI Solutions & Automated Lead Generation Services',
  description: 'Transform your business with Evoke AI. We specialize in custom AI software, automated lead generation, and digital branding to help you scale efficiently.',
  icons: {
    icon: '/assets/evoke.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="ptBJwGx9xLsjUMrbojcQcMd_C17iM78IQkXZwlWp1Gs" />
        <meta name="google-site-verification" content="jyEbDeZcrtxZCqNypoW85PqzKtD253lRcJudSbea3Ws" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N64NBVNC');`
        }} />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N64NBVNC"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {children}
        <FloatingActionButtons />
      </body>
    </html>
  );
}
