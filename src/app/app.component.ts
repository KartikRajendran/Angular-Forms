import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'Java', 'Ios'];
  submitted = false;
  errorMsg = '';

  topicHasEror = true;
  userModel = new User('', 'rkartik85@gmail.com', 9791036960, 'default', 'morning', false);

  constructor(private enrollmentService: EnrollmentService) {}

  validateTopic(topic) {
    if (topic === 'default') {
      this.topicHasEror = true;
    } else {
      this.topicHasEror = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      // tslint:disable-next-line:no-shadowed-variable
      error => this.errorMsg = error.statusText
    );
  }
}
