# microCMS「お役立ち資料（documents）」スキーマ

`/documents`（お役立ち資料ページ）を microCMS で管理するためのコンテンツモデル定義。
配布方法は **フォーム経由でメール送付**（現状踏襲）のため、PDF ファイル項目は持たず、
各資料は「資料請求フォーム/LP の URL」を保持する。

- サービス: `bytech-biz`（news と同一サービス）
- API（エンドポイント）ID: `documents`
- 型: **リスト形式**

## フィールド

| フィールドID | 表示名 | 種類 | 必須 | 説明 |
|---|---|---|---|---|
| `title` | 資料タイトル | テキスト | ✓ | 例: バイテック法人AI研修 サービス紹介資料 |
| `eyebrow` | 上部リード（ヒーロー用） | テキスト | | 目玉資料の小見出し。例: バイテック法人AI研修が3分でわかる！ |
| `points` | 特徴（1行1項目） | テキストエリア | | 改行区切りで箇条書き化。空行は無視 |
| `recos` | こんな方におすすめ（1行1項目・ヒーロー用） | テキストエリア | | ヒーローのチェックリスト。改行区切り |
| `category` | カテゴリ | セレクト（単一選択） | ✓ | 選択肢: `サービス概要` / `AI活用ノウハウ`（追加可） |
| `thumbnail` | サムネイル画像 | 画像 | | 無ければ `thumbLabel` を表示 |
| `thumbLabel` | サムネラベル（英字） | テキスト | | 画像が無い時の代替表示。例: GUIDE / SERVICE / CASE |
| `formUrl` | 資料請求フォーム/LPのURL | テキスト | ✓ | 例: `/doc-a` |
| `isHero` | ヒーローに表示 | 真偽値 | | 目玉資料として最上部に表示（**1件だけ ON**） |
| `isPickup` | ピックアップに表示 | 真偽値 | | 上部カルーセル（「おすすめ」バッジ付き）に表示 |
| `order` | 並び順 | 数値 | | 小さいほど先。未設定は末尾 |

`publishedAt` / `createdAt` / `updatedAt` は microCMS が自動付与。

### カテゴリの英字ラベルについて
セクション見出しの英字（例: サービス概要=Service）は選択肢に第2値を持てないため、
コード側（`lib/microcms.ts` の `CATEGORY_EN`）でマッピングする。カテゴリを増やす場合は
そこに1行追加する（未定義なら日本語名をそのまま英字欄に表示）。

## 作成手順（microCMS 管理画面）
1. サービス `bytech-biz` → 「API を作成」→ 名前「お役立ち資料」/ エンドポイント `documents` / **リスト形式**。
2. 「スキーマ」で上表のフィールドを追加（または下の JSON をスキーマのインポートで貼り付け）。
3. `category` はセレクト（単一選択）で選択肢 `サービス概要`, `AI活用ノウハウ` を登録。
4. 読み取り API キーは既存の `MICROCMS_API_KEY` を利用（news と同一サービスのため共通）。
5. `.env` に `MICROCMS_DOCUMENTS_ENDPOINT=documents` を追加（省略時も既定で `documents`）。

## スキーマ インポート用 JSON（参考）
microCMS の「API 設定 → スキーマ → スキーマのインポート」に貼り付け。
※ microCMS 側の仕様変更で弾かれることがあるため、通らなければ上表を見て手動作成すること。

```json
{
  "apiFields": [
    { "fieldId": "title", "name": "資料タイトル", "kind": "text", "required": true },
    { "fieldId": "eyebrow", "name": "上部リード（ヒーロー用）", "kind": "text" },
    { "fieldId": "points", "name": "特徴（1行1項目）", "kind": "textArea" },
    { "fieldId": "recos", "name": "こんな方におすすめ（1行1項目・ヒーロー用）", "kind": "textArea" },
    { "fieldId": "category", "name": "カテゴリ", "kind": "select", "required": true, "selectItems": [{ "value": "サービス概要" }, { "value": "AI活用ノウハウ" }], "multipleSelect": false },
    { "fieldId": "thumbnail", "name": "サムネイル画像", "kind": "media" },
    { "fieldId": "thumbLabel", "name": "サムネラベル（英字）", "kind": "text" },
    { "fieldId": "formUrl", "name": "資料請求フォーム/LPのURL", "kind": "text", "required": true },
    { "fieldId": "isHero", "name": "ヒーローに表示", "kind": "boolean" },
    { "fieldId": "isPickup", "name": "ピックアップに表示", "kind": "boolean" },
    { "fieldId": "order", "name": "並び順", "kind": "number" }
  ]
}
```
