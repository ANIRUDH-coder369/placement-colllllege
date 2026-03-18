export type STUDENT_REGISTER_REQUEST = {
    name: string,
    email: string,
    password: string,
    _id?: string

}

export type STUDENT_READ_REQUEST = {
    result: [
        {
            name: string,
            email: string,
            _id?: string,
            password: string
        }
    ]
}

export type STUDENT_UPDATE_REQUEST = {
    name: string,
    email: string,
    password: string,
    _id?: string
}

export type STUDENT_DELETE_REQUEST = {
    _id: string
}

export type STUDENT_LOGIN = {
    email: string,
    password: string
}