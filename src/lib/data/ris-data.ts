import { 
  ClipboardList, Filter, MousePointer, User, FileText, 
  Mic, QrCode, MessageSquare, Paperclip, MoreHorizontal,
  Copy, Monitor, Send, Star, History, FileSearch, Edit, XCircle,
  type LucideIcon 
} from "lucide-react";

// Estrutura da linha do Worklist
export const worklistColunas = [
  { coluna: "Checkbox", informacao: "Seleção individual", acao: "Ações em massa" },
  { coluna: "Modalidade", informacao: "MG, MR, CT, etc.", acao: "Filtro por clique" },
  { coluna: "Status Visual", informacao: "Ícone colorido", acao: "Indicador" },
  { coluna: "Idade", informacao: "Anos do paciente", acao: "-" },
  { coluna: "Nome Paciente", informacao: "Clicável", acao: "Abre modal demográfica" },
  { coluna: "Tipo Estudo", informacao: "Descrição", acao: "Abre detalhes" },
  { coluna: "Data/Hora", informacao: "Recebimento", acao: "Filtro por data" },
  { coluna: "Tempo Decorrido", informacao: '"há 18 min"', acao: "-" },
  { coluna: "Prioridade", informacao: "Badge colorido", acao: "Altera prioridade" },
  { coluna: "Prazo", informacao: "Data/hora SLA", acao: "-" },
  { coluna: "Médico", informacao: "Nome responsável", acao: "Abre info médico" },
  { coluna: "Unidade", informacao: "Local", acao: "Filtro por unidade" },
  { coluna: "Status", informacao: "A preparar, Assinado", acao: "-" },
  { coluna: "Séries/Imagens", informacao: '"4 / 1166"', acao: "-" },
  { coluna: "Ações", informacao: "6 botões", acao: "Viewer, Audio, QR, etc." },
];

// 10 Filtros rápidos de status
export const filtrosRapidos = [
  { filtro: "Digitado", descricao: "Exames digitados", cor: "default" },
  { filtro: "A Preparar", descricao: "Em preparação", cor: "warning" },
  { filtro: "Reconvocar", descricao: "Necessita reconvocação", cor: "warning" },
  { filtro: "Pendências", descricao: "Com pendências", cor: "error" },
  { filtro: "Internado", descricao: "Pacientes internados", cor: "primary" },
  { filtro: "Plantão", descricao: "Exames de plantão", cor: "accent" },
  { filtro: "Emergências", descricao: "Máxima urgência", cor: "error" },
  { filtro: "Urgências", descricao: "Alta prioridade", cor: "warning" },
  { filtro: "Ambulatórios", descricao: "Pacientes ambulatoriais", cor: "success" },
  { filtro: "Meus Exames", descricao: "Do usuário logado", cor: "primary" },
];

// Filtros por atributos
export const filtrosAtributos = [
  "Unidade de atendimento",
  "Médico responsável",
  "Data (24h, 48h, 7d, 30d, 60d, 90d)",
  "Achado crítico",
  "SLA",
  "Exames assinados",
  "Descrição do estudo (busca textual)",
  "Nome do paciente (busca textual)",
  "Áudio anexado",
];

// Filtros avançados (modal)
export const filtrosAvancados = [
  "Período customizado",
  "Data de transferência",
  "Data de recebimento",
  "Convênio/Plano",
  "Status do exame",
  "Visualizar todos vs meus exames",
];

// 6 Botões de ação rápida
export const botoesAcaoRapida: Array<{
  botao: string;
  index: string;
  funcao: string;
  icon: LucideIcon;
}> = [
  { botao: "Viewer DICOM", index: "btn-viewer-[ID]", funcao: "Abre visualizador", icon: Monitor },
  { botao: "Áudio", index: "btn-mic-lista", funcao: "Gravação/reprodução", icon: Mic },
  { botao: "QR Code", index: "btn-qrcode", funcao: "Gera protocolo", icon: QrCode },
  { botao: "Comentários", index: "btn-open-modal-comentario", funcao: "Anotações", icon: MessageSquare },
  { botao: "Anexos", index: "-", funcao: "Upload arquivos", icon: Paperclip },
  { botao: "Menu Opções", index: "btn-abrir-opcoes-[ID]", funcao: "Ações avançadas", icon: MoreHorizontal },
];

