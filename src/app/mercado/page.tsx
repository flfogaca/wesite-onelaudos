"use client";

import { TrendingUp, Globe, Building2, Target } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge, StatCounter } from "@/components/ui";
import { tamanhoMercado, concorrentes, tendencias, analiseSWOT, mercadoBrasil, diferenciaisCompetitivos } from "@/lib/data";

export default function MercadoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Análise de Mercado"
            description="Tamanho do mercado global de PACS, principais concorrentes, tendências 2026 e análise SWOT da plataforma."
            icon={TrendingUp}
            badge="Estratégico"
          />

          {/* Market Size Stats */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Tamanho do Mercado Global
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">{tamanhoMercado.global2026}</div>
                <div className="text-sm text-muted">Mercado Global 2026</div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-accent mb-2">{tamanhoMercado.projecao2035}</div>
                <div className="text-sm text-muted">Projeção 2035</div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-success mb-2">{tamanhoMercado.cagr}</div>
                <div className="text-sm text-muted">CAGR</div>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="text-3xl font-bold text-warning mb-2">{tamanhoMercado.specialtyPacs.cagr}</div>
                <div className="text-sm text-muted">CAGR Specialty PACS</div>
              </div>
            </div>
          </section>

          {/* Competitors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Principais Concorrentes
            </h2>
            <DataTable
              data={concorrentes}
              columns={[
                { key: "empresa", header: "Empresa", sortable: true },
                { key: "participacao", header: "Participação" },
                { key: "posicao", header: "Posição" },
                { 
                  key: "tipo", 
                  header: "Tipo",
                  render: (row) => (
                    <Badge variant={row.tipo === "Global" ? "primary" : "accent"}>
                      {row.tipo}
                    </Badge>
                  )
                },
              ]}
              searchable
              searchPlaceholder="Buscar empresa..."
            />
          </section>

          {/* Trends */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Tendências 2026
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tendencias.map((tendencia, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-text">{tendencia.tendencia}</h3>
                    <Badge 
                      variant={tendencia.impacto === "Alto" ? "error" : "warning"}
                      size="sm"
                    >
                      {tendencia.impacto}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted">{tendencia.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SWOT Analysis */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Análise SWOT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-success/10 p-6 rounded-xl border border-success/30">
                <h3 className="font-semibold text-success mb-4">Forças</h3>
                <ul className="space-y-2">
                  {analiseSWOT.forcas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-success mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-warning/10 p-6 rounded-xl border border-warning/30">
                <h3 className="font-semibold text-warning mb-4">Fraquezas</h3>
                <ul className="space-y-2">
                  {analiseSWOT.fraquezas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-warning mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
                <h3 className="font-semibold text-primary mb-4">Oportunidades</h3>
                <ul className="space-y-2">
                  {analiseSWOT.oportunidades.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-error/10 p-6 rounded-xl border border-error/30">
                <h3 className="font-semibold text-error mb-4">Ameaças</h3>
                <ul className="space-y-2">
                  {analiseSWOT.ameacas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-error mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Brazil Market */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Mercado Brasileiro
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(mercadoBrasil).map(([key, value], index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border text-center">
                  <div className="text-xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-muted capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitive Advantages */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Diferenciais Competitivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {diferenciaisCompetitivos.map((dif, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <h3 className="font-semibold text-text mb-1">{dif.diferencial}</h3>
                  <p className="text-sm text-muted mb-2">{dif.descricao}</p>
                  <Badge variant="accent">{dif.valor}</Badge>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
