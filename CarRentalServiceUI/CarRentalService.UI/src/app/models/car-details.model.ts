export class CarDetails {
    constructor(
        public brand: string,
        public model: string,
        public description: string,
        public releaseDate: number,
        public power: number,
        public engineCapacity: number,
        public drive: number,
        public acceleration: number,
        public timeFrom0To100: number,
        public gearBox: string,
        public body: string,
        public peopleCapacity: number
    ) {}
}