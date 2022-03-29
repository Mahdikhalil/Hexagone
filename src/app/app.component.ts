import {Component} from '@angular/core';
import {multi} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  list : Object[]=[];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  //whole data
  data;
  data_face_analysis;
  data_true_emotions;
  data_meaningful_expression;
  data_sentiment_trend;

  constructor() {
    // Object.assign(this, { multi });
    this.data = JSON.parse(JSON.stringify(multi));
    this.data_face_analysis = this.data.emotions.face_analysis[0].emotions;
    this.data_true_emotions = this.data.emotions.true_emotions[0].true_emotions;
    this.data_meaningful_expression = this.data.emotions.meaningful_expression[0].meaningful_expression;
    this.data_sentiment_trend = this.data.emotions.sentiment_trend[0].emotions;
    this.list.push({data: this.data_face_analysis , name : "face analysis"},
      {data: this.data_true_emotions , name : "true emotions"},
      {data: this.data_meaningful_expression , name : "maningful expression"}
      ,{data: this.data_sentiment_trend , name : "sentiment trend"})

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
