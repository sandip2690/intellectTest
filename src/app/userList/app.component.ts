import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public dataObj;
    public test;
    constructor(private http: Http, private router: Router) {}
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.http.get('https://jsonplaceholder.typicode.com/users').map((res:Response) => res.json())
        .subscribe(
            data => { 
                this.dataObj = data;
            },
            err => console.error(err),
            () => console.log('done')
        );  
    };
      viewTodoFn(index) {
        this.test = index;
        this.router.navigate(['./todolist']);
      };
}
