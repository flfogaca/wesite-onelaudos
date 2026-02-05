"use client";

import { GitBranch } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Timeline, FlowDiagram, DataTable, Badge } from "@/components/ui";
import { fluxoRadiologista, fluxoAdministrativo, fluxoCicloVidaExame, fluxoFaturamento, slaPrioridades } from "@/lib/data";

export default function FluxosTrabalhoPage() {
  const radiologistaSteps = fluxoRadiologista.map((step) => ({
    id: step.id,
    title: step.titulo,
    description: step.descricao,
    icon: step.icon,
    status: "completed" as const,
    items: step.detalhes,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Fluxos de Trabalho"
            description="Jornadas detalhadas do radiologista e do administrativo, ciclo de vida do exame e fluxo de faturamento."
            icon={GitBranch}
            badge="Workflows"
          />

          {/* Radiologist Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo do Radiologista (10 etapas)
            </h2>
            <Timeline items={radiologistaSteps} />
          </section>

          {/* Administrative Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo Administrativo
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {fluxoAdministrativo.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-2">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-medium text-text text-sm">{step.titulo}</h4>
                    <p className="text-xs text-muted mt-1">{step.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Exam Lifecycle */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Ciclo de Vida do Exame
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {fluxoCicloVidaExame.map((etapa, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
                      <span className="font-medium text-primary text-sm">{etapa.etapa}</span>
                      <p className="text-xs text-muted">{etapa.descricao}</p>
                    </div>
                    {index < fluxoCicloVidaExame.length - 1 && (
                      <span className="text-muted hidden md:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Billing Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo de Faturamento
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {fluxoFaturamento.map((etapa, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div className="px-4 py-2 bg-success/10 rounded-lg border border-success/30">
                      <span className="font-medium text-success text-sm">{etapa.etapa}</span>
                      <p className="text-xs text-muted">{etapa.descricao}</p>
                    </div>
                    {index < fluxoFaturamento.length - 1 && (
                      <span className="text-muted hidden md:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SLA by Priority */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              SLAs por Prioridade
            </h2>
            <DataTable
              data={slaPrioridades}
              columns={[
                { 
                  key: "prioridade", 
                  header: "Prioridade",
                  render: (row) => (
                    <Badge variant={row.cor as "default" | "primary" | "secondary" | "success" | "warning" | "error" | "accent"}>
                      {row.prioridade}
                    </Badge>
                  )
                },
                { key: "prazo", header: "Prazo SLA" },
                { key: "descricao", header: "Descrição" },
              ]}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
