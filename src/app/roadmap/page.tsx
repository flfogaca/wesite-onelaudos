"use client";

import { Map, Rocket, TrendingUp, Crown } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Timeline, DataTable, Badge } from "@/components/ui";
import { fasesRoadmap, marcosPrincipais, metricasSucesso, proximosReleases, investimentosPorArea } from "@/lib/data";

export default function RoadmapPage() {
  const timelineItems = fasesRoadmap.map((fase) => ({
    id: fase.id,
    title: `${fase.fase} - ${fase.titulo}`,
    description: fase.descricao,
    icon: fase.icon,
    status: fase.status,
    date: fase.duracao,
    items: fase.entregas,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Roadmap"
            description="Planejamento de desenvolvimento em 3 fases: MVP, Expansão e Plataforma Completa, totalizando 18 meses de evolução."
            icon={Map}
            badge="3 Fases"
          />

          {/* Phases Overview */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fasesRoadmap.map((fase, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border ${
                    fase.status === "completed" ? "bg-success/10 border-success/30" :
                    fase.status === "current" ? "bg-primary/10 border-primary/30" :
                    "bg-surface border-border"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <fase.icon className={`w-8 h-8 ${
                      fase.status === "completed" ? "text-success" :
                      fase.status === "current" ? "text-primary" :
                      "text-muted"
                    }`} />
                    <div>
                      <h3 className="font-semibold text-text">{fase.fase}</h3>
                      <p className="text-sm text-muted">{fase.duracao}</p>
                    </div>
                  </div>
                  <h4 className="font-medium text-text mb-2">{fase.titulo}</h4>
                  <p className="text-sm text-muted mb-4">{fase.descricao}</p>
                  <Badge 
                    variant={fase.status === "completed" ? "success" : fase.status === "current" ? "primary" : "default"}
                  >
                    {fase.status === "completed" ? "Concluído" : fase.status === "current" ? "Em Andamento" : "Planejado"}
                  </Badge>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Timeline Detalhado
            </h2>
            <Timeline items={timelineItems} />
          </section>

          {/* Milestones */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Marcos Principais
            </h2>
            <DataTable
              data={marcosPrincipais}
              columns={[
                { key: "marco", header: "Marco" },
                { key: "data", header: "Data" },
                { 
                  key: "status", 
                  header: "Status",
                  render: (row) => (
                    <Badge 
                      variant={row.status === "completed" ? "success" : row.status === "current" ? "primary" : "default"}
                    >
                      {row.status === "completed" ? "Concluído" : row.status === "current" ? "Em Andamento" : "Planejado"}
                    </Badge>
                  )
                },
              ]}
            />
          </section>

          {/* Success Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Métricas de Sucesso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {metricasSucesso.map((metrica, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <h4 className="font-medium text-text mb-2">{metrica.metrica}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{metrica.meta}</span>
                    <span className="text-sm text-muted">Meta</span>
                  </div>
                  <div className="text-sm text-muted">
                    Atual: <span className="text-accent">{metrica.atual}</span>
                  </div>
                  <div className="text-xs text-muted mt-1">Prazo: {metrica.prazo}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Releases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Próximos Releases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proximosReleases.map((release, index) => (
                <div key={index} className="bg-surface p-6 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="primary">{release.versao}</Badge>
                    <span className="text-sm text-muted">{release.data}</span>
                  </div>
                  <h3 className="font-semibold text-text mb-3">{release.nome}</h3>
                  <ul className="space-y-2">
                    {release.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Distribution */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Distribuição de Investimentos
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="space-y-4">
                {investimentosPorArea.map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-text">{area.area}</span>
                      <span className="text-primary font-medium">{area.percentual}%</span>
                    </div>
                    <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${area.percentual}%` }}
                      />
                    </div>
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
