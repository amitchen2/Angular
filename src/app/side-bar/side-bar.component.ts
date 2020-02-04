import { Component , Input} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html'
})

export class SideBarComponent{
  @Input() questions: any;

}
