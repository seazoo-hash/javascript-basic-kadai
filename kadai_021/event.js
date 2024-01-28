const chengebtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
chengebtn.addEventListener('click', () => {
    // すべてのチェックボックスを配列風のデータで取得する
    const addText = document.getElementById('text');

    setTimeout(() => {
        addText.textContent = 'ボタンをクリックしました';
    }, 2000);

});