"use client";

import Link from "next/link";
import { Monitor, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  sistemas: [
    { name: "PACS", href: "/pacs" },
    { name: "RIS", href: "/ris" },
    { name: "Mini HIS", href: "/his" },
    { name: "Inteligência Artificial", href: "/inteligencia-artificial" },
  ],
  recursos: [
    { name: "Arquitetura", href: "/arquitetura" },
    { name: "Integrações", href: "/integracoes" },
    { name: "Segurança", href: "/seguranca" },
    { name: "Administração", href: "/administracao" },
  ],
  empresa: [
    { name: "Análise de Mercado", href: "/mercado" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Fluxos de Trabalho", href: "/fluxos-trabalho" },
    { name: "Configurações", href: "/configuracoes" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                PACS/RIS/HIS
              </span>
            </Link>
            <p className="text-muted text-sm mb-4 max-w-sm">
              Documentação técnica completa da plataforma integrada de radiologia. 
              Referência para equipe de desenvolvimento.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Sistemas</h3>
            <ul className="space-y-3">
              {footerLinks.sistemas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Documentação</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Plataforma PACS/RIS/HIS. Documentação Técnica.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-muted">
                Desenvolvido com Next.js 14 + Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
