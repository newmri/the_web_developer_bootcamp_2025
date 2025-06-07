# Node.js 기반 이미지
FROM node:24

# 작업 디렉토리 생성
WORKDIR /app

# 전체 코드 복사
COPY . .

# npm install 실행
RUN npm install

# 포트 오픈
EXPOSE 3000

# 앱 실행
CMD ["node", "app.js"]
