import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiFaq } from "src/models/faq.model";
import { ApiMotd } from "src/models/motd.model";

@Injectable()
export class GeneralService {
    constructor(private http: HttpClient) {}

    getMotd(){
        return this.http.get<ApiMotd>(environment.apiUrl + "/welcomeMessage");
    }

    getFaq(){
        return this.http.get<ApiFaq[]>(environment.apiUrl + "/faq");
    }

}