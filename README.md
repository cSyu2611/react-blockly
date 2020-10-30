## Environment
### montecarloの環境（2019/9/11）
* Docker version 19.03.2 (おそらく17.05 >= で動くはず) 
* docker-compose version 1.24.1

### Macのローカルで動かしたい場合はDocker Desktop for Mac をインストール
* https://docs.docker.com/docker-for-mac/

## Build&SetUp
dockerグループに所属しているかどうか確認（Macの場合は不要）
```
$ cat /etc/group | grep docker
docker:x:980:kunifu,okamura
```
所属していなければ管理者でdockerグループに追加し、dockerを再起動（実行中のコンテナが止まるので注意）
```
(管理者)$ gpasswd -a ユーザ名 docker
(管理者)$ systemctl restart docker
```

```
git clone http://gitl.cl.cs.okayama-u.ac.jp/okamura/react-blockly.git
cd react-blockly
cd tar && tar -zxvf node-blockly.tar.gz && cd ../
docker-compose build　（そのマシンで一度だけ or Dockerfileを編集した時だけ）
docker-compose run --rm node npm install
docker-compose run --rm node mv tar/node-blockly node_modules/
```

## RUN
```
docker-compose run --rm --service-ports node npm start
```
もしも port is already allocatedと表示された時は、

docker-compose.ymlのports:のところを"3001:3000"のようにして違うポートを使ってください

（他人が使っているポートを勝手に潰すことはありません）
