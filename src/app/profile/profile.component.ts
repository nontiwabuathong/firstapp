import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list ="Customers";
  nums = [{"firstname":"Alfred","lastname":"freddy","address":"Thailand"},
  {"firstname":"Ana","lastname":"helados","address":"Belgium"},
  {"firstname":"Antonio","lastname":"Moreno","address":"Russia"},
  {"firstname":"David","lastname":"Beckham","address":"Poland"},
  {"firstname":"Frank","lastname":"Lampard","address":"French"},
  {"firstname":"cristiano","lastname":"ronaldo","address":"Italy"},
  {"firstname":"Drink","lastname":"Water","address":"England"},
  {"firstname":"Alex","lastname":"Ferguson","address":"Spain"},
  {"firstname":"Leonel","lastname":"messi","address":"Peru"},
  {"firstname":"Luis","lastname":"Suarez","address":"uruguay"}
];
}
