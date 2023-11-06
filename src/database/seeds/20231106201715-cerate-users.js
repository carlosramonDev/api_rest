const bcryptjs = require('bcryptjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Luiz',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luiz 2',
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('87654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luiz 3',
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('14852369', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: () => {}
};
