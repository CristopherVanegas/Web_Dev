import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'Welcome';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]
  importNg = [
    'import { CommonModule } from \'@angular/common\';',
    'imports: [RouterOutlet, CommonModule],'
  ]
  name = signal('Cristopher');
  age:number = 20;

  // Input properties //
  imgSrc:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
  alt:string = "Blue sky and person taking a photo"
  value:string = 'Type your name';
  disabled = false;
  btnValue = 'Click me!'
  person = {
    name: this.name(),
    age: this.age,
    avatar: 'https://boomboomnaturals.com/cdn/shop/articles/nice_person.png?v=1625170708',
  }

  clickHandler(): void {
    alert("Click");
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  onChange(event:Event): void {
    console.log(event);
  }

  onSignal(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(input.value);
  }
}
