export class Agency {
    _id?: string;
    name!: string;
    address!: string;
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}