import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
   
   constructor(private _http:Http) {
      console.log('Se ha creado una instancia del servicio de spotify');
   }

   getToken(){
    let searchUrl = 'https://api.spotify.com/v1/search';
    return this._http.get(searchUrl)
       .map(res => res.json()); 
   }
   
   searchMusic(str:string, type = 'artist') {

    let headers = new Headers();
    let authToken = 'BQBDE7ebRyjMH569zFIt7p7Jpj83PFrvFELNv6kx8yFVvL7JR9DmnUFtW0Ekpy-Okf2SYr5PSbnONkGkpN8jB41EuYGuGpbtkX1wfzx8V7dLBfQ5mZlaI56SKPsdxiXGoi6YqFSXAmK6vqa0p1cKGXostHK6d6jGYrc0pCqhau5IBLmdqAhQc0GZJ_k5ePrugVaoC9otTaObJNef2DoIU_IY57_imEFTlf5qgU0YIUxd20dVaCVyoUvSFbpw498tUowOY_G7iFpBGkeXZJjtC9YrW6R9t-SLNyPvlEnMswYHNO2uJK0wkt4COW7Va7Z7usaU';
    headers.append('Authorization', 'Bearer '+authToken);
      let searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
      return this._http.get(searchUrl, { headers })
         .map(res => res.json());
   }
   
   getArtist(id:string) {
      let artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this._http.get(artistUrl)
         .map(res => res.json());
   }
   
   getAlbums(artistId:string) {
      let albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this._http.get(albumsUrl)
         .map(res => res.json());
   }
   
   getAlbum(id:string) {
      let albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this._http.get(albumUrl)
         .map(res => res.json());
   }
}