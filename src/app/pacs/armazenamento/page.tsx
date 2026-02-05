"use client";

import { HardDrive, Server, Cloud, Database, Shield, Zap } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FlowDiagram, DataTable, Badge, Alert } from "@/components/ui";
import { armazenamentoHibrido } from "@/lib/data";

const flowSteps = [
  { id: "1", title: "Equipamento DICOM", description: "Origem das imagens", icon: Server, color: "primary" as const },
  { id: "2", title: "Broker Local", description: "Cache e processamento", icon: HardDrive, color: "accent" as const },
  { id: "3", title: "Sincronização", description: "Upload background", icon: Zap, color: "warning" as const },
  { id: "4", title: "Nuvem", description: "Armazenamento definitivo", icon: Cloud, color: "success" as const },
];

export default function ArmazenamentoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Armazenamento Híbrido"
            description="Modelo inovador que combina processamento local com armazenamento em nuvem para máxima disponibilidade, performance e segurança."
            icon={HardDrive}
            badge="Arquitetura"
          />

          {/* Flow Diagram */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo de Dados
            </h2>
            <div className="bg-surface p-8 rounded-xl border border-border">
              <FlowDiagram steps={flowSteps} orientation="horizontal" />
            </div>
          </section>

          {/* Broker Local */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              {armazenamentoHibrido.brokerLocal.titulo}
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <p className="text-muted mb-6">{armazenamentoHibrido.brokerLocal.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-text mb-4">Características</h3>
                  <ul className="space-y-3">
                    {armazenamentoHibrido.brokerLocal.caracteristicas.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-4">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {armazenamentoHibrido.brokerLocal.tecnologias.map((tech, index) => (
                      <Badge key={index} variant="primary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <Alert variant="info" className="mt-6">
                    O broker local permite operação offline completa, sincronizando automaticamente quando a conexão é restabelecida.
                  </Alert>
                </div>
              </div>
            </div>
          </section>

          {/* Plataforma Nuvem */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              {armazenamentoHibrido.plataformaNuvem.titulo}
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <p className="text-muted mb-6">{armazenamentoHibrido.plataformaNuvem.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-text mb-4">Características</h3>
                  <ul className="space-y-3">
                    {armazenamentoHibrido.plataformaNuvem.caracteristicas.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-4">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {armazenamentoHibrido.plataformaNuvem.tecnologias.map((tech, index) => (
                      <Badge key={index} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Storage Tiers */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Tiers de Armazenamento
            </h2>
            <DataTable
              data={armazenamentoHibrido.storageTiers}
              columns={[
                { 
                  key: "nome", 
                  header: "Tier",
                  render: (row) => (
                    <Badge 
                      variant={row.nome === "Hot" ? "error" : row.nome === "Warm" ? "warning" : "success"}
                    >
                      {row.nome}
                    </Badge>
                  )
                },
                { key: "descricao", header: "Descrição" },
                { key: "periodo", header: "Período" },
              ]}
            />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-error/10 p-4 rounded-lg border border-error/30">
                <h4 className="font-semibold text-error mb-2">Hot Storage</h4>
                <p className="text-sm text-muted">
                  SSD local de alta performance para acesso instantâneo aos exames recentes.
                </p>
              </div>
              <div className="bg-warning/10 p-4 rounded-lg border border-warning/30">
                <h4 className="font-semibold text-warning mb-2">Warm Storage</h4>
                <p className="text-sm text-muted">
                  Armazenamento cloud padrão para exames com acesso moderado.
                </p>
              </div>
              <div className="bg-success/10 p-4 rounded-lg border border-success/30">
                <h4 className="font-semibold text-success mb-2">Cold Storage</h4>
                <p className="text-sm text-muted">
                  Object storage (S3 Glacier) para arquivo de longo prazo com custo otimizado.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
