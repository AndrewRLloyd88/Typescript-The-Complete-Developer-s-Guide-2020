class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  //log error will automatically catch errors
  @logError
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

//decorator
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value
  desc.value = function () {
    try {
      method()
    } catch (e) {
      console.log('oops, boat was sunk')
    }
  }
}

new Boat().pilot()
