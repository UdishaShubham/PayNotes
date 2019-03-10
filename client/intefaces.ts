
export interface NOTE {
    name: string;
    content: string;
}

export interface USER {
    username: string;
    password: string;
}

export interface NOTES {
    _id: string;
    name: string;
    content: string;
    __v: number;
}