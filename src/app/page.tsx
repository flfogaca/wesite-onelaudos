"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  FileText,
  Building2,
  Brain,
  Server,
  Shield,
  Plug,
  GitBranch,
  TrendingUp,
  Map,
  ArrowRight,
  Settings,
  Sparkles,
} from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { StatCounter, FeatureCard } from "@/components/ui";

const stats = [
  { value: 14, label: "Modalidades Radiológicas", suffix: "" },
  { value: 8, label: "Funcionalidades de IA", suffix: "" },
  { value: 3, label: "Idiomas Suportados", suffix: "" },
  { value: 10, label: "Filtros de Worklist", suffix: "+" },
  { value: 5, label: "Visualizadores DICOM", suffix: "" },
  { value: 8, label: "Perfis de Usuário", suffix: "" },
];

const quickLinks = [
  {
    title: "PACS",
    description: "Armazenamento e visualização de imagens médicas DICOM",
    href: "/pacs",
    icon: Monitor,
    color: "from-primary to-indigo-400",
  },
  {
    title: "RIS",
    description: "Worklist, laudos, filtros e gestão de exames",
    href: "/ris",
    icon: FileText,
    color: "from-accent to-cyan-400",
  },
  {
    title: "Mini HIS",
    description: "Gestão de usuários, TISS/TUSS e portais",
    href: "/his",
    icon: Building2,
    color: "from-success to-green-400",
  },
  {
    title: "Inteligência Artificial",
    description: "8 funcionalidades de IA para produtividade",
    href: "/inteligencia-artificial",
    icon: Brain,
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Arquitetura",
    description: "Modelo híbrido local + nuvem",
    href: "/arquitetura",
    icon: Server,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Segurança",
    description: "RBAC, auditoria, HIPAA e LGPD",
    href: "/seguranca",
    icon: Shield,
    color: "from-red-500 to-rose-400",
  },
];

const additionalSections = [
  { title: "Configurações", href: "/configuracoes", icon: Settings },
  { title: "Administração", href: "/administracao", icon: Server },
  { title: "Integrações", href: "/integracoes", icon: Plug },
  { title: "Fluxos de Trabalho", href: "/fluxos-trabalho", icon: GitBranch },
  { title: "Análise de Mercado", href: "/mercado", icon: TrendingUp },
  { title: "Roadmap", href: "/roadmap", icon: Map },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-text mb-4">
                Plataforma Completa em Números
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Mais de 3.000 linhas de especificações funcionais consolidadas
                em uma documentação técnica abrangente.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-surface/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Navegação Rápida
                </span>
              </div>
              <h2 className="text-3xl font-bold text-text mb-4">
                Explore a Documentação
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Acesse rapidamente qualquer seção da documentação técnica da
                plataforma.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group block p-6 bg-surface rounded-xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted mb-4">{link.description}</p>
                    <span className="inline-flex items-center text-sm text-primary font-medium">
                      Ver documentação
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-text mb-4">
                Documentação Adicional
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Mais recursos e informações sobre a plataforma.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalSections.map((section, index) => (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={section.href}
                    className="flex flex-col items-center p-4 bg-surface rounded-lg border border-border hover:border-primary/50 hover:bg-surface-hover transition-all group"
                  >
                    <section.icon className="w-8 h-8 text-muted group-hover:text-primary transition-colors mb-2" />
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text text-center">
                      {section.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Preview */}
        <section className="py-20 bg-surface/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-text mb-4">
                Arquitetura Híbrida
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Modelo inovador que combina processamento local com
                armazenamento em nuvem para máxima disponibilidade.
              </p>
            </motion.div>

            <div className="bg-surface rounded-xl border border-border p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                {[
                  { label: "Equipamento DICOM", icon: Monitor },
                  { label: "Broker Local", icon: Server },
                  { label: "Cache", icon: Shield },
                  { label: "Sincronização", icon: Plug },
                  { label: "Nuvem", icon: Server },
                  { label: "Viewer Web", icon: Monitor },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm text-muted">{item.label}</span>
                    {index < 5 && (
                      <ArrowRight className="w-6 h-6 text-muted mt-4 hidden md:block rotate-0 md:rotate-0" />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/arquitetura"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors"
                >
                  Ver Arquitetura Completa
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
