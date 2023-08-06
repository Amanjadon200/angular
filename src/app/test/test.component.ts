import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    <!-- <input
      [disabled]="false"
      placeholder="enter your name"
      value="aman jadon"
      id="name"
      class="text-warning"
      #myInput
      [(ngModel)]="title"
    />
    {{title}}
    <button (click)="logMessage(myInput)">Log</button>
    <h2 [class]="textGreen">hi aman</h2>
    <h2 [class.text-warning]="hasError">hi aman</h2>
    <h2 [ngClass]="myClasses">hi aman</h2>
    <h2 [style.color]="'orange'">orange</h2>
    <h2 [style.color]="orange">orange 2</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">hi aman jadon</h2>
    <h2 [ngStyle]="styleObject">style object</h2>
    <button (click)="onClick($event)">Greet</button>
    <p>{{ greet }}</p>
    <button (click)="greet = 'hi aman how are you'">Greet</button>
    <p>{{ greet }}</p>
{{title}} -->
    <p *ngFor="let color of colors; index as i; first as f">
      {{ i }}.{{ f }} {{ color }}
    </p>
    <p *ngIf="displayName; then thenBlock; else elseBlock"></p>
    <!-- <img [src]="imageUrl" /> -->
    <ng-template #thenBlock>name is displayed</ng-template>
    <ng-template #elseBlock>name is hidden</ng-template>
    <div>hello {{ parentName }}</div>
    <button (click)="fireAnEvent()">emit</button>
  </div>`,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-warning {
        color: red;
      }
      .text-italic {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent {
  colors = ['orange', 'red', 'green'];
  @Input('childVariable') parentName = '';
  @Output('childEvent')
  change = new EventEmitter();
  title = 'aman';
  displayName = false;
  imageUrl =
    'https://media.istockphoto.com/id/1463842482/photo/beautiful-multicolor-tropical-background-of-palm-trees.jpg?s=1024x1024&w=is&k=20&c=p8ZSIDcOUHIIxHeJbx8Hrm3WpxhknBzbOrdDD-Wxv7Q=';
  textGreen = 'text-success';
  hasError = true;
  specialClass = 'text-italiac';
  myClasses = {
    'text-success': !this.hasError,
    'text-italic': true,
    'text-warning': this.hasError,
  };
  orange = 'orange';
  styleObject = {
    color: 'red',
    fontStyle: 'italic',
  };
  greet = '';
  fireAnEvent(){
    console.log('object')
    this.change.emit("welcome aman jadon ");
  }
  onClick(e: any) {
    console.log('button is clicked', e);
    this.greet = 'welcome to aman jadon coding world';
  }
  logMessage(value: any) {
    console.log(value.value);
  }
}
