import { ILanguage } from "./language"
import { IPerson } from "./person"
import { IPhone } from "./phone"

export interface IProfile {
    person: IPerson,
    languages?: ILanguage[],
    phones?: IPhone[],
    role_id: number,
    userId?: string
} 