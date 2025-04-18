import { Component } from '@angular/core';
import { CUSTOMERS } from '../customers';
import { Customer } from '../customers.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers',
  standalone: true, // This component is standalone because it does not belong to any module
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})


export class CustomersComponent {
  customers: Customer[] = CUSTOMERS;
  selectedCustomer: Customer | null = null; // To store the selected customer for modal display

  constructor(private modalService: NgbModal) {}

  open(content: any, customer: Customer) {
    this.selectedCustomer = customer; // Set the selected customer for modal display 
    this.modalService.open(content); // Open the modal to display customer details
  }
}