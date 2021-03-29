import {subDays} from 'date-fns';
import { myName, xis } from './module.js';

const newDate  = subDays(new Date(), 3);
console.log(newDate);
xis(myName+"!");
console.log(myName);