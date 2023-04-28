export interface Matter {
    matterId: number,
    fullName: string,
    openDate: string,
    closeDate: string,
    jurisdictionId: number,
    clientId: number,
    billingAttorneyId: number,
    responsibleAttorneyId: number,
}
export interface Jurisdiction {
    jurisdictionId: number,
    area: string,
}
export interface Client {
    clientId: number,
    fullName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
}
export interface Attorney {
    attorneyId: number,
    fullName: string,
    hourlyRate: number,
    email: string,
    phone: string,
    jurisdictionId: number,
}
export interface InvoiceByMatter {
    id: number,
    date: Date,
    matterName: string,
    attorneyName: string,
    hoursWorked: string,
    totalAmount: number,
}

export interface MatterByClient {
    id: number,
    matterName: string,
    openDate: string,
    closeDate: string,
    clientId:number,
    clientName: string,
    billingAttorneyName: string,
    responsibleAttorneyName: string,
    jurisdictionArea: string,
}

export interface ViewBillingByAttorneys {
    id: number,
    attorneyName: string,
    billing: number,
}
