import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import {map, catchError, finalize, tap, last} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

import {ComponentCommunicationService} from './component-communication.service';



@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
    baseURL   =   environment.apiUrl;
    signIn: any;


    token = localStorage.getItem('token');
    httpHeaders = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + this.token
    });
    headersOptions = {
        headers: this.httpHeaders ,
        reportProgress: true
    };
    //@ts-ignore
    private subscription: Subscription;

    constructor(
        private http: HttpClient,
        private router: Router,

  ) {
  }

    postApi(url: any, data: any, loadingService: any = 0) {
        if (loadingService === 1){

        }else if (loadingService === 2){
        }else {

        }
        return this.http.post(this.baseURL + '/api/' + url, data, this.headersOptions)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(this.handleError),
                finalize(() => {
                    this.signIn = 'SIGN IN';
                    if (loadingService === 1){

                    }else if (loadingService === 2){
                    }else {

                    }
                    })
            );
    }
    getApi(url: any, loadingService: any = 0) {
        if (loadingService === 1){

        }else if (loadingService === 2){

        }
        else {

        }
        return this.http.get(this.baseURL + '/api/admin/' + url, this.headersOptions)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(this.handleError),
                finalize(() => {
                    if (loadingService === 1){

                    }else if (loadingService === 2){

                    }else {

                    }
                })
            );
    }
    getPublicApi(url: any, loadingService: any = 0) {
        if (loadingService === 1){

        }else if (loadingService === 2){

        }
        else {

        }
        return this.http.get(this.baseURL + '/api/' + url, this.headersOptions)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(this.handleError),
                finalize(() => {
                    if (loadingService === 1){

                    }else if (loadingService === 2){

                    }else {

                    }
                })
            );
    }

    uploadFile(file: any, url: any = 'general/upload/file', ) {
        const formData = new FormData();
        formData.append('file' , file);
        console.log(this.httpHeaders);
        // @ts-ignore
        return this.http.post(this.baseURL + '/api/admin/' + url, formData, this.fileUploadHeaderOption())
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(this.handleError),
                finalize(() => {

                })
            );
    }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return observableThrowError(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
      return observableThrowError(error || 'Node.js server error');
  }
  private headers(){
      return  new HttpHeaders({
              Accept: 'application/json',
              // 'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              Authorization: 'Bearer ' + this.token
          }
      );
  }
  private fileUploadHeaderOption(){
        return {
            headers: this.headers() ,
            reportProgress: true,
            observe: 'events',
        };
  }
  }
