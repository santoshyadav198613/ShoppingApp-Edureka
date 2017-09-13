import { Component, Inject, OnInit } from '@angular/core';
import { ApiConfig } from './service/ApiValueProvider/ApiConfig';
import { API_CONFIG } from './service/ApiValueProvider/api.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  firstName: string = 'Test';
  isHidden: boolean = true;

  constructor( @Inject(API_CONFIG) private apiConfig: ApiConfig) {

  }

  ngOnInit() {
    console.log('This is coming from Value provider' + this.apiConfig.apiEndPoint);
  }



  divToggle() {
    this.isHidden = !this.isHidden;
  }
}
