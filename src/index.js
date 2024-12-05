require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

// MongoDB 연결
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 연결 성공');
  } catch (err) {
    console.error('MongoDB 연결 실패', err);
    process.exit(1);
  }
}

// 라우트 등록
fastify.register(require('./routes'));

// 서버 시작
const start = async () => {
  await connectDB();
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();