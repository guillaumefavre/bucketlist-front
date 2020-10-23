import { Category } from './category';

export class Item {

    id: number;
    label: string;
    status: string;
    category: Item;


    constructor(label: string, category: Item, status: string) {
        this.label = label;
        this.category = category;
        this.status = status
    }
}