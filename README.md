# TodoListPro

このプロジェクトは、Next.jsとFastAPIを使用したTodoリストアプリケーションです。

## プロジェクトのセットアップ手順

### 必要なツール

- Node.js (推奨バージョン: 14.x 以上)
- Python (推奨バージョン: 3.9 以上)
- npm (Node.jsに含まれています)

### セットアップ手順

1. リポジトリをクローンする

    ```bash
    git clone https://github.com/yourusername/TodoListPro.git
    cd TodoListPro
    ```

2. ルートディレクトリのパッケージをインストール

    ```bash
    npm install
    ```

3. フロントエンドとバックエンドのセットアップ

    ```bash
    # フロントエンドのセットアップ
    cd frontend
    npm install

    # バックエンドのセットアップ
    cd ../backend
    pip install -r requirements.txt
    ```

4. サーバーの起動

    - フロントエンドサーバーを起動するには：

        ```bash
        cd frontend
        npm run dev
        ```

    - バックエンドサーバーを起動するには：

        ```bash
        cd backend
        uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
        ```

5. プロジェクト全体の実行

    プロジェクトのルートディレクトリに戻り、以下のコマンドを実行します:

    ```bash
    npm run dev
    ```