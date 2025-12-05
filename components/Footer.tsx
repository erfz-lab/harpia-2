import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, HERO_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-brand-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">{HERO_CONTENT.logoText}</h3>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-6">
              Transformando a comunicação de empresas através da integração de mídia e inteligência artificial.
            </p>
          </div>

          {/* Links/Services (Simplified) */}
          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Web & Apps</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Produção Audiovisual</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Soluções em I.A.</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-purple transition-colors">{CONTACT_INFO.email}</a></li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} {HERO_CONTENT.logoText}. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 p-4 bg-brand-purple text-white rounded-full shadow-lg hover:bg-brand-pink transition-all duration-300 hover:scale-110 z-50">
        <MessageCircle size={24} />
      </button>
    </footer>
  );
};

export default Footer;
