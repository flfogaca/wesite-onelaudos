"use client";

import { Shield, Lock, FileSearch, Key } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FeatureCard, Accordion, DataTable, Badge, Alert } from "@/components/ui";
import { controleAcesso, logsAuditoria, conformidadeRegulatoria, segurancaDados, assinaturaDigital, segurancaFeatures } from "@/lib/data";

export default function SegurancaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Segurança e Auditoria"
            description="Controle de acesso RBAC, logs de auditoria completos, conformidade HIPAA/LGPD e assinatura digital com certificado ICP-Brasil."
            icon={Shield}
            badge="Compliance"
          />

          {/* Security Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades de Segurança
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segurancaFeatures.map((feature, index) => (
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

          {/* Access Control */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              {controleAcesso.titulo}
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {controleAcesso.funcionalidades.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Audit Logs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              {logsAuditoria.titulo}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Funcionalidades</h3>
                <ul className="space-y-2">
                  {logsAuditoria.funcionalidades.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                      <FileSearch className="w-4 h-4 text-accent" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Tipos de Log</h3>
                <div className="space-y-3">
                  {logsAuditoria.tiposLog.map((log, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg">
                      <span className="font-medium text-text">{log.tipo}</span>
                      <p className="text-sm text-muted">{log.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Regulatory Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Conformidade Regulatória
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {conformidadeRegulatoria.map((reg, index) => (
                <div key={index} className="bg-surface p-6 rounded-xl border border-border">
                  <Badge variant="primary" className="mb-3">{reg.regulamento}</Badge>
                  <h3 className="font-semibold text-text mb-2">{reg.descricao}</h3>
                  <p className="text-sm text-muted mb-4">Região: {reg.regiao}</p>
                  <ul className="space-y-1">
                    {reg.requisitos.map((req, i) => (
                      <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-1.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Digital Signature */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              {assinaturaDigital.titulo}
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-text mb-4">Funcionalidades</h3>
                  <ul className="space-y-2">
                    {assinaturaDigital.funcionalidades.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                        <Key className="w-4 h-4 text-warning" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-4">Fluxo de Assinatura</h3>
                  <div className="space-y-2">
                    {assinaturaDigital.fluxo.map((step, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          {index + 1}
                        </div>
                        <span className="text-text-secondary">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
