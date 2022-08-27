import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  resultado = "";

  codigo = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    this.http.post('https://codebreaker-backend-deutsch.herokuapp.com/juego', {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"
      }),
      codigo: this.codigo
    }).subscribe((response) => {
      let results: any = response;
      console.log(results);
      this.resultado = results;
    });
  }

  cambiarCodigo(value: any) {
    this.codigo = value;
  }

}
