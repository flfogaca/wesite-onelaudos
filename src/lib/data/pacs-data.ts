import { 
  Monitor, Eye, Ruler, MessageSquare, Navigation, HardDrive, Cloud, 
  Zap, Server, Database, Shield, type LucideIcon
} from "lucide-react";

// Modalidades radiológicas
export const modalidades = [
  { codigo: "MR", nome: "Ressonância Magnética", descricao: "Exames de ressonância" },
  { codigo: "CT", nome: "Tomografia Computadorizada", descricao: "Tomografias" },
  { codigo: "CR", nome: "Radiografia Computadorizada", descricao: "Raio-X digital computadorizado" },
  { codigo: "DX", nome: "Radiografia Digital", descricao: "Raio-X digital convencional" },
  { codigo: "US", nome: "Ultrassom", descricao: "Ultrassonografia" },
  { codigo: "MG", nome: "Mamografia", descricao: "Exames de mama" },
  { codigo: "OT", nome: "Outros", descricao: "Outras modalidades" },
  { codigo: "XA", nome: "Angiografia", descricao: "Exames vasculares" },
  { codigo: "CP", nome: "Cintilografia", descricao: "Medicina nuclear" },
  { codigo: "NM", nome: "Medicina Nuclear", descricao: "Exames nucleares" },
  { codigo: "ES", nome: "Endoscopia", descricao: "Exames endoscópicos" },
  { codigo: "EEG", nome: "Eletroencefalograma", descricao: "Atividade cerebral" },
  { codigo: "ECG", nome: "Eletrocardiograma", descricao: "Atividade cardíaca" },
  { codigo: "BMD", nome: "Densitometria", descricao: "Densidade óssea" },
];

// Ferramentas do Viewer DICOM
export const viewerTools = {
  visualizacao: [
    { nome: "Zoom (in/out)", descricao: "Ampliação e redução da imagem" },
    { nome: "Pan (movimento/arraste)", descricao: "Movimentação da imagem na tela" },
    { nome: "Window/Level", descricao: "Ajuste de contraste e brilho" },
    { nome: "Rotação de imagem", descricao: "Rotacionar imagem em qualquer ângulo" },
    { nome: "Inversão de cores", descricao: "Inverter tons claros/escuros" },
    { nome: "Navegação de séries", descricao: "Navegar entre diferentes séries" },
  ],
  medicao: [
    { nome: "Distância (régua)", descricao: "Medir distância entre dois pontos" },
    { nome: "Área (círculo, polígono)", descricao: "Calcular área de regiões" },
    { nome: "Ângulo", descricao: "Medir ângulos entre linhas" },
    { nome: "ROI (Region of Interest)", descricao: "Delimitar região de interesse" },
  ],
  anotacao: [
    { nome: "Setas direcionais", descricao: "Indicar estruturas específicas" },
    { nome: "Texto livre", descricao: "Adicionar anotações textuais" },
    { nome: "Círculos e retângulos", descricao: "Formas geométricas" },
    { nome: "Marcadores", descricao: "Pontos de referência" },
  ],
  navegacao: [
    { nome: "Rolagem de imagens (scroll)", descricao: "Navegar entre cortes" },
    { nome: "Comparação de séries", descricao: "Visualizar múltiplas séries lado a lado" },
    { nome: "MPR (Multiplanar Reconstruction)", descricao: "Reconstrução multiplanar" },
    { nome: "Cine Loop", descricao: "Imagens em movimento" },
  ],
};

// Visualizadores externos
export const visualizadoresExternos = [
  { 
    nome: "Mobilemed Viewer", 
    plataforma: "Web", 
    tipo: "Browser", 
    uso: "Nativo do sistema",
    descricao: "Visualizador web integrado ao sistema"
  },
  { 
    nome: "Radiant", 
    plataforma: "Windows/Mac/Linux", 
    tipo: "Desktop", 
    uso: "Profissional",
    descricao: "Visualizador profissional multi-plataforma"
  },
  { 
    nome: "Weasis", 
    plataforma: "Web", 
    tipo: "Browser", 
    uso: "Open source",
    descricao: "Visualizador web de código aberto"
  },
  { 
    nome: "Osirix/Horos", 
    plataforma: "macOS", 
    tipo: "Desktop", 
    uso: "Padrão Mac",
    descricao: "Visualizador padrão para macOS"
  },
  { 
    nome: "Mobile View", 
    plataforma: "iOS/Android", 
    tipo: "App", 
    uso: "Acesso mobile",
    descricao: "Aplicativo para dispositivos móveis"
  },
];

// Ações do menu contextual para visualizadores
export const acoesVisualizadores = [
  { id: "btn-abrir-mobileview", nome: "Mobile View", descricao: "Abre em dispositivo móvel" },
  { id: "btn-abrir-radiant", nome: "Radiant", descricao: "Abre no Radiant" },
  { id: "btn-abrir-weasis", nome: "Weasis", descricao: "Abre no Weasis" },
  { id: "btn-abrir-osirix-horos", nome: "Osirix/Horos", descricao: "Abre no Osirix/Horos" },
];

// Modelo de armazenamento híbrido
export const armazenamentoHibrido = {
  brokerLocal: {
    titulo: "Broker Local (Edge Node)",
    descricao: "Software local para DICOM e cache",
    caracteristicas: [
      "Instalado em cada hospital/unidade",
      "Recebe imagens dos equipamentos DICOM",
      "Cache de exames recentes para acesso rápido",
      "Operação offline (sem internet)",
      "Sincronização em background com nuvem",
    ],
    tecnologias: ["dcm4che", "Orthanc", "Node.js"],
  },
  plataformaNuvem: {
    titulo: "Plataforma em Nuvem",
    descricao: "Aplicação web em cloud",
    caracteristicas: [
      "Armazenamento de longo prazo",
      "Acesso remoto para telerradiologia",
      "Processamento de IA",
      "Backup e disaster recovery",
      "Escalabilidade multi-tenant",
    ],
    tecnologias: ["Kubernetes", "Docker", "Python", "React"],
  },
  storageTiers: [
    { nome: "Hot", descricao: "Exames recentes (SSD local)", periodo: "0-30 dias" },
    { nome: "Warm", descricao: "Exames de 30-90 dias", periodo: "30-90 dias" },
    { nome: "Cold", descricao: "Arquivo histórico (object storage)", periodo: "90+ dias" },
  ],
};

// Features principais do PACS
export const pacsFeatures: Array<{
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}> = [
  {
    titulo: "Armazenamento DICOM",
    descricao: "Armazenamento seguro de imagens médicas no padrão DICOM com modelo híbrido local + nuvem.",
    icon: Database,
  },
  {
    titulo: "Viewer Avançado",
    descricao: "Visualizador web com ferramentas de análise, medição, anotação e reconstrução MPR.",
    icon: Eye,
  },
  {
    titulo: "14 Modalidades",
    descricao: "Suporte completo para MR, CT, CR, DX, US, MG, XA, CP, NM, ES, EEG, ECG, BMD e outros.",
    icon: Monitor,
  },
  {
    titulo: "Múltiplos Visualizadores",
    descricao: "Integração com Radiant, Weasis, Osirix/Horos e visualizador mobile nativo.",
    icon: Zap,
  },
  {
    titulo: "Cache Local",
    descricao: "Broker local com cache inteligente para acesso rápido mesmo sem internet.",
    icon: HardDrive,
  },
  {
    titulo: "Nuvem Escalável",
    descricao: "Armazenamento em nuvem com tiers hot/warm/cold e disaster recovery.",
    icon: Cloud,
  },
];
