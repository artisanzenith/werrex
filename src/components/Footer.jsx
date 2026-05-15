import { Link } from 'react-router-dom'

const footerLinks = {
  services: [
    { label: 'Website Development', href: '/#services' },
    { label: 'Graphic Design', href: '/#services' },
    { label: 'Social Media Marketing', href: '/#services' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Team', href: '/#team' },
  ],
  support: [
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Pricing', href: '/#pricing' },
  ],
}

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('/#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="section-padding pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-cyan-glow flex items-center justify-center">
                  <span className="font-display font-bold text-white">W</span>
                </div>
                <span className="font-display font-bold text-xl gradient-text">
                  Werrex
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                Premium digital agency crafting websites, brands, and social presence that drive measurable growth.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent/20 transition-all"
                    aria-label={social}
                  >
                    <span className="text-sm font-medium capitalize">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Werrex Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
