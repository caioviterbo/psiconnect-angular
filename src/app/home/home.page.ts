import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PsychoModalComponent } from './psycho-modal/psycho-modal.component';
import { Psyco } from './model/psyco';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  psicologos: Psyco[] = [
    {
      photo: '/assets/imagens/gutem.jpg',
      name: 'Gutem Berg',
      description: ` Oferecendo apoio empático e orientação profissional para ajudá-lo a
              enfrentar desafios e alcançar uma vida mais
              equilibrada`,
      rate: 120,
      price: '200,00'
    },
    {
      photo: '/assets/imagens/caio2.jpg',
      name: 'Caio Viterbo',
      description: `Ofereço uma abordagem empática e
                personalizada para ajudá-lo a explorar e superar desafios emocionais,
                comportamentais e interpessoais`,
      rate: 100,
      price: '150,00'
    },
    {
      photo: '/assets/imagens/caio2.jpg',
      name: 'Caio Viterbo',
      description: `Ofereço uma abordagem empática e
                personalizada para ajudá-lo a explorar e superar desafios emocionais,
                comportamentais e interpessoais`,
      rate: 100,
      price: '150,00'
    },

  ];

  constructor(private modalCtrl: ModalController) {}

  async openModal(psycho: Psyco) {
    const modal = await this.modalCtrl.create({
      component: PsychoModalComponent,
      componentProps: {
        psycho: psycho,
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {

    }
  }

}


