import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    public clients: any;
    constructor() {
    }

    ngOnInit(): void {
        this.clients = [
            {
                title: 'Security',
                children: [
                    {
                        title: 'Bitdefender',
                        image: 'bitdefender.png'
                    },
                    {
                        title: 'Ajax',
                        image: 'ajax.png'
                    },
                    {
                        title: 'Sosafe',
                        image: 'sosafe.png'
                    }
                ]
            },
            {
                title: 'Payments',
                children: [
                    {
                        title: 'Epayments',
                        image: 'epayments.png'
                    },
                    {
                        title: 'Jeitto',
                        image: 'jeitto.png'
                    },
                    {
                        title: 'Base',
                        image: 'base.png'
                    }
                ]
            },
            {
                title: 'Trading',
                children: [
                    {
                        title: 'Ironfx',
                        image: 'ironfx.png'
                    },
                    {
                        title: 'Expert-Opinion',
                        image: 'expert-opinion.png'
                    },
                    {
                        title: 'Orbex',
                        image: 'orbex.png'
                    }
                ]
            },
            {
                title: 'Travel',
                children: [
                    {
                        title: 'Home-Escape',
                        image: 'home-escape.png'
                    },
                    {
                        title: 'Weego',
                        image: 'weego.png'
                    },
                    {
                        title: 'Dart',
                        image: 'dart.png'
                    }
                ]
            },
            {
                title: 'Gaming & Social',
                children: [
                    {
                        title: 'Coin-Poker',
                        image: 'coin-poker.png'
                    },
                    {
                        title: 'Tomics',
                        image: 'tomics.png'
                    },
                    {
                        title: 'Sport-Manager',
                        image: 'sport-manager.png'
                    }
                ]
            },
            {
                title: 'Other online services',
                children: [
                    {
                        title: 'Iroko',
                        image: 'iroko.png'
                    },
                    {
                        title: 'Freelancerhut',
                        image: 'freelancerhut.png'
                    },
                    {
                        title: 'By-Miles',
                        image: 'by-miles.png'
                    }
                ]
            }
        ];
    }

}
