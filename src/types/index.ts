export interface Product {
  name: string;
  title: string;
  description: string;
  isNew?: boolean;
  icon?: string;
  slug: string;
  fullDescription: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  }[];
  story: string;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export interface ValueProposition {
  icon: any;
  title: string;
  description: string;
  stat: string;
}

export interface SuccessStory {
  company: string;
  industry: string;
  founder: string;
  quote: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
}

export interface NotificationBarProps {
  show: boolean;
  onClose: () => void;
}

export interface RouteParams {
  productSlug?: string;
}