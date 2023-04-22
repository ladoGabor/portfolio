import { Component } from '@angular/core';
import { TxtInjectorService } from '../services/txt-injector.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  introduction?: string;
  tagline?: string;

  w2w_description?: string;
  project2_description?: string;
  project3_description?: string;

  constructor(private getTxt: TxtInjectorService){}

  ngOnInit(){
    this.getTxt.txtInjector([
                              'introduction',
                              'tagline',
                              'w2w_description'
                            ]).subscribe(files => {
      this.introduction = files[0];
      this.tagline = files[1];
      this.w2w_description = files[2];
      // this.project2_description = data[3]; these will be created when they are ready
      // this.project3_description = data[4];
    });
  }


}
