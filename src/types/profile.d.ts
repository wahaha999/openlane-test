export interface ProfileDataType {
    email: string,
    password: string,
    fullName: string,
    phoneNumber?: string,
    favoriteColor: string
}

export interface ProfileDataQueryType {
    fullName?: string,
    email?: string,
    password?: string,
    phoneNumber?: string,
    favoriteColor?: string
}