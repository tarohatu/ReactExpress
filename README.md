## Development Setup
### Node v11.7.0
### npm v6.7.0

## 開発環境構築

### Docker(docker-composeのインストール)
- https://qiita.com/saitoeku3/items/b1aa2ae143624e551aea
- ↑のDockerのインストールまで進めてください。
- アカウント登録する必要があります。

### Projectのfork~npm installまで
- リポジトリからfork〜自分の環境にリポジトリをクローンしてください。
- dockerの環境セットアップ
  - Node.js, PostgreSQL, Redisを構築します。
    ```
    $ docker-compose up -d  
    ```
  - Node.jsの開発環境に接続します。
    ```
    $ docker-compose exec app bash
    ```
  - パッケージのインストール
    ```
    $ npm i
    $ npm rebuild bcrypt --build-from-source #普通にnpm iするとbcryptでコケるので追加
    ```
  - DBセットアップ
    ```
    $ npx sequelize db:create
    $ npx sequelize db:migrate
    ```
    - DB Seedは今回用意してません。すみません。
  - npm build ~ run
    ```
    $ npm run build
    $ npm run dev
    ```
  - 127.0.0.1:3000でアクセス
    - 地図が表示されたら成功