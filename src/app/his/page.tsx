"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight, Users, FileCheck, Globe } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FeatureCard } from "@/components/ui";
import { hisFeatures } from "@/lib/data";

const subpages = [
  {
    title: "Usuários & RBAC",
    description: "8 perfis de usuário com controle de acesso granular.",
    href: "/his/usuarios",
    icon: Users,
  },
  {
    title: "TISS/TUSS",
    description: "Integração com padrões ANS para faturamento.",
    href: "/his/tiss-tuss",
    icon: FileCheck,
  },
  {
    title: "Portal Paciente/Médico",
    description: "Acesso a laudos, downloads e comunicação.",
    href: "/his/portal",
    icon: Globe,
  },
];

export default function HISPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Mini HIS"
            description="Hospital Information System - Sistema de informação hospitalar com gestão de usuários, integração TISS/TUSS e portais para pacientes e médicos solicitantes."
            icon={Building2}
            badge="Core System"
          />

          {/* Core Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hisFeatures.map((feature, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subpages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className="group flex flex-col items-center text-center p-6 bg-surface rounded-xl border border-border hover:border-success/50 transition-all h-full"
                  >
                    <div className="w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                      <page.icon className="w-7 h-7 text-success" />
                    </div>
                    <h3 className="text-lg font-semibold text-text group-hover:text-success transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-sm text-muted mb-4 flex-1">{page.description}</p>
                    <span className="inline-flex items-center text-sm text-success font-medium">
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
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
