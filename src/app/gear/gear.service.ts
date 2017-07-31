
export class GearService {
  gearList = [
    {
      itemList: ['Hammond B3, Foot Pedal, Padded Bench, Wooden Bench', 'Leslie 122, 147', 'Kurzweil PC-88', 'Roland RD-5', 'Nord Lead 2', 'Nord Electro 3'],
      logoPaths: ['../../assets/images/yamaha.svg', '../../assets/images/kurzweil.svg', '../../assets/images/hammond.svg', '../../assets/images/leslie.svg', '../../assets/images/korg.svg', '../../assets/images/roland.svg']
    }
  ];


  getGear(id: number) {
    return this.gearList[id];
  }

}

// TODO add async, observables, hhtp request load file to populate gear lists
