"use client";

import { Shield, AlertTriangle } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Accordion, DataTable, Badge, Alert } from "@/components/ui";
import { funcionalidadesAdmin, metricasMonitoramento, configuracoesAETitle, regrasRoteamento, ferramentasDiagnostico } from "@/lib/data";

export default function AdministracaoPage() {
  const accordionItems = funcionalidadesAdmin.map((func) => ({
    id: func.categoria,
    title: func.categoria,
    content: (
      <div>
        <p className="text-muted mb-4">{func.descricao}</p>
        <ul className="space-y-2">
          {func.funcionalidades.map((item, index) => (
            <li key={index} className="flex items-center gap-3 p-2 bg-background rounded">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Administração"
            description="Funcionalidades administrativas avançadas disponíveis para perfis Root e Admin. O 'lado oculto' do PACS."
            icon={Shield}
            badge="Root/Admin"
          />

          <Alert variant="warning" className="mb-8">
            <strong>Acesso Restrito:</strong> As funcionalidades desta seção são exclusivas para usuários com perfil Root ou Admin.
            Todas as ações são registradas no log de auditoria.
          </Alert>

          {/* Admin Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades Administrativas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {funcionalidadesAdmin.map((func, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <func.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-text">{func.categoria}</h3>
                  </div>
                  <p className="text-sm text-muted">{func.descricao}</p>
                </div>
              ))}
            </div>
            <Accordion items={accordionItems} allowMultiple />
          </section>

          {/* Monitoring Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Métricas de Monitoramento
            </h2>
            <DataTable
              data={metricasMonitoramento}
              columns={[
                { key: "metrica", header: "Métrica" },
                { key: "descricao", header: "Descrição" },
                { 
                  key: "alertaWarning", 
                  header: "Warning",
                  render: (row) => <Badge variant="warning">{row.alertaWarning}</Badge>
                },
                { 
                  key: "alertaCritical", 
                  header: "Critical",
                  render: (row) => <Badge variant="error">{row.alertaCritical}</Badge>
                },
              ]}
            />
          </section>

          {/* Routing Rules */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Regras de Roteamento DICOM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regrasRoteamento.map((regra, index) => (
                <div key={index} className="bg-surface p-4 rounded-xl border border-border">
                  <h3 className="font-semibold text-text mb-2">{regra.regra}</h3>
                  <p className="text-sm text-muted mb-2">{regra.descricao}</p>
                  <code className="text-xs text-accent bg-background px-2 py-1 rounded">
                    {regra.exemplo}
                  </code>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnostic Tools */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Ferramentas de Diagnóstico
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ferramentasDiagnostico.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-text-secondary">{tool}</span>
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