// Menu contextual (7 grupos)
export const menuContextual = {
  grupo1: {
    titulo: "Gerenciamento de Código",
    acoes: [
      { nome: "Copiar código do paciente", icon: Copy },
      { nome: "Duplicar exame", icon: Copy },
    ],
  },
  grupo2: {
    titulo: "Visualização Multi-plataforma",
    acoes: [
      { nome: "Mobile View", icon: Monitor },
      { nome: "Radiant", icon: Monitor },
      { nome: "Weasis", icon: Monitor },
      { nome: "Osirix/Horos", icon: Monitor },
    ],
  },
  grupo3: {
    titulo: "Compartilhamento",
    acoes: [
      { nome: "Enviar exame", icon: Send },
    ],
  },
  grupo4: {
    titulo: "Marcação",
    acoes: [
      { nome: "Marcar como interessante", icon: Star },
    ],
  },
  grupo5: {
    titulo: "Histórico",
    acoes: [
      { nome: "Exame anterior do paciente", icon: History },
    ],
  },
  grupo6: {
    titulo: "Auditoria",
    acoes: [
      { nome: "Histórico de unidades/movimentações", icon: History },
      { nome: "Exibir logs detalhados", icon: FileSearch },
    ],
  },
  grupo7: {
    titulo: "Edição",
    acoes: [
      { nome: "Editar dados do exame", icon: Edit },
      { nome: "Cancelar exame", icon: XCircle },
    ],
  },
};

// Dados do Modal do Paciente
export const modalPacienteCampos = {
  dadosPessoais: [
    "Nome completo",
    "Data de nascimento",
    "Sexo",
    "Idade calculada",
    "CPF",
    "RG",
    "Nacionalidade",
    "Estado civil",
  ],
  dadosContato: [
    "Telefone residencial",
    "Telefone celular",
    "Telefone comercial",
    "E-mail",
    "Endereço completo (rua, número, complemento, bairro, cidade, estado, CEP)",
  ],
  dadosClinicos: [
    "Convênio/Plano de saúde",
    "Número de matrícula",
    "Alergias",
    "Medicações em uso",
    "Histórico clínico",
    "Observações gerais",
  ],
  informacoesExame: [
    "Accession Number (identificador único crítico)",
    "Data do exame",
    "Hora do exame",
    "Modalidade",
    "Médico solicitante",
    "Unidade de realização",
    "Indicação clínica",
  ],
  historicoExames: [
    "Lista de exames prévios",
    "Data, modalidade, tipo, status, resultado",
    "Acesso rápido para comparação",
  ],
  acoesDisponiveis: [
    "Editar dados",
    "Visualizar histórico completo",
    "Imprimir",
    "Exportar",
  ],
};

// Funcionalidades do Editor de Laudos
export const editorLaudos = {
  formatacao: [
    "Editor de texto rico completo",
    "Formatação: negrito, itálico, sublinhado",
    "Cores de texto e fundo",
    "Alinhamento",
    "Listas",
  ],
  mascaras: [
    "Criar nova máscara",
    "Associar a modalidade específica",
    "Associar a classificação (BI-RADS, TI-RADS)",
    "Associar a sexo do paciente",
    "Inserir imagens nos templates",
    "Biblioteca de imagens cadastradas",
    "Upload de arquivos",
  ],
  audio: [
    "Gravação de voz",
    "Indicador visual de áudio",
    "Reprodução",
    "Transcrição automática (via IA)",
  ],
  assinatura: [
    "Upload de modelo de assinatura",
    "Integração com SafeID",
    "Certificado digital",
  ],
};

// Campos editáveis do exame
export const camposEditaveisExame = [
  "Descrição do estudo",
  "Tipo de estudo/modalidade",
  "Lateralidade (Direito, Esquerdo, Bilateral)",
  "Indicador de oncologia",
  "Prioridade",
  "Convênio",
  "Data de transferência",
  "Data e hora de recebimento",
  "Comentários",
  "Anexos",
];

// Features principais do RIS
export const risFeatures: Array<{
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    titulo: "Worklist Inteligente",
    descricao: "Lista de exames com 14 colunas de informação, ordenação e paginação.",
    icon: ClipboardList,
  },
  {
    titulo: "10+ Filtros Rápidos",
    descricao: "Filtros por status, prioridade, SLA, unidade, médico e muito mais.",
    icon: Filter,
  },
  {
    titulo: "Ações Contextuais",
    descricao: "Menu com 7 grupos de ações: visualização, compartilhamento, auditoria.",
    icon: MousePointer,
  },
  {
    titulo: "Modal do Paciente",
    descricao: "Dados demográficos completos, histórico e Accession Number.",
    icon: User,
  },
  {
    titulo: "Editor de Laudos",
    descricao: "Editor rico com máscaras, BI-RADS, transcrição de áudio e assinatura.",
    icon: FileText,
  },
  {
    titulo: "Gravação de Áudio",
    descricao: "Ditado por voz com transcrição automática via IA.",
    icon: Mic,
  },
];
