import type {Metadata, Viewport} from 'next';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import './globals.scss';
import Navbar from '@/components/Navigations/NavBar';

export const metadata: Metadata = {
    metadataBase: new URL('https://job-infos.kyawzinthiha.com'),
    title: 'Kyaw Zin Thiha',
    description: 'Versatile TypeScript FullStack Developer with a flair for designing and developing scalable web applications using Next.js, Nest.js, and a suite of modern technologies. Passionate about building user-centric solutions and leveraging AI technologies like OpenAI GPT for personalized experiences.',
    keywords: 'TypeScript, Full Stack Developer, React.js, Node.js, Next.js, Nest.js, Web Development, AI, OpenAI GPT, Software Engineering',
    authors: [{name: 'Kyaw Zin Thiha', url: 'https://kyawzinthiha.dev'}],
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://kyawzinthiha.dev',
        images: [
            {
                url: 'https://job-infos.kyawzinthiha.com/profile-banner.png',
                width: 1920,
                height: 1080,
                alt: 'Kyaw Zin Thiha - Full Stack Developer'
            }
        ]
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: ' #1D2020',
    colorScheme: 'dark'
};


export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
