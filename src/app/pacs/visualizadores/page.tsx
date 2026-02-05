"use client";

import { Layers, Monitor, Globe, Smartphone, Download } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge, Accordion } from "@/components/ui";
import { visualizadoresExternos, acoesVisualizadores } from "@/lib/data";

export default function VisualizadoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Visualizadores Externos"
            description="A plataforma oferece integração com diversos visualizadores DICOM para atender diferentes necessidades e preferências dos radiologistas."
            icon={Layers}
            badge="Integração"
          />

          {/* Visualizers Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Visualizadores Disponíveis
            </h2>
            <DataTable
              data={visualizadoresExternos}
              columns={[
                { key: "nome", header: "Visualizador", sortable: true },
                { key: "plataforma", header: "Plataforma" },
                { 
                  key: "tipo", 
                  header: "Tipo",
                  render: (row) => (
                    <Badge variant={row.tipo === "Desktop" ? "primary" : row.tipo === "App" ? "accent" : "success"}>
                      {row.tipo}
                    </Badge>
                  )
                },
                { key: "uso", header: "Uso Principal" },
              ]}
            />
          </section>

          {/* Detailed Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Detalhes de Cada Visualizador
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Mobilemed Viewer</h3>
                    <Badge variant="success" size="sm">Nativo</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">
                  Visualizador web integrado ao sistema. Não requer instalação, funciona diretamente no navegador com todas as ferramentas de análise.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Acesso instantâneo via browser</li>
                  <li>• Todas as ferramentas de medição</li>
                  <li>• Comparação de séries</li>
                  <li>• MPR e Cine Loop</li>
                </ul>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Radiant</h3>
                    <Badge variant="primary" size="sm">Professional</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">
                  Visualizador desktop multi-plataforma com recursos avançados de reconstrução 3D e fusão de imagens.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Windows, Mac e Linux</li>
                  <li>• Reconstrução 3D VRT/MIP</li>
                  <li>• Fusão PET-CT</li>
                  <li>• Edição de ROI avançada</li>
                </ul>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Weasis</h3>
                    <Badge variant="success" size="sm">Open Source</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">
                  Visualizador web de código aberto, ideal para instituições que preferem soluções sem custo de licença.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Gratuito e open source</li>
                  <li>• Java Web Start</li>
                  <li>• Extensível via plugins</li>
                  <li>• Comunidade ativa</li>
                </ul>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Osirix/Horos</h3>
                    <Badge variant="warning" size="sm">macOS</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">
                  Padrão de mercado para usuários Mac, com recursos avançados de visualização 3D e processamento de imagens.
                </p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Exclusivo para macOS</li>
                  <li>• Interface otimizada</li>
                  <li>• 3D VRT nativo</li>
                  <li>• Plugins disponíveis</li>
                </ul>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-error/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-error" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">Mobile View</h3>
                    <Badge variant="error" size="sm">iOS/Android</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">
                  Aplicativo nativo para dispositivos móveis, permitindo acesso a exames de qualquer lugar com conexão à internet.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• iOS e Android</li>
                    <li>• Otimizado para touch</li>
                    <li>• Notificações push</li>
                  </ul>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Offline caching</li>
                    <li>• Biometria para login</li>
                    <li>• Compartilhamento fácil</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Actions */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Ações do Menu Contextual
            </h2>
            <div className="bg-surface rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <p className="text-sm text-muted">
                  Ao clicar com botão direito em um exame, o usuário pode abrir diretamente em qualquer visualizador:
                </p>
              </div>
              <div className="divide-y divide-border">
                {acoesVisualizadores.map((acao, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-surface-hover">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-primary" />
                      <span className="text-text">{acao.nome}</span>
                    </div>
                    <code className="text-xs text-accent bg-background px-2 py-1 rounded">
                      {acao.id}
                    </code>
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
