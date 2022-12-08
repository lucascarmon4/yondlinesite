import { ProjetosComponent } from './../projetos/projetos.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
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
