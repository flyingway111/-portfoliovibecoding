export type PortfolioProject = {
  id: string
  title: string
  kind: string
  image: string
  liveUrl: string
  position: [number, number, number]
  scale: number
  imagePosition?: 'top' | 'center'
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'iron-club',
    title: 'Iron Club',
    kind: 'Fitness mini app',
    image: '/projects/iron-club.png',
    liveUrl: 'https://fitness-ai-self.vercel.app/',
    position: [-4.05, -0.72, 0.25],
    scale: 0.94,
    imagePosition: 'top',
  },
  {
    id: 'shop-mini-app',
    title: 'Shop Mini App',
    kind: 'Telegram store',
    image: '/projects/shop-mini-app.png',
    liveUrl: 'https://shop-flyingway.vercel.app/',
    position: [-4.65, 1.15, -0.85],
    scale: 0.96,
  },
  {
    id: 'brutal-cut',
    title: 'Brutal Cut',
    kind: 'Booking landing',
    image: '/projects/brutal-cut.png',
    liveUrl: 'https://brutal-cutt.vercel.app/',
    position: [-2.92, -2.02, -0.35],
    scale: 0.9,
  },
  {
    id: 'mizuna',
    title: 'Mizuna',
    kind: 'Restaurant experience',
    image: '/projects/mizuna.png',
    liveUrl: 'https://mizuna-landing.vercel.app/',
    position: [-2.25, 2.34, -1.15],
    scale: 0.97,
  },
  {
    id: 'cutbook',
    title: 'Cutbook',
    kind: 'Booking mini app',
    image: '/projects/cutbook.png',
    liveUrl: 'https://cutbook-nine.vercel.app/',
    position: [4.28, 1.25, -0.55],
    scale: 1.12,
  },
  {
    id: 'memo-ai',
    title: 'Memo AI',
    kind: 'AI workspace',
    image: '/projects/memo-ai.png',
    liveUrl: 'https://memo-ai-ivory.vercel.app/',
    position: [4.55, -1.18, 0.15],
    scale: 0.94,
  },
]
