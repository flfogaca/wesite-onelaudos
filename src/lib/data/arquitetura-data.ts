import { 
  Server, Cloud, Database, HardDrive, Network, 
  Shield, Zap, type LucideIcon 
} from "lucide-react";

// Componentes da arquitetura
export const componentesArquitetura: Array<{
  componente: string;
  descricao: string;
  tecnologias: string[];
  icon: LucideIcon;
}> = [
  {
    componente: "Broker Local",
    descricao: "Software local para DICOM e cache",
    tecnologias: ["dcm4che", "Orthanc", "Node.js"],
    icon: Server,
  },
  {
    componente: "Plataforma Nuvem",
    descricao: "Aplicação web em cloud",
    tecnologias: ["Kubernetes", "Docker", "Python", "React"],
    icon: Cloud,
  },
  {
    componente: "Banco de Dados",
    descricao: "Metadados e logs",
    tecnologias: ["PostgreSQL", "MongoDB", "Elasticsearch"],
    icon: Database,
  },
  {
    componente: "Armazenamento",
    descricao: "Imagens DICOM",
    tecnologias: ["S3", "Azure Blob", "GCS"],
    icon: HardDrive,
  },
  {
    componente: "Viewer DICOM",
    descricao: "Visualizador web",
    tecnologias: ["OHIF", "Cornerstone.js"],
    icon: Zap,
  },
  {
    componente: "Integração",
    descricao: "APIs e protocolos",
    tecnologias: ["REST", "GraphQL", "gRPC"],
    icon: Network,
  },
];

// Fluxo de dados
export const fluxoDados = [
  {
    id: "1",
    title: "Equipamento DICOM",
    description: "Origem das imagens",
    color: "primary" as const,
  },
  {
    id: "2",
    title: "Broker Local",
    description: "Recepção e cache",
    color: "accent" as const,
  },
  {
    id: "3",
    title: "Sincronização",
    description: "Upload para nuvem",
    color: "warning" as const,
  },
  {
    id: "4",
    title: "Nuvem",
    description: "Armazenamento definitivo",
    color: "success" as const,
  },
  {
    id: "5",
    title: "Viewer Web",
    description: "Acesso do radiologista",
    color: "primary" as const,
  },
];

// Características do modelo híbrido
export const caracteristicasHibrido = {
  brokerLocal: {
    titulo: "Broker Local (Edge Node)",
    vantagens: [
      "Operação offline garantida",
      "Latência mínima para acesso local",
      "Cache inteligente de exames recentes",
      "Redundância de dados",
      "Sincronização automática em background",
    ],
    tecnologias: ["dcm4che", "Orthanc", "Node.js", "SQLite"],
  },
  plataformaNuvem: {
    titulo: "Plataforma em Nuvem",
    vantagens: [
      "Escalabilidade ilimitada",
      "Acesso remoto de qualquer lugar",
      "Processamento de IA em escala",
      "Backup automático e disaster recovery",
      "Multi-tenant para múltiplos clientes",
    ],
    tecnologias: ["AWS/Azure/GCP", "Kubernetes", "Docker", "PostgreSQL"],
  },
};

// Tiers de armazenamento
export const storageTiers = [
  {
    tier: "Hot",
    descricao: "Exames recentes",
    tecnologia: "SSD local",
    periodo: "0-30 dias",
    performance: "Alta",
    custo: "Alto",
  },
  {
    tier: "Warm",
    descricao: "Exames intermediários",
    tecnologia: "HDD/SSD Cloud",
    periodo: "30-90 dias",
    performance: "Média",
    custo: "Médio",
  },
  {
    tier: "Cold",
    descricao: "Arquivo histórico",
    tecnologia: "Object Storage (S3 Glacier)",
    periodo: "90+ dias",
    performance: "Baixa",
    custo: "Baixo",
  },
];

// Segurança da arquitetura
export const segurancaArquitetura = [
  "Criptografia em trânsito (TLS 1.3)",
  "Criptografia em repouso (AES-256)",
  "DICOM-TLS para comunicação segura",
  "VPN para conexão broker-nuvem",
  "Certificados digitais para autenticação",
  "Auditoria completa de acessos",
];

// Requisitos de rede
export const requisitosRede = [
  {
    componente: "Broker → Equipamentos",
    protocolo: "DICOM",
    porta: "104, 11112",
    requisito: "Rede local",
  },
  {
    componente: "Broker → Nuvem",
    protocolo: "HTTPS/gRPC",
    porta: "443",
    requisito: "Internet (mín. 10 Mbps)",
  },
  {
    componente: "Usuário → Plataforma",
    protocolo: "HTTPS",
    porta: "443",
    requisito: "Internet (mín. 5 Mbps)",
  },
];
