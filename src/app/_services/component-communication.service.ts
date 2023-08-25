import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComponentCommunicationService {
    private subject = new Subject<any>();
    private componentChangesSubject = new Subject<any>();
    private moveDataResponseFlag = new Subject<any>();
    private moveDataGoogleMapsResponse = new Subject<any>();
    private change = 0;
    private counterAdminMessages = new Subject<number>();
    private canAccessSalesUserGroup = new Subject<number>();
    private chatStatusSize = new Subject<boolean>();

    updateToken(token: string) {
        this.subject.next({ token });
    }

    getToken(): Observable<any> {
        return this.subject.asObservable();
    }

}
