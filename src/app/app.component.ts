import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ChitChat';
  subHeading : string = "";
  constructor(private primeConfig : PrimeNGConfig) {}
  
  ngOnInit() {
    this.primeConfig.ripple = true;
    this.typeWriterAnimation();
  }

  typeWriterAnimation() {
    this.subHeading = "";
    const phrase = "When words come alive and conversations thrive!";
    const words = phrase.split("");
    let step = 0;
    const timer = () => {
      // console.log(this.subHeading);
      setTimeout(() => {
        if (step < words.length) {
          this.subHeading += words[step++];
          if (step < words.length && words[step] === " ")
            this.subHeading += words[step++];
          timer();
        }
      }, 50);
    }
    timer();
  }
}
