export interface TripCreate {
    name: string | undefined;
    description: string | undefined;
    fromTown: string | undefined;
    toTown: string | undefined;
    startDate: string | undefined;
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
        description: string;
        startDate: string;
        creatorName: string;
        creatorId: string;
        isCreator: boolean;
        isMember: boolean;
        travelers: Travelers[]
    }
}

export interface Travelers {
    travelers: {
        id: string;
        userName: string;
        email: string;
    }
}

export interface TripFormProps {
    formName: string;
    onSubmit: (values: TripCreate, actions: any) => Promise<void>;
    trip?: TripCreate;
}