import {Component, Input} from '@angular/core';
import {Experience} from "../../shared/cv";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experience: Experience;
}
