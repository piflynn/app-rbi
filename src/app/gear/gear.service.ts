
export class GearService {
  keysList: string[] = ['Yamaha', 'Roland'];
  keyLogos: string[] = ['../../assets/images/yamaha.svg', '../../assets/images/kurzweil.svg', '../../assets/images/hammond.svg', '../../assets/images/korg.svg', '../../assets/images/roland.svg'];


  getKeysList() {
    return this.keysList;
  }

  getKeyLogos() {
    return this.keyLogos;
  }

}
