import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiDestination } from "src/models/destination.model";

@Injectable()
export class DestinationService {
    constructor(private http: HttpClient){}

    getTopRated(){
        return this.http.get<ApiDestination[]>(environment.apiUrl + "/dest/topRated");
    }
}