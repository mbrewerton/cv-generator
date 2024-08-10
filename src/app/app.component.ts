import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Cv} from "../shared/cv";
import {NgForOf, NgIf} from "@angular/common";
import {ExperienceComponent} from "./experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgIf, NgForOf, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv-generator';
  cv: Cv;

  constructor(private http: HttpClient) {
    const cvSubscription = this.http.get<Cv>('/assets/data.json').subscribe((data) => {
      this.cv = data;
      cvSubscription.unsubscribe();
    })
  }
}
