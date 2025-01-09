

export interface Event {
    id: number,
    title: string,
    subtitle: string | undefined,
    dateStart: Date,
    dateEnd: Date
}


export interface Payment {
    id: number;
    amount: number;
    date: Date;
}