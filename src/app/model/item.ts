import { Category } from './category';

export class Item {

    id: number;
    label: string;
    status: string;
    category: Category;

    constructor(label: string, category: Category) {
        this.label = label;
        this.category = category;
    }
}