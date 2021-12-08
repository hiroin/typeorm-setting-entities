# NestJS + TypeORM + PostgreSQLでjestによるテストとe2eテストを実施するサンプル
# A sample of testing by jest and e2e testing with NestJS + TypeORM + PostgreSQL
## サーバーの起動
## Starting the Server
```
git clone https://github.com/hiroin/typeorm-setting-entities.git
cd typeorm-setting-entities
docker-compose up -d
cd ../nestjs
npm run start:dev
```
![image](https://user-images.githubusercontent.com/50547466/145219474-9bb7b7ed-abec-4fd7-b4da-fd7ad7105cae.png)

## ブラウザで動作確認
## Check operation in a browser
![image](https://user-images.githubusercontent.com/50547466/145219649-5e279393-e1ff-4bde-b4e7-062461f1d628.png)

trueと表示されればOK  
If it says true, you're good to go.

## jestによるテスト
## Testing with jest
```
npm run test
```
![image](https://user-images.githubusercontent.com/50547466/145219885-049d32c9-32a9-4c68-9cb6-696c229c8df5.png)

## e2eテスト
## e2e test
```
npm run test:e2e
```
![image](https://user-images.githubusercontent.com/50547466/145219918-964eb66b-c55f-474c-ac62-9a1431d23e8a.png)

## サーバーの停止
## Shutting down the server
```
docker-compose down
```
