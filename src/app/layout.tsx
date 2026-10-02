import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeaderWrapper } from '@/components/layout/HeaderWrapper'
import { Footer } from '@/components/layout/Footer'
import { BackgroundMusic } from '@/components/ui/BackgroundMusic'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { TranslationProvider } from '@/lib/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Galerija Omerzel | Art Gallery in Bled, Slovenia',
    template: '%s | Galerija Omerzel',
  },
  description: 'Visit Galerija Omerzel, an art gallery in Bled, Slovenia. Explore paintings and sculptures, view the collection, and contact the gallery about works or a visit.',
  keywords: ['Galerija Omerzel', 'art gallery', 'Bled', 'Slovenia', 'contemporary art'],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Galerija Omerzel | Art Gallery in Bled, Slovenia',
    description: 'Visit Galerija Omerzel, an art gallery in Bled, Slovenia. Explore paintings and sculptures, view the collection, and contact the gallery about works or a visit.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/galerija-omerzel/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranslationProvider>
          <ThemeProvider>
            <HeaderWrapper />
            <main>{children}</main>
            <Footer />
            <BackgroundMusic />
          </ThemeProvider>
        </TranslationProvider>

        {/* n8n.io style cursor animation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let cursor = null;
                let mouseX = 0;
                let mouseY = 0;
                let cursorX = 0;
                let cursorY = 0;

                function initCursor() {
                  cursor = document.createElement('div');
                  cursor.style.cssText = \`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, rgba(236, 72, 153, 0.4) 100%);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transform: translate(-50%, -50%);
                    transition: transform 0.1s ease-out;
                    mix-blend-mode: difference;
                    opacity: 0;
                  \`;
                  document.body.appendChild(cursor);

                  // Fade in cursor
                  setTimeout(() => {
                    cursor.style.opacity = '1';
                  }, 100);
                }

                function updateCursor(e) {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                }

                function animateCursor() {
                  if (!cursor) return;

                  // Smooth following effect
                  cursorX += (mouseX - cursorX) * 0.1;
                  cursorY += (mouseY - cursorY) * 0.1;

                  cursor.style.transform = \`translate(\${cursorX - 10}px, \${cursorY - 10}px)\`;

                  requestAnimationFrame(animateCursor);
                }

                function handleMouseEnter() {
                  if (cursor) {
                    cursor.style.transform = \`translate(\${cursorX - 10}px, \${cursorY - 10}px) scale(1.5)\`;
                    cursor.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 1) 0%, rgba(147, 51, 234, 0.8) 50%, rgba(236, 72, 153, 0.6) 100%)';
                  }
                }

                function handleMouseLeave() {
                  if (cursor) {
                    cursor.style.transform = \`translate(\${cursorX - 10}px, \${cursorY - 10}px) scale(1)\`;
                    cursor.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 50%, rgba(236, 72, 153, 0.4) 100%)';
                  }
                }

                // Initialize on load
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initCursor);
                } else {
                  initCursor();
                }

                // Event listeners
                document.addEventListener('mousemove', updateCursor);

                // Add hover effects for interactive elements
                document.addEventListener('mouseenter', function(e) {
                  if (e.target && typeof e.target.closest === 'function' && e.target.closest('button, a, [role="button"], .interactive-cursor')) {
                    handleMouseEnter();
                  }
                }, true);

                document.addEventListener('mouseleave', function(e) {
                  if (e.target && typeof e.target.closest === 'function' && e.target.closest('button, a, [role="button"], .interactive-cursor')) {
                    handleMouseLeave();
                  }
                }, true);

                // Start animation loop
                animateCursor();

                // Respect reduced motion preference
                if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                  if (cursor) cursor.style.display = 'none';
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}