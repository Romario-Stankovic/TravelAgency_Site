import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiResponse } from "src/models/response.model";
import { ApiBooking } from "src/models/booking.model";

@Injectable()
export class BookingService {

    constructor(
        private http: HttpClient
    ){}

    createBooking(userId : string, destinationId : string, date: Date, days: number){
        return this.http.post<ApiBooking | ApiResponse>(environment.apiUrl + "/booking/", {
                userId: userId,
                destinationId: destinationId,
                date: date,
                days: days
            }
        );
    }

}