import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SermonsService {
  sermons = []

  constructor() { 
    this.sermons = [
      {
        id: 1,
        title: "First Sermon",
        date: new Date("May 5, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3"
      },
      {
        id: 2, 
        title: "Second Sermon",
        date: new Date("April 22, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3"
      },
      {
        id: 3, 
        title: "Third Sermon",
        date: new Date("April 18, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3"        
      },
      {
        id: 4, 
        title: "Fourth Sermon",
        date: new Date("April 11, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98e26f652deafd31f3bbb2/1554306701537/NO+FEAR.mp3/original/NO+FEAR.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      },
      {
        id: 5, 
        title: "Fifth Sermon",
        date: new Date("April 2, 2019"),
        sermonPhoto: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        sermonAudio: "http://static1.squarespace.com/static/58ac3d315016e1b8ebf53b98/t/5c98dff01972fb0001772192/1553522695074/The+Model+Prayer.mp3/original/The+Model+Prayer.mp3"
      }
    ]
  }

}
