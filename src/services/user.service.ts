import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiUser } from "src/models/user.model";
import { ApiResponse } from "src/models/response.model";

@Injectable()
export class UserService {
    loggedInUser?: ApiUser;

    constructor(private http: HttpClient) {
        let id = localStorage.getItem("userID");
        if (id != null) {
            this.getById(id).subscribe(data => {
                if ("_id" in data) {
                    this.loggedInUser = data;
                }
            });
        }
    }

    getById(id: string) {
        return this.http.get<ApiUser | ApiResponse>(environment.apiUrl + "/user/?id=" + id);
    }

    getAll(){
        return this.http.get<ApiUser[] | ApiResponse>(environment.apiUrl + "/user/all");
    }

    register(name: string, lastName: string, email: string, password: string) {
        return this.http.post<ApiUser | ApiResponse>(environment.apiUrl + "/user/", {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        });
    }

    update(id: string, name: string, lastName: string, email: string, password? : string) {
        return this.http.put<ApiUser | ApiResponse>(environment.apiUrl + "/user/?id=" + id, {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        });
    }

    delete(id: string){
        return this.http.delete<ApiUser | ApiResponse>(environment.apiUrl + "/user/?id=" + id);
    }

    login(email: string, password: string) {
        return this.http.post<ApiUser | ApiResponse>(environment.apiUrl + "/user/login", {
            email: email,
            password: password
        });
    }

    saveLoginCredentials(cred: ApiUser) {
        this.loggedInUser = cred;
        localStorage.setItem("userID", cred._id);
    }

    logout() {
        this.loggedInUser = undefined;
        localStorage.removeItem("userID");
    }

}