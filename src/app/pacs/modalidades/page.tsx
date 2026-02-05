"use client";

import { Grid } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge } from "@/components/ui";
import { modalidades } from "@/lib/data";

export default function ModalidadesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="14 Modalidades Radiológicas"
            description="A plataforma suporta todas as principais modalidades de imagem médica, desde radiografias convencionais até ressonância magnética e medicina nuclear."
            icon={Grid}
            badge="DICOM"
          />

          {/* Full Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Tabela Completa de Modalidades
            </h2>
            <DataTable
              data={modalidades}
              columns={[
                { 
                  key: "codigo", 
                  header: "Código DICOM", 
                  sortable: true,
                  render: (row) => (
                    <Badge variant="primary">{row.codigo}</Badge>
                  )
                },
                { key: "nome", header: "Nome Completo", sortable: true },
                { key: "descricao", header: "Descrição" },
              ]}
              searchable
              searchPlaceholder="Buscar modalidade..."
            />
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Categorias de Modalidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Radiografia</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="primary">CR</Badge>
                  <Badge variant="primary">DX</Badge>
                </div>
                <p className="text-sm text-muted">
                  Raio-X digital computadorizado e convencional. Base da radiologia com alta disponibilidade.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Tomografia</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="accent">CT</Badge>
                </div>
                <p className="text-sm text-muted">
                  Tomografia computadorizada com reconstrução multiplanar e 3D.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Ressonância</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="success">MR</Badge>
                </div>
                <p className="text-sm text-muted">
                  Ressonância magnética com múltiplas sequências e protocolos avançados.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Ultrassom</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="warning">US</Badge>
                </div>
                <p className="text-sm text-muted">
                  Ultrassonografia incluindo Doppler e imagens 3D/4D.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Mama</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="error">MG</Badge>
                </div>
                <p className="text-sm text-muted">
                  Mamografia digital com suporte a classificação BI-RADS.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Medicina Nuclear</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="primary">NM</Badge>
                  <Badge variant="primary">CP</Badge>
                </div>
                <p className="text-sm text-muted">
                  Cintilografia e estudos de medicina nuclear com fusão de imagens.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Vascular</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="accent">XA</Badge>
                </div>
                <p className="text-sm text-muted">
                  Angiografia digital com subtração e análise vascular.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Cardiologia</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="success">ECG</Badge>
                </div>
                <p className="text-sm text-muted">
                  Eletrocardiograma e estudos de atividade cardíaca.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-text mb-3">Outros</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="default">ES</Badge>
                  <Badge variant="default">EEG</Badge>
                  <Badge variant="default">BMD</Badge>
                  <Badge variant="default">OT</Badge>
                </div>
                <p className="text-sm text-muted">
                  Endoscopia, eletroencefalograma, densitometria e outras modalidades.
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
