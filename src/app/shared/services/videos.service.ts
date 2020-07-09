import { Injectable } from '@angular/core';
import { Video } from '../models/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videos : Array<Video> ;

  constructor() { }


add_video(video){
  this.videos.push(video) ;

}


getvideos(): any {
  this.videos = [

    {
    id : 1 ,
    name : 'khabib vs Conor' , 
    date : '18/8/2018' ,
    source : 'iu6n_Xja8mU' ,
    description : 'Some quick example text to build on the card title and make up the bulk of the cards content.' ,

    },

    {
      id : 2 ,
      name : 'Nate vs Conor' , 
      date : '11/3/2017' ,
      source : 'S3moBU-ax_M' ,
      description : 'Nate Diaz surprised the MMA world when he defeated Conor McGregor on short notice at UFC 196. The rematch would take place only a few months later at UFC 202.' ,
  
      },

      {
        id : 3 ,
        name : 'Adesanya vs Silva' , 
        date : '21/9/2019' ,
        source : 'hsHDn9w1JeE' ,
        description : ' Adesanya continued his rapid ascent up the middleweight rankings after he faced off with UFC legend Anderson Silva at UFC 234 in February of last year.' ,
    
        },

        {
          id : 4 ,
          name : 'Ferguson vs Barboza' , 
          date : '9/2/2019' ,
          source : 'Mythig0H0H0' ,
          description : 'Una de las mejores peleas del 2015 la tuvieron Tony Ferguson vs Edson Barboza, una guerra que no llegaría a decisión de los jueces' ,

      
          },

          {
            id : 5 ,
            name : 'Robbie Lawler vs Rory MacDonald 2' , 
            date : '6/4/2016' ,
            source : '6XJSIoemVAg' ,
            description : 'Robbie Lawler and Rory MacDonalds second meeting at UFC 189 for the UFC welterweight title was one for the ages. Re-watch the unforgettable classic.' ,
  
        
            },

            
            {
              id : 6 ,
              name : 'Whittaker vs Romero 2' , 
              date : '15/11/2018' ,
              source : 'gs17wo2FV9s' ,
              description : 'Una batalla y revancha entre dos de los mejores y más fuertes pesos medios que haya visto el Octágono, revívela' ,
    
          
              },
    


  ]
return this.videos ;
}
  

}
