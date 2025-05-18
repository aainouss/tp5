import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

title : string = 'TITRE - APPCOMPONENT'
tab : string[] = ['said','amine','lilia','celia'];

supprimer(){
  this.tab.pop();
}

vider(){
  this.tab=[];
}

ajouter(nom:string){
  this.tab.push(nom);
}

}
