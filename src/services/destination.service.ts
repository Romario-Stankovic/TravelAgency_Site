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

    getByID(id: string) {
        return this.http.get<ApiDestination | ApiResponse>(environment.apiUrl + "/destination?id=" + id);
    }

    getReviews(id: string){
        return this.http.get<ApiReview[] | ApiResponse>(environment.apiUrl + "/destination/review?id=" + id);
    }

}