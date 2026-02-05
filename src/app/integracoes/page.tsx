"use client";

import { Plug } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, FeatureCard, DataTable, Badge, Accordion } from "@/components/ui";
import { integracoesDisponiveis, interfaceHL7, interfaceDICOM, apisDisponiveis, webhooks, integracaoFeatures } from "@/lib/data";

export default function IntegracoesPage() {
  const accordionItems = [
    {
      id: "hl7",
      title: interfaceHL7.titulo,
      content: (
        <div>
          <p className="text-muted mb-4">{interfaceHL7.descricao}</p>
          <h4 className="font-semibold text-text mb-2">Tipos de Mensagem</h4>
          <div className="space-y-2 mb-4">
            {interfaceHL7.mensagens.map((msg, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                <Badge variant="primary" size="sm">{msg.tipo}</Badge>
                <span className="text-text-secondary">{msg.descricao}</span>
              </div>
            ))}
          </div>
          <h4 className="font-semibold text-text mb-2">Configurações</h4>
          <ul className="space-y-1">
            {interfaceHL7.configuracoes.map((config, index) => (
              <li key={index} className="text-sm text-muted">• {config}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "dicom",
      title: interfaceDICOM.titulo,
      content: (
        <div>
          <p className="text-muted mb-4">{interfaceDICOM.descricao}</p>
          <h4 className="font-semibold text-text mb-2">Serviços DICOM</h4>
          <div className="space-y-2 mb-4">
            {interfaceDICOM.servicos.map((srv, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                <Badge variant="accent" size="sm">{srv.servico}</Badge>
                <span className="text-text-secondary">{srv.descricao}</span>
              </div>
            ))}
          </div>
          <h4 className="font-semibold text-text mb-2">Configurações</h4>
          <ul className="space-y-1">
            {interfaceDICOM.configuracoes.map((config, index) => (
              <li key={index} className="text-sm text-muted">• {config}</li>
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
            title="Integrações"
            description="Integração com sistemas externos via HL7, DICOM, APIs REST/GraphQL, webhooks e serviços de assinatura digital."
            icon={Plug}
            badge="Multi-protocolo"
          />

          {/* Integration Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Tipos de Integração
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integracaoFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.titulo}
                  description={feature.descricao}
                  icon={feature.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </section>

          {/* Integrations Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Integrações Disponíveis
            </h2>
            <DataTable
              data={integracoesDisponiveis}
              columns={[
                { key: "sistema", header: "Sistema" },
                { 
                  key: "protocolo", 
                  header: "Protocolo",
                  render: (row) => <Badge variant="primary">{row.protocolo}</Badge>
                },
                { key: "funcao", header: "Função" },
                { key: "descricao", header: "Descrição" },
              ]}
              searchable
              searchPlaceholder="Buscar integração..."
            />
          </section>

          {/* HL7 and DICOM Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Detalhes dos Protocolos
            </h2>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* APIs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              APIs Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {apisDisponiveis.map((api, index) => (
                <div key={index} className="bg-surface p-6 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-text">{api.api}</h3>
                    <Badge variant="accent">{api.versao}</Badge>
                  </div>
                  <p className="text-sm text-muted mb-4">Auth: {api.autenticacao}</p>
                  <ul className="space-y-1">
                    {api.endpoints.map((endpoint, i) => (
                      <li key={i} className="text-xs text-text-secondary">
                        <code className="bg-background px-1 rounded">{endpoint}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Webhooks */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Webhooks Disponíveis
            </h2>
            <DataTable
              data={webhooks}
              columns={[
                { 
                  key: "evento", 
                  header: "Evento",
                  render: (row) => <code className="text-accent">{row.evento}</code>
                },
                { key: "descricao", header: "Descrição" },
              ]}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
