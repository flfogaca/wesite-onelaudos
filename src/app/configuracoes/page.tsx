"use client";

import { Settings } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, TabPanel, Badge } from "@/components/ui";
import { abasPreferencias, idiomasSuportados, examesPorPagina, periodosFiltro } from "@/lib/data";

export default function ConfiguracoesPage() {
  const tabs = abasPreferencias.map((aba) => ({
    id: aba.id,
    label: aba.titulo,
    icon: aba.icon,
    content: (
      <div>
        <p className="text-muted mb-4">{aba.descricao}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aba.campos.map((campo, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-text-secondary">{campo}</span>
            </div>
          ))}
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
            title="Configurações do Usuário"
            description="9 abas de preferências para personalizar completamente a experiência do usuário no sistema."
            icon={Settings}
            badge="9 Abas"
          />

          {/* Tabs Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Abas de Preferências
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <TabPanel tabs={tabs} variant="pills" />
            </div>
          </section>

          {/* Quick Settings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Configurações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Idiomas Suportados</h3>
                <div className="flex flex-wrap gap-2">
                  {idiomasSuportados.map((idioma, index) => (
                    <Badge key={index} variant="primary">{idioma.nome}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Exames por Página</h3>
                <div className="flex flex-wrap gap-2">
                  {examesPorPagina.map((num, index) => (
                    <Badge key={index} variant={num === 25 ? "accent" : "default"}>{num}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-4">Períodos de Filtro</h3>
                <div className="flex flex-wrap gap-2">
                  {periodosFiltro.slice(0, 4).map((periodo, index) => (
                    <Badge key={index} variant="success">{periodo.label}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* All Tabs Summary */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Resumo de Todas as Abas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {abasPreferencias.map((aba, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <aba.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-text">{aba.titulo}</h4>
                  </div>
                  <p className="text-sm text-muted">{aba.descricao}</p>
                  <p className="text-xs text-text-secondary mt-2">
                    {aba.campos.length} campos configuráveis
                  </p>
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
