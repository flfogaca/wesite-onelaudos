"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, ArrowRight, Eye, Grid, Layers, HardDrive } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FeatureCard, DataTable } from "@/components/ui";
import { pacsFeatures, modalidades } from "@/lib/data";

const subpages = [
  {
    title: "Viewer DICOM",
    description: "Ferramentas de visualização, medição, anotação e navegação de imagens médicas.",
    href: "/pacs/viewer",
    icon: Eye,
  },
  {
    title: "14 Modalidades",
    description: "Suporte completo para MR, CT, CR, DX, US, MG, XA, e outras modalidades.",
    href: "/pacs/modalidades",
    icon: Grid,
  },
  {
    title: "Visualizadores Externos",
    description: "Integração com Radiant, Weasis, Osirix/Horos e Mobile View.",
    href: "/pacs/visualizadores",
    icon: Layers,
  },
  {
    title: "Armazenamento",
    description: "Modelo híbrido com cache local e armazenamento em nuvem.",
    href: "/pacs/armazenamento",
    icon: HardDrive,
  },
];

export default function PACSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="PACS"
            description="Picture Archiving and Communication System - Sistema de armazenamento e comunicação de imagens médicas com suporte a 14 modalidades e múltiplos visualizadores."
            icon={Monitor}
            badge="Core System"
          />

          {/* Core Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pacsFeatures.map((feature, index) => (
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
          <section className="mb-16">
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
                    className="group flex items-start gap-4 p-6 bg-surface rounded-xl border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <page.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors mb-1">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Quick Overview - Modalidades */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Modalidades Suportadas (Resumo)
            </h2>
            <DataTable
              data={modalidades.slice(0, 7)}
              columns={[
                { key: "codigo", header: "Código", sortable: true },
                { key: "nome", header: "Nome", sortable: true },
                { key: "descricao", header: "Descrição" },
              ]}
            />
            <div className="mt-4 text-center">
              <Link
                href="/pacs/modalidades"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Ver todas as 14 modalidades
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
