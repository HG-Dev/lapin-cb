# lapin-cb
Lapin用Chatbot開発

# 強い点

1. 外部サーバーが落ちてもサービスに影響はありません（自分のサーバーにアップロードするので）
2. オープンソースでカスタマイズできます
3. 返事データーベースを作るエクセルファイルはとても具体的な質問シナリオを設定できます

# 問題点

1. 外部サーバーで運営されていないため、アップデートは手動的にやらなければなりません
2. 問題応答の技術（正規表現）はそれほど複雑なものではありません

# 使い方

1. どのxlsxのファイルを複製して、中身を目的のために調整する
2. Template and Macro.xlsmを開いて…
    1. マクロを有効化する
    2. 元のワークブックに戻る
3. マクロでデーターを.jsファイルにエキスポートする
    1. F8を押してマクロのメニューを開く
    2. Template and Macro.xlsmに入っているExportToJSマクロを実行する
    3. でかいボタンを押す
4. エキスポートした.jsデーターベースは元のxlsxファイルと同じフォルダーに入ってインる
5. .jsデーターベースをWeb\chatbot\dataに入れる
6. チャットボットを埋め込みたいウェブページのHTMLファイルにこのHTMLを<body>の最後に足す

```html
    <link rel="stylesheet" href="./chatbot/lapin-bot-widget.css" media="all">
    <script src="./lapin-cb-ops.js"></script>
    <div id="lapin-cb">
      <div id="tab-close" class="chat-fadeIn" style="display:none" onclick="openLapinCBFrame(false)">
        <span style="float: left; font-size: 16px; margin-left: 18px">Q&A チャット</span>
        <img src="./chatbot/close_x.svg" style="float: right; width: 18px; margin-right: 12px; margin-top: 8px; fill: #fff">
      </div>
      <div id="chat-open" class="fixed-button-circle" title="自動案内" onclick="openLapinCBFrame(true)">
        <img src="./chatbot/open_icon.svg" style="width: 90%; vertical-align: middle; margin-left: 4%">
      </div>
      <div id="chat" class="chat-fadeIn" style="display:none"><iframe id="iframe_widget" name="lapin+default" src=""></iframe></div>
    </div>
```
7. 「Q&A チャット」と「自動案内」を対象言語に適したウィンドウタイトルに変える
8. 最後の"iframe_widget"の右にあるnameは"lapin+default"で始まるが、これは参照したいデーターベースの名前を入れる。複数あれば'+'で足す。
9. 完成です。