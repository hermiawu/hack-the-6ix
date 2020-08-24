export class Room {
    id: number;
    type: string;
    size: number;
    x: number;
    y: number;
    name: string;
    timeFrom?: Date;
    timeTo?: Date;
    userId?: number;
    isBookable = false;
}

