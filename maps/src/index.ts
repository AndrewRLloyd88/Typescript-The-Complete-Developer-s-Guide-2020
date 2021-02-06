import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');

const user = new User();
customMap.addUserMarker(user);

const company = new Company();
customMap.addCompanyMarker(company);
// console.log(company);
