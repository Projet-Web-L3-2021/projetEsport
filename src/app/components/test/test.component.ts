import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})



export class TestComponent implements OnInit {
  
  tournament: string = '';
  tournaments:any = [];
  jsonData: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  getTournementData() {
    this.apiService.GetTournament(this.tournament)
    .subscribe((data: any) => {
      console.log(data)
      this.jsonData = data;

    });
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
      this.tournament = <string>params.get('tournament');
      this.getTournementData();

    });

    // this.apiService.GetTournament(this.tournament).subscribe(res => {
    //   console.log(res)
    //   this.tournaments =res;
    // });    
  }
  
}
