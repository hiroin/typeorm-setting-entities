
# 起動
$ docker-compose up -d  

# 接続確認
$ psql -p 5435 -U postgres -d example -h 127.0.0.1  
Password for user postgres: postgres  
pong=# \d  
*Usersテーブルが表示される*  
pong=# \q

# 終了
$ docker-compose down
