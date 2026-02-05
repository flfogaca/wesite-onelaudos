"use client";

import { Server, HardDrive, Cloud, Zap } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FlowDiagram, DataTable, Badge, Alert } from "@/components/ui";
import { componentesArquitetura, fluxoDados, caracteristicasHibrido, storageTiers, segurancaArquitetura, requisitosRede } from "@/lib/data";

export default function ArquiteturaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Arquitetura do Sistema"
            description="Modelo híbrido inovador que combina processamento local com armazenamento em nuvem para máxima disponibilidade e performance."
            icon={Server}
            badge="Híbrido"
          />

          {/* Flow Diagram */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo de Dados
            </h2>
            <div className="bg-surface p-8 rounded-xl border border-border">
              <FlowDiagram steps={fluxoDados} orientation="horizontal" />
            </div>
          </section>

          {/* Components Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Componentes da Arquitetura
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {componentesArquitetura.map((comp, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <comp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text">{comp.componente}</h3>
                  </div>
                  <p className="text-sm text-muted mb-3">{comp.descricao}</p>
                  <div className="flex flex-wrap gap-1">
                    {comp.tecnologias.map((tech, i) => (
                      <Badge key={i} variant="default" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hybrid Model */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Modelo Híbrido: Local + Nuvem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold text-text">{caracteristicasHibrido.brokerLocal.titulo}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {caracteristicasHibrido.brokerLocal.vantagens.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1">
                  {caracteristicasHibrido.brokerLocal.tecnologias.map((tech, i) => (
                    <Badge key={i} variant="primary" size="sm">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-semibold text-text">{caracteristicasHibrido.plataformaNuvem.titulo}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {caracteristicasHibrido.plataformaNuvem.vantagens.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1">
                  {caracteristicasHibrido.plataformaNuvem.tecnologias.map((tech, i) => (
                    <Badge key={i} variant="accent" size="sm">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Storage Tiers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Tiers de Armazenamento
            </h2>
            <DataTable
              data={storageTiers}
              columns={[
                { 
                  key: "tier", 
                  header: "Tier",
                  render: (row) => (
                    <Badge variant={row.tier === "Hot" ? "error" : row.tier === "Warm" ? "warning" : "success"}>
                      {row.tier}
                    </Badge>
                  )
                },
                { key: "descricao", header: "Descrição" },
                { key: "tecnologia", header: "Tecnologia" },
                { key: "periodo", header: "Período" },
                { key: "performance", header: "Performance" },
                { key: "custo", header: "Custo" },
              ]}
            />
          </section>

          {/* Security & Network */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Segurança e Rede
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Segurança da Arquitetura</h3>
                <ul className="space-y-2">
                  {segurancaArquitetura.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Requisitos de Rede</h3>
                <div className="space-y-3">
                  {requisitosRede.map((req, index) => (
                    <div key={index} className="p-3 bg-background rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-text">{req.componente}</span>
                        <Badge variant="primary" size="sm">{req.protocolo}</Badge>
                      </div>
                      <div className="text-xs text-muted">
                        Porta: {req.porta} | {req.requisito}
                      </div>
                    </div>
                  ))}
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
