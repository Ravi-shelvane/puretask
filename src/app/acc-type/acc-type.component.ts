import { Component, OnInit } from '@angular/core';

export interface Events {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-acc-type',
  templateUrl: './acc-type.component.html',
  styleUrls: ['./acc-type.component.css']
})
export class AccTypeComponent implements OnInit {
  selectedValue: string;
  selectedEvent: string;
  
  events: Events[] = [
    {value: 'Doctor', viewValue: 'Doctor'},
    {value: 'Athlete ', viewValue: 'Athlete '},
    {value: 'Ground Staff', viewValue: 'Ground Staff'}
  
  ];


  
  constructor() { }

  ngOnInit() {
  }
  
  settings = {
    columns: {
      id: {
        title: 'Accreditation Id'
      },
      name: {
        title: 'Accreditation Type'
      },
      username: {
        title: 'Color'
      },
      // email: {
      //   title: 'Email'
      // }
    }
  };
  
  data = [
    // {
    //   id: 1,
    //   type: "Ground Staff",
    //   color: "Bret",
    // },
    // // ... other rows here
    // {
    //   id: 2,
    //   type: "Doctor",
    //   color: "Nicholas.Stanton",
    // }
  ];
}

  


