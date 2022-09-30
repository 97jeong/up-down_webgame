window.onload = function() {
    var start_btn = document.querySelector('#start_btn');
    var goBack_btn = document.querySelector('#goBack_btn');
    var game_state = document.querySelector('#game_state');
    start_btn.onclick = function() {
        start_btn.style.display = 'none';
        goBack_btn.style.display = 'block';
        game_state.style.display = 'block';
        gameState();
    };
    goBack_btn.onclick = function() {
        start_btn.style.display = 'block';
        goBack_btn.style.display = 'none';
        game_state.style.display = 'none';
        input_num.value = '';
        var history = document.querySelector('#history');
        history.innerHTML = null;
    }
};

var gameState = function () {
    var input_btn = document.querySelector('#input_btn');
    var reset_btn = document.querySelector('#reset_btn');
    var history = document.querySelector('#history');
    var random_num = Math.floor(Math.random() * 100 + 1);
    var num = 0;
    var count = 0;
    var max_num = 100;
    var min_num = 1;
    input_btn.onclick = function() {
        count += 1;
        num = Number(input_num.value);
        if (random_num == num) {
            history.innerHTML += '<p>' + count + '회차: 정답입니다!</p>';
        } else if (random_num > num) {
            if (min_num <= num) {
                min_num = num;    
            }
            history.innerHTML += '<p>' + count + '회차: Up!'+ '범위: ' + min_num + '~' + max_num;     
        } else if (random_num < num) {
            if (max_num >= num) {
                max_num = num;
            }
            history.innerHTML += '<p>' + count + '회차: Down!' + '범위: ' + min_num + '~' + max_num;
        }
    }

    reset_btn.onclick = function() {
        input_num.value = '';
    }
}