export interface PortfolioProject {
  ch: number;
  channel: string;
  title: string;
  role: string;
  description: string;
  size: 1 | 2 | 3;
  videoUrl?: string;
  imageUrl?: string;
  bonusText?: string;
  color?: "red";
  year?: string;
}

export interface ContentfulProject {
  fields: {
    channel: number;
    channelName: string;
    title: string;
    role: string;
    description: string;
    videoUrl?: string;
    imageUrl?: string;
    bonusText?: string;
    size: number;
    isRed?: boolean;
    year?: string;
  };
}

export interface ContentfulResponse {
  items: ContentfulProject[];
}

export interface TVGuideControlProps {
  data: PortfolioProject[];
}

export interface LoopingMenuProps {
  data: PortfolioProject[];
  handleItemClick: (title: string) => void;
  selectedItemTitle: string;
}

export interface ReactPlayerComponentProps {
  url: string;
  isMuted: boolean;
}