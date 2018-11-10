const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/messenger'
,{ logging: false });

const User = conn.define('user', {
  _id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  name: {
    type:Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Message = conn.define('message', {
  _id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  text: {
    type: Sequelize.STRING,
  },
});

// const Chat = conn.define('chat', {});

Message.belongsTo(User);
User.hasMany(Message);

// Chat.hasMany(Message);
// Message.belongsTo(Chat);

// Chat.belongsToMany(User, { through: 'UserChat' });
// User.belongsToMany(Chat, { through: 'UserChat' });

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [mack,jack, scot, mike] = await Promise.all([
    User.create({
      name: 'Mack Far',
      password: 'jack',
      email: 'jacsk@gmail.com',
    }),
    User.create({
      name: 'Jack Smith',
      password: 'jack',
      email: 'jack@gmail.com',
    }),
    User.create({
      name: 'Scotty Mcthunk',
      password: 'scot',
      email: 'scott@gmail.com',
    }),
    User.create({
      name: 'Mikey Smikey',
      password: 'mike',
      email: 'mike@gmail.com',
    }),
  ]);
  const [m1, m2, m3, m4] = await Promise.all([
    Message.create({ text : 'imperdiet proin fermentum leo vel orci porta non pulvinar neque', userId: mack._id}),
    Message.create({ text : 'imperdiet proin fermentum leo vel orci porta non pulvinar neque', userId: jack._id}),
    Message.create({ text : 'imperdiet proin fermentum leo vel orci porta non pulvinar neque', userId: scot._id}),
    Message.create({ text : 'imperdiet proin fermentum leo vel orci porta non pulvinar neque', userId: mike._id}),
    Message.create({ text : 'imperdiet proin fermentum leo vel orci porta non pulvinar neque', userId: mike._id})
  ])
  return {
    messages: [m1,m2,m3,m4],
    users: [jack,scot,mike]
  }
};

module.exports = {
  syncAndSeed,
  models: {
    User, 
    Message
  }
}