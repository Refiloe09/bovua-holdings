'use client';

import Link from 'next/link';
import { Container } from '@/app/components/Container';
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Energy', href: '/energy' },
  { name: 'Logistics', href: '/logistics' },
  { name: 'Properties', href: '/properties' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '/', icon: FaLinkedin },
  { name: 'Twitter', href: '/', icon: FaTwitter },
  { name: 'Facebook', href: '/', icon: FaFacebookF },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-light py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Logo and Contact Section */}
          <div>
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logos/bovua-holdings.png"
                alt="Bovua Holdings Logo"
                width={160}
                height={80}
              />
            </div>
            <p className="mt-4 text-muted">
              Powering industries, logistics, and communities.
            </p>
            <p className="text-muted mt-2">Johannesburg, South Africa</p>
            <div className="mt-4 leading-relaxed">
              <p>
                <strong>Tel:</strong> +27 (0)11 234 2826
              </p>
              <p>
                <strong>Cell:</strong> +27 (0)82 515 7521
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <Link
                  href="mailto:info@bovuaholdings.co.za"
                  className="text-primary hover:underline"
                >
                  info@bovuaholdings.co.za
                </Link>
              </p>
              <p className="mt-3">
                Cambridge Manor Office Park <br />
                Paulshof, Sandton 2191 <br />
                South Africa
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="p-3 bg-primary text-light rounded-full hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-muted pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Bovua Holdings. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
