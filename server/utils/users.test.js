const expect = require('expect');

const {Users} = require('./users');



describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'vinod',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'suraj',
            room: 'angularJs Course'
        },
        {
            id: '3',
            name: 'vedant',
            room: 'Node Course'
        }
    ]
    })

    it('should add new Users', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'vinod',
            room: 'The Office Fans'
        };

        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
        

    });

    it('should not remove a user', () => {
        let userId = '33';
        let user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
        

    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);
        expect(user.id).toEqual(userId);
        

    });

    it('should not find user', () => {
        let userId = '33';
        let user = users.getUser(userId);
        expect(user).toBeFalsy();
        

    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['vinod', 'vedant']);
        

    });
    it('should return names for angularJs course', () => {
        let userList = users.getUserList('angularJs Course');

        expect(userList).toEqual(['suraj']);
        
    });
});