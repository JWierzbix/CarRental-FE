export class CarDetails {
    constructor(
        public carId: string,
        public brand: string,
        public model: string,
        public description: string,
        public releaseDate: number,
        public power: number,
        public engineCapacity: number,
        public drive: number,
        public acceleration: number,
        public timeFrom0To100: number,
        public gearboxType: string,
        public carCategory: string,
        public peopleCapacity: number,
        public image: string,
        public price: number
    ) {}
}