"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  FileText,
  Building2,
  Settings,
  Brain,
  Server,
  Shield,
  Plug,
  GitBranch,
  TrendingUp,
  Map,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "PACS",
    href: "/pacs",
    icon: Monitor,
    description: "Picture Archiving and Communication System",
    children: [
      { name: "Overview", href: "/pacs", description: "Visão geral do PACS" },
      { name: "Viewer DICOM", href: "/pacs/viewer", description: "Ferramentas de visualização" },
      { name: "Modalidades", href: "/pacs/modalidades", description: "14 tipos de exames" },
      { name: "Visualizadores", href: "/pacs/visualizadores", description: "Integrações externas" },
      { name: "Armazenamento", href: "/pacs/armazenamento", description: "Cache e nuvem" },
    ],
  },
  {
    name: "RIS",
    href: "/ris",
    icon: FileText,
    description: "Radiology Information System",
    children: [
      { name: "Overview", href: "/ris", description: "Visão geral do RIS" },
      { name: "Worklist", href: "/ris/worklist", description: "Lista de exames" },
      { name: "Filtros", href: "/ris/filtros", description: "10+ filtros de busca" },
      { name: "Ações por Exame", href: "/ris/acoes-exame", description: "Menu contextual" },
      { name: "Modal Paciente", href: "/ris/modal-paciente", description: "Dados demográficos" },
      { name: "Laudos", href: "/ris/laudos", description: "Editor e máscaras" },
    ],
  },
  {
    name: "HIS",
    href: "/his",
    icon: Building2,
    description: "Hospital Information System",
    children: [
      { name: "Overview", href: "/his", description: "Visão geral do Mini HIS" },
      { name: "Usuários & RBAC", href: "/his/usuarios", description: "8 perfis de acesso" },
      { name: "TISS/TUSS", href: "/his/tiss-tuss", description: "Faturamento ANS" },
      { name: "Portal", href: "/his/portal", description: "Paciente e médico" },
    ],
  },
  {
    name: "Mais",
    href: "#",
    icon: Settings,
    description: "Recursos adicionais",
    children: [
      { name: "Configurações", href: "/configuracoes", icon: Settings, description: "9 abas de preferências" },
      { name: "Inteligência Artificial", href: "/inteligencia-artificial", icon: Brain, description: "8 funcionalidades de IA" },
      { name: "Arquitetura", href: "/arquitetura", icon: Server, description: "Modelo híbrido" },
      { name: "Administração", href: "/administracao", icon: Shield, description: "Funcionalidades Root/Admin" },
      { name: "Segurança", href: "/seguranca", icon: Shield, description: "Auditoria e compliance" },
      { name: "Integrações", href: "/integracoes", icon: Plug, description: "TISS, HL7, DICOM, APIs" },
      { name: "Fluxos de Trabalho", href: "/fluxos-trabalho", icon: GitBranch, description: "Jornadas de uso" },
      { name: "Mercado", href: "/mercado", icon: TrendingUp, description: "Análise competitiva" },
      { name: "Roadmap", href: "/roadmap", icon: Map, description: "Fases de implementação" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-primary-light to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text block">
                PACS · RIS · HIS
              </span>
              <span className="text-xs text-text-tertiary">
                Documentação Técnica
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <Link
              href="/"
              className="px-4 py-2.5 text-sm font-semibold text-text-secondary hover:text-text transition-all rounded-xl hover:bg-surface-elevated"
            >
              <Home className="w-4 h-4 inline-block mr-2" />
              Home
            </Link>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all",
                    activeMenu === item.name
                      ? "text-text bg-surface-elevated shadow-lg"
                      : "text-text-secondary hover:text-text hover:bg-surface-elevated"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      activeMenu === item.name && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="w-80 rounded-2xl bg-surface-elevated border-2 border-border-light shadow-2xl overflow-hidden">
                        <div className="p-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-hover transition-all group"
                            >
                              {"icon" in child && child.icon ? (
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  <child.icon className="w-5 h-5 text-primary" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-xs text-text-tertiary mt-1">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border"
          >
            <div className="px-4 py-4 space-y-2 bg-surface max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5 text-primary" />
                <span className="font-medium">Home</span>
              </Link>
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  <div className="flex items-center gap-3 p-3 text-muted text-sm font-medium">
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </div>
                  <div className="pl-8 space-y-1">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block p-2 pl-4 rounded-lg text-sm text-text-secondary hover:text-text hover:bg-surface-hover transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
