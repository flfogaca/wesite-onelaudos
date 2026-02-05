import { 
  LogIn, ClipboardList, Eye, FileText, MessageSquare, 
  PenTool, CheckCircle, ArrowRight, User, Clock, 
  Send, Building2, type LucideIcon 
} from "lucide-react";

// Fluxo do radiologista
export const fluxoRadiologista: Array<{
  id: string;
  titulo: string;
  descricao: string;
  detalhes: string[];
  icon: LucideIcon;
}> = [
  {
    id: "1",
    titulo: "Login no Sistema",
    descricao: "Autenticação segura com MFA",
    detalhes: [
      "Acesso via navegador ou app",
      "Autenticação multi-fator",
      "Seleção de unidade de trabalho",
    ],
    icon: LogIn,
  },
  {
    id: "2",
    titulo: "Acessa Worklist",
    descricao: "Lista de exames pendentes",
    detalhes: [
      "Filtros: Meus Exames, SLA",
      "Ordenação por prioridade",
      "Visualização de contadores",
    ],
    icon: ClipboardList,
  },
  {
    id: "3",
    titulo: "Seleciona Exame",
    descricao: "Escolhe exame por prioridade/SLA",
    detalhes: [
      "Considera urgência e prazo",
      "Verifica indicação clínica",
      "Avalia complexidade",
    ],
    icon: Clock,
  },
  {
    id: "4",
    titulo: "Consulta Paciente",
    descricao: "Modal com dados demográficos",
    detalhes: [
      "Visualiza Accession Number",
      "Consulta histórico de exames",
      "Verifica alergias e medicações",
    ],
    icon: User,
  },
  {
    id: "5",
    titulo: "Abre Viewer DICOM",
    descricao: "Análise das imagens",
    detalhes: [
      "Ferramentas de zoom e medição",
      "Comparação com exames anteriores",
      "Ajuste de window/level",
    ],
    icon: Eye,
  },
  {
    id: "6",
    titulo: "Redige Laudo",
    descricao: "Editor com templates",
    detalhes: [
      "Usa máscara/template",
      "Dita por voz (IA transcreve)",
      "Aplica classificações (BI-RADS)",
    ],
    icon: FileText,
  },
  {
    id: "7",
    titulo: "Adiciona Comentários",
    descricao: "Anotações se necessário",
    detalhes: [
      "Comunicação com solicitante",
      "Registro de achados críticos",
      "Recomendações de seguimento",
    ],
    icon: MessageSquare,
  },
  {
    id: "8",
    titulo: "Assina Digitalmente",
    descricao: "Certificado digital",
    detalhes: [
      "Integração SafeID",
      "Validade jurídica",
      "Timestamp registrado",
    ],
    icon: PenTool,
  },
  {
    id: "9",
    titulo: "Marca como Completo",
    descricao: "Finalização do exame",
    detalhes: [
      "Status atualizado para Assinado",
      "Laudo disponível no portal",
      "Notificação enviada",
    ],
    icon: CheckCircle,
  },
  {
    id: "10",
    titulo: "Próximo Exame",
    descricao: "Continua o workflow",
    detalhes: [
      "Retorna à worklist",
      "Seleciona próximo exame",
      "Ciclo se repete",
    ],
    icon: ArrowRight,
  },
];

// Fluxo administrativo
export const fluxoAdministrativo: Array<{
  id: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    id: "1",
    titulo: "Cadastro de Paciente/Exame",
    descricao: "Registro inicial no sistema",
    icon: User,
  },
  {
    id: "2",
    titulo: "Gerenciamento de Prioridades",
    descricao: "Definição de urgência e SLA",
    icon: Clock,
  },
  {
    id: "3",
    titulo: "Atribuição de Exames",
    descricao: "Distribuição para médicos",
    icon: ClipboardList,
  },
  {
    id: "4",
    titulo: "Monitoramento de SLA",
    descricao: "Acompanhamento de prazos",
    icon: Eye,
  },
  {
    id: "5",
    titulo: "Suporte a Usuários",
    descricao: "Atendimento e resolução",
    icon: MessageSquare,
  },
  {
    id: "6",
    titulo: "Geração de Relatórios",
    descricao: "Métricas e indicadores",
    icon: FileText,
  },
];

// Fluxo do ciclo de vida do exame
export const fluxoCicloVidaExame = [
  { etapa: "Agendamento", descricao: "Paciente agenda exame" },
  { etapa: "Realização", descricao: "Exame é realizado no equipamento" },
  { etapa: "Envio PACS", descricao: "Imagens enviadas para o PACS" },
  { etapa: "Worklist", descricao: "Exame aparece na lista de trabalho" },
  { etapa: "Laudo", descricao: "Radiologista elabora o laudo" },
  { etapa: "Assinatura", descricao: "Assinatura digital aplicada" },
  { etapa: "Disponibilização", descricao: "Laudo disponível para acesso" },
];

// Fluxo de faturamento
export const fluxoFaturamento = [
  { etapa: "Exame Realizado", descricao: "Procedimento concluído" },
  { etapa: "Guia TISS Gerada", descricao: "Sistema gera guia automaticamente" },
  { etapa: "Envio Eletrônico", descricao: "Transmissão para operadora" },
  { etapa: "Conciliação", descricao: "Verificação de pagamentos" },
  { etapa: "Pagamento", descricao: "Recebimento confirmado" },
];

// SLAs por prioridade
export const slaPrioridades = [
  { prioridade: "Emergência", cor: "error", prazo: "30 minutos", descricao: "Risco de vida imediato" },
  { prioridade: "Urgência", cor: "warning", prazo: "2 horas", descricao: "Necessita atenção rápida" },
  { prioridade: "Plantão", cor: "accent", prazo: "4 horas", descricao: "Exame fora do horário comercial" },
  { prioridade: "Internado", cor: "primary", prazo: "6 horas", descricao: "Paciente hospitalizado" },
  { prioridade: "Ambulatório", cor: "success", prazo: "24 horas", descricao: "Paciente ambulatorial" },
  { prioridade: "Rotina", cor: "default", prazo: "48 horas", descricao: "Exame de rotina" },
];
