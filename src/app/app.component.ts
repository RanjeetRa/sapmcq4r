import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { FlagshareService } from './flagshare.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcq';
  public submitted = true;
  public ques: any;
  public question: string = '';
  public opt1: string = '';
  public opt2: string = '';
  public opt3: string = '';
  public opt4: string = '';
  public opt5: string = '';
  localcontent: any;
  counter = 0;
  uncheck = false;
  tempa = 1;
  tempb = 1;
  tempc = 1;
  tempd = 1;
  tempe = 1;
  QnA = new Map<string, Array<string>>();
  myarray: Array<string> = [];
  reflag:any;

  public nextflag = false;
  public viewFlag = false;
  public list = [];
  // counter = 0;


  constructor(
    private dataservice: QuizService,
    private counterservice: FlagshareService
  ) {

  }

  ngOnInit() {
    this.dataservice.getJSON().subscribe(
      data => {
        this.ques = data;
        let myques = this.ques[this.counter];
        this.question = myques['Question'];
        this.opt1 = myques['A'];
        this.opt2 = myques['B'];
        this.opt3 = myques['C'];
        this.opt4 = myques['D'];
        this.opt5 = myques['E'];

      }
    );
    //console.log("calling ngOninit");

  }
  // onStart(){
  //   console.log("Inside Start");
  // }

  onNext() {
    this.nextflag = false;
    let mykey = this.counter.toLocaleString();
    this.QnA.set(mykey, this.myarray);
    //console.log(this.QnA);
    this.myarray = [];
    this.tempa = 0;
    this.tempb = 0;
    this.tempc = 0;
    this.tempd = 0;
    this.tempe = 0;
    // console.log(this.uncheck);
    // console.log("Inside OnNext");
    //  console.log(this.counterservice.counter);
    this.counter++;
    let myques = this.ques[this.counter];
    this.question = myques['Question'];
    this.opt1 = myques['A'];
    this.opt2 = myques['B'];
    this.opt3 = myques['C'];
    this.opt4 = myques['D'];
    this.opt5 = myques['E'];
    console.log("##################################################################");
    //this.onRefresh();
    window.alert("Please click refresh button before attempting next question");
  }
  onRefresh() {
    this.tempa = 1;
    this.tempb = 1;
    this.tempc = 1;
    this.tempd = 1;
    this.tempe = 1;
    // console.log("previously submitted answer is");
    // console.log(this.myarray);
  }
  optionid = '';
  optionidb = '';
  checkflag = false
  onChange(option: any, optionid: string) {

    if (this.myarray.includes(optionid)) {
      let key = this.myarray.indexOf(optionid);
      delete this.myarray[key];
      console.log(this.myarray);
      this.myarray.splice(key, 1);
      console.log(this.myarray);
    }
    else {
      this.myarray.push(optionid);
    }
  }

  public num: any;
  public result: any;
  public anssheet = [{}];
  public myview: any;
  public values: (string | number | Array<string> | any)[] = [];
  public lst: ((string | number | Array<string> | any)[])[] = [];
  onSubmit() {
    let mykey = this.counter.toLocaleString();
    this.QnA.set(mykey, this.myarray);


    for (let i = 0; i < 80; i++) {
      
      
      if (this.QnA.get(i.toLocaleString()) == null) {
        console.log(i);
        console.log(this.QnA.get(i.toLocaleString()));
        console.log(this.ques[i]);
        this.result = 'Wrong Answer';
        this.reflag =false;
        
        this.values.push(this.ques[i]['Question']);
        this.values.push(this.ques[i]['A']);
        this.values.push(this.ques[i]['B']);
        this.values.push(this.ques[i]['C']);
        this.values.push(this.ques[i]['D']);
        this.values.push(this.ques[i]['E']);
        this.values.push(this.result);
        this.values.push(this.ques[i]['Answer']);
        this.values.push("Not Answered");
        this.values.push(this.reflag);
        this.lst.push(this.values);
        this.values = [];
        let notanswered = {
          "consta": "answers",
          "q": this.ques[i]['Question'],
          "o1": this.ques[i]['A'],
          "o2": this.ques[i]['B'],
          "o3": this.ques[i]['C'],
          "o4": this.ques[i]['D'],
          "o5": this.ques[i]['E'],
          "ans": this.ques[i]['Answer'],
          "urans": "Not Answered"

        }
        this.anssheet.push(notanswered);
      }
      else {
        if(this.ques[i]['Answer'].length != this.QnA.get(i.toLocaleString())?.length){
          this.result  = "Wrong Answer";
          this.reflag = false;
        }
        else{
          for (let j = 0; j < this.ques[i]['Answer'].length; j++) {          
            if (this.QnA.get(i.toLocaleString())?.includes(this.ques[i]['Answer'][j]) == true) {
              this.result = 'Correct Answer';
              this.reflag = true;
            }
            else {
              this.result = 'Wrong Answer';
              this.reflag = false;
              break;
            }
          }

        }

        
        // console.log(i);
        // console.log(this.ques[i]);
        this.values.push(this.ques[i]['Question']);
        this.values.push(this.ques[i]['A']);
        this.values.push(this.ques[i]['B']);
        this.values.push(this.ques[i]['C']);
        this.values.push(this.ques[i]['D']);
        this.values.push(this.ques[i]['E']);
        this.values.push(this.result);
        this.values.push(this.ques[i]['Answer']);
        this.values.push(this.QnA.get(i.toLocaleString())?.sort());
        this.values.push(this.reflag);
        this.lst.push(this.values);
        this.values = [];

        let viewjson = {
          "consta": "answers",
          "q": this.ques[i]['Question'],
          "o1": this.ques[i]['A'],
          "o2": this.ques[i]['B'],
          "o3": this.ques[i]['C'],
          "o4": this.ques[i]['D'],
          "o5": this.ques[i]['E'],
          "ans": this.ques[i]['Answer'],
          "urans": this.QnA.get(i.toLocaleString())?.sort()

        }

        this.anssheet.push(viewjson);
      }



    }
    this.anssheet.splice(0, 1);
    // console.log(this.lst[0]);
    // console.log(this.lst[1]);

    //console.log(this.anssheet[0]);
    this.viewFlag = true;


  }
  color = "green";
  wrongcolor = "red";

  changeBackground(colorflag:any){
    console.log("Hiiii Color flag is "   + colorflag);
    if(colorflag == true){
      return { 'background-color': this.color };
    }
    else{
      return { 'background-color': this.wrongcolor };
    }
    
  }

}
