
export interface Feature {
  icon: string;
  text: string;
}

export interface Plan {
  id: 'essential' | 'premium';
  title: string;
  subtitle: string;
  price: string;
  color: string;
  features: Feature[];
}

export interface ContentPillar {
  id: string;
  title: string;
  focus: string;
  description: string;
  examples: string[];
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
