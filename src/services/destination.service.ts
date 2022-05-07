import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiDestination } from "src/models/destination.model";
import { ApiResponse } from "src/models/response.model";
import { ApiReview } from "src/models/review.model";

@Injectable()
export class DestinationService {
    constructor(private http: HttpClient){}

    getTopRated(){
        return this.http.get<ApiDestination[] | ApiResponse>(environment.apiUrl + "/destination/topRated");
    }

    getFiltered(filters: string[]){
        return this.http.post<ApiDestination[] | ApiResponse>(environment.apiUrl + "/destination/filter", {
            filters: filters
        });
    }

    getByID(id: string) {
        return this.http.get<ApiDestination | ApiResponse>(environment.apiUrl + "/destination?id=" + id);
    }

    getReviews(id: string){
        return this.http.get<ApiReview[] | ApiResponse>(environment.apiUrl + "/destination/review?id=" + id);
    }

    postReview(userId: string, destinationId: string, score: number, text: string){
        return this.http.post<ApiReview | ApiResponse>(environment.apiUrl + "/destination/review", {
            userId: userId,
            destinationId: destinationId,
            score: score,
            text: text
        });
    }

}