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

    getAll(){
        return this.http.get<ApiDestination[] | ApiResponse>(environment.apiUrl + "/destination/all");
    }

    getByID(id: string) {
        return this.http.get<ApiDestination | ApiResponse>(environment.apiUrl + "/destination/?id=" + id);
    }

    create(data : FormData){
        return this.http.post<ApiDestination | ApiResponse>(environment.apiUrl + "/destination/", data);
    }

    update(id : string, data : FormData){
        return this.http.put<ApiDestination | ApiResponse>(environment.apiUrl + "/destination/?id="+id, data);
    }

    delete(id : string){
        return this.http.delete<ApiDestination | ApiResponse>(environment.apiUrl + "/destination/?id=" + id);
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