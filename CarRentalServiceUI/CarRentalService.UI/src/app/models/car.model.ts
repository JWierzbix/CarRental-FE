export class Car {
    constructor(
        public carId: string,
        public model: string,
        public brand: string,
        public price: number,
        public engineCapacity: number,
        public power: number,
        public gearboxType: string,
        public acceleration: number,
        public image: string
    ) {}
}