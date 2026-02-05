"use client";

import { Globe, User, Stethoscope } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, Badge } from "@/components/ui";
import { portalPaciente, portalMedicoSolicitante } from "@/lib/data";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Portais de Acesso"
            description="Portais dedicados para pacientes e médicos solicitantes acessarem laudos, imagens e comunicarem-se com a equipe de radiologia."
            icon={Globe}
            badge="Acesso Externo"
          />

          {/* Patient Portal */}
          <section className="mb-12">
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text">{portalPaciente.titulo}</h2>
                  <Badge variant="primary">Para Pacientes</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portalPaciente.funcionalidades.map((func, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-secondary">{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Doctor Portal */}
          <section className="mb-12">
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Stethoscope className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text">{portalMedicoSolicitante.titulo}</h2>
                  <Badge variant="accent">Para Médicos</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portalMedicoSolicitante.funcionalidades.map((func, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-text-secondary">{func}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Access Methods */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Formas de Acesso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-2">Web Browser</h3>
                <p className="text-sm text-muted">
                  Acesso via navegador em qualquer dispositivo com internet.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📱</div>
                </div>
                <h3 className="font-semibold text-text mb-2">App Mobile</h3>
                <p className="text-sm text-muted">
                  Aplicativo nativo para iOS e Android com notificações push.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📷</div>
                </div>
                <h3 className="font-semibold text-text mb-2">QR Code</h3>
                <p className="text-sm text-muted">
                  Acesso rápido a exames específicos via leitura de QR Code.
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
