// tour.model.ts
export interface Tour {
  tourID: number;
  title: string;
  image: string | null;
  description: string;
  quantity: number;
  priceAdult: number;
  priceChild: number;
  destination: string;
  availability: boolean;
  itinerary: string;
}
