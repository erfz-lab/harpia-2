import { 
  Link, 
  Target, 
  Zap, 
  Layout, 
  Megaphone, 
  Camera, 
  Film, 
  Sparkles, 
  BrainCircuit, 
  PlayCircle, 
  CheckCircle2 
} from 'lucide-react';
import { NavItem, FeatureItem, ServiceItem, ProcessStep } from './types';

// --- Navigation ---
export const NAV_LINKS: NavItem[] = [
  { label: 'Foco', href: '#foco' },
  { label: 'O Arsenal', href: '#arsenal' },
  { label: 'Fluxo', href: '#fluxo' },
  { label: 'Contato', href: '#contato' },
];

// --- Hero Section ---
export const HERO_CONTENT = {
  badge: 'INOVAÇÃO EM COMUNICAÇÃO',
  titlePart1: 'Comunicação Integrada',
  titlePart2: '& Inteligência Artificial',
  subtitle: 'Da mídia isolada para a estratégia integrada. Alcance, engajamento e vendas em um fluxo anti-dor de cabeça.',
  ctaPrimary: 'Conheça Nosso Arsenal',
  ctaSecondary: 'Falar com Especialista',
  logoText: 'HARPIA DIGITAL'
};

// --- Features Section (Foco & Objetivo) ---
export const FEATURES: FeatureItem[] = [
  {
    icon: Link,
    title: 'Conexão Total',
    description: 'Unimos canais online e offline em uma comunicação moderna, eliminando barreiras entre mídias tradicionais e digitais.'
  },
  {
    icon: Target,
    title: 'Resultados Reais',
    description: 'Foco simultâneo em Alcance, Engajamento e Vendas. Não escolhemos um; entregamos todos.'
  },
  {
    icon: Zap,
    title: 'Inovação Dinâmica',
    description: 'Promovemos um ambiente mais dinâmico, inovador e conectado, transformando a comunicação em vantagem competitiva.'
  }
];

// --- Services Section (Nosso Arsenal) ---
export const SERVICES: ServiceItem[] = [
  {
    icon: Layout,
    bgIcon: Layout,
    title: 'Desenvolvimento Web',
    description: 'Sites, landing pages e aplicações modernas otimizadas para conversão.'
  },
  {
    icon: Megaphone,
    bgIcon: Megaphone,
    title: 'Marketing Digital',
    description: 'Gestão estratégica de redes sociais e tráfego pago (Google Ads/Meta Ads).'
  },
  {
    icon: Camera,
    bgIcon: Camera,
    title: 'Captação Foto & Vídeo',
    description: 'Produção audiovisual profissional para elevar a percepção da sua marca.'
  },
  {
    icon: Film,
    bgIcon: Film,
    title: 'Edição & Motion',
    description: 'Edição avançada, Motion Graphics e VFX para conteúdos impactantes.'
  },
  {
    icon: Sparkles,
    bgIcon: Sparkles,
    title: 'Inteligência Artificial',
    description: 'Integração de IA para otimização de processos e criação de conteúdo.'
  }
];

// --- Process Section (Fluxo) ---
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    icon: BrainCircuit,
    title: 'Brainstorm',
    description: 'Planejamento estratégico focado. Menos reuniões inúteis, mais ideias assertivas.'
  },
  {
    id: 2,
    icon: PlayCircle,
    title: 'Produção Online',
    description: 'Sprints de criação ágeis potencializados por IA para desenvolvimento digital.'
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: 'Entrega Offline',
    description: 'Conexão final com o mundo físico, garantindo consistência em todos os pontos de contato.'
  }
];

// --- Footer ---
export const CONTACT_INFO = {
  email: 'contato@harpiadigital.com.br',
  phone: '+55 11 99999-9999',
  address: 'São Paulo, SP'
};
