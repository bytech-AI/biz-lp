# biz.bytech.jp/news 研修コース リリース記事 下書き（6本）

`content` はmicroCMSのリッチエディタへ **HTMLとして** 貼り付ける想定。
使用タグは既存記事に合わせて `h2 / h3 / p / ul / li / strong / a / br` のみ。

| ファイル | 推奨コンテンツID | タイトル |
|---|---|---|
| `gemini-course-release.html` | `gemini-course-release` | 法人向け「Gemini研修」の提供を開始しました｜Google WorkspaceのAI活用を全社で定着させる |
| `copilot-course-release.html` | `copilot-course-release` | 法人向け「Copilot研修」の提供を開始しました｜Microsoft 365のAI活用を全社で定着させる |
| `dify-course-release.html` | `dify-course-release` | 法人向け「Dify研修」の提供を開始しました｜AIアプリ・業務自動化の内製化を支援 |
| `claude-course-release.html` | `claude-course-release` | 法人向け「Claude研修」の提供を開始しました｜長文処理と文章作成をClaudeで効率化 |
| `copilot-studio-course-release.html` | `copilot-studio-course-release` | 法人向け「Copilot Studio研修」の提供を開始しました｜社内AIエージェントの内製を支援 |
| `creative-ai-course-release.html` | `creative-ai-course-release` | 法人向け「AIクリエイティブ研修」の提供を開始しました｜画像・動画・デザイン制作の内製化を支援 |

## microCMSへの登録項目

| フィールド | 値 |
|---|---|
| title | 各HTMLの先頭コメント `title:` |
| category | プレスリリース |
| description | 各HTMLの先頭コメント `description:` |
| content | HTML本体（先頭のコメント3行を除く） |
| thumbnail | **未設定**（画像はAPI経由で入れられないため手動アップロードが必要。未設定でも既定のOGP画像が使われる） |

## 自動投入について

`scripts/create-news-drafts.mjs` で下書きを一括作成できるが、現在の `MICROCMS_API_KEY` は
GETのみ許可されており `POST`/`PUT` とも `forbidden` になる。microCMSの管理画面で
APIキーに **POST（または PUT）権限** を付与すれば実行可能。
