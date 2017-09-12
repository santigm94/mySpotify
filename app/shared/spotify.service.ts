import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
   
   constructor(private _http:Http) {
      console.log('Se ha creado una instancia del servicio de spotify');
   }

   getToken(){
    var token = 'BQAE-PaxbW-gsJdwYCexuPbD7M-4Gczpgx1Ke1b7tudSGPKwkTmrPhk7RGlfuVZmQuh-SX_MdZbgM8zmrCuldtcY6-B_slhtIh_NqdA_ARbSLq9CfjtgQ-FJzhtLTNsmdczsRX7d0JQUYxexse60Dgj2fnx9IyWCDHIBbwTA5YG0zZk44I90EVWPITZf-B6lDgvO29aazTNpNAliHVGP54nVmusuw6gJqG8mbht6zYmd2s06ceIPj4pqeGBemRCm-Izt7IEFPJyVrXWwY1e6VV8_Vb3m2xIzVFXrDpUx5ZUkfdli5I3lByU1RlTiw_-YHMu3';
    return token; 
   }
   
   searchMusic(str:string, type = 'artist') {

    let headers = new Headers();
    let authToken = this.getToken();
    headers.append('Authorization', 'Bearer '+authToken);
      let searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
      return this._http.get(searchUrl, { headers })
         .map(res => res.json());
   }
   
   getArtist(id:string) {

      let headers = new Headers();
      let authToken = this.getToken();
      headers.append('Authorization', 'Bearer '+authToken);
      let artistUrl = 'https://api.spotify.com/v1/artists/' + id;
      return this._http.get(artistUrl, { headers })
         .map(res => res.json());
   }
   
   getAlbums(artistId:string) {

      let headers = new Headers();
      let authToken = this.getToken();
      headers.append('Authorization', 'Bearer '+authToken);
      let albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
      return this._http.get(albumsUrl, { headers })
         .map(res => res.json());
   }
   
   getAlbum(id:string) {

      let headers = new Headers();
      let authToken = this.getToken();
      headers.append('Authorization', 'Bearer '+authToken);
      let albumUrl = 'https://api.spotify.com/v1/albums/' + id;
      return this._http.get(albumUrl, { headers })
         .map(res => res.json());
   }
}