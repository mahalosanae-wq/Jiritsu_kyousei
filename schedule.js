/*
  自立共生ラボ ポータル ── 予定ファイル

  カレンダーに出す予定は、このファイルだけで管理します。
  予定を足すときは、下の { ... } のかたまりを1つコピーして、中身を書き換えてください。

  各項目の意味
    date        日付（"2026-11-04" のように、年-月-日で書く）
    start, end  開始・終了の時刻（"20:00"）。時刻がないものは "" のまま
    type        種類。次の4つから選ぶ
                  "講座"         講座・共有会・発表会
                  "ミーティング"  運営ミーティングなど
                  "締め切り"      会員締め切り・起案の締め切り・公開日など
                  "イベント"      オフ会など
    title       予定の名前
    speaker     講師・担当（いなければ ""）
    description 内容のひとこと（なければ ""）
    facebook    FacebookイベントのURL（なければ ""）
    materials   資料のURL（なければ ""）
    slack       ZoomのURLを書いたSlack投稿のリンク（なければ ""）
                Slackで投稿にマウスを乗せ「︙」→「リンクをコピー」で取れます。
                入れると、予定の一覧に「参加URLを見る（Slack）」ボタンが出ます。

  ZoomのURLとパスコードは、このファイルに書かないでください。
  このサイトはURLを知っていれば誰でも見られるためです。
  ZoomのURLはSlackに投稿し、その投稿のリンクを slack の欄に入れてください。
*/

window.SCHEDULE = [
  // ===== 2026年9月 =====
  {
    date: "2026-09-02", start: "20:00", end: "21:00", type: "講座",
    title: "オリエンテーション（キックオフ）",
    speaker: "ちえみ",
    description: "規約と運営方針のご説明です。",
    facebook: "", materials: ""
  },
  {
    date: "2026-09-09", start: "20:00", end: "21:00", type: "講座",
    title: "アップデート講座",
    speaker: "ティム",
    description: "手元のデータに、何を聞けばいいか",
    facebook: "", materials: ""
  },
  {
    date: "2026-09-16", start: "20:00", end: "21:00", type: "講座",
    title: "実践講座",
    speaker: "ちえみ",
    description: "事業開発 × AI",
    facebook: "", materials: ""
  },
  {
    date: "2026-09-20", start: "", end: "", type: "締め切り",
    title: "10月分の会員締め切り／起案の締め切り",
    speaker: "", description: "", facebook: "", materials: ""
  },
  {
    date: "2026-09-22", start: "20:00", end: "21:00", type: "ミーティング",
    title: "9月運営ミーティング",
    speaker: "", description: "", facebook: "", materials: ""
  },
  {
    date: "2026-09-23", start: "", end: "", type: "イベント",
    title: "積読あそび",
    speaker: "",
    description: "コミュニティの不定期オフ会。会員外の方もご参加いただけます。",
    facebook: "", materials: ""
  },
  {
    date: "2026-09-25", start: "20:00", end: "21:00", type: "講座",
    title: "自動化発表会",
    speaker: "",
    description: "この日に10月のスケジュールを公開しました。",
    facebook: "", materials: ""
  },

  // ===== 2026年10月 =====
  {
    date: "2026-10-14", start: "20:00", end: "21:00", type: "講座",
    title: "【AI（自動化）共有会】みんなのAI活用事例を聞いてみよう！わくわく対話会",
    speaker: "ゆーほりん",
    description: "「小ネタをいくつでも」持ち寄る会です。はじめに（5分）→ 小ネタコーナー（35分）→ ざっくばらんQ&A（20分）",
    facebook: "https://www.facebook.com/events/2626169791165079",
    materials: ""
  },
  {
    date: "2026-10-20", start: "", end: "", type: "締め切り",
    title: "11月分の会員締め切り／起案の締め切り",
    speaker: "", description: "", facebook: "", materials: ""
  },
  {
    date: "2026-10-21", start: "20:30", end: "21:30", type: "講座",
    title: "AIのデータ構造化×蓄積で、どんな価値をだせるか？",
    speaker: "ゆーほりん",
    description: "", facebook: "", materials: ""
  },
  {
    date: "2026-10-22", start: "20:00", end: "21:00", type: "ミーティング",
    title: "10月運営ミーティング",
    speaker: "運営チーム",
    description: "11月の講座担当者の確認と日程調整、起案内容の確認（PoC、役割の立候補、新しい役割）、各チームの取り組み共有、Slackのご案内",
    facebook: "https://www.facebook.com/events/2612801485835221",
    materials: ""
  },
  {
    date: "2026-10-25", start: "", end: "", type: "締め切り",
    title: "11月のスケジュール公開",
    speaker: "", description: "", facebook: "", materials: ""
  },
  {
    date: "2026-10-27", start: "20:00", end: "21:00", type: "講座",
    title: "今日から使えるSNS自動化術",
    speaker: "ティム",
    description: "", facebook: "", materials: ""
  },

  // ===== 2026年11月 =====
  {
    date: "2026-11-03", start: "21:00", end: "22:00", type: "ミーティング",
    title: "クレド・ペルソナMTG",
    speaker: "広報集客チーム",
    description: "結果は運営・ラボ全体へ共有します。",
    facebook: "", materials: ""
  },
  {
    date: "2026-11-04", start: "20:00", end: "21:00", type: "講座",
    title: "AI使ってて、いま何してたっけ？～迷子にならない仕組み～",
    speaker: "たかやん",
    description: "",
    facebook: "", materials: ""
  },
  {
    date: "2026-11-11", start: "21:00", end: "22:00", type: "講座",
    title: "【AI（自動化）共有会】みんなのAI小ネタ、聞いてみよう！ 小ネタ＆Q&Aの対話会",
    speaker: "ゆーほりん",
    description: "",
    facebook: "", materials: "",
    slack: "https://w1790769328-hjh141892.slack.com/archives/C0C6JCTCF53/p1793833083893159"
  },
  {
    date: "2026-11-20", start: "", end: "", type: "締め切り",
    title: "12月分の会員締め切り／起案の締め切り",
    speaker: "", description: "", facebook: "", materials: ""
  },
  {
    date: "2026-11-22", start: "21:00", end: "22:00", type: "ミーティング",
    title: "11月 運営委員会 月次ミーティング",
    speaker: "ひろ（進行）",
    description: "11月の振り返り、各チームの取り組み、12月の講座・PoC・役割などを話します。日曜日の開催のお試し回です。",
    facebook: "", materials: "",
    slack: "https://w1790769328-hjh141892.slack.com/archives/C0C6MNKGF62/p1793063382490039"
  },
  {
    date: "2026-11-25", start: "", end: "", type: "締め切り",
    title: "12月のスケジュール公開",
    speaker: "", description: "", facebook: "", materials: ""
  }
];
