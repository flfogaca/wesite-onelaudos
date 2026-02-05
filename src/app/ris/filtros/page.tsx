"use client";

import { Filter, Search } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge, Accordion } from "@/components/ui";
import { filtrosRapidos, filtrosAtributos, filtrosAvancados } from "@/lib/data";

export default function FiltrosPage() {
  const accordionItems = [
    {
      id: "atributos",
      title: "Filtros por Atributos",
      content: (
        <ul className="space-y-2">
          {filtrosAtributos.map((filtro, index) => (
            <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-text-secondary">{filtro}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "avancados",
      title: "Filtros Avançados (Modal)",
      content: (
        <ul className="space-y-2">
          {filtrosAvancados.map((filtro, index) => (
            <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-text-secondary">{filtro}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Sistema de Filtros"
            description="A worklist oferece mais de 10 filtros rápidos e diversos filtros avançados para encontrar exames específicos rapidamente."
            icon={Filter}
            badge="10+ Filtros"
          />

          {/* Quick Filters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              10 Filtros Rápidos de Status
            </h2>
            <DataTable
              data={filtrosRapidos}
              columns={[
                { 
                  key: "filtro", 
                  header: "Filtro",
                  render: (row) => (
                    <span className="font-medium text-text">{row.filtro}</span>
                  )
                },
                { key: "descricao", header: "Descrição" },
                { 
                  key: "cor", 
                  header: "Cor",
                  render: (row) => (
                    <Badge variant={row.cor as "default" | "primary" | "secondary" | "success" | "warning" | "error" | "accent"}>
                      {row.cor}
                    </Badge>
                  )
                },
              ]}
              searchable
              searchPlaceholder="Buscar filtro..."
            />
          </section>

          {/* Filter Categories Visual */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Categorias de Filtros
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {filtrosRapidos.map((filtro, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border text-center ${
                    filtro.cor === "error" ? "bg-error/10 border-error/30" :
                    filtro.cor === "warning" ? "bg-warning/10 border-warning/30" :
                    filtro.cor === "success" ? "bg-success/10 border-success/30" :
                    filtro.cor === "primary" ? "bg-primary/10 border-primary/30" :
                    filtro.cor === "accent" ? "bg-accent/10 border-accent/30" :
                    "bg-surface border-border"
                  }`}
                >
                  <span className={`font-medium ${
                    filtro.cor === "error" ? "text-error" :
                    filtro.cor === "warning" ? "text-warning" :
                    filtro.cor === "success" ? "text-success" :
                    filtro.cor === "primary" ? "text-primary" :
                    filtro.cor === "accent" ? "text-accent" :
                    "text-text"
                  }`}>
                    {filtro.filtro}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Filters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Filtros Adicionais
            </h2>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* Search Box */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Busca Textual
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Campo de Busca</h3>
                  <p className="text-sm text-muted">Pesquisa em tempo real por nome ou descrição</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium text-text mb-2">Por Nome do Paciente</h4>
                  <p className="text-sm text-muted">
                    Busca parcial no nome. Ex: &quot;Silva&quot; encontra &quot;José da Silva&quot;.
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium text-text mb-2">Por Descrição do Estudo</h4>
                  <p className="text-sm text-muted">
                    Busca na descrição do exame. Ex: &quot;tórax&quot; ou &quot;abdome&quot;.
                  </p>
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
