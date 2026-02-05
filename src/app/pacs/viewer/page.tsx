"use client";

import { Eye, ZoomIn, Ruler, MessageSquare, Navigation } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Accordion, Badge } from "@/components/ui";
import { viewerTools } from "@/lib/data";

export default function ViewerPage() {
  const accordionItems = [
    {
      id: "visualizacao",
      title: "Ferramentas de Visualização",
      content: (
        <div className="space-y-3">
          {viewerTools.visualizacao.map((tool, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
              <ZoomIn className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <span className="font-medium text-text">{tool.nome}</span>
                <p className="text-sm text-muted">{tool.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "medicao",
      title: "Ferramentas de Medição",
      content: (
        <div className="space-y-3">
          {viewerTools.medicao.map((tool, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
              <Ruler className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <span className="font-medium text-text">{tool.nome}</span>
                <p className="text-sm text-muted">{tool.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "anotacao",
      title: "Ferramentas de Anotação",
      content: (
        <div className="space-y-3">
          {viewerTools.anotacao.map((tool, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
              <MessageSquare className="w-5 h-5 text-success mt-0.5" />
              <div>
                <span className="font-medium text-text">{tool.nome}</span>
                <p className="text-sm text-muted">{tool.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "navegacao",
      title: "Navegação",
      content: (
        <div className="space-y-3">
          {viewerTools.navegacao.map((tool, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
              <Navigation className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <span className="font-medium text-text">{tool.nome}</span>
                <p className="text-sm text-muted">{tool.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Viewer DICOM"
            description="Visualizador web completo com ferramentas de análise, medição, anotação e navegação de imagens médicas."
            icon={Eye}
            badge="Ferramentas"
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-surface p-4 rounded-lg border border-border text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted">Visualização</div>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-border text-center">
              <div className="text-2xl font-bold text-accent">4</div>
              <div className="text-sm text-muted">Medição</div>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-border text-center">
              <div className="text-2xl font-bold text-success">4</div>
              <div className="text-sm text-muted">Anotação</div>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-border text-center">
              <div className="text-2xl font-bold text-warning">4</div>
              <div className="text-sm text-muted">Navegação</div>
            </div>
          </div>

          {/* Tools Accordion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Todas as Ferramentas
            </h2>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Recursos Avançados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">MPR (Multiplanar Reconstruction)</h3>
                <p className="text-muted mb-4">
                  Reconstrução multiplanar que permite visualizar imagens de TC e RM em planos axial, sagital e coronal a partir de um único dataset.
                </p>
                <Badge variant="primary">Avançado</Badge>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Cine Loop</h3>
                <p className="text-muted mb-4">
                  Reprodução de imagens em movimento, ideal para estudos cardíacos, fluoroscopia e avaliação de séries dinâmicas.
                </p>
                <Badge variant="accent">Dinâmico</Badge>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Comparação de Séries</h3>
                <p className="text-muted mb-4">
                  Visualize múltiplas séries lado a lado para comparar exames anteriores ou diferentes fases de contraste.
                </p>
                <Badge variant="success">Comparativo</Badge>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Window/Level Presets</h3>
                <p className="text-muted mb-4">
                  Presets pré-configurados para diferentes tecidos: pulmão, osso, tecido mole, cérebro, fígado, etc.
                </p>
                <Badge variant="warning">Otimização</Badge>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
