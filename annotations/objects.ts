const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//destructuring the age property
//if you want to use destructuring you have to add the type in
const { age, name }: { age: number; name: string } = profile;

//mirror the object structure
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
