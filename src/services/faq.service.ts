import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiFaq } from "src/models/faq.model";
import { ApiMotd } from "src/models/motd.model";
import { ApiResponse } from "src/models/response.model";

@Injectable()
export class FaqService {
    constructor(private http: HttpClient) {}


    getAllFaq(){
        return this.http.get<ApiFaq[] | ApiResponse>(environment.apiUrl + "/faq/all");
    }

    deleteFaq(id : string) {
        return this.http.delete<ApiFaq | ApiResponse>(environment.apiUrl + "/faq/?id=" + id);
    }

    createFaq(question: string, answer : string){
        return this.http.post<ApiFaq | ApiResponse>(environment.apiUrl + "/faq/", {
            question: question,
            answer: answer
        });
    }

    updateFaq(id : string, question: string, answer : string){
        return this.http.put<ApiFaq | ApiResponse>(environment.apiUrl + "/faq/?id=" + id, {
            question: question,
            answer: answer
        });
    }

}