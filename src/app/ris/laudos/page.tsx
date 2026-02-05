"use client";

import { FileText, Type, FileImage, Mic, PenTool } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Accordion, Badge, Alert } from "@/components/ui";
import { editorLaudos, camposEditaveisExame } from "@/lib/data";

export default function LaudosPage() {
  const accordionItems = [
    {
      id: "formatacao",
      title: "Formatação de Texto",
      content: (
        <div className="space-y-2">
          {editorLaudos.formatacao.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <Type className="w-4 h-4 text-primary" />
              <span className="text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "mascaras",
      title: "Sistema de Máscaras (Templates)",
      content: (
        <div className="space-y-2">
          {editorLaudos.mascaras.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <FileImage className="w-4 h-4 text-accent" />
              <span className="text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "audio",
      title: "Funcionalidades de Áudio",
      content: (
        <div className="space-y-2">
          {editorLaudos.audio.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <Mic className="w-4 h-4 text-success" />
              <span className="text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "assinatura",
      title: "Assinatura Digital",
      content: (
        <div className="space-y-2">
          {editorLaudos.assinatura.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <PenTool className="w-4 h-4 text-warning" />
              <span className="text-text-secondary">{item}</span>
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
            title="Editor de Laudos"
            description="Editor de texto rico completo com sistema de máscaras (templates), gravação de áudio com transcrição por IA e assinatura digital."
            icon={FileText}
            badge="Editor Rico"
          />

          {/* Features Overview */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <Type className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-sm text-muted">Formatação Rica</span>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <FileImage className="w-8 h-8 text-accent mx-auto mb-2" />
                <span className="text-sm text-muted">Máscaras/Templates</span>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <Mic className="w-8 h-8 text-success mx-auto mb-2" />
                <span className="text-sm text-muted">Áudio + IA</span>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border text-center">
                <PenTool className="w-8 h-8 text-warning mx-auto mb-2" />
                <span className="text-sm text-muted">Assinatura Digital</span>
              </div>
            </div>
          </section>

          {/* Editor Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades do Editor
            </h2>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* Classifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Classificações Suportadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-surface p-4 rounded-lg border border-border">
                <Badge variant="primary" className="mb-2">BI-RADS</Badge>
                <p className="text-xs text-muted">Mama (MG, US)</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <Badge variant="accent" className="mb-2">TI-RADS</Badge>
                <p className="text-xs text-muted">Tireoide (US)</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <Badge variant="success" className="mb-2">LI-RADS</Badge>
                <p className="text-xs text-muted">Fígado (CT, MR)</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <Badge variant="warning" className="mb-2">PI-RADS</Badge>
                <p className="text-xs text-muted">Próstata (MR)</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <Badge variant="error" className="mb-2">Lung-RADS</Badge>
                <p className="text-xs text-muted">Pulmão (CT)</p>
              </div>
            </div>
          </section>

          {/* Exam Edit Fields */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Campos Editáveis do Exame
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {camposEditaveisExame.map((campo, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-secondary">{campo}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Fluxo de Criação do Laudo
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <span className="text-text">Seleciona máscara</span>
                </div>
                <div className="hidden md:block text-muted">→</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
                  <span className="text-text">Edita/Dita laudo</span>
                </div>
                <div className="hidden md:block text-muted">→</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success font-bold">3</div>
                  <span className="text-text">IA transcreve (se áudio)</span>
                </div>
                <div className="hidden md:block text-muted">→</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center text-warning font-bold">4</div>
                  <span className="text-text">Assina digitalmente</span>
                </div>
              </div>
            </div>

            <Alert variant="success" className="mt-6">
              A integração com IA permite transcrever áudios automaticamente, aplicar correção ortográfica e sugerir achados baseados em exames anteriores.
            </Alert>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
