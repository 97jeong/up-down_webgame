window.onload = function() {
    var start_btn = document.querySelector('#start_btn');
    var goBack_btn = document.querySelector('#goBack_btn');
    var game_state = document.querySelector('#game_state');
    // 게임 시작 버튼 클릭 시 디스플레이 설정 변경 (게임화면)
    start_btn.onclick = function() {
        start_btn.style.display = 'none';
        goBack_btn.style.display = 'block';
        game_state.style.display = 'block';
        gameState();
    };
    // 뒤로 가기 버튼 클릭 시 초기화면으로 디스플레이 설정 변경 및 데이터 초기화
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
    var random_num = Math.floor(Math.random() * 100 + 1); //정답(1~100 사이 난수)
    var num = 0; // 입력 값
    var count = 0; //시도횟수
    var max_num = 100; //최대 값
    var min_num = 1; // 최소 값
    
    // 확인 버튼 클릭 시 정답과 입력값 비교
    input_btn.onclick = function() {
        num = Number(input_num.value);
        // 범위 내 값이 입력되면
        if (num >= min_num && num <= max_num) {
            // 시도횟수 증가
            count += 1;
            // 정답인 경우
            if (random_num == num) {
                history.innerHTML += '<p>' + count + '회차: 정답입니다!</p>';
            // up인 경우
            } else if (random_num > num) {
                if (min_num <= num) {
                    min_num = num + 1;
                }
                history.innerHTML += '<p>' + count + '회차: Up!'+ '범위: ' + min_num + '~' + max_num;     
           // down인 경우
            } else if (random_num < num) {
                if (max_num >= num) {
                    max_num = num - 1;
                }
                history.innerHTML += '<p>' + count + '회차: Down!' + '범위: ' + min_num + '~' + max_num;
            }
        } else {
            alert(min_num + '~' + max_num + '사이에 숫자를 입력하세요');
        }
        input_num.focus();
    }
    // 키보드로 버튼 대체
    input_num.onkeydown = function(event) {
        //enter 키 입력 시 확인버튼 클릭과 동일
        if (event.keyCode == 13) {
            input_btn.onclick();
        //Back Space 키 입력 시 다시버튼 클릭과 동일
        } else if (event.keyCode == 8) {
            reset_btn.onclick();
        }
    }
    
    // 다시 버튼 클릭 시 입력란으로 초기화 및 포커스 이동
    reset_btn.onclick = function() {
        input_num.value = '';
        input_num.focus();
    }
}
