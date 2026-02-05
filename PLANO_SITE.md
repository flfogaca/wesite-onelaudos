---
name: Site PACS RIS HIS
overview: Site de documentacao tecnica completo em Next.js consolidando todos os levantamentos de funcionalidades PACS/RIS/HIS para referencia da equipe de desenvolvimento. Merge de 10 arquivos markdown com +3000 linhas de especificacoes.
todos:
  - id: setup
    content: Criar projeto Next.js 14 com Tailwind, Framer Motion, Lucide Icons e configurar tema dark mode
    status: completed
  - id: layout
    content: Criar layout base com Header mega-menu, Sidebar navegacao e Footer
    status: completed
  - id: components
    content: Desenvolver 15+ componentes reutilizaveis (FeatureCard, Accordion, DataTable, FlowDiagram, StatCounter, TabPanel, etc)
    status: completed
  - id: data-layer
    content: Criar camada de dados TypeScript com todas as funcionalidades extraidas dos markdowns
    status: completed
  - id: home
    content: Criar pagina Home com Hero, visao geral dos 3 sistemas, stats e navegacao rapida
    status: completed
  - id: pacs-pages
    content: Criar 5 subpaginas PACS (Overview, Viewer DICOM, Modalidades, Visualizadores Externos, Armazenamento)
    status: completed
  - id: ris-pages
    content: Criar 6 subpaginas RIS (Overview, Worklist, Filtros, Acoes por Exame, Modal Paciente, Laudos)
    status: completed
  - id: his-pages
    content: Criar 4 subpaginas HIS (Overview, Usuarios/RBAC, TISS-TUSS, Portal Paciente)
    status: completed
  - id: config-pages
    content: Criar paginas de Configuracoes (9 abas de preferencias do usuario detalhadas)
    status: completed
  - id: ia-page
    content: Criar pagina de IA com 8 funcionalidades detalhadas e configuracao de prompts
    status: completed
  - id: arquitetura-page
    content: Criar pagina Arquitetura com diagramas do modelo hibrido e componentes tecnicos
    status: completed
  - id: admin-page
    content: Criar pagina de funcionalidades administrativas (lado oculto do PACS)
    status: completed
  - id: seguranca-page
    content: Criar pagina de Seguranca (auditoria, logs, assinatura digital, LGPD/HIPAA)
    status: completed
  - id: integracao-page
    content: Criar pagina de Integracoes (TISS/TUSS, HL7, DICOM, SafeID, APIs)
    status: completed
  - id: mercado-page
    content: Criar pagina de Analise de Mercado (tamanho, concorrentes, SWOT, tendencias)
    status: completed
  - id: fluxos-page
    content: Criar pagina de Fluxos de Trabalho (jornada radiologista e administrativo)
    status: completed
  - id: roadmap-page
    content: Criar pagina de Roadmap (3 fases de implementacao)
    status: completed
  - id: polish
    content: Adicionar animacoes, responsividade mobile, SEO e preparar deploy Vercel
    status: completed
isProject: false
---

# Documentacao Tecnica Completa - Plataforma PACS/RIS/HIS

## Objetivo do Projeto

Criar um site de documentacao tecnica que consolida **10 arquivos markdown** com mais de **3.000 linhas** de especificacoes funcionais, servindo como referencia completa para a equipe de desenvolvimento.

**Fontes de Dados (Arquivos Markdown):**

- `Blueprint_PACS_RIS_HIS.md` - Arquitetura e roadmap
- `compilacao_total.md` - Funcionalidades detalhadas (1168 linhas)
- `analise_funcionalidades_detalhada.md` - Analise explicita/implicita
- `analise_problema_multiplos_pacs.md` - TISS/TUSS e multiplos PACS
- `Relatorio_Estrategico_Lado_Oculto_PACS.md` - Funcionalidades admin ocultas
- `pesquisa_pacs_admin.md` - Funcionalidades enterprise
- `funcionalidades_mobilemed.md` - Sistema One Laudos
- `Relatorio_Funcionalidades_Mobilemed.md` - Relatorio funcional
- `Relatorio_Completo_Funcionalidades_Mobilemed.md` - Relatorio completo
- `Relatorio_Analise_Detalhada_Mobilemed.md` - Analise detalhada

---

## Estrutura Completa de Paginas (20+ paginas)

