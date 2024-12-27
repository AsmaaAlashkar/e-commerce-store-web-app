import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit{
  addProductForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }
  onSubmit(): void {
    if (this.addProductForm.valid) {
      const newProduct: Product = this.addProductForm.value;

      this.productService.addProduct(newProduct).subscribe({
        next:(response) => {
          console.log('Product added successfully', response);
          this.router.navigate(['/products']); 
        },
        error: (error) => {
          console.error('Error adding product', error);
        }
      });
    }
  }
}
