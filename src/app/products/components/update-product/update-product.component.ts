import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  updateProductForm!: FormGroup; 
  productId!: number;
  isLoading: boolean = true; 

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(this.productId).subscribe({
      next: (product: Product) => {
        this.updateProductForm = this.fb.group({
          title: [product.title, Validators.required],
          price: [product.price, [Validators.required, Validators.min(1)]],
          description: [product.description, Validators.required],
          category: [product.category, Validators.required],
          image: [product.image, [Validators.required, Validators.pattern('https?://.+')]],
          rating: [product.rating.rate, [Validators.required, Validators.min(1), Validators.max(5)]]
        });
        this.isLoading = false;
      },
      error: (err) => console.error('Error fetching product:', err)
    });
  }

  onSubmit(): void {
    if (this.updateProductForm.valid) {
      const updatedProduct: Product = {
        ...this.updateProductForm.value,
        id: this.productId,
        rating: {
          rate: this.updateProductForm.value.rating,
          count: 0 
        }
      };

      this.productService.updateProduct(this.productId, updatedProduct).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this.router.navigate(['/products']); 
        },
        error: (err) => console.error('Error updating product:', err)
      });
    }
  }
}
