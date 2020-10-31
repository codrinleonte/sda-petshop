import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet, PetType } from '../models/pet';
@Injectable({
  providedIn: 'root'
})
export class PetCrudService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://sda-pet-shop.azurewebsites.net/api/pet";

  public async getPets(): Promise<Pet[]> {
    return await this.httpClient.get<Pet[]>(this.apiUrl).toPromise();
  }

  public async addPet(pet: Pet): Promise<Pet> {
    return await this.httpClient.post<Pet>(this.apiUrl, pet).toPromise();
  }

  
  public async updatePet(pet: Pet): Promise<Pet> {
    return await this.httpClient.put<Pet>(this.apiUrl + `/${pet.id}`, pet).toPromise();
  }

  public async deletePet(petId: string): Promise<any> {
    return await this.httpClient.delete(this.apiUrl + `/${petId}`).toPromise();
  }
 
}
