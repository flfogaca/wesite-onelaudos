import { 
  User, Search, Layout, FileText, Building2, 
  DollarSign, Plug, Brain, Star, type LucideIcon 
} from "lucide-react";

// 9 Abas de preferências do usuário
export const abasPreferencias: Array<{
  id: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon;
  campos: string[];
}> = [
  {
    id: "informacoes-pessoais",
    titulo: "Informações Pessoais",
    descricao: "Dados do perfil do usuário",
    icon: User,
    campos: [
      "Foto do usuário",
      "Nome completo",
      "E-mail",
      "CRM",
      "Estado",
      "Data de nascimento",
      "Sexo",
      "Telefone",
      "CPF",
      "Assinatura digital",
      "Alteração de senha",
      "Logs de alteração",
    ],
  },
  {
    id: "pesquisa-padrao",
    titulo: "Pesquisa Padrão",
    descricao: "Configurações de busca e filtros",
    icon: Search,
    campos: [
      "Modalidades padrão",
      "Prioridades padrão",
      "Período padrão (24h a 90d)",
      "Visualizar: todos, meus, meus + livre",
      "Ignorar filtro em assinados",
      "Exames anteriores: mesmo nome ou semelhantes",
    ],
  },
  {
    id: "interface",
    titulo: "Interface",
    descricao: "Personalização da interface",
    icon: Layout,
    campos: [
      "Exibir contadores",
      "Exibir todas as modalidades",
      "Exibir barra de favoritos",
      "Pesquisar nome sem filtro data",
      "Bloquear compartilhamento máscara",
      "Habilitar novo gravador áudio",
      "Seleção de visualizador DICOM",
      "Idioma padrão (PT, EN, ES)",
      "Exames por página",
    ],
  },
  {
    id: "minhas-mascaras",
    titulo: "Minhas Máscaras",
    descricao: "Templates de laudos",
    icon: FileText,
    campos: [
      "Criar nova máscara",
      "Editor de texto rico",
      "Inserção de imagens",
      "Seleção de modalidade",
      "Seleção BI-RADS/TI-RADS",
      "Seleção por sexo",
      "Upload de arquivo",
      "Biblioteca de imagens",
    ],
  },
  {
    id: "unidades",
    titulo: "Unidades",
    descricao: "Gerenciamento de unidades",
    icon: Building2,
    campos: [
      "Gerenciamento de unidades de atendimento",
      "Vinculação a unidades",
      "Configuração de acesso por unidade",
    ],
  },
  {
    id: "cadastrar-valores",
    titulo: "Cadastrar Valores",
    descricao: "Valores customizados",
    icon: DollarSign,
    campos: [
      "Valores customizados",
      "Tabelas de preços",
      "Configurações de cobrança",
    ],
  },
  {
    id: "servicos-integracoes",
    titulo: "Serviços/Integrações",
    descricao: "Integrações externas",
    icon: Plug,
    campos: [
      "SafeID",
      "Revogar tokens",
      "Configuração de APIs",
      "Webhooks",
    ],
  },
  {
    id: "inteligencia-artificial",
    titulo: "Inteligência Artificial",
    descricao: "Configurações de IA",
    icon: Brain,
    campos: [
      "8 funcionalidades configuráveis",
      "Configuração de prompts",
      "Seleção de modelos",
      "Credenciais de API",
    ],
  },
  {
    id: "favoritos",
    titulo: "Favoritos",
    descricao: "Gerenciamento de favoritos",
    icon: Star,
    campos: [
      "Gerenciamento de favoritos",
      "Máscaras favoritas",
      "Exames favoritos",
      "Atalhos personalizados",
    ],
  },
];

// Idiomas suportados
export const idiomasSuportados = [
  { codigo: "PT", nome: "Português (Brasil)" },
  { codigo: "EN", nome: "English (US)" },
  { codigo: "ES", nome: "Español" },
];

// Opções de exames por página
export const examesPorPagina = [10, 25, 50, 100];

// Períodos de filtro padrão
export const periodosFiltro = [
  { valor: "24h", label: "Últimas 24 horas" },
  { valor: "48h", label: "Últimas 48 horas" },
  { valor: "7d", label: "Últimos 7 dias" },
  { valor: "30d", label: "Últimos 30 dias" },
  { valor: "60d", label: "Últimos 60 dias" },
  { valor: "90d", label: "Últimos 90 dias" },
];

// Classificações de laudo
export const classificacoesLaudo = [
  { nome: "BI-RADS", descricao: "Breast Imaging Reporting and Data System", modalidades: ["MG", "US"] },
  { nome: "TI-RADS", descricao: "Thyroid Imaging Reporting and Data System", modalidades: ["US"] },
  { nome: "LI-RADS", descricao: "Liver Imaging Reporting and Data System", modalidades: ["CT", "MR"] },
  { nome: "PI-RADS", descricao: "Prostate Imaging Reporting and Data System", modalidades: ["MR"] },
  { nome: "Lung-RADS", descricao: "Lung CT Screening Reporting and Data System", modalidades: ["CT"] },
];
