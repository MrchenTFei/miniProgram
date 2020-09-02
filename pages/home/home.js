Page({
  data: {
    name: 'code why',
    age: 18,
    movies: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 111, name: 'james', age: 25 },
      { id: 112, name: 'currry', age: 31 },
      { id: 113, name: 'why', age: 18 },
    ],
    counter: 0,
  },
  handleBtn() {
    this.setData({ counter: this.data.counter + 1 })
    console.log('----->', '按钮发生了点击', new Date());
  },
})
