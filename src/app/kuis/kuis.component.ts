import { Component, OnInit } from '@angular/core';
import { Kuis } from '../shared/kuis';
@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  daftarKuis:Kuis[] = [];
  nim = '';
  nama = '';
  kelas = '';
  kuis;
  
  constructor() { }

  ngOnInit() {
  }
  tambahKuis(){
    this.kuis = new Kuis(this.nim,this.nama,this.kelas);
    this.daftarKuis.push(this.kuis);
    this.nim= '';
    this.nama = '';
    this.kelas = '';
  } 
}
