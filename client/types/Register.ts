export type REGISTER_CCOMPANY_REQUEST = {
    name: string,
    email: string,
    address: string,
    _id?: string
}

export type COMPANY_GET = {
    result: [
        {
            name: string,
            email: string,
            address: string,
            _id?: string
        }
    ]
}

export type COMPANY_DELETE = {
    _id: string
}