/*'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        userName: 'johndoe',
        password: 'password123',
        email: 'john@example.com',
        RoleId: 1, // Assuming 'admin' role has id 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        userName: 'janesmith',
        password: 'password456',
        email: 'jane@example.com',
        RoleId: 2, // Assuming 'user' role has id 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
*/
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [adminRole, userRole] = await queryInterface.sequelize.query(
      'SELECT id FROM Roles WHERE roleName IN ("admin", "user");'
    );

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'my',
        lastName: 'Admin',
        userName: 'admin',
        password: 'admin',
        email: 'admin@example.com',
        RoleId: adminRole[0].id, // Le asigno role admin
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        firstName: 'Jane',
        lastName: 'Smith',
        userName: 'janesmith',
        password: 'password123',
        email: 'janesmith@example.com',
        RoleId: userRole[0].id, // le asigno role user
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        firstName: 'Jane2',
        lastName: 'Smith2',
        userName: 'janesmith2',
        password: 'password123',
        email: 'janesmith2@example.com',
        RoleId: userRole[0].id, // le asigno role user
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane3',
        lastName: 'Smith3',
        userName: 'janesmith3',
        password: 'password123',
        email: 'janesmith3@example.com',
        RoleId: userRole[0].id, // le asigno role user
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        firstName: 'Jane4',
        lastName: 'Smith4',
        userName: 'janesmith4',
        password: 'password123',
        email: 'janesmith4@example.com',
        RoleId: userRole[0].id, // le asigno role user
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};