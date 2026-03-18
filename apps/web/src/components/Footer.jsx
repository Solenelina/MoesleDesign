
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/site.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <img 
              src="https://horizons-cdn.hostinger.com/22591d1d-ba76-423a-b800-205c2197f546/e924bbdc4067dcf2885c5a2fae4f5422.png" 
              alt="H.Moeslé Design"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Design de mobilier sur mesure et aménagement d'intérieur personnalisé
            </p>
          </div>

          {/* Location */}
          <div>
            <span className="font-semibold text-foreground mb-3 block">Localisation</span>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              <span>Pays Basque, Sud-Ouest France</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-semibold text-foreground mb-3 block">Contact</span>
            <div className="flex flex-col gap-3">
              <a 
                href={`mailto:${SITE_CONTACT.email}`}
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">{SITE_CONTACT.email}</span>
              </a>
              <a 
                href={SITE_CONTACT.linkedinUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">{SITE_CONTACT.linkedinLabel}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} H.Moeslé Design. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
