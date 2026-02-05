"use client";

import { Brain } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Badge, DataTable, Accordion } from "@/components/ui";
import { funcionalidadesIA, configuracoesIA, modelosIA, beneficiosIA } from "@/lib/data";

export default function IAPage() {
  const accordionItems = funcionalidadesIA.map((func) => ({
    id: func.id,
    title: func.nome,
    content: (
      <div>
        <p className="text-muted mb-4">{func.detalhes}</p>
        <div className="flex items-center gap-2">
          <Badge variant={func.configuravel ? "success" : "default"}>
            {func.configuravel ? "Configurável" : "Fixo"}
          </Badge>
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Inteligência Artificial"
            description="8 funcionalidades de IA integradas para aumentar a produtividade e qualidade dos laudos radiológicos."
            icon={Brain}
            badge="8 Funcionalidades"
          />

          {/* Benefits */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {beneficiosIA.map((beneficio, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg border border-border text-center">
                  <h3 className="font-semibold text-primary mb-1">{beneficio.titulo}</h3>
                  <p className="text-sm text-muted">{beneficio.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              8 Funcionalidades de IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {funcionalidadesIA.map((func, index) => (
                <div key={index} className="bg-surface p-6 rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <func.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">{func.nome}</h3>
                      <p className="text-sm text-muted mb-2">{func.descricao}</p>
                      <Badge variant={func.configuravel ? "success" : "default"} size="sm">
                        {func.configuravel ? "Configurável" : "Fixo"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* AI Models */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Modelos de IA Disponíveis
            </h2>
            <DataTable
              data={modelosIA}
              columns={[
                { key: "nome", header: "Modelo" },
                { key: "provider", header: "Provider" },
                { key: "uso", header: "Uso Principal" },
              ]}
            />
          </section>

          {/* Configuration Options */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Opções de Configuração
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {configuracoesIA.map((config, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-secondary">{config}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
