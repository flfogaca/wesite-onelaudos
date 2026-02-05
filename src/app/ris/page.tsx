"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight, ClipboardList, Filter, MousePointer, User, Mic } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FeatureCard } from "@/components/ui";
import { risFeatures } from "@/lib/data";

const subpages = [
  {
    title: "Worklist",
    description: "Lista de exames com 14 colunas de informação, ordenação e paginação.",
    href: "/ris/worklist",
    icon: ClipboardList,
  },
  {
    title: "10+ Filtros",
    description: "Filtros rápidos por status, prioridade, SLA, unidade e mais.",
    href: "/ris/filtros",
    icon: Filter,
  },
  {
    title: "Ações por Exame",
    description: "Menu contextual com 7 grupos de ações disponíveis.",
    href: "/ris/acoes-exame",
    icon: MousePointer,
  },
  {
    title: "Modal do Paciente",
    description: "Dados demográficos, histórico e Accession Number.",
    href: "/ris/modal-paciente",
    icon: User,
  },
  {
    title: "Editor de Laudos",
    description: "Editor rico com máscaras, BI-RADS e assinatura digital.",
    href: "/ris/laudos",
    icon: FileText,
  },
];

export default function RISPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="RIS"
            description="Radiology Information System - Sistema de informação de radiologia com worklist inteligente, filtros avançados e editor de laudos completo."
            icon={FileText}
            badge="Core System"
          />

          {/* Core Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {risFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.titulo}
                  description={feature.descricao}
                  icon={feature.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </section>

          {/* Subpages Navigation */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Documentação Detalhada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subpages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className="group flex items-start gap-4 p-6 bg-surface rounded-xl border border-border hover:border-accent/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <page.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors mb-1">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
