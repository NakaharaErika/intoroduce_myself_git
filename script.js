
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

//カードをふわっと表示アニメーション
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    const checkCardVisibility = () => {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            console.log(cardPosition)
            console.log(screenPosition)
            if(cardPosition < screenPosition) {
                card.classList.add('card-visible');
            }
        });
    };

    window.addEventListener('scroll', checkCardVisibility);
    checkCardVisibility();  // 初回ロード時のチェックのためにも呼び出し
});
