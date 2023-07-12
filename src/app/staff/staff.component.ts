import {Component, OnInit} from '@angular/core';
import {  StaffDTO } from '../models/Staff';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],


})
export class StaffComponent implements OnInit{
  newStaff: StaffDTO = {} as StaffDTO;
  role!: string;
  entrepriseVisible: boolean = false;

  ngOnInit() {
    this.role = ''; // Initialisez la valeur du rôle à une valeur par défaut
  }

  constructor(private staffService: StaffService) {}

  addStaff() {
    this.staffService.addNewStaff(this.newStaff).subscribe(
      response => {
        // Le personnel a été ajouté avec succès
        console.log('Le personnel a été ajouté avec succès', response);
      },
      error => {
        // Une erreur s'est produite lors de l'ajout du personnel
        console.error('Une erreur s\'est produite lors de l\'ajout du personnel', error);
      }
    );
  }
  onRoleChange() {
    if (this.role === 'Client') {
      this.entrepriseVisible = true;
    } else {
      this.entrepriseVisible = false;
    }
  }





}
