"use client";

import { Users, Shield } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader, DataTable, Badge, Accordion } from "@/components/ui";
import { perfisUsuario, rbacFeatures } from "@/lib/data";

export default function UsuariosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title="Usuários & RBAC"
            description="Sistema de controle de acesso baseado em funções (Role-Based Access Control) com 8 perfis predefinidos e permissões granulares."
            icon={Users}
            badge="8 Perfis"
          />

          {/* User Profiles Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              8 Perfis de Usuário
            </h2>
            <DataTable
              data={perfisUsuario}
              columns={[
                { 
                  key: "perfil", 
                  header: "Perfil",
                  render: (row) => (
                    <Badge variant={row.cor}>{row.perfil}</Badge>
                  )
                },
                { key: "descricao", header: "Descrição" },
                { key: "permissoes", header: "Permissões Chave" },
              ]}
              searchable
              searchPlaceholder="Buscar perfil..."
            />
          </section>

          {/* Profile Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-text mb-6">
              Detalhamento dos Perfis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {perfisUsuario.map((perfil, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl border ${
                    perfil.cor === "error" ? "bg-error/10 border-error/30" :
                    perfil.cor === "warning" ? "bg-warning/10 border-warning/30" :
                    perfil.cor === "success" ? "bg-success/10 border-success/30" :
                    perfil.cor === "primary" ? "bg-primary/10 border-primary/30" :
                    perfil.cor === "accent" ? "bg-accent/10 border-accent/30" :
                    "bg-surface border-border"
                  }`}
                >
                  <h3 className={`font-semibold mb-1 ${
                    perfil.cor === "error" ? "text-error" :
                    perfil.cor === "warning" ? "text-warning" :
                    perfil.cor === "success" ? "text-success" :
                    perfil.cor === "primary" ? "text-primary" :
                    perfil.cor === "accent" ? "text-accent" :
                    "text-text"
                  }`}>
                    {perfil.perfil}
                  </h3>
                  <p className="text-sm text-muted mb-2">{perfil.descricao}</p>
                  <p className="text-xs text-text-secondary">{perfil.permissoes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RBAC Features */}
          <section>
            <h2 className="text-2xl font-bold text-text mb-6">
              Funcionalidades de Controle de Acesso
            </h2>
            <div className="bg-surface p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">RBAC - Role-Based Access Control</h3>
                  <p className="text-sm text-muted">Controle granular baseado em funções</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rbacFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-text-secondary">{feature}</span>
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
