import { useTheme } from '../hooks/useTheme';

export default function Hero() {
  const { brandKit, profile } = useTheme();

  return (
    <section className="hero-gradient section-spacing min-h-screen flex items-center relative">
      {/* Floating background elements */}
      <div className="floating-element w-32 h-32 top-20 left-10 opacity-30"
        style={{ background: 'linear-gradient(135deg, var(--theme-accent), var(--theme-container))' }}></div>
      <div className="floating-element w-24 h-24 bottom-32 right-16 opacity-20"
        style={{ background: 'linear-gradient(135deg, var(--theme-container), var(--theme-accent))' }}></div>
      <div className="floating-element w-16 h-16 top-1/3 right-1/4 opacity-25"
        style={{ background: 'linear-gradient(135deg, var(--theme-text), var(--theme-accent))' }}></div>
      <div className="floating-element w-20 h-20 bottom-1/4 left-1/4 opacity-30"
        style={{ background: 'linear-gradient(135deg, var(--theme-accent), var(--theme-text))' }}></div>

      <div className="container-responsive relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8" style={{ animation: 'fadeIn 1s ease-out' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{ color: 'var(--theme-text)' }}>
                {brandKit?.kitName?.split('|')[0]?.trim()}
              </span>
              <br />
              <span className="gradient-text text-4xl sm:text-5xl lg:text-6xl">
                {brandKit?.kitName?.split('|')[1]?.trim() || 'Premium Web3 Domains'}
              </span>
            </h1>
          </div>

          <div className="mb-12" style={{ animation: 'slideUp 0.8s ease-out 0.3s both' }}>
            <p className="text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'var(--theme-text)', opacity: 0.9 }}>
              {brandKit?.brandSummary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{ animation: 'slideUp 0.8s ease-out 0.6s both' }}>
            <a
              href={brandKit?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              🚀 Explore NetZylo
            </a>
            <a
              href={`mailto:${profile?.primaryEmailAddress}`}
              className="btn-secondary inline-block"
            >
              💬 Get In Touch
            </a>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            style={{ animation: 'fadeIn 1s ease-out 1s both' }}>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">AI-Powered</div>
              <div style={{ color: 'var(--theme-text)', opacity: 0.8 }}>Premium Domains</div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">Web3</div>
              <div style={{ color: 'var(--theme-text)', opacity: 0.8 }}>Blockchain Ready</div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text mb-2">Future-Proof</div>
              <div style={{ color: 'var(--theme-text)', opacity: 0.8 }}>Digital Assets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}