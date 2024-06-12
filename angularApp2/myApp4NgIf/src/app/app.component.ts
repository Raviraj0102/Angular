import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemValue:string='';
  items:any=[];
  title = 'myApp4NgIf';
  status:boolean=true;
  status1:boolean=false;
  country1:string ="";
  countryName1:string[]=["country1","country2","country3"];
  country2:string="";
  //productNames:string[]=["item1","item2","item3"];
  products=[
    {
      'id':'1001',
      'name':'item1',
      'image':'../assets/img1.jpg',
      'price':'20.0'
    },
    {
      'id':'1002',
      'name':'item2',
      'image':'../assets/img2.jpg',
      'price':'30.0'
    },
    {
      'id':'1003',
      'name':'item3',
      'image':'../assets/img3.jpg',
      'price':'40.0'
    },
    {
      'id':'1004',
      'name':'item4',
      'image':'../assets/img4.jpg',
      'price':'50.0'
    },
    {
      'id':'1005',
      'name':'item5',
      'image':'../assets/img5.jpg',
      'price':'60.0'
    },

]


addItem(someData:any){
  this.items.push({
    item:someData.value
  });

}
}