import { Category } from './category';

export class Item {

    id: number;
    label: string;
    status: string;
    category: Category;


    constructor(label: string, category: Category, status: string) {
        this.label = label;
        this.category = category;
        this.status = status
    }
}