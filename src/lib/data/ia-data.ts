import { 
  FileText, Eye, CheckCircle, Mic, MessageSquare, 
  Users, Sparkles, Languages, type LucideIcon 
} from "lucide-react";

// 8 Funcionalidades de IA
export const funcionalidadesIA: Array<{
  id: string;
  nome: string;
  descricao: string;
  detalhes: string;
  icon: LucideIcon;
  configuravel: boolean;
}> = [
  {
    id: "resumo-exames",
    nome: "Resumo de Exames Anteriores",
    descricao: "Resume histórico do paciente",
    detalhes: "Analisa todos os exames anteriores do paciente e gera um resumo inteligente com os principais achados, facilitando a comparação e acompanhamento da evolução clínica.",
    icon: FileText,
    configuravel: true,
  },
  {
    id: "analista-imagens",
    nome: "Analista de Imagens",
    descricao: "Detecta achados em imagens",
    detalhes: "Utiliza modelos de machine learning para detectar automaticamente achados relevantes em imagens médicas, como nódulos, fraturas, massas e outras alterações.",
    icon: Eye,
    configuravel: true,
  },
  {
    id: "revisia",
    nome: "RevisIA",
    descricao: "Assistente revisão de laudos",
    detalhes: "Revisa laudos antes da assinatura, verificando inconsistências, termos técnicos, e sugerindo melhorias na redação para maior clareza e precisão.",
    icon: CheckCircle,
    configuravel: true,
  },
  {
    id: "ditar-texto",
    nome: "Ditar Laudo - Texto",
    descricao: "Transcrição de áudio para texto",
    detalhes: "Converte automaticamente a gravação de voz do radiologista em texto formatado, aplicando correções gramaticais e estruturando o laudo de acordo com o template selecionado.",
    icon: Mic,
    configuravel: true,
  },
  {
    id: "ditar-voz",
    nome: "Ditar Laudo - Voz",
    descricao: "Gravação com processamento",
    detalhes: "Sistema de gravação de voz com processamento em tempo real, reconhecimento de comandos de voz para formatação e inserção de estruturas no laudo.",
    icon: MessageSquare,
    configuravel: true,
  },
  {
    id: "peer-review",
    nome: "Peer Review",
    descricao: "Revisão por pares assistida",
    detalhes: "Facilita o processo de revisão por pares, comparando laudos de diferentes radiologistas e identificando discrepâncias que necessitam de discussão.",
    icon: Users,
    configuravel: true,
  },
  {
    id: "ortografia",
    nome: "Ortografia",
    descricao: "Correção ortográfica automática",
    detalhes: "Verifica e corrige automaticamente erros de ortografia e gramática em tempo real durante a redação do laudo, utilizando dicionário médico especializado.",
    icon: Sparkles,
    configuravel: true,
  },
  {
    id: "traducao",
    nome: "Tradução",
    descricao: "Tradução de laudos",
    detalhes: "Traduz laudos entre português, inglês e espanhol, mantendo a terminologia médica correta e a estrutura do documento original.",
    icon: Languages,
    configuravel: true,
  },
];

// Configurações por funcionalidade de IA
export const configuracoesIA = [
  "Habilitação/desabilitação individual",
  "Seleção de modelo de IA",
  "Configuração de prompts customizados",
  "Gerenciamento de credenciais",
  "Ajuste de sensibilidade",
  "Integração com APIs externas",
];

// Modelos de IA disponíveis
export const modelosIA = [
  { nome: "GPT-4", provider: "OpenAI", uso: "Texto e revisão" },
  { nome: "Claude", provider: "Anthropic", uso: "Texto e análise" },
  { nome: "Whisper", provider: "OpenAI", uso: "Transcrição de áudio" },
  { nome: "Med-PaLM", provider: "Google", uso: "Análise médica" },
  { nome: "Custom Models", provider: "Interno", uso: "Análise de imagens" },
];

// Benefícios da IA
export const beneficiosIA = [
  {
    titulo: "Produtividade",
    descricao: "Redução de 40-60% no tempo de elaboração de laudos",
  },
  {
    titulo: "Qualidade",
    descricao: "Detecção automática de inconsistências e erros",
  },
  {
    titulo: "Padronização",
    descricao: "Laudos mais consistentes e estruturados",
  },
  {
    titulo: "Acessibilidade",
    descricao: "Suporte multi-idioma para pacientes internacionais",
  },
];
