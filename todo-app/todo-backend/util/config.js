const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://root:example@mongo:3456/the_database'
const REDIS_URL = process.env.REDIS_URL || 'redis://redis:6379'

module.exports = {
  MONGO_URL, //: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL, //: '//localhost:6378'
}
