// Dados mockados para os chamados

export const tickets = [
  {
    id: 1,
    title: "Não consigo acessar e-mail corporativo",
    description: "Estou tentando acessar meu e-mail corporativo desde hoje de manhã, mas continuo recebendo uma mensagem de erro dizendo 'Falha na autenticação'.",
    status: "new",
    category: "email",
    priority: "high",
    createdBy: "João Silva",
    assignedTo: "Alice Santos",
    createdAt: "2025-03-15T09:30:00.000Z",
    updatedAt: "2025-03-15T09:30:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-15T09:30:00.000Z",
        user: "João Silva",
        comment: "Chamado criado"
      }
    ]
  },
  {
    id: 2,
    title: "Impressora não está funcionando",
    description: "A impressora do 3º andar está mostrando o código de erro P-04. Já tentei reiniciar, mas o problema persiste.",
    status: "in-progress",
    category: "hardware",
    priority: "medium",
    createdBy: "Sara Oliveira",
    assignedTo: "David Costa",
    createdAt: "2025-03-14T15:45:00.000Z",
    updatedAt: "2025-03-15T10:20:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-14T15:45:00.000Z",
        user: "Sara Oliveira",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-14T16:30:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para David Costa"
      },
      {
        action: "status-change",
        timestamp: "2025-03-15T10:20:00.000Z",
        user: "David Costa",
        comment: "Status alterado de 'novo' para 'em andamento'. Trabalhando no problema."
      }
    ]
  },
  {
    id: 3,
    title: "Solicitação de instalação de software",
    description: "Preciso do Adobe Photoshop instalado na minha estação de trabalho para o novo projeto de marketing.",
    status: "pending",
    category: "software",
    priority: "low",
    createdBy: "Miguel Santos",
    assignedTo: "Thiago Lima",
    createdAt: "2025-03-13T11:15:00.000Z",
    updatedAt: "2025-03-14T09:05:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-13T11:15:00.000Z",
        user: "Miguel Santos",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-13T14:20:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para Thiago Lima"
      },
      {
        action: "status-change",
        timestamp: "2025-03-14T09:05:00.000Z",
        user: "Thiago Lima",
        comment: "Status alterado de 'novo' para 'pendente'. Aguardando aprovação da licença."
      }
    ]
  },
  {
    id: 4,
    title: "Problema com conexão VPN",
    description: "Não consigo conectar à VPN da empresa quando trabalho de casa. A conexão falha após a autenticação.",
    status: "resolved",
    category: "network",
    priority: "high",
    createdBy: "Emily Souza",
    assignedTo: "Roberto Wilson",
    createdAt: "2025-03-12T08:30:00.000Z",
    updatedAt: "2025-03-13T16:45:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-12T08:30:00.000Z",
        user: "Emily Souza",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-12T09:15:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para Roberto Wilson"
      },
      {
        action: "status-change",
        timestamp: "2025-03-12T11:30:00.000Z",
        user: "Roberto Wilson",
        comment: "Status alterado de 'novo' para 'em andamento'. Investigando o problema."
      },
      {
        action: "comment",
        timestamp: "2025-03-13T14:20:00.000Z",
        user: "Roberto Wilson",
        comment: "Encontrado problema na configuração do servidor VPN. Aplicando correção."
      },
      {
        action: "status-change",
        timestamp: "2025-03-13T16:45:00.000Z",
        user: "Roberto Wilson",
        comment: "Status alterado de 'em andamento' para 'resolvido'. Servidor VPN reconfigurado e testado com sucesso."
      }
    ]
  },
  {
    id: 5,
    title: "Calendário do Outlook não sincroniza",
    description: "Meu calendário do Outlook não está sincronizando corretamente com meu celular. Algumas reuniões estão faltando.",
    status: "closed",
    category: "software",
    priority: "medium",
    createdBy: "Jennifer Brown",
    assignedTo: "Alice Santos",
    createdAt: "2025-03-10T13:45:00.000Z",
    updatedAt: "2025-03-11T15:30:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-10T13:45:00.000Z",
        user: "Jennifer Brown",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-10T14:30:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para Alice Santos"
      },
      {
        action: "status-change",
        timestamp: "2025-03-10T16:15:00.000Z",
        user: "Alice Santos",
        comment: "Status alterado de 'novo' para 'em andamento'. Trabalhando no problema de sincronização."
      },
      {
        action: "comment",
        timestamp: "2025-03-11T10:20:00.000Z",
        user: "Alice Santos",
        comment: "Identificado problema nas configurações do Exchange ActiveSync."
      },
      {
        action: "status-change",
        timestamp: "2025-03-11T14:45:00.000Z",
        user: "Alice Santos",
        comment: "Status alterado de 'em andamento' para 'resolvido'. Configurações do ActiveSync corrigidas e sincronização verificada."
      },
      {
        action: "status-change",
        timestamp: "2025-03-11T15:30:00.000Z",
        user: "Jennifer Brown",
        comment: "Status alterado de 'resolvido' para 'fechado'. Problema resolvido, calendário sincronizando corretamente."
      }
    ]
  },
  {
    id: 6,
    title: "Solicitação de novo notebook",
    description: "Meu notebook atual tem mais de 4 anos e está muito lento. Gostaria de solicitar uma substituição.",
    status: "new",
    category: "hardware",
    priority: "medium",
    createdBy: "Daniel Martins",
    assignedTo: null,
    createdAt: "2025-03-15T13:20:00.000Z",
    updatedAt: "2025-03-15T13:20:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-15T13:20:00.000Z",
        user: "Daniel Martins",
        comment: "Chamado criado"
      }
    ]
  },
  {
    id: 7,
    title: "Site mostrando erro 404",
    description: "O site da empresa está mostrando erro 404 ao tentar acessar a página de Produtos.",
    status: "in-progress",
    category: "website",
    priority: "high",
    createdBy: "Lisa Andrade",
    assignedTo: "James Wilson",
    createdAt: "2025-03-14T09:10:00.000Z",
    updatedAt: "2025-03-14T11:25:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-14T09:10:00.000Z",
        user: "Lisa Andrade",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-14T09:45:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para James Wilson"
      },
      {
        action: "status-change",
        timestamp: "2025-03-14T11:25:00.000Z",
        user: "James Wilson",
        comment: "Status alterado de 'novo' para 'em andamento'. Investigando problema de roteamento do site."
      }
    ]
  },
  {
    id: 8,
    title: "Solicitação de acesso à pasta Financeiro",
    description: "Preciso de acesso à pasta compartilhada do departamento Financeiro para a auditoria trimestral.",
    status: "pending",
    category: "access",
    priority: "medium",
    createdBy: "Paulo Roberto",
    assignedTo: "Thiago Lima",
    createdAt: "2025-03-13T10:05:00.000Z",
    updatedAt: "2025-03-13T14:30:00.000Z",
    history: [
      {
        action: "created",
        timestamp: "2025-03-13T10:05:00.000Z",
        user: "Paulo Roberto",
        comment: "Chamado criado"
      },
      {
        action: "updated",
        timestamp: "2025-03-13T11:15:00.000Z",
        user: "Sistema",
        comment: "Chamado atribuído para Thiago Lima"
      },
      {
        action: "status-change",
        timestamp: "2025-03-13T14:30:00.000Z",
        user: "Thiago Lima",
        comment: "Status alterado de 'novo' para 'pendente'. Aguardando aprovação do gerente Financeiro."
      }
    ]
  }
];

