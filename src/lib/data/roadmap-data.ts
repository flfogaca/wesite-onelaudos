import { 
  Rocket, TrendingUp, Crown, Target, Check, 
  Clock, Calendar, type LucideIcon 
} from "lucide-react";

// Fases do roadmap
export const fasesRoadmap: Array<{
  id: string;
  fase: string;
  titulo: string;
  duracao: string;
  status: "completed" | "current" | "upcoming";
  descricao: string;
  entregas: string[];
  icon: LucideIcon;
}> = [
  {
    id: "fase-1",
    fase: "Fase 1",
    titulo: "MVP - Minimum Viable Product",
    duracao: "6 meses",
    status: "completed",
    descricao: "Desenvolvimento do core da plataforma com funcionalidades essenciais para operação básica.",
    entregas: [
      "Core PACS/RIS integrado",
      "Worklist completa com filtros",
      "Viewer DICOM web com ferramentas básicas",
      "Editor de laudos com máscaras",
      "Arquitetura híbrida (broker + nuvem)",
      "Perfis básicos: Admin, Radiologista, Paciente",
      "Autenticação segura com MFA",
      "Portal do paciente básico",
    ],
    icon: Rocket,
  },
  {
    id: "fase-2",
    fase: "Fase 2",
    titulo: "Expansão",
    duracao: "12 meses",
    status: "current",
    descricao: "Expansão de funcionalidades com foco em integração e inteligência artificial.",
    entregas: [
      "Integração TISS/TUSS completa",
      "IA para laudos (resumo, revisão)",
      "Portal do médico solicitante",
      "Gravação e transcrição de áudio",
      "Assinatura digital com SafeID",
      "Dashboard de métricas",
      "Multi-tenant completo",
      "APIs REST e GraphQL",
    ],
    icon: TrendingUp,
  },
  {
    id: "fase-3",
    fase: "Fase 3",
    titulo: "Plataforma Completa",
    duracao: "18 meses",
    status: "upcoming",
    descricao: "Consolidação como plataforma completa de radiologia com recursos avançados.",
    entregas: [
      "Mini HIS completo",
      "Agendamento online integrado",
      "IA avançada (análise de imagens)",
      "Marketplace de IA",
      "Peer review assistido",
      "Telediagnóstico em tempo real",
      "App mobile nativo",
      "Expansão internacional",
    ],
    icon: Crown,
  },
];

// Marcos principais
export const marcosPrincipais = [
  { marco: "Go-Live MVP", data: "Q2 2024", status: "completed" },
  { marco: "100 Clientes", data: "Q4 2024", status: "completed" },
  { marco: "Integração TISS", data: "Q1 2025", status: "current" },
  { marco: "IA Production", data: "Q2 2025", status: "upcoming" },
  { marco: "500 Clientes", data: "Q4 2025", status: "upcoming" },
  { marco: "Marketplace IA", data: "Q2 2026", status: "upcoming" },
];

// Métricas de sucesso
export const metricasSucesso = [
  {
    metrica: "Clientes Ativos",
    meta: "500+",
    prazo: "18 meses",
    atual: "150",
  },
  {
    metrica: "Exames/Mês",
    meta: "1M+",
    prazo: "18 meses",
    atual: "300K",
  },
  {
    metrica: "Uptime",
    meta: "99.9%",
    prazo: "Contínuo",
    atual: "99.5%",
  },
  {
    metrica: "NPS",
    meta: "70+",
    prazo: "12 meses",
    atual: "55",
  },
  {
    metrica: "Tempo Médio Laudo",
    meta: "-40%",
    prazo: "12 meses",
    atual: "-25%",
  },
];

// Próximos releases
export const proximosReleases = [
  {
    versao: "v2.5",
    nome: "Smart Reports",
    data: "Q1 2025",
    features: [
      "IA para resumo de exames",
      "Sugestões automáticas de achados",
      "Revisão ortográfica inteligente",
    ],
  },
  {
    versao: "v2.6",
    nome: "Integration Hub",
    data: "Q2 2025",
    features: [
      "Webhooks configuráveis",
      "GraphQL API",
      "Conectores pré-built para HIS",
    ],
  },
  {
    versao: "v3.0",
    nome: "AI Platform",
    data: "Q3 2025",
    features: [
      "Análise de imagens com IA",
      "Detecção de achados críticos",
      "Marketplace de modelos",
    ],
  },
];

// Investimentos por área
export const investimentosPorArea = [
  { area: "Desenvolvimento", percentual: 40 },
  { area: "Infraestrutura", percentual: 25 },
  { area: "IA/ML", percentual: 20 },
  { area: "Segurança", percentual: 10 },
  { area: "UX/Design", percentual: 5 },
];
