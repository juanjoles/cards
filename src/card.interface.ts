export interface Card {
    id: string;
    title: string;
    description: string;
    status: 'to-do' | 'in-progress' | 'done';
}

