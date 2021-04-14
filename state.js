// 保存一个数据，变化时，触发事件
const Events = require('./events')

export default class extends Events {
  constructor(value){
    this.value = value
  }
  set(v){
    this.value = v
    this.emit('after')
  }
  afterChange(cb){
    this.on('after', cb)
  }
}