```
/                           -> Home: Visao geral + navegacao
│
├── /pacs                   -> PACS Overview
│   ├── /pacs/viewer        -> Viewer DICOM (ferramentas detalhadas)
│   ├── /pacs/modalidades   -> 14 Modalidades radiologicas
│   ├── /pacs/visualizadores -> Radiant, Weasis, Osirix, Mobile
│   └── /pacs/armazenamento -> Cache local + nuvem
│
├── /ris                    -> RIS Overview
│   ├── /ris/worklist       -> Listagem de exames
│   ├── /ris/filtros        -> 10 filtros rapidos + avancados
│   ├── /ris/acoes-exame    -> Menu contextual (7 grupos)
│   ├── /ris/modal-paciente -> Dados demograficos + Accession
│   └── /ris/laudos         -> Editor + mascaras + audio
│
├── /his                    -> HIS Overview
│   ├── /his/usuarios       -> RBAC e perfis (8 tipos)
│   ├── /his/tiss-tuss      -> Integracao faturamento
│   └── /his/portal         -> Paciente e medico solicitante
│
├── /configuracoes          -> 9 abas de preferencias
│
├── /inteligencia-artificial -> 8 funcionalidades de IA
│
├── /arquitetura            -> Modelo hibrido + componentes
│
├── /administracao          -> Funcionalidades ocultas (Root/Admin)
│
├── /seguranca              -> Auditoria, logs, compliance
│
├── /integracoes            -> TISS/TUSS, HL7, DICOM, APIs
│
├── /fluxos-trabalho        -> Jornadas (radiologista + admin)
│
├── /mercado                -> Analise competitiva + SWOT
│
└── /roadmap                -> Fases de implementacao
```

---

## CONTEUDO DETALHADO POR PAGINA

### HOME (/)

**Fonte:** Todos os arquivos (consolidacao)

**Secoes:**

- Hero com headline "Plataforma Integrada de Radiologia"
- Cards dos 3 pilares: PACS, RIS, Mini HIS
- Stats animados:
  - 14 modalidades radiologicas
  - 8 funcionalidades de IA
  - 3 idiomas suportados
  - 10+ filtros de worklist
  - 5 visualizadores DICOM
  - 8 perfis de usuario
- Diagrama visual da arquitetura hibrida
- Navegacao rapida para todas as secoes

---

### PACS - OVERVIEW (/pacs)

**Fonte:** `Blueprint_PACS_RIS_HIS.md`, `compilacao_total.md`

**Conteudo:**

- Definicao de PACS (Picture Archiving and Communication System)
- Funcionalidades core:
  - Armazenamento seguro de imagens DICOM
  - Visualizacao com ferramentas de analise
  - Gerenciamento do ciclo de vida do exame
  - Integracao com equipamentos de imagem

---

### PACS - VIEWER DICOM (/pacs/viewer)

**Fonte:** `compilacao_total.md` linhas 342-348, 533-543

**Conteudo Detalhado:**

**Ferramentas de Visualizacao:**

- Zoom (in/out)
- Pan (movimento/arraste)
- Window/Level (ajuste de contraste/brilho)
- Rotacao de imagem
- Inversao de cores
- Navegacao de series

**Ferramentas de Medicao:**

- Distancia (regua)
- Area (circulo, poligono)
- Angulo
- ROI (Region of Interest)

**Ferramentas de Anotacao:**

- Setas direcionais
- Texto livre
- Circulos e retangulos
- Marcadores

**Navegacao:**

- Rolagem de imagens (scroll)
- Comparacao de series
- MPR (Multiplanar Reconstruction)
- Cine Loop (imagens em movimento)

---

### PACS - MODALIDADES (/pacs/modalidades)

**Fonte:** `compilacao_total.md` linhas 25-26

**Tabela das 14 Modalidades:**


| Codigo | Nome Completo               | Descricao                      |
| ------ | --------------------------- | ------------------------------ |
| MR     | Ressonancia Magnetica       | Exames de ressonancia          |
| CT     | Tomografia Computadorizada  | Tomografias                    |
| CR     | Radiografia Computadorizada | Raio-X digital computadorizado |
| DX     | Radiografia Digital         | Raio-X digital convencional    |
| US     | Ultrassom                   | Ultrassonografia               |
| MG     | Mamografia                  | Exames de mama                 |
| OT     | Outros                      | Outras modalidades             |
| XA     | Angiografia                 | Exames vasculares              |
| CP     | Cintilografia               | Medicina nuclear               |
| NM     | Medicina Nuclear            | Exames nucleares               |
| ES     | Endoscopia                  | Exames endoscopicos            |
| EEG    | Eletroencefalograma         | Atividade cerebral             |
| ECG    | Eletrocardiograma           | Atividade cardiaca             |
| BMD    | Densitometria               | Densidade ossea                |


