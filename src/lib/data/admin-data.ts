import { 
  Server, HardDrive, Network, Activity, Wrench, 
  Shield, Database, Cpu, AlertTriangle, type LucideIcon 
} from "lucide-react";

// Funcionalidades administrativas (Root/Admin)
export const funcionalidadesAdmin: Array<{
  categoria: string;
  descricao: string;
  icon: LucideIcon;
  funcionalidades: string[];
}> = [
  {
    categoria: "Gerenciamento de Equipamentos DICOM",
    descricao: "Configuração e manutenção de equipamentos de imagem",
    icon: Server,
    funcionalidades: [
      "AE Title Management",
      "IP/Porta de cada equipamento",
      "Validação de conformidade DICOM",
      "Modality Worklist Integration",
      "Testes de conectividade (DICOM echo)",
      "Certificados DICOM-TLS",
    ],
  },
  {
    categoria: "Gerenciamento de Broker",
    descricao: "Administração do broker local",
    icon: HardDrive,
    funcionalidades: [
      "Instalação e configuração",
      "Frequência de sincronização",
      "Cache local",
      "Failover e redundância",
      "Status de saúde",
      "Logs de sincronização",
    ],
  },
  {
    categoria: "Roteamento DICOM",
    descricao: "Configuração de rotas e gateways",
    icon: Network,
    funcionalidades: [
      "Gateway management",
      "Regras de roteamento",
      "Load balancing",
      "Failover automático",
      "Priorização de tráfego",
      "Compressão de imagens",
    ],
  },
  {
    categoria: "Monitoramento e Performance",
    descricao: "Dashboards e métricas do sistema",
    icon: Activity,
    funcionalidades: [
      "Dashboard de servidor (CPU, memória, disco)",
      "Performance de banco de dados",
      "Performance de rede",
      "I/O de armazenamento",
      "Alertas automáticos",
      "Capacity planning",
    ],
  },
  {
    categoria: "Manutenção",
    descricao: "Tarefas de manutenção do sistema",
    icon: Wrench,
    funcionalidades: [
      "Atualizações de software",
      "Manutenção de banco de dados",
      "Rotação de logs",
      "Limpeza de arquivos temporários",
      "Ferramentas de diagnóstico",
      "Backup e restore",
    ],
  },
];

// Métricas de monitoramento
export const metricasMonitoramento = [
  {
    metrica: "CPU",
    descricao: "Utilização do processador",
    alertaWarning: "70%",
    alertaCritical: "90%",
    unidade: "%",
  },
  {
    metrica: "Memória",
    descricao: "Utilização de RAM",
    alertaWarning: "80%",
    alertaCritical: "95%",
    unidade: "%",
  },
  {
    metrica: "Disco",
    descricao: "Espaço em disco utilizado",
    alertaWarning: "75%",
    alertaCritical: "90%",
    unidade: "%",
  },
  {
    metrica: "Rede",
    descricao: "Latência de rede",
    alertaWarning: "100ms",
    alertaCritical: "500ms",
    unidade: "ms",
  },
  {
    metrica: "Fila DICOM",
    descricao: "Exames aguardando processamento",
    alertaWarning: "50",
    alertaCritical: "200",
    unidade: "exames",
  },
  {
    metrica: "Sincronização",
    descricao: "Tempo desde última sincronização",
    alertaWarning: "30min",
    alertaCritical: "2h",
    unidade: "tempo",
  },
];

// Configurações de AE Title
export const configuracoesAETitle = {
  campos: [
    "AE Title (nome do equipamento)",
    "IP Address",
    "Port",
    "Modalidade",
    "Fabricante",
    "Modelo",
    "Descrição",
    "Certificado TLS",
    "Status (Ativo/Inativo)",
  ],
  validacoes: [
    "DICOM Echo (C-ECHO)",
    "DICOM Find (C-FIND)",
    "DICOM Move (C-MOVE)",
    "DICOM Store (C-STORE)",
    "Verificação de certificados",
  ],
};

// Regras de roteamento
export const regrasRoteamento = [
  {
    regra: "Por Modalidade",
    descricao: "Roteia baseado no tipo de exame",
    exemplo: "CT → PACS Principal, US → PACS Secundário",
  },
  {
    regra: "Por Unidade",
    descricao: "Roteia baseado na origem",
    exemplo: "Hospital A → Broker A, Hospital B → Broker B",
  },
  {
    regra: "Por Horário",
    descricao: "Roteia baseado no horário",
    exemplo: "Horário comercial → Nuvem, Noite → Cache local",
  },
  {
    regra: "Por Prioridade",
    descricao: "Roteia baseado na urgência",
    exemplo: "Emergência → Fast track, Rotina → Fila normal",
  },
];

// Ferramentas de diagnóstico
export const ferramentasDiagnostico = [
  "DICOM Echo Test",
  "Network Ping",
  "Traceroute",
  "Log Analyzer",
  "Database Health Check",
  "Storage Integrity Check",
  "Certificate Validator",
  "Performance Profiler",
];
