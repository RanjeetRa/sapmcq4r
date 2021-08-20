import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent implements OnInit {
  ques:any;
  quecontent:any;

  constructor(private dataservice : QuizService ) { }

  ngOnInit(): void {
    console.log("inside helper ngOniinit");
    // this.dataservice.getJSON().subscribe(
    //   data => {
    //     this.ques = data;
    //     //console.log(this.ques[0]['Question']); 

    //     localStorage.setItem(this.quecontent , this.ques);

        
    //   }
    // );
  }

}
