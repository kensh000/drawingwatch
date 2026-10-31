window.addEventListener('scroll', function() {
    const height = window.innerHeight;                    // 画面の高さを取得
    const scroll = this.pageYOffset;                      // スクロール量を取得
    const marker = document.querySelectorAll('.marker', 'about_copy');  // マーカー要素を取得
    const value = scroll - height + 300;                 // イベント位置を調整

    // markerクラスを持っている要素全てに処理を行う
    marker.forEach(function(element) {

        // 要素が画面内の指定位置に来たら「on」クラスをつける
        if (scroll > element.getBoundingClientRect().top + value) {

            // 文字の幅に比例してアニメーション時間を決定
            // 200pxを0.6秒
            const duration = Math.max(0., element.offsetWidth / 200);

            element.style.transitionDuration = duration + 's';

            if (element.id === 'about_copy') {
                element.style.transitionDuration = '3.0s';
            } else {
                const duration = Math.min(3, Math.max(0.6, element.offsetWidth / 200));
                element.style.transitionDuration = duration + 's';
            }

            element.classList.add('on');
        }
    });
});