// Tamanho do mercado
export const tamanhoMercado = {
  global2026: "US$ 5,8 bilhões",
  projecao2035: "US$ 8,2 bilhões",
  cagr: "3,8%",
  specialtyPacs: {
    atual: "US$ 3,9 bi",
    projecao: "US$ 6,7 bi",
    cagr: "6%",
  },
};

// Principais concorrentes
export const concorrentes = [
  { empresa: "Siemens Healthineers", participacao: "19%", posicao: "Líder", tipo: "Global" },
  { empresa: "GE Healthcare", participacao: "16%", posicao: "2º", tipo: "Global" },
  { empresa: "Philips Healthcare", participacao: "~10%", posicao: "3º", tipo: "Global" },
  { empresa: "Carestream Health", participacao: "~8%", posicao: "4º", tipo: "Global" },
  { empresa: "Agfa-Gevaert", participacao: "~7%", posicao: "5º", tipo: "Global" },
  { empresa: "Fujifilm", participacao: "~6%", posicao: "6º", tipo: "Global" },
  { empresa: "Pixeon", participacao: "Regional", posicao: "-", tipo: "Brasil" },
  { empresa: "Orus/Horustech", participacao: "Regional", posicao: "-", tipo: "Brasil" },
];

// Tendências 2026
export const tendencias = [
  {
    tendencia: "IA na Radiologia",
    descricao: "Inteligência artificial para suporte à decisão diagnóstica",
    impacto: "Alto",
  },
  {
    tendencia: "Demanda por Subespecialistas",
    descricao: "Crescente necessidade de radiologistas especializados",
    impacto: "Alto",
  },
  {
    tendencia: "Cloud-Native PACS",
    descricao: "Migração para soluções baseadas em nuvem",
    impacto: "Alto",
  },
  {
    tendencia: "Integração de Dados",
    descricao: "Convergência HIS/RIS/EMR em plataformas unificadas",
    impacto: "Médio",
  },
  {
    tendencia: "Telerradiologia",
    descricao: "Expansão de serviços de laudo remoto",
    impacto: "Alto",
  },
  {
    tendencia: "Interoperabilidade",
    descricao: "Padrões abertos e troca de dados entre sistemas",
    impacto: "Médio",
  },
];

// Análise SWOT
export const analiseSWOT = {
  forcas: [
    "Plataforma moderna com IA integrada",
    "Suporte a 14 modalidades",
    "Interface intuitiva e responsiva",
    "Telerradiologia desenvolvida",
    "Arquitetura híbrida (local + nuvem)",
    "Conformidade TISS/TUSS",
  ],
  fraquezas: [
    "Menor market share global",
    "Documentação técnica limitada",
    "Base instalada menor que concorrentes",
    "Menor reconhecimento de marca",
  ],
  oportunidades: [
    "Mercado brasileiro em crescimento",
    "Déficit de radiologistas no Brasil",
    "Adoção crescente de IA em saúde",
    "Expansão da telemedicina pós-pandemia",
    "Necessidade de modernização de PACS legados",
    "Consolidação de clínicas e hospitais",
  ],
  ameacas: [
    "Consolidação de mercado por grandes players",
    "Concorrentes cloud-native internacionais",
    "Regulamentação crescente (LGPD, ANVISA)",
    "Pressão por redução de custos na saúde",
    "Entrada de Big Techs no mercado de saúde",
  ],
};

// Dados de mercado Brasil
export const mercadoBrasil = {
  totalHospitais: "6.700+",
  clinicasRadiologia: "8.000+",
  radiologistasAtivos: "~15.000",
  deficitRadiologistas: "Estimado em 30-40%",
  crescimentoAnual: "8-12%",
  penetracaoDigital: "~60%",
};

// Diferenciais competitivos
export const diferenciaisCompetitivos = [
  {
    diferencial: "IA Integrada",
    descricao: "8 funcionalidades de IA nativas no sistema",
    valor: "Produtividade +40%",
  },
  {
    diferencial: "Arquitetura Híbrida",
    descricao: "Operação local + nuvem com failover automático",
    valor: "Disponibilidade 99.9%",
  },
  {
    diferencial: "Multi-modalidade",
    descricao: "Suporte a 14 tipos de exames em uma única plataforma",
    valor: "Consolidação de sistemas",
  },
  {
    diferencial: "Conformidade ANS",
    descricao: "TISS/TUSS nativo para faturamento",
    valor: "Redução de glosas",
  },
  {
    diferencial: "Telerradiologia",
    descricao: "Plataforma completa para laudos remotos",
    valor: "Expansão geográfica",
  },
];