export const categories = [
  { id: "email", name: "E-mail", icon: "mail" },
  { id: "hardware", name: "Hardware", icon: "computer" },
  { id: "software", name: "Software", icon: "app" },
  { id: "network", name: "Rede", icon: "wifi" },
  { id: "website", name: "Website", icon: "globe" },
  { id: "access", name: "Solicitação de Acesso", icon: "lock" },
  { id: "other", name: "Outros", icon: "help" }
];

export const statuses = [
  { id: "new", name: "Novo", color: "var(--color-primary)" },
  { id: "in-progress", name: "Em Andamento", color: "var(--color-accent)" },
  { id: "pending", name: "Pendente", color: "var(--color-warning)" },
  { id: "resolved", name: "Resolvido", color: "var(--color-success)" },
  { id: "closed", name: "Fechado", color: "var(--color-neutral-600)" }
];

export const priorities = [
  { id: "low", name: "Baixa", color: "var(--color-neutral-400)" },
  { id: "medium", name: "Média", color: "var(--color-warning)" },
  { id: "high", name: "Alta", color: "var(--color-error)" }
];

export const users = [
  { id: 1, name: "Alice Santos", role: "Especialista de Suporte", avatar: "AS" },
  { id: 2, name: "David Costa", role: "Técnico de TI", avatar: "DC" },
  { id: 3, name: "Thiago Lima", role: "Administrador de Sistema", avatar: "TL" },
  { id: 4, name: "Roberto Wilson", role: "Engenheiro de Redes", avatar: "RW" },
  { id: 5, name: "James Wilson", role: "Desenvolvedor Web", avatar: "JW" }
];