---

### PACS - VISUALIZADORES EXTERNOS (/pacs/visualizadores)

**Fonte:** `compilacao_total.md` linhas 957-1020

**Tabela de Integracao:**


| Visualizador     | Plataforma        | Tipo    | Uso               |
| ---------------- | ----------------- | ------- | ----------------- |
| Mobilemed Viewer | Web               | Browser | Nativo do sistema |
| Radiant          | Windows/Mac/Linux | Desktop | Profissional      |
| Weasis           | Web               | Browser | Open source       |
| Osirix/Horos     | macOS             | Desktop | Padrao Mac        |
| Mobile View      | iOS/Android       | App     | Acesso mobile     |


**Acoes do Menu Contextual:**

- `btn-abrir-mobileview` - Abre em mobile
- `btn-abrir-radiant` - Abre no Radiant
- `btn-abrir-weasis` - Abre no Weasis
- `btn-abrir-osirix-horos` - Abre no Osirix/Horos

---

### PACS - ARMAZENAMENTO (/pacs/armazenamento)

**Fonte:** `Blueprint_PACS_RIS_HIS.md`, `Relatorio_Estrategico_Lado_Oculto_PACS.md`

**Modelo Hibrido:**

**Broker Local (Edge Node):**

- Instalado em cada hospital/unidade
- Recebe imagens dos equipamentos DICOM
- Cache de exames recentes para acesso rapido
- Operacao offline (sem internet)
- Sincronizacao em background com nuvem

**Plataforma em Nuvem:**

- Armazenamento de longo prazo
- Acesso remoto para telerradiologia
- Processamento de IA
- Backup e disaster recovery
- Escalabilidade multi-tenant

**Storage Tiers:**

- Hot: Exames recentes (SSD local)
- Warm: Exames de 30-90 dias
- Cold: Arquivo historico (object storage)

---

### RIS - OVERVIEW (/ris)

**Fonte:** `Blueprint_PACS_RIS_HIS.md`, `compilacao_total.md`

**Conteudo:**

- Definicao de RIS (Radiology Information System)
- Funcionalidades core:
  - Worklist de exames
  - Dados demograficos do paciente
  - Accession Number como identificador
  - Gerenciamento de prioridades e SLA
  - Historico de exames

---

### RIS - WORKLIST (/ris/worklist)

**Fonte:** `compilacao_total.md` linhas 11-130

**Estrutura da Linha de Exame:**


| Coluna          | Informacao           | Acao                    |
| --------------- | -------------------- | ----------------------- |
| Checkbox        | Selecao individual   | Acoes em massa          |
| Modalidade      | MG, MR, CT, etc.     | Filtro por clique       |
| Status Visual   | Icone colorido       | Indicador               |
| Idade           | Anos do paciente     | -                       |
| Nome Paciente   | Clicavel             | Abre modal demografica  |
| Tipo Estudo     | Descricao            | Abre detalhes           |
| Data/Hora       | Recebimento          | Filtro por data         |
| Tempo Decorrido | "ha 18 min"          | -                       |
| Prioridade      | Badge colorido       | Altera prioridade       |
| Prazo           | Data/hora SLA        | -                       |
| Medico          | Nome responsavel     | Abre info medico        |
| Unidade         | Local                | Filtro por unidade      |
| Status          | A preparar, Assinado | -                       |
| Series/Imagens  | "4 / 1166"           | -                       |
| Acoes           | 6 botoes             | Viewer, Audio, QR, etc. |


**Funcionalidades de Ordenacao:**

- Mais antigos primeiro
- Mais recentes primeiro
- Por SLA (prazo de entrega)

**Paginacao:**

- Registros por pagina: 10, 25, 50, 100
- Navegacao anterior/proxima
- Indicador de pagina atual

---

### RIS - FILTROS (/ris/filtros)

**Fonte:** `compilacao_total.md` linhas 13-49, 214-226

**10 Filtros Rapidos de Status:**


| Filtro       | Descricao               | Cor             |
| ------------ | ----------------------- | --------------- |
| Digitado     | Exames digitados        | -               |
| A Preparar   | Em preparacao           | Amarelo         |
| Reconvocar   | Necessita reconvocacao  | Laranja         |
| Pendencias   | Com pendencias          | Vermelho        |
| Internado    | Pacientes internados    | Azul            |
| Plantao      | Exames de plantao       | Roxo            |
| Emergencias  | Maxima urgencia         | Vermelho escuro |
| Urgencias    | Alta prioridade         | Laranja         |
| Ambulatorios | Pacientes ambulatoriais | Verde           |
| Meus Exames  | Do usuario logado       | Azul            |


