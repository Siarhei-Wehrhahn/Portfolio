import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrls: [
    './my-work-header.component.scss',
    './my-work-container.component.scss',
    './my-work.component.scss',
    './my-work-project-description.component.scss',
    './my-work-project-img.component.scss',
    './my-work-what-i-learned.component.scss'
  ]
})
export class MyWorkComponent {
  aboutJoin = 'Join is a group project inspired by the Kanban system. It is an organizational app that allows users to create to-dos, assign them to specific users, and move tasks through different stages of progress. Once a task is completed, it can be marked as done. The app also features a contact list and the option to add and check off subtasks.'
  learnedJoin = 'Lessons Learned from the "Join" Project During this project, I learned that successful teamwork heavily relies on effective communication. It is crucial for the entire team to discuss every detail together and agree on a clear course of action. I was fortunate to work with a team where collaboration was excellent. Everyone was dedicated, transparent, and acted based on our shared agreements. This project taught me the importance of integrating clear communication and teamwork into the execution of a complex project.'
  aboutPolloLoco = 'Pollo Loco is a thrilling jump-and-run game where players help Pepe face off against small and large chickens. Pepe can defeat his feathered foes by either jumping on them or throwing bottles. To use bottles, however, Pepe must first collect them, just like he collects coins scattered throughout the game. When it comes to the final boss chicken, Pepes only chance of victory is by using the collected bottles. The game is built with an object-oriented approach, ensuring dynamic interactions and an engaging gameplay experience.'
  learnedPolloLoco = 'In this project, the focus was on object-oriented programming to prepare us for working with Angular. Initially, it was a bit unfamiliar, but I quickly got the hang of it. I realized how much more efficient this approach is, as objects only need to be created once and can be reused endlessly. This not only simplifies the code but also makes it more modular and easier to maintain.'
  aboutCleverKiddo = 'Clever Kiddo is an educational app designed to help children learn through play. It covers a variety of topics, including numbers, colors, and recognizing fruits and vegetables. The app also features a Cookie Clicker game and allows kids to choose their own avatar. For every correct answer, players earn stars as rewards. In a future update, I plan to introduce a Tamagotchi feature, where the earned stars can be used to purchase food, drinks, and toys for the virtual pet. This engaging approach makes learning fun and interactive for kids.'
  learnedCleverKiddo = 'I learned how to implement Firebase to enable user account creation, whether through email and password, anonymously, or with Google and Apple. I also integrated Firebase for database storage. Following the MVVM pattern was crucial for maintaining code organization and clarity. It ensures that related code sections are neatly arranged, which prevents confusion and makes the code easier to maintain and extend.'
  aboutJRadio = 'I developed JRadio for my father-in-law, who had minimal requirements. He wanted an app that would play his 24/7 radio station, provide a link to his web radio, and optionally include a live stream. I was able to implement this quickly. However, due to Apples guidelines, publishing the app proved challenging. The app review process takes place within 48 hours, and the stream needs to be active during that time for testing. As a result, we decided to forgo the live stream feature to ensure the app could be successfully published.'
  learnedJRadio = ''
  myProjects = [
    {number: 1, projectName: 'Join', about: this.aboutJoin, technologiesUsed: 'HTML, CSS, JavaScript, Firebase', githubLink: 'https://github.com/Siarhei-Wehrhahn/JOIN', learned: this.learnedJoin},
    {number: 2, projectName: 'Pollo Loco', about: this.aboutPolloLoco, technologies: 'HTML, CSS, JavaScript', githubLink: 'https://github.com/Siarhei-Wehrhahn/El_Polo_Loco', learned: this.learnedPolloLoco},
    {number: 3, projectName: 'Clever Kiddo', about: this.aboutCleverKiddo, technologies: 'SwiftUi, Firebase, MVVM, Combine, SwiftUI State Management', githubLink: 'https://github.com/Siarhei-Wehrhahn/Clever-Kiddo-', learned: this.learnedCleverKiddo},
    {number: 4, projectName: 'JRadio', about: this.aboutJRadio, technologies: 'SwiftUi', githubLink: 'https://github.com/Siarhei-Wehrhahn/Jay-s_Webradio', learned: this.learnedJRadio}
  ]
}
