"use client";

import { ClipboardList } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge, Alert } from "@/components/ui";
import { worklistColunas } from "@/lib/data";

export default function WorklistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Worklist de Exames"
            description="A worklist é a interface principal do radiologista, exibindo todos os exames pendentes de laudo com informações detalhadas e ações rápidas."
            icon={ClipboardList}
            badge="Interface Principal"
          />

          {/* Table Structure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Estrutura da Linha de Exame
            </h2>
            <DataTable
              data={worklistColunas}
              columns={[
                { key: "coluna", header: "Coluna", sortable: true },
                { key: "informacao", header: "Informação Exibida" },
                { key: "acao", header: "Ação ao Clicar" },
              ]}
              searchable
              searchPlaceholder="Buscar coluna..."
            />
          </section>

          {/* Sorting Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades de Ordenação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-text mb-2">Mais Antigos Primeiro</h3>
                <p className="text-sm text-muted">Exames com maior tempo de espera no topo da lista.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-text mb-2">Mais Recentes Primeiro</h3>
                <p className="text-sm text-muted">Exames recém-chegados no topo da lista.</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-text mb-2">Por SLA (Prazo)</h3>
                <p className="text-sm text-muted">Ordenação por prazo de entrega, urgentes primeiro.</p>
              </div>
            </div>
          </section>

          {/* Pagination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Paginação
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-text-secondary">Registros por página:</span>
                {[10, 25, 50, 100].map((num) => (
                  <Badge key={num} variant={num === 25 ? "primary" : "default"}>
                    {num}
                  </Badge>
                ))}
              </div>
              <ul className="text-sm text-muted space-y-2">
                <li>• Navegação anterior/próxima com botões</li>
                <li>• Indicador de página atual e total</li>
                <li>• Contagem total de exames na worklist</li>
              </ul>
            </div>
          </section>

          {/* Key Columns Detail */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Colunas Importantes em Detalhe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-3">Nome do Paciente</h3>
                <p className="text-sm text-muted mb-4">
                  Clicável - abre modal com dados demográficos completos, histórico de exames e Accession Number.
                </p>
                <Badge variant="accent">Interativo</Badge>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-3">Prioridade</h3>
                <p className="text-sm text-muted mb-4">
                  Badge colorido indicando urgência. Clicável para alterar a prioridade do exame.
                </p>
                <div className="flex gap-2">
                  <Badge variant="error">Emergência</Badge>
                  <Badge variant="warning">Urgência</Badge>
                  <Badge variant="success">Rotina</Badge>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-3">Tempo Decorrido</h3>
                <p className="text-sm text-muted mb-4">
                  Exibe o tempo desde o recebimento do exame em formato amigável (ex: &quot;há 18 min&quot;, &quot;há 2h&quot;).
                </p>
                <Badge variant="primary">Automático</Badge>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-text mb-3">Ações (6 botões)</h3>
                <p className="text-sm text-muted mb-4">
                  Viewer DICOM, Áudio, QR Code, Comentários, Anexos e Menu de Opções.
                </p>
                <Badge variant="success">Ações Rápidas</Badge>
              </div>
            </div>

            <Alert variant="info" className="mt-6">
              A worklist é atualizada automaticamente em tempo real. Novos exames aparecem sem necessidade de refresh.
            </Alert>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
