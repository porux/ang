import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap, map, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.scss']
})
export class AllatainkComponent implements OnInit {
  allatok: any[] = [];
  allatokFejlec: string[] = ['nev', 'faj', 'gondozo', 'helye', 'erkezes'];
  hibaUzenet: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://allatkert-cfc15-default-rtdb.europe-west1.firebasedatabase.app/allatok.json')
    .pipe(      
      catchError( error =>{
          this.hibaUzenet = error.message;
          return throwError(error);
        }
      ),
      map( allatok => {
          let ujAllatok: any[] = [];
          Object.entries(allatok).forEach( ([key, value]) =>{
            ujAllatok.push(value);
          });
          return ujAllatok;
        }        
      ),
      tap( (allatok: any[]) =>{
          allatok.sort((a, b) => (a.gondozo > b.gondozo)? 1 : -1 );
          console.log(allatok);
        }
      )
    )
    .subscribe( (allatok: any[]) =>{
        this.allatok = allatok;
      }
    );
  }

}
