import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { PlayerService } from '../../shared/services/player/player.service';
import { Subject } from 'rxjs/internal/Subject';
import { Player } from 'src/app/shared/models/player.model';
import { ModalController } from '@ionic/angular';
import { PlayerModalPage } from '../player-modal/player-modal.page';


@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.page.html',
  styleUrls: ['./player-search.page.scss'],
  providers: [PlayerService]
})
export class PlayerSearchPage implements OnInit {


  searchTerm$ = new Subject<string>();


  constructor(private playerService: PlayerService, private modalController: ModalController) { }

  ngOnInit() {
    this.playerService.searchEntries(this.searchTerm$);
  }



  async onPlayerSelected(player: Player) {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
      componentProps: { player }
    });
    await modal.present();
  }





}
