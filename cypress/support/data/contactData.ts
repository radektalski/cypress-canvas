import { faker } from '@faker-js/faker';

export const basicContactData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    salutation: 'Mr',
    categories: ['Customer', 'Suppliers'],
    businessRoles: ['CEO']
}