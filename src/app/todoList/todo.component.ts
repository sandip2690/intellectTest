import { Component } from '@angular/core';
import { AppComponent } from '../userList/app.component';
import {Http, Response} from '@angular/http';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app1-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TOdo {
    public userId;
    public todoJsonData
    public chk
    public newTodo
    public obj;
    constructor(public appComponent: AppComponent,private router: Router,private http: Http) {
        this.userId = appComponent.test
        this.getJsonData1()
    };
    redirect() {
        this.router.navigate(['./']);
      };
   

         getJsonData1() {
        this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+this.userId.id)
        .map((res:Response) => res.json())
        .subscribe(
            data => { 
                this.todoJsonData = data;
                console.log(data)
            },
            err => console.error(err),
            () => console.log('done')
        );  
    };
    addToDo(){
        if(this.newTodo){
            this.obj = {
                'title' : this.newTodo,
                'completed' : false,
                'userId' : this.userId.id
            }
            this.newTodo = "";
            this.todoJsonData.unshift(this.obj)
        }
    }
    deleteToDo(todo){
        for(var i = 0; i < this.todoJsonData.length; i++) {
          if(todo.id === this.todoJsonData[i].id) {
                this.todoJsonData.splice(i, 1);
            }
        }
    }
}
