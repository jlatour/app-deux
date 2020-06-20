import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item.model';
import { ItemsService } from '../../service/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-ui',
  templateUrl: './items-ui.component.html',
  styleUrls: ['./items-ui.component.scss'],
  providers: [Item, ItemsService]
})
export class ItemsUIComponent implements OnInit {

  items: any = [];
  service: ItemsService;

  constructor(service: ItemsService) {
    this.service = service;
   }

  loadItems() {
    return this.service.getAllItems().subscribe((data: {}) => {
      this.items = data;
    });
  }

  ngOnInit() {
    this.loadItems();
  }


}
