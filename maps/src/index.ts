import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

//restrict surface area of the API googleMap is not accessible directly
const customMap = new CustomMap('map');

//User implicitly satisfies the Mappable inerface
const user = new User();
customMap.addMarker(user);

//Company implicitly satisfies the Mappable inerface
const company = new Company();
customMap.addMarker(company);
// console.log(company);

//restricted
// customMap.googleMap;
