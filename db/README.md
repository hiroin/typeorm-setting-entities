
# 起動
# launch
$ docker-compose up -d  

# 接続確認
# Connection check
$ psql -p 5435 -h 127.0.0.1 -d example -U postgres
Password for user postgres: postgres  
example=# \d
              List of relations
 Schema |     Name     |   Type   |  Owner   
--------+--------------+----------+----------
 public | users        | table    | postgres
 public | users_id_seq | sequence | postgres
(2 rows)

example=# \q

# 終了
# shutdown
$ docker-compose down
