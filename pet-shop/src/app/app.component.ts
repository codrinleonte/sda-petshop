import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Pet, PetType } from './models/pet';
import { PetCrudService } from './services/pet-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private petService: PetCrudService) {
    
  }

  pets: Pet[] = [];
  faEdit = faEdit;
  
  async ngOnInit(): Promise<void> {
    this.pets = await this.petService.getPets();
    console.log(this.pets)
  }

  shouldEdit: boolean;
  title = 'pet-shop';

  name: string;
  breed: string;
  type: PetType;
  description: string;
  picture: string;
  owner: string;

  updatePet(){
    
  }

  async addPet(){
    const pet: Pet = {
      id: "",
      owner: this.owner,
      breed: this.breed,
      description: this.description,
      name: this.name,
      picture: this.picture,
      type: this.type
    }

    const addedPet = await this.petService.addPet(pet);

    this.pets.push(addedPet);
  }

  async deletePet(id: string){
    await this.petService.deletePet(id);
    this.pets = this.pets.filter(p => p.id !== id);
  }
}
