export interface TripCreate {
    name: string;
    description: string;
    fromTown: string;
    toTown: string;
    startDate: string;
}

export interface Trip {
    trip: {
        id: number;
        name: string;
        fromTown: string;
        toTown: string;
    }
}

export interface TripDetail {
    trip: {
        id: number;
        name: string;
        fromTown: string;
        toTown: string;
        description:string;
        startDate: string;
        creatorName:string;
        creatorId:string;
        travelers:[]
    }
}