**Filtros por Atributos:**

- Unidade de atendimento
- Medico responsavel
- Data (24h, 48h, 7d, 30d, 60d, 90d)
- Achado critico
- SLA
- Exames assinados
- Descricao do estudo (busca textual)
- Nome do paciente (busca textual)
- Audio anexado

**Filtros Avancados (Modal):**

- Periodo customizado
- Data de transferencia
- Data de recebimento
- Convenio/Plano
- Status do exame
- Visualizar todos vs meus exames

---

### RIS - ACOES POR EXAME (/ris/acoes-exame)

**Fonte:** `compilacao_total.md` linhas 531-595, 945-1078

**6 Botoes de Acao Rapida:**


| Botao        | Index                     | Funcao              |
| ------------ | ------------------------- | ------------------- |
| Viewer DICOM | btn-viewer-[ID]           | Abre visualizador   |
| Audio        | btn-mic-lista             | Gravacao/reproducao |
| QR Code      | btn-qrcode                | Gera protocolo      |
| Comentarios  | btn-open-modal-comentario | Anotacoes           |
| Anexos       | -                         | Upload arquivos     |
| Menu Opcoes  | btn-abrir-opcoes-[ID]     | Acoes avancadas     |


**Menu Contextual (7 Grupos):**

**Grupo 1 - Gerenciamento de Codigo:**

- Copiar codigo do paciente
- Duplicar exame

**Grupo 2 - Visualizacao Multi-plataforma:**

- Mobile View
- Radiant
- Weasis
- Osirix/Horos

**Grupo 3 - Compartilhamento:**

- Enviar exame

**Grupo 4 - Marcacao:**

- Marcar como interessante

**Grupo 5 - Historico:**

- Exame anterior do paciente

**Grupo 6 - Auditoria:**

- Historico de unidades/movimentacoes
- Exibir logs detalhados

**Grupo 7 - Edicao:**

- Editar dados do exame
- Cancelar exame

---

### RIS - MODAL DO PACIENTE (/ris/modal-paciente)

**Fonte:** `compilacao_total.md` linhas 471-664

**Dados Pessoais:**

- Nome completo
- Data de nascimento
- Sexo
- Idade calculada
- CPF
- RG
- Nacionalidade
- Estado civil

**Dados de Contato:**

- Telefone residencial
- Telefone celular
- Telefone comercial
- E-mail
- Endereco completo (rua, numero, complemento, bairro, cidade, estado, CEP)

**Dados Clinicos:**

- Convenio/Plano de saude
- Numero de matricula
- Alergias
- Medicacoes em uso
- Historico clinico
- Observacoes gerais

**Informacoes do Exame:**

- **Accession Number** (identificador unico critico)
- Data do exame
- Hora do exame
- Modalidade
- Medico solicitante
- Unidade de realizacao
- Indicacao clinica

**Historico de Exames Anteriores:**

- Lista de exames previos
- Data, modalidade, tipo, status, resultado
- Acesso rapido para comparacao

**Acoes Disponiveis:**

- Editar dados
- Visualizar historico completo
- Imprimir
- Exportar

---

### RIS - LAUDOS (/ris/laudos)

**Fonte:** `compilacao_total.md` linhas 178-210, 351-356

**Editor de Laudos:**

- Editor de texto rico completo
- Formatacao: negrito, italico, sublinhado
- Cores de texto e fundo
- Alinhamento
- Listas

**Sistema de Mascaras (Templates):**

- Criar nova mascara
- Associar a modalidade especifica
- Associar a classificacao (BI-RADS, TI-RADS)
- Associar a sexo do paciente
- Inserir imagens nos templates
- Biblioteca de imagens cadastradas
- Upload de arquivos

**Funcionalidades de Audio:**

- Gravacao de voz
- Indicador visual de audio
- Reproducao
- Transcricao automatica (via IA)

**Assinatura Digital:**

- Upload de modelo de assinatura
- Integracao com SafeID
- Certificado digital

---

### RIS - EDICAO DE EXAME (/ris/edicao-exame)

**Fonte:** `compilacao_total.md` linhas 303-329

**Campos Editaveis:**

