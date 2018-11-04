import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {title: 'Search Engine' ,
    content: `The search engine project focussed on implementing all
     functionalities of a asearch engine, The engine has a custom parser that cleans the data
     and only performs the search on main contents of the web page. It contains an indexer which creates
     an inverted index from the content that is parsed, the crux of the engine implements the BM25 and query likelihood model
     to perform the search operation.`,
    githublink: 'https://github.com/SonalSingh93/SearchEngine',
    imagesource: '../assets/images/Untitled design (1).png'},
    {
      title: 'Stay Safe',
      content: 'A project that performs CRUD operations and decides whether a given area in boston is safe or not',
      githublink: 'https://github.com/SonalSingh93/SafeStay',
      imagesource: '../assets/images/staysafe.png'},
      {
        title: 'Squash Simulation',
        content: `A project to build a game using Racket( A functional programming language) to simulate a squash game.
        The game had a feature to adjust the number of balls in the game at a time and to handle the collision of the ball with the
        court borders.`,
        imagesource: '../assets/images/squash.png'
      },
    {
      title: 'Posting Application',
      content: 'Performs CRUD operations using MEAN stack',
      githublink: 'https://github.com/SonalSingh93/PostingMEANapplication',
      imagesource: '../assets/images/postingApp.png'
    },
    {
      title: 'Integrated Vehicle Health Management',
      content: 'Scalable integrated health management',
      imagesource: '../assets/images/IVHM.png'
    },
    {
      title: 'Portfolio Website',
      content: 'This! A static website to display work done so far.',
      imagesource: '../assets/images/website.png',
      githublink: 'https://github.com/SonalSingh93/Portfolio'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
