import { HeadersInterceptor } from './intercepters/headers.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToUppercasePipe } from './pipes/to-uppercase.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './intercepters/token.interceptor';



@NgModule({
  declarations: [
    ToUppercasePipe
  ],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HeadersInterceptor,
      multi : true
    }
  ]
})
export class CoreModule { }
