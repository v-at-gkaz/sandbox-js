console.log('Switch-Case Example');

// const role = 'admin'; // admin, manager, user
// const role = 'manager';
const role = 'user';

switch(role) {
    case 'admin':
        console.log({
            role: 'admin',
            drink: 'beer'
        });
        break;
        
    case 'manager':
        console.log({
            role: 'manager',
            drink: 'juice'
        });
        break;
        
    case 'user':
        console.log({
            role: 'user',
            drink: 'water'
        });
        break;

    default:
        throw new Error('Unknown role');
        break;
}