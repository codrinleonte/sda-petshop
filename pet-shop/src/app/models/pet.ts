export interface Pet{
    id: string,
    name: string,
    breed: string,
    type: PetType,
    picture: string,
    description: string,
    owner: string;
}

export enum PetType{
    Cat = "Cat",
    Dog = "Dog",
    Chicken = "Chicken",
    Piglet = "Piglet",
    Fish = "Fish"
}