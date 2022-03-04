import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

class ProductCharacteristic {
    @prop()
    name: string;

    @prop()
    value: string;
}

// eslint-disable-next-line
export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
    @prop()
    image: string;

    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop()
    credit: number;

    @prop()
    rating: number;

    @prop()
    description: string;

    @prop()
    advantages: string;

    @prop()
    disadvantages: string;

    @prop({ type: () => [String] })
    categories: string[];

    @prop({ type: () => [String] })
    tags: string[];

    @prop({ type: () => [ProductCharacteristic], _id: false })
    characteristics: ProductCharacteristic[];
}
