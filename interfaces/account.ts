export interface IAccount {
    email: string
    account_status?: string // represents signup status of user
    failed_access?: number
    user_id: number
    pers_id?: number
    unique_user_id: string
    first_name: string
    last_name: string
    gender: string
    role_id?: number
    image_url?: string
    cover_url?: string
} 