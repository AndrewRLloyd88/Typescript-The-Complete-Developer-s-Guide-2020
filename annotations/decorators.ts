class Boat {
  color: string = 'red'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  //log error will automatically catch errors
  @logError('Oops boat was sunk in ocean!')
  pilot(): void {
    throw new Error()
    console.log('swish')
  }
}

//decorator factory that returns our decorator function
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value
    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

new Boat().pilot()
