function createJediName(firstName, lastName) {
    return lastName.substring(0, 3)+firstName.substring(0,2)
}

console.log(createJediName('Gage', 'Eide'));