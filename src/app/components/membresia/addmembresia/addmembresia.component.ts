import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmembresia',
  templateUrl: './addmembresia.component.html',
  styleUrls: ['./addmembresia.component.css']
})
export class AddmembresiaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
