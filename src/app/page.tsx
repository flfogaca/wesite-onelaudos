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
    color: "from-primary to-primary-light",
    gradient: "bg-primary/5",
  },
  {
    title: "RIS",
    description: "Worklist, laudos, filtros e gestão de exames",
    href: "/ris",
    icon: FileText,
    color: "from-accent to-accent-light",
    gradient: "bg-accent/5",
  },
  {
    title: "Mini HIS",
    description: "Gestão de usuários, TISS/TUSS e portais",
    href: "/his",
    icon: Building2,
    color: "from-success to-green-400",
    gradient: "bg-success/5",
  },
  {
    title: "Inteligência Artificial",
    description: "8 funcionalidades de IA para produtividade",
    href: "/inteligencia-artificial",
    icon: Brain,
    color: "from-primary-light to-accent",
    gradient: "bg-primary-light/5",
  },
  {
    title: "Arquitetura",
    description: "Modelo híbrido local + nuvem",
    href: "/arquitetura",
    icon: Server,
    color: "from-accent to-success",
    gradient: "bg-accent/5",
  },
  {
    title: "Segurança",
    description: "RBAC, auditoria, HIPAA e LGPD",
    href: "/seguranca",
    icon: Shield,
    color: "from-error to-warning",
    gradient: "bg-error/5",
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
        <section className="py-24 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
                Plataforma Completa em Números
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Mais de 3.000 linhas de especificações funcionais consolidadas
                em uma documentação técnica abrangente
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
        <section className="py-24 bg-gradient-to-b from-surface/30 to-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Navegação Rápida
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
                Explore a Documentação
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Acesse rapidamente qualquer seção da documentação técnica da
                plataforma
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`group relative block p-8 bg-surface/90 backdrop-blur-xl rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-shadow hover:card-shadow-lg overflow-hidden`}
                  >
                    <div className={`absolute inset-0 ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <link.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">{link.description}</p>
                      <span className="inline-flex items-center text-sm text-primary font-semibold">
                        Ver documentação
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-24 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
                Documentação Adicional
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Mais recursos e informações sobre a plataforma
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                    className="flex flex-col items-center p-6 bg-surface/80 backdrop-blur rounded-xl border-2 border-border hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 group card-shadow hover:card-shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <section.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-sm font-semibold text-text-secondary group-hover:text-text text-center leading-tight">
                      {section.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Preview */}
        <section className="py-24 bg-gradient-to-b from-transparent to-surface/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
                Arquitetura Híbrida
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Modelo inovador que combina processamento local com
                armazenamento em nuvem para máxima disponibilidade e performance
              </p>
            </motion.div>

            <div className="bg-surface-elevated rounded-2xl border-2 border-border-light p-10 card-shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
                {[
                  { label: "Equipamento DICOM", icon: Monitor, color: "primary" },
                  { label: "Broker Local", icon: Server, color: "primary-light" },
                  { label: "Cache", icon: Shield, color: "accent" },
                  { label: "Sincronização", icon: Plug, color: "accent-light" },
                  { label: "Nuvem", icon: Server, color: "success" },
                  { label: "Viewer Web", icon: Monitor, color: "primary" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 backdrop-blur border border-primary/20">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-text-secondary">{item.label}</span>
                    {index < 5 && (
                      <div className="absolute -right-4 top-1/3 hidden md:block">
                        <ArrowRight className="w-6 h-6 text-primary/50" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/arquitetura"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5"
                >
                  Ver Arquitetura Completa
                  <ArrowRight className="w-5 h-5" />
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
