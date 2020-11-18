const numbers: number[] = [1, 5, 2, 3, 6, 4, 7, 0, 8, 9];

type predicateFnType = (x: number, y: number) => boolean;
type sortArrayFnType = (arr: number[], predicate: (a: number, b: number) => boolean) => void

const sortArray: sortArrayFnType = (array: number[], predicate: predicateFnType) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (predicate(array[i], array[j])) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp;
            }
        }
    }
}

const compare: predicateFnType = (a: number, b: number) => a > b;
sortArray(numbers, compare);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

interface IPerson {
    name: string;
    id: number;
    age: number;
}

const people: IPerson[] = [
    {
        name: 'joydip',
        id: 1,
        age: 20
    },
    {
        name: 'anil',
        id: 2,
        age: 40
    },
    {
        name: 'sunil',
        id: 3,
        age: 30
    }
]

//sort data source
//find some person with id {1/2/3}
//find people age above 25



const filterArray: (arr: IPerson[], predicate: (p: IPerson) => boolean) => IPerson[]
    = (array: IPerson[], logic: (p: IPerson) => boolean) => {
        const result: IPerson[] = [];
        for (let i = 0; i < people.length; i++) {
            if (logic(people[i])) {
                result.push(people[i])
            }
        }
        return result;
    }

filterArray(people, ((p: IPerson) => p.name[0] === 'a'));


const findPerson = (people: IPerson[], logic: (p: IPerson) => boolean) => {
    let found: IPerson = null;
    for (let i = 0; i < people.length; i++) {
        if (logic(people[i])) {
            found = people[i]
            break;
        }
    }
}
findPerson(people, ((p: IPerson) => p.id === 1));

const multiplyByFive: (num: number, i: number) => string = (num: number, index: number) => {
    return `Value: ${num * 5}`;
}

const result: string[] = numbers.map(multiplyByFive);
numbers.filter((num: number) => num % 2 === 0)

