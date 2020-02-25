export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number; // ? means optional param
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}