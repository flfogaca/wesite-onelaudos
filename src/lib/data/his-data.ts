import { 
  Users, FileCheck, Globe, Shield, Lock, 
  UserCheck, Stethoscope, Building, type LucideIcon 
} from "lucide-react";

// 8 Perfis de usuário
export const perfisUsuario = [
  { 
    perfil: "Root", 
    descricao: "Superusuário", 
    permissoes: "Acesso total, infra, clientes",
    cor: "error" as const,
  },
  { 
    perfil: "Admin", 
    descricao: "Administrador unidade", 
    permissoes: "Usuários, equipamentos, config",
    cor: "warning" as const,
  },
  { 
    perfil: "Radiologista", 
    descricao: "Médico interpretador", 
    permissoes: "Imagens, laudos, histórico",
    cor: "primary" as const,
  },
  { 
    perfil: "Biomédico/Técnico", 
    descricao: "Operador equipamentos", 
    permissoes: "Envio PACS, qualidade",
    cor: "accent" as const,
  },
  { 
    perfil: "Enfermeiro", 
    descricao: "Profissional enfermagem", 
    permissoes: "Laudos, histórico, registro",
    cor: "success" as const,
  },
  { 
    perfil: "Concierge", 
    descricao: "Atendimento paciente", 
    permissoes: "Agendamento, cadastro",
    cor: "default" as const,
  },
  { 
    perfil: "Médico Solicitante", 
    descricao: "Solicita exame", 
    permissoes: "Laudos, imagens pacientes",
    cor: "primary" as const,
  },
  { 
    perfil: "Paciente", 
    descricao: "Realizou exame", 
    permissoes: "Seus laudos, download",
    cor: "success" as const,
  },
];

// Controle de acesso RBAC
export const rbacFeatures = [
  "Criação e edição de usuários",
  "Atribuição de perfis",
  "Permissões granulares",
  "Princípio do mínimo necessário (HIPAA)",
  "Logs de auditoria",
  "Autenticação multi-fator (MFA)",
  "Gerenciamento de sessões",
  "Revogação de tokens",
];

// TISS (Troca de Informações na Saúde Suplementar)
export const tissInfo = {
  titulo: "TISS - Troca de Informações na Saúde Suplementar",
  descricao: "Padrão obrigatório da ANS para troca eletrônica de dados de saúde.",
  caracteristicas: [
    "Padrão obrigatório da ANS",
    "Troca eletrônica entre operadoras, prestadores, beneficiários",
    "Reduz assimetria de informações",
    "Padronização nacional",
  ],
};

// TUSS (Terminologia Unificada da Saúde Suplementar)
export const tussInfo = {
  titulo: "TUSS - Terminologia Unificada da Saúde Suplementar",
  descricao: "Tabelas padronizadas de procedimentos médicos.",
  caracteristicas: [
    "Tabelas padronizadas de procedimentos",
    "Código único por procedimento",
    "Atualizada pelo COPISS",
    "Facilita faturamento e auditoria",
  ],
};

// Integração TISS/TUSS
export const integracaoTissTuss = [
  "Geração de guias TISS",
  "Envio eletrônico para operadoras",
  "Conciliação de pagamentos",
  "Identificação de glosas",
  "Validação de conformidade ANS",
];

// Problema de múltiplos PACS
export const problemaMultiplosPacs = {
  titulo: "Problema de Múltiplos PACS",
  contexto: "Algumas instituições utilizam múltiplos PACS (ex: Pixeon vs Orus/Horustech).",
  problemas: [
    "Custos operacionais duplicados",
    "Complexidade de sincronização",
    "Fragmentação de dados",
    "Dificuldade de consolidação",
  ],
  solucoes: [
    "Middleware de integração",
    "Migração para PACS único",
    "Serviço de conformidade centralizado",
  ],
};

// Portal do Paciente
export const portalPaciente = {
  titulo: "Portal do Paciente",
  funcionalidades: [
    "Login seguro com 2FA",
    "Visualização de laudos em PDF",
    "Viewer DICOM simplificado",
    "Download de resultados",
    "Compartilhamento de exames",
    "Acesso via QR Code",
    "Agendamento online",
    "Lembretes por email/SMS",
  ],
};

// Portal do Médico Solicitante
export const portalMedicoSolicitante = {
  titulo: "Portal do Médico Solicitante",
  funcionalidades: [
    "Acesso a laudos e imagens de seus pacientes",
    "Comunicação com radiologistas",
    "Histórico de solicitações",
    "Notificações de exames prontos",
  ],
};

// Features principais do HIS
export const hisFeatures: Array<{
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    titulo: "8 Perfis de Usuário",
    descricao: "RBAC completo: Root, Admin, Radiologista, Técnico, Enfermeiro, Concierge, Médico e Paciente.",
    icon: Users,
  },
  {
    titulo: "TISS/TUSS",
    descricao: "Integração completa com padrões ANS para faturamento de saúde suplementar.",
    icon: FileCheck,
  },
  {
    titulo: "Portal Paciente",
    descricao: "Acesso a laudos, download de resultados, QR Code e agendamento online.",
    icon: Globe,
  },
  {
    titulo: "Portal Médico",
    descricao: "Área exclusiva para médicos solicitantes acompanharem seus pacientes.",
    icon: Stethoscope,
  },
  {
    titulo: "Controle de Acesso",
    descricao: "RBAC granular com princípio do mínimo necessário e auditoria completa.",
    icon: Shield,
  },
  {
    titulo: "Autenticação Segura",
    descricao: "MFA, gerenciamento de sessões e integração com SafeID.",
    icon: Lock,
  },
];
