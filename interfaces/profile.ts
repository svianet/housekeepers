import { ILanguage } from "./language"
import { IPerson } from "./person"
import { IPhone } from "./phone"

export interface IProfile {
    person: IPerson,
    languages?: any[], // ILanguage
    phones?: IPhone[],
    role_id: number,
    userId?: string
} 