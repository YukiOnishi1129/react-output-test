# react-output-test
Reactアウトプットサンプル

useState, Propsのみの状態管理で作成したTodoリストに対し、コンポーネントに定義した状態とロジックをカスタムフックに以降したアプリケーション

上記の構成に対しテストを構築


urlはこちら
https://yukionishi1129.github.io/react-output-test/


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

### 1-3. テストの実行

```
npm run test

または

yarn test
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Todoリスト
  - Todo一覧表示
  - Todo検索処理
  - Todo新規登録処理
  - Todo削除処理

### 2-2. 構成技術
- react: 18.2.0
- react-dom: 18.2.0
- vite: 3.1.0
- @fortawesome/react-fontawesom: 0.2.0
- @fortawesome/free-solid-svg-icons: 6.2.0