let peopleList = [
    {
        name: 'anil',
        id: 1,
        age: 20,
        location: 'chennai'
    },
    {
        name: 'sunil',
        id: 2,
        age: 30,
        location: 'hyderabad'
    },
    {
        name: 'mahesh',
        id: 3,
        age: 40,
        location: 'bangalore'
    }
]
export const getPeople = () => {
    return peopleList;
}
export const getPeopleById = (id) => {
    return peopleList.find(p => p.id === id);
}
export const updatePeople = (people) => {
    peopleList = people;
}