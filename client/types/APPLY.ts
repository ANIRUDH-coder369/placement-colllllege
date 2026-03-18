export type POST = {
    name: string,
    education: string,
    experience: string,
    done_project: string,
    skills: string,
    _id?: string
}

export type GET = {
    result: [
        {
            name: string,
            education: string,
            experience: string,
            done_project: string,
            skills: string,
            _id: string
        }
    ]
}

export type UPDATE = {
    name: string,
    education: string,
    experience: string,
    done_project: string,
    skills: string,
    _id: string
}

export type DELETE = {
    _id: string
}