- Descricao do estudo
- Tipo de estudo/modalidade
- Lateralidade (Direito, Esquerdo, Bilateral)
- Indicador de oncologia
- Prioridade
- Convenio
- Data de transferencia
- Data e hora de recebimento
- Comentarios
- Anexos

**Acoes Disponiveis:**

- Marcar como completo
- Duplicar exame
- Anexar arquivos
- Cancelar exame
- Salvar alteracoes

**Conformidade SLA:**

- Indicador de conformidade
- Data e hora alvo

---

### HIS - OVERVIEW (/his)

**Fonte:** `Blueprint_PACS_RIS_HIS.md` linhas 109-138

**Conteudo:**

- Definicao de Mini HIS (Hospital Information System)
- Funcionalidades administrativas
- Integracao com PACS e RIS

---

### HIS - USUARIOS E RBAC (/his/usuarios)

**Fonte:** `Blueprint_PACS_RIS_HIS.md` linhas 49-63

**8 Perfis de Usuario:**


| Perfil             | Descricao               | Permissoes Chave               |
| ------------------ | ----------------------- | ------------------------------ |
| Root               | Superusuario            | Acesso total, infra, clientes  |
| Admin              | Administrador unidade   | Usuarios, equipamentos, config |
| Radiologista       | Medico interpretador    | Imagens, laudos, historico     |
| Biomedico/Tecnico  | Operador equipamentos   | Envio PACS, qualidade          |
| Enfermeiro         | Profissional enfermagem | Laudos, historico, registro    |
| Concierge          | Atendimento paciente    | Agendamento, cadastro          |
| Medico Solicitante | Solicita exame          | Laudos, imagens pacientes      |
| Paciente           | Realizou exame          | Seus laudos, download          |


**Controle de Acesso (RBAC):**

- Criacao e edicao de usuarios
- Atribuicao de perfis
- Permissoes granulares
- Principio do minimo necessario (HIPAA)
- Logs de auditoria

---

### HIS - TISS/TUSS (/his/tiss-tuss)

**Fonte:** `analise_problema_multiplos_pacs.md` linhas 8-33

**TISS (Troca de Informacoes na Saude Suplementar):**

- Padrao obrigatorio da ANS
- Troca eletronica entre operadoras, prestadores, beneficiarios
- Reduz assimetria de informacoes

**TUSS (Terminologia Unificada da Saude Suplementar):**

- Tabelas padronizadas de procedimentos
- Codigo unico por procedimento
- Atualizada pelo COPISS

**Integracao:**

- Geracao de guias TISS
- Envio eletronico para operadoras
- Conciliacao de pagamentos
- Identificacao de glosas
- Validacao de conformidade ANS

**Problema de Multiplos PACS:**

- Pixeon vs Orus/Horustech
- Custos operacionais duplicados
- Complexidade de sincronizacao
- Solucoes: Middleware, PACS unico, servico de conformidade

---

### HIS - PORTAL PACIENTE/MEDICO (/his/portal)

**Fonte:** `Blueprint_PACS_RIS_HIS.md` linhas 126-139

**Portal do Paciente:**

- Login seguro com 2FA
- Visualizacao de laudos em PDF
- Viewer DICOM simplificado
- Download de resultados
- Compartilhamento de exames
- Acesso via QR Code
- Agendamento online
- Lembretes por email/SMS

**Portal do Medico Solicitante:**

- Acesso a laudos e imagens de seus pacientes
- Comunicacao com radiologistas
- Historico de solicitacoes

---

### CONFIGURACOES DO USUARIO (/configuracoes)

**Fonte:** `compilacao_total.md` linhas 143-211

**9 Abas de Preferencias:**

**Aba 1 - Informacoes Pessoais:**

- Foto do usuario
- Nome completo
- E-mail
- CRM
- Estado
- Data de nascimento
- Sexo
- Telefone
- CPF
- Assinatura digital
- Alteracao de senha
- Logs de alteracao

**Aba 2 - Pesquisa Padrao:**

- Modalidades padrao
- Prioridades padrao
- Periodo padrao (24h a 90d)
- Visualizar: todos, meus, meus + livre
- Ignorar filtro em assinados
- Exames anteriores: mesmo nome ou semelhantes

**Aba 3 - Interface:**

- Exibir contadores
- Exibir todas as modalidades
- Exibir barra de favoritos
- Pesquisar nome sem filtro data
- Bloquear compartilhamento mascara
- Habilitar novo gravador audio
- Selecao de visualizador DICOM
- Idioma padrao (PT, EN, ES)
- Exames por pagina

**Aba 4 - Minhas Mascaras:**

