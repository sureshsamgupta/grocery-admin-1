import { BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';
@Injectable()

export class sharedService{
    isToken = new BehaviorSubject<boolean>(false);
    $castToken = this.isToken.asObservable();



    public getToken(bool: boolean) {
        this.isToken.next(bool);
    }

}