import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';

  empleados = [
    {
      'nombre': 'Gabriel' ,
      'cargo': 'manager',
      'email':'gabriel@gmail.com'
    },
    {
      'nombre': 'Rafael' ,
      'cargo': 'Desarrollador',
      'email':'rafael@gmail.com'
    },
    {
      'nombre': 'Pedro' ,
      'cargo': 'Diseñador',
      'email':'pedro@gmail.com'
    }
  ];

  model:any = {};

  addEmpleado():void{
    this.empleados.push(this.model);
  }

  deleteEmpleado():void{

  }

  editEmpleado():void{

  }

  updateEmpleado():void{

  }
}
