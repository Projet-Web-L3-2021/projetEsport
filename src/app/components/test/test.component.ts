import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  Tournament:any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetTournament().subscribe(res => {
      console.log(res)
      this.Tournament =res;
    });
  }

}