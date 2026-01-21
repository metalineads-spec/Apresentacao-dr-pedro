
import { Plan, ContentPillar } from './types';

export const PLANS: Record<'essential' | 'premium', Plan> = {
  essential: {
    id: 'essential',
    title: "Plano Essencial",
    subtitle: "Consistência e Qualidade Técnica",
    price: "R$ 1.500",
    color: "bg-slate-400",
    features: [
      { icon: "Layers", text: "12 Posts Mensais no Feed" },
      { icon: "Video", text: "Edição Dinâmica de Reels" },
      { icon: "Compass", text: "Planejamento de Pautas" },
      { icon: "PenTool", text: "Legendas com Copywriting" },
      { icon: "Calendar", text: "Agendamento de Posts" },
      { icon: "BarChart3", text: "Relatório Simplificado" }
    ]
  },
  premium: {
    id: 'premium',
    title: "Plano Autoridade Premium",
    subtitle: "Aceleração & Gestão Total",
    price: "R$ 2.800",
    color: "bg-indigo-600",
    features: [
      { icon: "Layers", text: "12 Posts Mensais + Extras" },
      { icon: "FileText", text: "Roteiros Detalhados de Stories" },
      { icon: "MessagesSquare", text: "Gestão de Comunidade (Directs)" },
      { icon: "Search", text: "Análise de Concorrência" },
      { icon: "Rocket", text: "Apoio no Tráfego Pago" },
      { icon: "Users", text: "Reunião Mensal de Estratégia" }
    ]
  }
};

export const PILLARS: ContentPillar[] = [
  {
    id: 'pillarA',
    title: 'A "Mágica" da Terapia Manual',
    focus: 'ATRAÇÃO (Reels)',
    description: 'Vídeos visuais e dinâmicos demonstrando sua competência técnica e o alívio imediato.',
    examples: ['Manobras de ajuste cervical', 'ASMR (sons de manipulação)', 'Mobilizações articulares'],
    color: 'text-indigo-400'
  },
  {
    id: 'pillarB',
    title: 'Educação que Converte',
    focus: 'AUTORIDADE (Carrossel)',
    description: 'Explicar a origem da dor e desmistificar crenças para gerar consciência e desejo pelo tratamento.',
    examples: ['"Por que a dor voltou?"', 'Diferença entre Enxaqueca x Cefaleia', 'Mitos da hérnia de disco'],
    color: 'text-sky-400'
  },
  {
    id: 'pillarC',
    title: 'Bastidores e Humanização',
    focus: 'CONEXÃO (Stories)',
    description: 'Gerar identificação e confiança na figura do Dr. Pedro como profissional e pessoa.',
    examples: ['Rotina de estudos e café', 'Opiniões técnicas sobre tendências', 'Vida real no consultório'],
    color: 'text-violet-400'
  }
];

export const CHART_DATA = [
  { name: 'Reels (Técnico)', value: 60, color: '#4F46E5' },
  { name: 'Carrosséis (Educativo)', value: 40, color: '#0EA5E9' },
];
