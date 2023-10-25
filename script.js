// //表をふわっと表示アニメーション(閾値を使う方法)　競合したので中止
// document.addEventListener("DOMContentLoaded", function() {
//     const elm = document.getElementById("elm");
//     let options1 = { threshold: 0.5 } //画面に１（100％現れる）
//     const observer1 = new IntersectionObserver(callback1, options1);
//     observer1.observe(elm); // observerに#elmを追加して挙動を監視
    
//     function callback1(entries) {
//         if (entries[0].isIntersecting) {
//             elm.classList.add("elm-visible");
//         }
//     }
// });

//今何時？
document.addEventListener("DOMContentLoaded", function() {
    const newDate = document.getElementById("newDate");
    
    newDate.addEventListener("click", () => {
        let today = new Date(); 

        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let week = today.getDay();
        let day = today.getDate();

        let week_ja = ["日", "月", "火", "水", "木", "金", "土"];

        alert(year + "年" + month + "月" + day + "日 " + week_ja[week] + "曜日");
    });
});

//カードをふわっと表示アニメーション（画面上の相対位置を使う方法）
document.addEventListener('DOMContentLoaded', function() {//DOMが全て読み込まれていることを確認
    const cards = document.querySelectorAll('.card');

    const checkCardVisibility = () => {
        cards.forEach(card => {
            const viewTop = card.getBoundingClientRect().top;//画面上部からの相対位置
            const viewBottom = window.innerHeight / 2;//画面の高さ（/2なので画面の中央）
            if (viewTop < viewBottom){//下から上がってきたカードが画面中央を超えたとき
                card.classList.add("card-visible");
            }
        });
    };

    window.addEventListener('scroll', checkCardVisibility);
    checkCardVisibility();  // 初回ロード時のチェックのためにも呼び出し
});



//アイコンをクリックすると、こたろうくん出現
    //アイコンクリック
let popupStart = document.getElementById("imageLink");
popupStart.addEventListener("click",function(event){
    event.preventDefault();//aタグはデフォルトでページ遷移するので阻止

    const aHref = this.getAttribute("href");
    const imgSrc = document.getElementById("popupImage");
    imgSrc.setAttribute("src", aHref);//URLを挿入
    document.getElementById("popup").style.display = "block"//styleをnoneからblockに
})

//ばつボタンクリック
let popupEnd1 = document.getElementById("closeButton");
popupEnd1.addEventListener("click",function(event){
    event.preventDefault();

    document.getElementById("popup").style.display = "none"
})

//モーダルクリックで元に戻る
let popupEnd2 = document.getElementById("overlay");
popupEnd2.addEventListener("click",function(){
    document.getElementById("popup").style.display = "none"
})


    

// スクロールボタンの実装
document.addEventListener("DOMContentLoaded", function(){
    const movetopButton = document.getElementById("topButton");
    // 一番下まできたら表示する
        //  スクロール位置を毎回読み込む（実装時は重くなる原因になりそう・・・）
    window.addEventListener("scroll",function(){
        // ページの最上部からビューポートの最上部までの距離（どんどん大きくなる）
        const scrolledTop = window.scrollY;
        // ビューポートの高さを取得
        const viewpotHeight = window.innerHeight;
        // ページ全体の高さ
        const docHeight = document.documentElement.scrollHeight;
        // ページ全体の高さからビューポートの高さを引いたもの（一定の値）
        const bottomPosition = docHeight - viewpotHeight;
        movetopButton.style.display = (scrolledTop >= bottomPosition - 10) ? "flex" : 'none';

    })
    

    // ボタンクリックで一番上に戻る
    movetopButton.addEventListener("click", function(){
        window.scrollTo({top: 0, behavior:"smooth"});
    })
})
