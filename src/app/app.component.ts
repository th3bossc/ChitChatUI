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
    const words = ["W", "h", "e", "n ", "w" , "o" , "r" , "d" , "s ", "c" , "o" , "m" , "e ", "a" , "l" , "i" , "v" , "e ", "a" , "n" , "d ", "c" , "o" , "n" , "v" , "e" , "r" , "s" , "a" , "t" , "i" , "o" , "n" , "s ", "t" , "h" , "r" , "i" , "v" , "e!"];
    let step = 0;
    const timer = () => {
      // console.log(this.subHeading);
      setTimeout(() => {
        if (step < words.length) {
          this.subHeading += words[step++];
          timer();
        }
      }, 50);
    }
    timer();
  }
}
