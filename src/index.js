const fastify = require('fastify')({ logger: true });
const dotenv = require('dotenv'); // 환경 변수 설정
const mongoose = require('./models');

dotenv.config();

connectDB();

// 라우트 등록
fastify.register(require('./routes'));

// 서버 시작
const start = async () => {
  await connectDB();
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log('서버가 http://localhost:3000 에서 실행되고 있습니다.');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();