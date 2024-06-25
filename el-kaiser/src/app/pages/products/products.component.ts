import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit{
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;

    });
  }
}
