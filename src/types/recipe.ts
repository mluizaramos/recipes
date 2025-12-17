export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    time: string;
    category: string;
    serving?: string;
    favorite?: boolean;
}