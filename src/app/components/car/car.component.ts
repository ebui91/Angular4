import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  issa370z: Car
  posts: Post[];
  showEditModal: boolean

  constructor(private dataService: MockDataService) {}

  onClickEdit() {
    this.showEditModal = !this.showEditModal
  }

  saveName(input: string) {
    this.issa370z.name = input
  }

  closeModal() {
    this.showEditModal = false
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts.splice(0, 100)
      console.log(this.posts)
    })

    this.issa370z = {
      name: 'issa.370z',
      make: 'Nissan',
      model: '370z',
      hp: 332,
      mods: ['AAM CAI', 'AAM Axleback Exhaust', 'Varrstoen ES2 wheels']
    }
    this.showEditModal: false
  }
}

interface Car {
  name: string,
  make: string,
  model: string,
  hp: number,
  mods: string[]
}

interface Post {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
