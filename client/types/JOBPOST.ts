export type JOBPOST_CREATE_REQUEST = {
    title: string,
    desc: string,
    experience: string,
    skills: string
}

export type JOBPOST_GET_RESPONSE = {
    result: [
        {
            title: string,
            desc: string,
            experience: string,
            skills: string,
            _id: string
        }
    ]

}

export type JOBPOST_UPDATE_REQUEST = {
    title: string,
    desc: string,
    experience: string,
    skills: string,
    _id: string
}

export type JOBPOST_DELETE = {

    _id: string
}