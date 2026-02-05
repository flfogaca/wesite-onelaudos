"use client";

import { FileCheck, AlertTriangle } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Alert, Accordion } from "@/components/ui";
import { tissInfo, tussInfo, integracaoTissTuss, problemaMultiplosPacs } from "@/lib/data";

export default function TissTussPage() {
  const accordionItems = [
    {
      id: "tiss",
      title: tissInfo.titulo,
      content: (
        <div>
          <p className="text-muted mb-4">{tissInfo.descricao}</p>
          <ul className="space-y-2">
            {tissInfo.caracteristicas.map((item, index) => (
              <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "tuss",
      title: tussInfo.titulo,
      content: (
        <div>
          <p className="text-muted mb-4">{tussInfo.descricao}</p>
          <ul className="space-y-2">
            {tussInfo.caracteristicas.map((item, index) => (
              <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
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
            title="TISS/TUSS"
            description="Integração com os padrões obrigatórios da ANS para troca de informações na saúde suplementar e faturamento de procedimentos."
            icon={FileCheck}
            badge="ANS"
          />

          {/* TISS/TUSS Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              O que são TISS e TUSS?
            </h2>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* Integration Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades de Integração
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integracaoTissTuss.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Multiple PACS Problem */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              {problemaMultiplosPacs.titulo}
            </h2>
            <Alert variant="warning" className="mb-6">
              <strong>Contexto:</strong> {problemaMultiplosPacs.contexto}
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-error/10 p-6 rounded-xl border border-error/30">
                <h3 className="font-semibold text-error mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Problemas Identificados
                </h3>
                <ul className="space-y-2">
                  {problemaMultiplosPacs.problemas.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-error mt-2" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-success/10 p-6 rounded-xl border border-success/30">
                <h3 className="font-semibold text-success mb-4">Soluções Propostas</h3>
                <ul className="space-y-2">
                  {problemaMultiplosPacs.solucoes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-2" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
