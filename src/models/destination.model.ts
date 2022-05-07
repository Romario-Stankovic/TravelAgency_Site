export interface ApiDestination {
    _id: string,
    name: string,
    description: string,
    imageUrl: string,
    score: number,
    ratings: number,
    categories : string[]
}