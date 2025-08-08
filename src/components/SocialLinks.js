import { useTheme } from '../hooks/useTheme';

export default function SocialLinks() {
  const { brandKit } = useTheme();

  if (!brandKit?.socials || brandKit.socials.length === 0) {
    return null;
  }

  return (
    <section className="section-spacing relative">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20" style={{ animation: 'fadeIn 1s ease-out' }}>
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--theme-text)' }}>
              Connect With <span className="gradient-text">NetZylo</span>
            </h2>
            <p className="text-2xl max-w-3xl mx-auto" style={{ color: 'var(--theme-text)', opacity: 0.8 }}>
              Join our community and stay updated with the latest Web3 domain innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {brandKit.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-card text-center group block"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.2}s both`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {social.platform === 'Twitter' && '🐦'}
                  {social.platform === 'Facebook' && '📘'}
                  {social.platform === 'LinkedIn' && '💼'}
                  {social.platform === 'Instagram' && '📸'}
                  {social.platform === 'Discord' && '💬'}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {social.platform}
                </h3>
                <p className="opacity-90 text-lg">
                  Follow us on {social.platform}
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}