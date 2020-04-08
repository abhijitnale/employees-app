import { Address } from './address';

export class Employee {
    id: number;
    name: string;
    phone: string;
    address: Address = new Address;
}