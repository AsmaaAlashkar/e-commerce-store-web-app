import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrl: './display-all-products.component.scss'
})
export class DisplayAllProductsComponent implements OnInit{
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'image', 'rating', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>(this.products);
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoading = true; 
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
      this.isLoading = false; 
    });
  }

  openDeleteDialog(productId: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteProduct(productId);  
      }
    });
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.id !== productId);
      this.dataSource.data = this.products;
    });
  }
}
