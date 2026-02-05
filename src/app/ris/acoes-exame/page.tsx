"use client";

import { MousePointer, Monitor, Mic, QrCode, MessageSquare, Paperclip, MoreHorizontal } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Badge, Accordion } from "@/components/ui";
import { botoesAcaoRapida, menuContextual } from "@/lib/data";

export default function AcoesExamePage() {
  const menuItems = Object.entries(menuContextual).map(([key, grupo]) => ({
    id: key,
    title: `${grupo.titulo}`,
    content: (
      <div className="space-y-2">
        {grupo.acoes.map((acao, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
            <acao.icon className="w-5 h-5 text-primary" />
            <span className="text-text">{acao.nome}</span>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Ações por Exame"
            description="Cada exame na worklist possui botões de ação rápida e um menu contextual completo com 7 grupos de funcionalidades."
            icon={MousePointer}
            badge="7 Grupos"
          />

          {/* Quick Action Buttons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              6 Botões de Ação Rápida
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {botoesAcaoRapida.map((botao, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <botao.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{botao.botao}</h3>
                      <p className="text-xs text-muted">{botao.funcao}</p>
                    </div>
                  </div>
                  <code className="text-xs text-accent bg-background px-2 py-1 rounded block">
                    {botao.index}
                  </code>
                </div>
              ))}
            </div>
          </section>

          {/* Context Menu */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Menu Contextual (7 Grupos)
            </h2>
            <p className="text-muted mb-6">
              Ao clicar no botão de opções ou clicar com botão direito em um exame, um menu com 7 grupos de ações é exibido:
            </p>
            <Accordion items={menuItems} allowMultiple />
          </section>

          {/* Group Details */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Detalhamento dos Grupos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="primary" className="mb-3">Grupo 1</Badge>
                <h3 className="font-semibold text-text mb-2">Gerenciamento de Código</h3>
                <p className="text-sm text-muted">
                  Copiar o código do paciente para área de transferência ou duplicar o exame para criar um novo registro.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="accent" className="mb-3">Grupo 2</Badge>
                <h3 className="font-semibold text-text mb-2">Visualização Multi-plataforma</h3>
                <p className="text-sm text-muted">
                  Abrir imagens em diferentes visualizadores: Mobile View, Radiant, Weasis ou Osirix/Horos.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="success" className="mb-3">Grupo 3</Badge>
                <h3 className="font-semibold text-text mb-2">Compartilhamento</h3>
                <p className="text-sm text-muted">
                  Enviar exame para outro profissional, paciente ou sistema externo via link ou email.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="warning" className="mb-3">Grupo 4</Badge>
                <h3 className="font-semibold text-text mb-2">Marcação</h3>
                <p className="text-sm text-muted">
                  Marcar exame como interessante para referência futura ou caso de ensino.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="error" className="mb-3">Grupo 5</Badge>
                <h3 className="font-semibold text-text mb-2">Histórico</h3>
                <p className="text-sm text-muted">
                  Acessar rapidamente exames anteriores do mesmo paciente para comparação.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <Badge variant="primary" className="mb-3">Grupo 6</Badge>
                <h3 className="font-semibold text-text mb-2">Auditoria</h3>
                <p className="text-sm text-muted">
                  Visualizar histórico de movimentações entre unidades e logs detalhados de todas as ações.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border md:col-span-2">
                <Badge variant="accent" className="mb-3">Grupo 7</Badge>
                <h3 className="font-semibold text-text mb-2">Edição</h3>
                <p className="text-sm text-muted">
                  Editar dados do exame (modalidade, descrição, prioridade) ou cancelar o exame se necessário.
                  Ações de edição são registradas no log de auditoria.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
