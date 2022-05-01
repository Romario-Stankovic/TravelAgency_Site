import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiFaq } from "src/models/faq.model";
import { ApiMotd } from "src/models/motd.model";

@Injectable()
export class GeneralService {
    constructor(private http: HttpClient) {}

    getRandomMotd(){
        return this.http.get<ApiMotd>(environment.apiUrl + "/motd/random");
    }

    getFaq(){
        return this.http.get<ApiFaq[]>(environment.apiUrl + "/faq/all");
    }

}