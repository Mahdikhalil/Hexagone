import {Component} from '@angular/core';
import {multi} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //whole data
  data;
  list: Object[] = [];
  data_face_analysis;
  data_true_emotions;
  data_meaningful_expression;
  data_sentiment_trend;

  constructor() {
    this.data = JSON.parse(JSON.stringify(multi));
    this.data_face_analysis = this.data.emotions.face_analysis[0].emotions;
    this.data_true_emotions = this.data.emotions.true_emotions[0].true_emotions;
    this.data_meaningful_expression = this.data.emotions.meaningful_expression[0].meaningful_expression;
    this.data_sentiment_trend = this.data.emotions.sentiment_trend[0].emotions;
    this.list.push({data: this.data_face_analysis, name: "face analysis"},
      {data: this.data_true_emotions, name: "true emotions"},
      {data: this.data_meaningful_expression, name: "maningful expression"}
      , {data: this.data_sentiment_trend, name: "sentiment trend"})

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
