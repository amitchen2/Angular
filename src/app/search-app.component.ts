import { Component } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'search-app',
  templateUrl: '/search-app.component.html',
  styleUrls:['/search-app.component.less']
})
export class SearchAppComponent {
  private array: any[];
  constructor(private searchService:SearchService) {
    // let response = searchService.getQuestions('rxjs').subscribe(data=>{
    //   console.log('data');
    //   console.log(data);
    // });
    // console.log(response);
  }
  ngOnInit(){
    this.searchService.getQuestions('hypernova').subscribe((data)=>{
      let array:any = data.items;
      let q=[];
      array.map(item => {
        item = {
          id: item.question_id.toString(),
          title: item.title,
          link: item.link
        }
        q.push(item);
      });
      this.questions = q;
      console.log(this.questions);
    });
  }

  questions: any;
  // ngOnInit(){
  //
  //   this.questions = [
  //     {
  //       id: 'a2',
  //       title: 'Can airbnb&#39;s hypernova tool be used for angularjs web seo?',
  //        link: 'https://stackoverflow.com/questions/37889708/can-airbnbs-hypernova-tool-be-used-for-angularjs-web-seo'
  //     },
  //     {
  //       id: 'b2',
  //       title: 'React/Hypernova - Missing Event Handlers',
  //       link: 'https://stackoverflow.com/questions/50745760/react-hypernova-missing-event-handlers'
  //     },
  //     {
  //       id: 'c2',
  //       title: 'Using a single redux store with hypernova for multiple components',
  //        link: 'https://stackoverflow.com/questions/59246492/using-a-single-redux-store-with-hypernova-for-multiple-components'
  //     },
  //     {
  //       id: 'd2',
  //       title: 'Using hypernova, how do I optionally render something only on the client?',
  //       link: 'https://stackoverflow.com/questions/59732330/using-hypernova-how-do-i-optionally-render-something-only-on-the-client'
  //     },
  //
  //   ]
  // };

  title = 'SearchApp';
}
