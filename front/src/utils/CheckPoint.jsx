export const CheckPoint = [
    // 1구역 체크포인트
    { x:0, y:0, z:-12, axis:'x',  passed:true}, // 처음 부분
    { x:0, y:0, z:32, axis:'x',  passed:true}, // 해변 첫 코너
    { x:55, y:0, z:36, axis:'z',  passed:true}, // 해변 두번째 코너
    { x:60, y:0, z:-12, axis:'x',  passed:true}, // 해변 지나고 골목 들어가기전
    { x:48, y:0, z:-15, axis:'z',  passed:true}, // 골목
    { x:32, y:0, z:0, axis:'z',  passed:true}, // 골목 나오고 뾰족
    { x:24, y:0, z:-20, axis:'x',  passed:true}, // 오토바이 회전구역
    { x:55, y:0, z:-30, axis:'z',  passed:true}, // 다리 진입 전

    // 2구역 체크포인트
    { x:60, y:0, z:-115, axis:'x',  passed:true},
    { x:48, y:0, z:-120, axis:'z',  passed:true},
    { x:42, y:0, z:-105, axis:'x',  passed:true},
    { x:31, y:0, z:-98, axis:'z',  passed:true},
    { x:24, y:0, z:-112, axis:'x',  passed:true},
    { x:6.5, y:0, z:-105, axis:'z',  passed:true},

]