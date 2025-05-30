export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    posts: Post[];
}

export interface Post {
    id: number;
    title: string;
    body: string;
    comments: Comment[];
}

export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}
