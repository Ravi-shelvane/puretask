import { Component, OnInit } from '@angular/core';
 
export interface Events {
  value: string;
  viewValue: string;
}
     
export interface Types {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-acc-pass',
  templateUrl: './acc-pass.component.html',
  styleUrls: ['./acc-pass.component.css']
})
export class AccPassComponent implements OnInit {
  selectedValue: string;
  selectedEvent: string;
  selectedType:string;
  public guestImageUrl;
  public eventImageUrl;
  public eventImageFlag = true;
  public guestImageFlag = true;
  public eventImageSizeFlag = true;
  public guestImageSizeFlag = true;
  public data: any;
  public pass:any = [];

  events: Events[] = [
    {value: 'ipl 2019', viewValue: 'IPL 2019'},
    {value: 'icc wc 2019', viewValue: 'ICC WC 2019'},
    {value: 'ct 2019', viewValue: 'CT TROPHY 2017'}
  ];

  types: Types[] = [
    {value: 'abc', viewValue: 'Abc'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  constructor() {

   }

  ngOnInit() {
    
    
    if(localStorage.getItem('currentPass') == null){
      //alert('lskdfj');
      this.pass = [];
    }else{
      this.pass = JSON.parse(localStorage.getItem('currentPass'));
      //this.pass.eventImg =this.eventImageUrl;
      //this.pass.guestImg =this.guestImageUrl;
    }
    
    console.log("pass data----");
    console.log(localStorage.getItem('currentPass'));
  }

  
  onGuestFileChange(event) {
    const file = event.target.files[0];
    console.log(file);
    if (event.target.files && file) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.guestImageUrl = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
      var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
      if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg') {
        if(file.size <= 500000){
          this.guestImageSizeFlag = true;
          this.guestImageFlag = true;
          return true;
        }else{
          console.log('Please select file which is below 500kb size.');
          this.guestImageSizeFlag = false;
          return false;
        }
      } else {
        console.log('Selected file format is not supported');
        this.guestImageFlag = false;
      }
      
    }
  }
  
  onEventFileChange(event) {
    const file = event.target.files[0];
    if (event.target.files && file) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.eventImageUrl = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
      var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
      if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg') {
          
          if(file.size <= 500000){
            this.eventImageSizeFlag = true;
            this.eventImageFlag = true;
            return true;
          }else{
            console.log('Please select file which is below 500kb size.');
            this.eventImageSizeFlag = false;
            return false;
          }
          
      } else {
        
        console.log('Selected file format is not supported');
        this.eventImageFlag = false;
        return false;
      }
    }
  }

  onSubmit(formData:any) {
    formData.guestImageUrl = this.guestImageUrl;
    formData.eventImageUrl = this.eventImageUrl;
    //alert('SUCCESS!!! \n\n' + JSON.stringify(formData));
    this.data = JSON.stringify(formData);
    console.log(this.data.event_image);
    localStorage.setItem('currentPass', JSON.stringify(formData));
    this.createPass();  
  }

  createPass(){
    this.pass = JSON.parse(localStorage.getItem('currentPass'));
    //this.pass.eventImg =this.eventImageUrl;
    //this.pass.guestImg =this.guestImageUrl;
    console.log(this.pass.guest_name);
  }
  
}
