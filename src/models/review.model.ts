import { ApiUser } from "./user.model";

export interface ApiReview {
    from: ApiUser,
    destination_id: string,
    score: number,
    text: string
}