- Criar nova mascara
- Editor de texto rico
- Insercao de imagens
- Selecao de modalidade
- Selecao BI-RADS/TI-RADS
- Selecao por sexo
- Upload de arquivo
- Biblioteca de imagens

**Aba 5 - Unidades:**

- Gerenciamento de unidades de atendimento

**Aba 6 - Cadastrar Valores:**

- Valores customizados

**Aba 7 - Servicos/Integracoes:**

- SafeID
- Revogar tokens

**Aba 8 - Inteligencia Artificial:**

- 8 funcionalidades configuráveis
- Configuracao de prompts

**Aba 9 - Favoritos:**

- Gerenciamento de favoritos

---

### INTELIGENCIA ARTIFICIAL (/inteligencia-artificial)

**Fonte:** `compilacao_total.md` linhas 198-207, 819-829

**8 Funcionalidades de IA:**


| Funcionalidade              | Descricao                       | Configuravel |
| --------------------------- | ------------------------------- | ------------ |
| Resumo de Exames Anteriores | Resume historico do paciente    | Sim          |
| Analista de Imagens         | Detecta achados em imagens      | Sim          |
| RevisIA                     | Assistente revisao de laudos    | Sim          |
| Ditar Laudo - Texto         | Transcricao de audio para texto | Sim          |
| Ditar Laudo - Voz           | Gravacao com processamento      | Sim          |
| Peer Review                 | Revisao por pares assistida     | Sim          |
| Ortografia                  | Correcao ortografica automatica | Sim          |
| Traducao                    | Traducao de laudos              | Sim          |


**Configuracoes por Funcionalidade:**

- Habilitacao/desabilitacao individual
- Selecao de modelo de IA
- Configuracao de prompts customizados
- Gerenciamento de credenciais

---

### ARQUITETURA (/arquitetura)

**Fonte:** `Blueprint_PACS_RIS_HIS.md` linhas 17-46, `Relatorio_Estrategico_Lado_Oculto_PACS.md`

**Modelo Hibrido: Local + Nuvem**

**Componentes:**


| Componente       | Descricao                         | Tecnologias                        |
| ---------------- | --------------------------------- | ---------------------------------- |
| Broker Local     | Software local para DICOM e cache | dcm4che, Orthanc, Node.js          |
| Plataforma Nuvem | Aplicacao web em cloud            | Kubernetes, Docker, Python, React  |
| Banco de Dados   | Metadados e logs                  | PostgreSQL, MongoDB, Elasticsearch |
| Armazenamento    | Imagens DICOM                     | S3, Azure Blob, GCS                |
| Viewer DICOM     | Visualizador web                  | OHIF, Cornerstone.js               |
| Integracao       | APIs                              | REST, GraphQL, gRPC                |


**Diagrama de Fluxo:**

```
Equipamento DICOM → Broker Local → Cache → Sincronizacao → Nuvem
                                    ↓
                              Viewer Web ← Radiologista
```

---

### ADMINISTRACAO - LADO OCULTO (/administracao)

**Fonte:** `Relatorio_Estrategico_Lado_Oculto_PACS.md`, `pesquisa_pacs_admin.md`

**Funcionalidades Administrativas (Root/Admin):**

**Gerenciamento de Equipamentos DICOM:**

- AE Title Management
- IP/Porta de cada equipamento
- Validacao de conformidade DICOM
- Modality Worklist Integration
- Testes de conectividade (DICOM echo)
- Certificados DICOM-TLS

**Gerenciamento de Broker:**

- Instalacao e configuracao
- Frequencia de sincronizacao
- Cache local
- Failover e redundancia
- Status de saude

**Roteamento DICOM:**

- Gateway management
- Regras de roteamento
- Load balancing
- Failover automatico

**Monitoramento e Performance:**

- Dashboard de servidor (CPU, memoria, disco)
- Performance de banco de dados
- Performance de rede
- I/O de armazenamento
- Alertas automaticos
- Capacity planning

**Manutencao:**

- Atualizacoes de software
- Manutencao de banco de dados
- Rotacao de logs
- Limpeza de arquivos temporarios
- Ferramentas de diagnostico

---

### SEGURANCA E AUDITORIA (/seguranca)

**Fonte:** `compilacao_total.md` linhas 401-407, `pesquisa_pacs_admin.md` linhas 64-83

**Controle de Acesso:**

- RBAC (Role-Based Access Control)
- Autenticacao segura
- Multi-Factor Authentication (MFA)
- Gerenciamento de sessoes
- Principio do minimo necessario

