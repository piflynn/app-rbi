import {Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/rx';

@Injectable()
export class GearService implements OnInit {
  gearList = [
    {
      itemList: [
        'Hammond B3, Foot Pedal, Padded Bench, Wooden Bench',
        'Leslie 122, 147',
        'Kurzweil PC-88',
        'Roland RD-5',
        'Nord Lead 2',
        'Nord Electro 3',
        'Nord Stage Vintage',
        'Yamaha ES8',
        'Yamaha ES7',
        'Yamaha P155',
        'Yamaha P250',
        'Korg Triton Pro X 88',
        'Korg Triton Pro 76',
        'Korg microKorg',
        'Fender Rhodes',
        'Alesis QS6',
        'M-Audio Axiom'
      ],
      logoPaths: ['../../assets/images/yamaha.svg', '../../assets/images/kurzweil.svg', '../../assets/images/hammond.svg', '../../assets/images/leslie.svg', '../../assets/images/korg.svg', '../../assets/images/roland.svg']
    },
    {
      itemList: [
        'Yamaha Maple Custom Absolute (22, 10, 12, 14, 16)',
        'Yamaha Stage Custom (20, 10, 12, 14)',
        '1960s Ludwig Super Classic (22, 12 ,13, 16)',
        '1960s Ludwig 14" Supraphonic Snare',
        'Ludwig 14" Black Beauty Snare',
        'DW Performance Series (14, 22, 10, 12, 14)',
        'DW 5000 Single Kick Pedal',
        'DW 5000 Double Kick Pedal',
        'DW 9000 Single Kick Pedal',
        'Tama Starclassic (22, 12, 14, 16, 18)',
        'Tama Iron Cobra Double Kick Pedal',
        'Gretsch Kit',
        'Mapex 14" Black Panther Snare',
        'Paiste Vintage 10" Splash',
        'Paiste Vintage 20" Riveted Ride',
        'Sabian 14" Xcelerator Hi-Hats',
        'Sabian HHX ()',
        'Sabian AAX ()',
        'Zildjian 14" New Beat Hi-Hats',
        'Zildjian A (20, 17, 18)',
        'Zildjian A Custom 14" Mastersound Hi-Hats',
        'Zildjian A Custom (21, 10, 16, 18)',
        'Zildjian K 14" Mini China',
        'Zildjian K Custom ()'

      ],
      logoPaths: [
        '../../assets/images/dw.svg',
        '../../assets/images/yamaha.svg',
        '../../assets/images/ludwig.svg',
        '../../assets/images/sabian.svg',
        '../../assets/images/zildjian.svg'
      ],
    },
    {
      itemList: [
        'Ampeg SVT Classic',
        'Ampeg SVT 810 Cabinet',
        'Ampeg SVT 410 Cabinet',
        'Ampeg SVT 115 Cabinet',
        'Aguilar DB 751',
        'Aguilar DB 412',
        'Eden WT800',
        'Eden 410 Cabinet',
        'Hartke 410',
        'SWR Workingman 112'
      ],
      logoPaths: [
        '../../assets/images/swr.png'
      ]
    },
    {
      itemList: [
        'Fender DeVille',
        'Fender Deluxe',
        'Fender Twin Reverb',
        'Fender Hotrod Deluxe',
        'Fender Hotrod DeVille',
        'Fender Hotrod Deville 212, 410',
        'Marshall Slant Cabinet',
        'Marshall Straight Cabinet',
        'Marshall JCM 900',
        'Mesa Dual Rectifier 4x10',
        'Peavey Classic 50',
        'Peavey Nashville',
        'Roland JC 120',
        'SWR California Blonde',
        'VOX AC 30 CC2'
      ],
      logoPaths: [
        '../../assets/images/fender.svg'
      ]
    },
    {
      itemList: [
        'Fender Stratocaster',
        'Fender Telecaster',
        'Fender P Bass',
        'Fender Jazz Bass',
        'Epiphone Sheraton',
        'Epiphone Les Paul',
        'PRS McCarty',
        'Martin Acoustic',
        'Taylor 710CE Acoustic',
        'Takamine Acoustic'
      ],
      logoPaths: [
        '../../assets/images/fender.svg',
        '../../assets/images/gibson.svg',
        '../../assets/images/prs.svg'
      ]
    },
    {
      itemList: [
        'Pioneer CDJ 1000 MK2',
        'Pioneer CDJ 1000 MK3',
        'Pioneer DJM 800',
        'Rane TTM 57SL'
      ],
      logoPaths: [
        '../../assets/images/rane.svg',
        '../../assets/images/pioneer.svg'
      ]
    },
    {
      itemList: [
        'Gon Bops Congas',
        'Pearl Bongos',
        'Remo Roto Toms (6, 8, 10)',
        'Tambourines',
        'Cowbells',
        'Blocks'

      ],
      logoPaths: ['../../assets/images/lp.svg']
    },
    {
      itemList: [
        'Guitar Stands',
        'Piano Benches',
        'Bar Stools',
        'Keyboard Stands',
        'Powered Speakers',
        'Mixers'
      ],
      logoPaths: []
    }
  ];

  constructor(private http: Http) {}

  ngOnInit() {

  }

  getGear(id: number) {
    return this.gearList[id];
  }

}

// TODO add async, observables, hhtp request load file to populate gear lists
