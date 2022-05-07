import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiMotd } from "src/models/motd.model";
import { ApiResponse } from "src/models/response.model";

@Injectable()
export class MotdService {

    constructor(private http: HttpClient) {}

    getRandomMotd(){
        return this.http.get<ApiMotd | ApiResponse>(environment.apiUrl + "/motd/random");
    }

    getAllMotds(){
        return this.http.get<ApiMotd[] | ApiResponse>(environment.apiUrl + "/motd/all");
    }

    createMotd(message : string) {
        return this.http.post<ApiMotd | ApiResponse>(environment.apiUrl + "/motd/", {
            message: message
        });
    }

    updateMotd(id : string, message : string) {
        return this.http.put<ApiMotd | ApiResponse>(environment.apiUrl + "/motd/?id=" + id, {
            message: message
        });
    }

    deleteMotd(id: string){
        return this.http.delete<ApiMotd | ApiResponse>(environment.apiUrl + "/motd/?id=" + id);
    }
}