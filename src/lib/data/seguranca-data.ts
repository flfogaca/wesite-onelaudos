import { 
  Shield, Lock, FileSearch, AlertTriangle, Key, 
  Eye, Database, Globe, type LucideIcon 
} from "lucide-react";

// Controle de acesso
export const controleAcesso = {
  titulo: "Controle de Acesso",
  funcionalidades: [
    "RBAC (Role-Based Access Control)",
    "Autenticação segura",
    "Multi-Factor Authentication (MFA)",
    "Gerenciamento de sessões",
    "Princípio do mínimo necessário",
    "Single Sign-On (SSO)",
    "Integração com Active Directory/LDAP",
  ],
};

// Logs de auditoria
export const logsAuditoria = {
  titulo: "Logs de Auditoria",
  funcionalidades: [
    "Registro de todas as alterações",
    "Rastreamento de acesso a imagens",
    "Quem acessou, quando, por quanto tempo",
    "Alertas de acessos anormais",
    "Exportação de relatórios",
    "Retenção configurável",
    "Busca e filtros avançados",
  ],
  tiposLog: [
    { tipo: "Acesso", descricao: "Login, logout, tentativas de acesso" },
    { tipo: "Visualização", descricao: "Acesso a exames e laudos" },
    { tipo: "Modificação", descricao: "Alterações em dados" },
    { tipo: "Exclusão", descricao: "Remoção de registros" },
    { tipo: "Exportação", descricao: "Download de dados" },
    { tipo: "Administração", descricao: "Ações administrativas" },
  ],
};

// Conformidade regulatória
export const conformidadeRegulatoria: Array<{
  regulamento: string;
  descricao: string;
  regiao: string;
  requisitos: string[];
}> = [
  {
    regulamento: "HIPAA",
    descricao: "Health Insurance Portability and Accountability Act",
    regiao: "Estados Unidos",
    requisitos: [
      "Privacy Rule - proteção de PHI",
      "Security Rule - salvaguardas técnicas",
      "Breach Notification Rule",
      "Enforcement Rule",
    ],
  },
  {
    regulamento: "LGPD",
    descricao: "Lei Geral de Proteção de Dados",
    regiao: "Brasil",
    requisitos: [
      "Consentimento do titular",
      "Finalidade específica",
      "Minimização de dados",
      "Direito de acesso e portabilidade",
    ],
  },
  {
    regulamento: "ANVISA",
    descricao: "Agência Nacional de Vigilância Sanitária",
    regiao: "Brasil",
    requisitos: [
      "RDC 330/2019 - Boas práticas de gerenciamento",
      "Rastreabilidade de exames",
      "Validação de sistemas",
      "Qualificação de equipamentos",
    ],
  },
];

// Segurança de dados
export const segurancaDados = {
  titulo: "Segurança de Dados",
  criptografia: [
    "Criptografia em trânsito (TLS 1.3)",
    "Criptografia em repouso (AES-256)",
    "DICOM-TLS para comunicação segura",
    "Hashing de senhas (bcrypt)",
  ],
  backup: [
    "Backup automático diário",
    "Replicação geográfica",
    "Disaster recovery plan",
    "Teste periódico de restore",
  ],
  retencao: [
    "Políticas de retenção configuráveis",
    "Arquivamento de longo prazo",
    "Exclusão segura de dados",
    "Conformidade com tempo legal",
  ],
};

// Assinatura digital
export const assinaturaDigital = {
  titulo: "Assinatura Digital",
  funcionalidades: [
    "Certificados digitais ICP-Brasil",
    "Integração com SafeID",
    "Validade jurídica",
    "Timestamp de assinatura",
    "Verificação de integridade",
    "Carimbo do tempo",
  ],
  fluxo: [
    "Radiologista finaliza laudo",
    "Sistema solicita assinatura",
    "SafeID valida certificado",
    "Assinatura aplicada ao documento",
    "Hash e timestamp registrados",
    "Laudo disponível para visualização",
  ],
};

// Features de segurança
export const segurancaFeatures: Array<{
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    titulo: "RBAC Granular",
    descricao: "Controle de acesso baseado em funções com 8 perfis predefinidos.",
    icon: Shield,
  },
  {
    titulo: "MFA/2FA",
    descricao: "Autenticação multi-fator para acesso seguro ao sistema.",
    icon: Lock,
  },
  {
    titulo: "Auditoria Completa",
    descricao: "Logs detalhados de todas as ações no sistema.",
    icon: FileSearch,
  },
  {
    titulo: "Alertas de Segurança",
    descricao: "Notificações automáticas para acessos suspeitos.",
    icon: AlertTriangle,
  },
  {
    titulo: "Criptografia",
    descricao: "Dados protegidos em trânsito e em repouso.",
    icon: Key,
  },
  {
    titulo: "HIPAA/LGPD",
    descricao: "Conformidade com regulamentações de privacidade.",
    icon: Eye,
  },
];
