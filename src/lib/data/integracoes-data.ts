import { 
  Plug, FileText, Monitor, Shield, Cloud, 
  Database, Network, type LucideIcon 
} from "lucide-react";

// Integrações disponíveis
export const integracoesDisponiveis = [
  { 
    sistema: "HIS", 
    protocolo: "HL7", 
    funcao: "Dados hospitalares",
    descricao: "Integração com sistemas de informação hospitalar para troca de dados demográficos e clínicos."
  },
  { 
    sistema: "RIS", 
    protocolo: "HL7", 
    funcao: "Worklist, resultados",
    descricao: "Comunicação com sistemas de informação de radiologia para worklist e resultados de exames."
  },
  { 
    sistema: "DICOM", 
    protocolo: "DICOM", 
    funcao: "Imagens médicas",
    descricao: "Protocolo padrão para comunicação de imagens médicas com equipamentos e outros PACS."
  },
  { 
    sistema: "SafeID", 
    protocolo: "API REST", 
    funcao: "Assinatura digital",
    descricao: "Integração com serviço de certificação digital para assinatura de laudos."
  },
  { 
    sistema: "TISS/TUSS", 
    protocolo: "XML/Web Service", 
    funcao: "Faturamento ANS",
    descricao: "Conformidade com padrões ANS para troca de informações na saúde suplementar."
  },
  { 
    sistema: "Nuvem", 
    protocolo: "REST API/gRPC", 
    funcao: "Armazenamento",
    descricao: "APIs para sincronização e armazenamento de dados na plataforma em nuvem."
  },
];

// Interface HL7
export const interfaceHL7 = {
  titulo: "HL7 (Health Level Seven)",
  descricao: "Padrão internacional para troca de informações de saúde.",
  mensagens: [
    { tipo: "ADT", descricao: "Admission, Discharge, Transfer - movimentação de pacientes" },
    { tipo: "ORM", descricao: "Order Message - solicitação de exames" },
    { tipo: "ORU", descricao: "Observation Result - resultados de exames" },
    { tipo: "SIU", descricao: "Scheduling Information - agendamento" },
    { tipo: "MDM", descricao: "Medical Document Management - documentos médicos" },
  ],
  configuracoes: [
    "Configuração de interfaces",
    "Mapeamento de dados",
    "Worklist integration",
    "Result reporting",
    "Transformação de mensagens",
    "Logging e monitoramento",
  ],
};

// Interface DICOM
export const interfaceDICOM = {
  titulo: "DICOM (Digital Imaging and Communications in Medicine)",
  descricao: "Padrão para comunicação de imagens médicas.",
  servicos: [
    { servico: "C-STORE", descricao: "Armazenamento de imagens" },
    { servico: "C-FIND", descricao: "Consulta de estudos/séries/imagens" },
    { servico: "C-MOVE", descricao: "Transferência de imagens" },
    { servico: "C-GET", descricao: "Recuperação de imagens" },
    { servico: "C-ECHO", descricao: "Verificação de conectividade" },
    { servico: "Modality Worklist", descricao: "Lista de trabalho para equipamentos" },
    { servico: "MPPS", descricao: "Modality Performed Procedure Step" },
  ],
  configuracoes: [
    "AE Title configuration",
    "Roteamento inteligente",
    "Conformance validation",
    "TLS security",
    "Compressão de imagens",
    "Anonimização de dados",
  ],
};

// APIs disponíveis
export const apisDisponiveis = [
  {
    api: "REST API",
    versao: "v2",
    autenticacao: "OAuth 2.0 / JWT",
    endpoints: [
      "/patients - Gestão de pacientes",
      "/studies - Gestão de estudos",
      "/reports - Gestão de laudos",
      "/users - Gestão de usuários",
      "/worklist - Lista de trabalho",
    ],
  },
  {
    api: "GraphQL",
    versao: "v1",
    autenticacao: "Bearer Token",
    endpoints: [
      "Query: patients, studies, reports",
      "Mutation: createReport, updatePatient",
      "Subscription: newStudy, reportSigned",
    ],
  },
  {
    api: "gRPC",
    versao: "v1",
    autenticacao: "mTLS",
    endpoints: [
      "ImageService - Streaming de imagens",
      "SyncService - Sincronização broker-nuvem",
      "NotificationService - Eventos em tempo real",
    ],
  },
];

// Webhooks
export const webhooks = [
  { evento: "study.received", descricao: "Novo estudo recebido no PACS" },
  { evento: "study.processed", descricao: "Estudo processado e disponível" },
  { evento: "report.created", descricao: "Novo laudo criado" },
  { evento: "report.signed", descricao: "Laudo assinado digitalmente" },
  { evento: "patient.updated", descricao: "Dados do paciente atualizados" },
  { evento: "alert.critical", descricao: "Achado crítico identificado" },
];

// Features de integração
export const integracaoFeatures: Array<{
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    titulo: "HL7 v2.x",
    descricao: "Integração com HIS/RIS via mensagens HL7 para worklist e resultados.",
    icon: FileText,
  },
  {
    titulo: "DICOM",
    descricao: "Comunicação padrão com equipamentos de imagem e outros PACS.",
    icon: Monitor,
  },
  {
    titulo: "SafeID",
    descricao: "Assinatura digital com certificado ICP-Brasil.",
    icon: Shield,
  },
  {
    titulo: "TISS/TUSS",
    descricao: "Conformidade ANS para faturamento de saúde suplementar.",
    icon: FileText,
  },
  {
    titulo: "APIs REST/GraphQL",
    descricao: "APIs modernas para integração com sistemas terceiros.",
    icon: Plug,
  },
  {
    titulo: "Webhooks",
    descricao: "Notificações em tempo real para eventos do sistema.",
    icon: Cloud,
  },
];
