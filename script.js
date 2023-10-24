// アイコンのリンクがクリックされたときのイベントリスナー
document.getElementById('imageLink').addEventListener('click', function(event) {
    // デフォルトのリンクの動作を止める（新しいタブでの画像表示を防ぐ）
    event.preventDefault();

    // クリックされたアイコンのリンクから画像のURLを取得
    const href = this.getAttribute('href');
    // ポップアップ用のimgタグに取得した画像のURLをセット
    document.getElementById('popupImage').setAttribute('src', href);
    // ポップアップを表示
    document.getElementById('popup').style.display = 'block';
});

// 「×」ボタンがクリックされたときのイベントリスナー
document.getElementById('closeButton').addEventListener('click', function(event) {
    // デフォルトのリンクの動作を止める（画面移動を防ぐ）
    event.preventDefault();

    // ポップアップを非表示にする
    document.getElementById('popup').style.display = 'none';
});

// ポップアップの背景（オーバーレイ）がクリックされたときのイベントリスナー
document.getElementById('overlay').addEventListener('click', function() {
    // ポップアップを非表示にする
    document.getElementById('popup').style.display = 'none';
});
