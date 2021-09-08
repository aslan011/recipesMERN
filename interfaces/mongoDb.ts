export interface UserModel {
    id: any;
    username: string,
    password: string,
    date: string
}

export interface MealModel {
    name: string,
    ingredients: string,
    cuisine: string,
    difficulty: string,
    description: string,
    instructions: {}
    tags: string[]
}

export interface Opts {
    "jwtFromRequest": string,
    "secretOrKey": string
}