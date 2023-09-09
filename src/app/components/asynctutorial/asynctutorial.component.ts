import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asynctutorial',
  templateUrl: './asynctutorial.component.html',
  styleUrls: ['./asynctutorial.component.css']
})
export class AsynctutorialComponent {

  /*
  asyncPipe=new Observable((observe)=>{
    observe.next("hi");
  })
  
*/

/*

  asyncPipe=new Observable((observ)=>{

    setTimeout(()=>{observ.next("hello");},2000);
    });
  */


 //Refresh page karo after 2 second show hello

  //setInterval with Observable
  
  /*
  asyncPipe=new Observable((observ)=>{

        let  i=0;
        setInterval(()=>{  observ.next("hello"+i); i++;},2000);
        })
*/
        

        
        booleanOb=new Observable((observ=>{
          setTimeout(()=>{ observ.next("true");},3000);
        }));
        
  }

