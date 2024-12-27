import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss'
})
export class AllCategoriesComponent implements OnInit{
  categories: string[] = [];
  selectedCategory = '';
  products: any[] = [];
  isLoading = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.displayCategories();
  }
  displayCategories(): void {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      this.isLoading = false;
    });
  }

  displayProducts(category: string): void {
    this.isLoading = true;
    this.categoryService.getProductsByCategory(category).subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }
}
