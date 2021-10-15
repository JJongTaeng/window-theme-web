export default class DateTime {
  constructor({date}) {
    this.$date = document.querySelector('.date');
    this.$time = document.querySelector('.time');

    this.date = date;

    this.$date.textContent = date.toLocaleDateString();
    this.$time.textContent = date.toLocaleTimeString()
  }



}