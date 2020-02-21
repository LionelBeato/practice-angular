// this file contains our mock data
// think of it as a repository or database 

import {Person} from './person'



let mike = new Person('mike')
let jerry = new Person('jerry')
let john = new Person('john')

export let people:Person[] = [
    mike,
    jerry,
    john
]