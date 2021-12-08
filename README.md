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

## 見どころ

ormconfig.jsonのentitiesをNestJS用とjest/e2eテスト用で切り替える必要がある。
このサンプルの場合、NestJS用は、
```
"entities": ["dist/entities/*.entity.js"],
```
jest/e2eテスト用は、
```
"entities": ['./src/entities/*.entity.ts']
```
とする必要がある。

## エラーが出るケース(1)
```
"entities": ["dist/entities/*.entity.js"],
```
と設定して、Jestでテストをしようとすると
```
    RepositoryNotFoundError: No repository for "Users" was found. Looks like this entity is not registered in current "default" connection?
```
とエラーがでる。

## エラーが出るケース(2)
```
"entities": ['./src/entities/*.entity.ts']
````
と設定して、npm run start:devすると
```
[Nest] 17012  - 2021/12/08 16:53:42   ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
D:\42\ft_transcendence\github\pong\server\src\entities\accomplishes.entity.ts:1
import {
^^^^^^

SyntaxError: Cannot use import statement outside a module
```
とエラーがでる。

## 推測
NestJSはコンパイルされたJavaScriptで動作するので、TypeORMに読み込ませるEntityの情報はJavaScript(.js)でなければならない(importがSyntaxErrorになる)のに対して、Jestでテストをする場合、テストファイルはTypeScriptで書かれているものをJestがトランスコンパイルして生成されたJavascriptで動作するので、TypeORMに読み込ませるEntityの情報は(おそらく依存関係の解決のために)TypeScript(.ts)でなければならない(dist/entities/\*/.entity.jsを読み込んでくれない?)のだと思います、たぶん…  
ちゃんとした理由をご存知でしたらご教示頂きたいです。
