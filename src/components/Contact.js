import { useTheme } from '../hooks/useTheme';

export default function Contact() {
  const { brandKit, profile } = useTheme();
  return (
    <section className="section-spacing relative">
      <div className="container-responsive">
        <div className="max-w-5xl mx-auto text-center mb-20" style={{ animation: 'fadeIn 1s ease-out' }}>
          <h2 className="text-5xl font-bold mb-8" style={{ color: 'var(--theme-text)' }}>
            Ready to Own Your <span className="gradient-text">Digital Future?</span>
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--theme-text)', opacity: 0.9 }}>
            {brandKit?.content?.footer}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* CTA Section */}
          <div className="space-y-8">
            <div className="theme-card shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get Your Web3 Domain Now</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-theme-accent to-theme-button rounded-full flex items-center justify-center mr-4">
                    <span className="text-theme-button-text font-bold">1</span>
                  </div>
                  <span className="text-theme-text font-medium">Choose your perfect domain name</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-theme-accent to-theme-button rounded-full flex items-center justify-center mr-4">
                    <span className="text-theme-button-text font-bold">2</span>
                  </div>
                  <span className="text-theme-text font-medium">Complete the blockchain transaction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-theme-accent to-theme-button rounded-full flex items-center justify-center mr-4">
                    <span className="text-theme-button-text font-bold">3</span>
                  </div>
                  <span className="text-theme-text font-medium">Own your domain forever</span>
                </div>
              </div>
              <button className="w-full mt-8 btn-primary py-4 px-8 rounded-xl">
                Start Your Journey
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center shadow-theme-lg backdrop-blur-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl font-bold text-theme-accent mb-2">50K+</div>
                <div className="text-theme-text font-medium">Domains Registered</div>
              </div>
              <div className="card p-6 text-center shadow-theme-lg backdrop-blur-lg animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="text-3xl font-bold text-theme-button mb-2">99.9%</div>
                <div className="text-theme-text font-medium">Uptime</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8 shadow-theme-xl backdrop-blur-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-theme-text">Have Questions? Let&apos;s Talk</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-theme-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-accent/30 rounded-theme text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-theme-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-accent/30 rounded-theme text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-theme-text mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-accent/30 rounded-theme text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent resize-none"
                  placeholder="Tell us about your project or ask any questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3 px-6 rounded-theme"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p style={{ color: 'var(--theme-text)', opacity: 0.7 }}>
                {brandKit?.content?.copyright}
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href={brandKit?.termsOfService}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-colors"
                style={{ color: 'var(--theme-text)' }}
              >
                Terms of Service
              </a>
              <a
                href={brandKit?.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-colors"
                style={{ color: 'var(--theme-text)' }}
              >
                Privacy Policy
              </a>
              <a
                href={`mailto:${profile?.primaryEmailAddress}`}
                className="hover:opacity-70 transition-colors"
                style={{ color: 'var(--theme-text)' }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}