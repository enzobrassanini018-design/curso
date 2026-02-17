
import { Alien, Testimonial, Module } from './types';

export const ALIENS: Alien[] = [
  {
    id: 'heatblast',
    name: 'Chama',
    description: 'Aprenda a controlar o fogo pirocinético sem incendiar a base.',
    image: 'https://picsum.photos/seed/heatblast/400/400',
    level: 'Básico'
  },
  {
    id: 'fourarms',
    name: 'Quatro Braços',
    description: 'Gestão de força bruta e combate corpo a corpo tático.',
    image: 'https://picsum.photos/seed/fourarms/400/400',
    level: 'Básico'
  },
  {
    id: 'xlr8',
    name: 'XLR8',
    description: 'Dominando a velocidade supersônica e reflexos acelerados.',
    image: 'https://picsum.photos/seed/xlr8/400/400',
    level: 'Intermediário'
  },
  {
    id: 'diamondhead',
    name: 'Diamante',
    description: 'Manipulação molecular de cristais e defesa absoluta.',
    image: 'https://picsum.photos/seed/diamondhead/400/400',
    level: 'Intermediário'
  },
  {
    id: 'waybig',
    name: 'Gigante',
    description: 'Operações em escala planetária e protocolo de força máxima.',
    image: 'https://picsum.photos/seed/waybig/400/400',
    level: 'Avançado'
  },
  {
    id: 'alienx',
    name: 'Alien X',
    description: 'Negociação com as vozes da consciência e controle da realidade.',
    image: 'https://picsum.photos/seed/alienx/400/400',
    level: 'Avançado'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Oliveira",
    text: "O curso é simplesmente fantástico. O conteúdo sobre calibração do Omnitrix é muito superior a tudo que já vi na rede dos Encanadores. Recomendo fortemente para novos recrutas.",
    image: "https://pbs.twimg.com/media/EA-VOc1XUAA9EbP?format=jpg&name=medium"
  },
  {
    id: 2,
    name: "Ana Luíza Santos",
    text: "Excelente didática! Eu tinha muita dificuldade com as transformações tecnológicas, mas o módulo de Ultra T explicou tudo de forma clara e objetiva. Valeu o investimento.",
    image: "https://pt.quizur.com/_image?href=https%3A%2F%2Fdev-beta.quizur.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fimagens%2F%2F20972455%2Fff18dec9-fcce-4766-be62-88f4effd3792.png&w=600&h=600&f=webp"
  },
  {
    id: 3,
    name: "Marcos Vinícius",
    text: "O suporte aos alunos é impecável. Tive uma dúvida sobre o Modo Mestre e fui respondido em menos de 10 minutos. O certificado é reconhecido em todo o setor.",
    image: "https://pt.quizur.com/_image?href=https%3A%2F%2Fdev-beta.quizur.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fimagens%2F%2F20101249%2F31fd7fc1-9825-4f2e-8a62-e3c2bef948e7.png&w=600&h=600&f=webp"
  },
  {
    id: 4,
    name: "Juliana Costa",
    text: "Completei o curso em 3 meses e já me sinto preparada para missões de campo. A qualidade técnica dos vídeos e dos materiais de apoio é de outro planeta!",
    image: "https://i.pinimg.com/736x/52/cd/95/52cd95d6c3b56977cf2efc20f6169405.jpg"
  }
];

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Encanador Iniciante",
    description: "O ponto de partida para todo recruta. Entenda as leis intergalácticas e a interface básica do usuário.",
    topics: ["História dos Encanadores", "Juramento do Recruta", "Sincronização de DNA Básica"]
  },
  {
    id: 2,
    title: "Supremo",
    description: "Evolua seu DNA. Domine a função de evolução e aprenda táticas de combate avançadas contra vilões de nível galáctico.",
    topics: ["Função de Evolução (Supremos)", "Mecânicas de Combate Tático", "Gestão de Energia e Recarga"]
  },
  {
    id: 3,
    title: "Definitivo",
    description: "O ápice do domínio tecnológico. Desbloqueie o Controle Mestre e a diplomacia de nível realidade.",
    topics: ["Controle Mestre (Master Control)", "Protocolos de Auto-Destruição", "Estabilidade de Realidade (Alien X)"]
  }
];

export const CERTIFICATE_URL = "https://pt.quizur.com/_image?href=https%3A%2F%2Fdev-beta.quizur.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2F%2Fimagens%2F%2F20146386%2F750a8375-7e7a-49a4-b92d-1829733bb9f7.png&w=600&h=600&f=webp";
export const LOGO_URL = "https://i.pinimg.com/736x/80/8d/f0/808df0e1d0d32768a4a5fdf6b5e8f5ec.jpg";
