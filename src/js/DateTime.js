export default class DateTime {
  $date;
  $time;
  constructor({date}) {

    this.date = date;

    this.getDom();
    this.setDateTime()


  }

  setDateTime() {
    this.$date.textContent = this.date.toLocaleDateString();
    this.$time.textContent = this.date.toLocaleTimeString()
  }

  getDom() {
    this.$date = document.querySelector('.date');
    this.$time = document.querySelector('.time');
  }

}