**Logs de Auditoria:**

- Registro de todas as alteracoes
- Rastreamento de acesso a imagens
- Quem acessou, quando, por quanto tempo
- Alertas de acessos anormais

**Conformidade Regulatoria:**

- HIPAA (USA)
- LGPD (Brasil)
- ANVISA
- Relatorios de conformidade

**Seguranca de Dados:**

- Criptografia (DICOM-TLS)
- Backup automatico
- Disaster recovery
- Politicas de retencao

**Assinatura Digital:**

- Certificados digitais
- Integracao SafeID
- Validade juridica

---

### INTEGRACOES (/integracoes)

**Fonte:** `Blueprint_PACS_RIS_HIS.md`, `analise_problema_multiplos_pacs.md`, `compilacao_total.md`

**Integracoes Disponiveis:**


| Sistema   | Protocolo | Funcao               |
| --------- | --------- | -------------------- |
| HIS       | HL7       | Dados hospitalares   |
| RIS       | HL7       | Worklist, resultados |
| DICOM     | DICOM     | Imagens medicas      |
| SafeID    | API       | Assinatura digital   |
| TISS/TUSS | XML/Web   | Faturamento ANS      |
| Nuvem     | REST API  | Armazenamento        |


**HL7 Interface:**

- Configuracao de interfaces
- Mapeamento de dados
- Worklist integration
- Result reporting

**DICOM:**

- AE Title configuration
- Roteamento inteligente
- Conformance validation
- TLS security

---

### FLUXOS DE TRABALHO (/fluxos-trabalho)

**Fonte:** `compilacao_total.md` linhas 796-815, `Blueprint_PACS_RIS_HIS.md` linhas 142-158

**Fluxo do Radiologista:**

```
1. Login no sistema
   ↓
2. Acessa worklist (filtros: Meus Exames, SLA)
   ↓
3. Seleciona exame (prioridade/SLA)
   ↓
4. Consulta dados do paciente (modal demografica)
   - Ve Accession Number
   - Consulta historico
   ↓
5. Abre Viewer DICOM
   - Analisa imagens
   - Usa ferramentas (zoom, medicao)
   ↓
6. Redige laudo
   - Usa mascara/template
   - Dita por voz (IA transcreve)
   ↓
7. Adiciona comentarios (se necessario)
   ↓
8. Assina digitalmente
   ↓
9. Marca como completo/assinado
   ↓
10. Proximo exame
```

**Fluxo Administrativo:**

```
1. Cadastro de paciente/exame
   ↓
2. Gerenciamento de prioridades
   ↓
3. Atribuicao de exames a medicos
   ↓
4. Monitoramento de SLA
   ↓
5. Suporte a usuarios
   ↓
6. Geracao de relatorios
```

**Fluxo do Exame (Ciclo de Vida):**

```
Agendamento → Realizacao → Envio PACS → Worklist → Laudo → Assinatura → Disponibilizacao
```

**Fluxo de Faturamento:**

```
Exame realizado → Guia TISS gerada → Envio eletronico → Conciliacao → Pagamento
```

---

### ANALISE DE MERCADO (/mercado)

**Fonte:** `Relatorio_Estrategico_Lado_Oculto_PACS.md` linhas 106-166, `Blueprint_PACS_RIS_HIS.md` linhas 161-176

**Tamanho do Mercado:**

- Mercado Global PACS 2026: US$ 5,8 bilhoes
- Projecao 2035: US$ 8,2 bilhoes
- CAGR: 3,8%
- Specialty PACS: US$ 3,9 bi → US$ 6,7 bi (CAGR 6%)

**Principais Concorrentes:**


| Empresa                 | Participacao | Posicao |
| ----------------------- | ------------ | ------- |
| Siemens Healthineers    | 19%          | Lider   |
| GE Healthcare           | 16%          | 2o      |
| Philips Healthcare      | ~10%         | 3o      |
| Carestream Health       | ~8%          | 4o      |
| Agfa-Gevaert            | ~7%          | 5o      |
| Fujifilm                | ~6%          | 6o      |
| Pixeon (Brasil)         | Regional     | -       |
| Orus/Horustech (Brasil) | Regional     | -       |


**Tendencias 2026:**

- IA na radiologia (suporte a decisao)
- Demanda por subespecialistas
- Cloud-Native PACS
- Integracao de dados (HIS/RIS/EMR)
- Telerradiologia

**Analise SWOT:**

**Forcas:**

