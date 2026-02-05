"use client";

import { User, FileText, Phone, MapPin, Stethoscope, History } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, TabPanel, Badge, Alert } from "@/components/ui";
import { modalPacienteCampos } from "@/lib/data";

export default function ModalPacientePage() {
  const tabs = [
    {
      id: "pessoais",
      label: "Dados Pessoais",
      icon: User,
      content: (
        <div className="space-y-3">
          {modalPacienteCampos.dadosPessoais.map((campo, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-text-secondary">{campo}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "contato",
      label: "Contato",
      icon: Phone,
      content: (
        <div className="space-y-3">
          {modalPacienteCampos.dadosContato.map((campo, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-text-secondary">{campo}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "clinicos",
      label: "Dados Clínicos",
      icon: Stethoscope,
      content: (
        <div className="space-y-3">
          {modalPacienteCampos.dadosClinicos.map((campo, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-text-secondary">{campo}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "exame",
      label: "Info. do Exame",
      icon: FileText,
      content: (
        <div className="space-y-3">
          {modalPacienteCampos.informacoesExame.map((campo, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
              campo.includes("Accession") ? "bg-primary/10 border border-primary/30" : "bg-background"
            }`}>
              <div className={`w-2 h-2 rounded-full ${campo.includes("Accession") ? "bg-primary" : "bg-warning"}`} />
              <span className={campo.includes("Accession") ? "text-primary font-medium" : "text-text-secondary"}>
                {campo}
              </span>
              {campo.includes("Accession") && <Badge variant="primary" size="sm">Crítico</Badge>}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "historico",
      label: "Histórico",
      icon: History,
      content: (
        <div className="space-y-3">
          {modalPacienteCampos.historicoExames.map((campo, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
              <div className="w-2 h-2 rounded-full bg-error" />
              <span className="text-text-secondary">{campo}</span>
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
            title="Modal do Paciente"
            description="Ao clicar no nome do paciente na worklist, uma modal é exibida com todas as informações demográficas, dados do exame e histórico."
            icon={User}
            badge="Dados Completos"
          />

          {/* Accession Number Highlight */}
          <Alert variant="warning" className="mb-8">
            <strong>Accession Number</strong> é o identificador único crítico do exame. Localizado na aba &quot;Informações do Exame&quot;, 
            é essencial para rastreabilidade e integração com outros sistemas.
          </Alert>

          {/* Tabs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Campos do Modal
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <TabPanel tabs={tabs} variant="pills" />
            </div>
          </section>

          {/* Available Actions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Ações Disponíveis
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {modalPacienteCampos.acoesDisponiveis.map((acao, index) => (
                <div key={index} className="bg-surface p-4 rounded-lg border border-border text-center">
                  <span className="text-text">{acao}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Information */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Informações Críticas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
                <h3 className="font-semibold text-primary mb-3">Accession Number</h3>
                <p className="text-sm text-text-secondary">
                  Identificador único do exame no sistema PACS. Usado para rastrear o exame desde a realização até o laudo final.
                </p>
              </div>

              <div className="bg-accent/10 p-6 rounded-xl border border-accent/30">
                <h3 className="font-semibold text-accent mb-3">Histórico de Exames</h3>
                <p className="text-sm text-text-secondary">
                  Lista completa de exames anteriores do paciente para comparação e acompanhamento de evolução clínica.
                </p>
              </div>

              <div className="bg-warning/10 p-6 rounded-xl border border-warning/30">
                <h3 className="font-semibold text-warning mb-3">Alergias e Medicações</h3>
                <p className="text-sm text-text-secondary">
                  Informações críticas de segurança do paciente, especialmente importante para exames com contraste.
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
