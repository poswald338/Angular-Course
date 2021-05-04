import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
   {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @Input() name: string;
  @ViewChild('heading', { static:true }) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor called')
  }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called');
     console.log(changes)
   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called')
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
