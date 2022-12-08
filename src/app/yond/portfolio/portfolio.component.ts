import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  onSelectChange (event:any) {
    const cards = document.querySelectorAll('.example-card');
   if(cards){
    cards.forEach((element:any) => {
      if(element.dataset.type === event.target.value || event.target.value === "default"){
        element.style.display = "block"
      }else{
        element.style.display = "none"
      }

      });

    }
  }

  onMobileChange() {
    const menu = document.querySelector(".mobile-menu");
    const nav = document.querySelector('nav');

    nav?.classList.toggle('active');
    menu?.classList.toggle('active');
    const lis = document.querySelectorAll('li');
    lis.forEach((li, index) => {
      li.style.animation
      ? (li.style.animation = "")
      : (li.style.animation = `navLinkFade .8s ease forwards ${
          index / 15 + .2
        }s`);    
      });
  }


  closeClick(){
    const menu = document.querySelector(".mobile-menu");
    const nav = document.querySelector('nav');
    const lis = document.querySelectorAll('li');
    lis.forEach((li, index) => {
      nav?.classList.toggle('active');
      menu?.classList.toggle('active');
      li.style.animation
      ? (li.style.animation = "")
      : (li.style.animation = `navLinkFade .8s ease forwards ${
          index / 15 + .2
        }s`); 
    });
  }

}
