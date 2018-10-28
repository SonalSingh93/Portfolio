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
    imagesource: '../assets/images/searchengine.jpg'},
    {
      title: 'Stay Safe',
      content: 'A project that performs CRUD operations and decides whether a given area in boston is safe or not',
      githublink: 'https://github.com/SonalSingh93/SafeStay'},
    {
      title: 'Posting Application',
      content: 'Performs CRUD operations using MEAN stack',
      githublink: 'https://github.com/SonalSingh93/PostingMEANapplication'
    },
    {
      title: 'Integrated Vehicle Health Management',
      content: 'Scalable integrated health management',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
