import { ApiUser } from "./user.model";

export interface ApiReview {
    _id: string,
    from: ApiUser,
    destination_id: string,
    score: number,
    text: string
}