- Plataforma moderna com IA
- Multiplas modalidades
- Interface intuitiva
- Telerradiologia desenvolvida

**Fraquezas:**

- Menor market share global
- Documentacao limitada

**Oportunidades:**

- Mercado brasileiro em crescimento
- Deficit de radiologistas
- Adocao de IA

**Ameacas:**

- Consolidacao de mercado
- Cloud-native competitors
- Regulamentacao crescente

---

### ROADMAP (/roadmap)

**Fonte:** `Blueprint_PACS_RIS_HIS.md` linhas 179-195

**Fase 1 - MVP (6 meses):**

- Core PACS/RIS
- Worklist, Viewer DICOM, Editor de laudos
- Arquitetura hibrida (broker + nuvem)
- Perfis basicos: Admin, Radiologista, Paciente

**Fase 2 - Expansao (12 meses):**

- Integracao TISS/TUSS
- IA para laudos (resumo, revisao)
- Portal do medico solicitante

**Fase 3 - Plataforma Completa (18 meses):**

- Mini HIS completo
- Agendamento online
- IA avancada (analise de imagens)
- Marketplace de IA

---

## STACK TECNICA

- **Framework:** Next.js 14 (App Router)
- **Estilizacao:** Tailwind CSS + CSS Variables
- **Animacoes:** Framer Motion
- **Icones:** Lucide React
- **Diagramas:** Mermaid + react-flow
- **Tabelas:** TanStack Table
- **Deploy:** Vercel

---

## DESIGN SYSTEM

**Cores (Dark Mode):**

- Background: `#0a0a0f`
- Surface: `#1a1a2e`
- Primary: `#6366f1` (indigo)
- Accent: `#22d3ee` (cyan)
- Success: `#22c55e` (green)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)
- Text: `#f8fafc`
- Muted: `#64748b`

**Tipografia:**

- Headings: Inter Bold
- Body: Inter Regular
- Code: JetBrains Mono

---

## COMPONENTES REUTILIZAVEIS

- `FeatureCard` - Cards de funcionalidades
- `DataTable` - Tabelas com ordenacao e filtro
- `Accordion` - Secoes expandiveis
- `TabPanel` - Navegacao por abas
- `SideNav` - Navegacao lateral sticky
- `FlowDiagram` - Diagramas de fluxo
- `StatCounter` - Numeros animados
- `Badge` - Badges de status/prioridade
- `Modal` - Modais de conteudo
- `Tooltip` - Dicas de contexto
- `CodeBlock` - Blocos de codigo
- `Alert` - Alertas informativos
- `Timeline` - Linha do tempo (roadmap)
- `ComparisonTable` - Tabelas comparativas
- `SearchBar` - Busca global

---

## ESTRUTURA DE ARQUIVOS

```
sitepacs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── pacs/
│   │   ├── page.tsx
│   │   ├── viewer/page.tsx
│   │   ├── modalidades/page.tsx
│   │   ├── visualizadores/page.tsx
│   │   └── armazenamento/page.tsx
│   ├── ris/
│   │   ├── page.tsx
│   │   ├── worklist/page.tsx
│   │   ├── filtros/page.tsx
│   │   ├── acoes-exame/page.tsx
│   │   ├── modal-paciente/page.tsx
│   │   └── laudos/page.tsx
│   ├── his/
│   │   ├── page.tsx
│   │   ├── usuarios/page.tsx
│   │   ├── tiss-tuss/page.tsx
│   │   └── portal/page.tsx
│   ├── configuracoes/page.tsx
│   ├── inteligencia-artificial/page.tsx
│   ├── arquitetura/page.tsx
│   ├── administracao/page.tsx
│   ├── seguranca/page.tsx
│   ├── integracoes/page.tsx
│   ├── fluxos-trabalho/page.tsx
│   ├── mercado/page.tsx
│   └── roadmap/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SideNav.tsx
│   │   └── MegaMenu.tsx
│   ├── ui/
│   │   ├── FeatureCard.tsx
│   │   ├── DataTable.tsx
│   │   ├── Accordion.tsx
│   │   ├── TabPanel.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Tooltip.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Alert.tsx
│   │   ├── Timeline.tsx
│   │   └── StatCounter.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Architecture.tsx
│       └── FlowDiagram.tsx
├── lib/
│   └── data/
│       ├── pacs-data.ts
│       ├── ris-data.ts
│       ├── his-data.ts
│       ├── ia-data.ts
│       ├── mercado-data.ts
│       └── roadmap-data.ts
├── styles/
│   └── globals.css
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

