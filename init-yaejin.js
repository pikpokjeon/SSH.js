let $;
$ = `
const data = [
    {
        “date”: “10-01”,
        "part": "A",
        “population”: 240,
        "price":10,
    },
    {
        “date”: “10-01”,
        "part": "B",
        “population”: 60,
        "price":50,
    },
    {
        “date”: “10-02”,
        "part": "B"
        “population”: 140,
        "price":20,
    },
]

 // HTML으로 사이즈 정하면 스크립트로 전체 svg사이즈 가져와 후에 옵션객체에 바인딩 해준다 size: {width: 1500, height: 750},

const chartOptions = {
    title: {
        text: '판매량',                                                     // 차트 제목
    },
    series: [
        {
            type: 'line || bar',                                            // 타입
            subType: bar 이면 'histogram' , line 이면 'curve', 'stack'      //기본값은 비워두기
            value: ‘population’,                                            // 데이터 값
            group: ‘date’,                                                  // 데이터 기준 값
        },
        {
            type: 'bar',
            subType: 'histogram' 
            value: 'price',
            group: ‘date’,
        },
    ],
    options: {
        event: {
            tooltip: [{
                target: 'population'
                format: (value) => ({ 인구: value + '명' }),            // 툴팁 커스터마이징
                ---
                format: ({population, price}) => ({population: '', price: ''}) 
                ---
                dots: {
                    display: true || false,                              // 전체
                    click: (dot) => {color: '', display: true || false} // 전체 점들 중에 위치한 하나의 점의 변화
                    hover: (dot) => {color: '', display: true || false}
                },
                message: {                                              // 툴팁 메세지를 띄울 것인지 예:) 인구 60 명
                    display: true || false,                             // 모든 타겟이 false인 경우 박스를 아예 숨김
                    ... 위 dots와 같음
                }],
            pointer: {
                format: ['vertical', 'horizontal']                      // 양쪽 다 있으면 십자 형태
                position: ['data','mouse']                              // 포인터 라인이 데이터위치에만 잡히는지
            }]
        ,
        range: {
            select: 'aside' || 'border' || 'area'                       // 차트 선택 구간 한쪽, 경계 양쪽, 구역범위
        }
        },
        responsive: true,
        legend: true,
        infarctSize: 'absolute' || 'relative' ,                         // 절대값/ 상대값 수치 표현
        theme : {
            mode : 'dark' || 'light',
            name: 'name' 
        }
        
    },
}

Chart.init(data, chartOptions)
`
$ = `
    1. 차트 옵션에서 함수가 필요한 부분을 나눈다
    - 차트 생성에 필요한 요소들 
    - 차트에 필요한 이벤트
    - x/y 축 좌표 계산하는 함수
    `

$ = `
    2. 차트 생성에 필요한 요소들을 분류한다
    https://developer.mozilla.org/ko/docs/Web/SVG/Element

    (1) 한번만 렌더링 되는지/ 지속적으로 특정 조건하에 렌더링 되는지
    (2) 한 요소가 여러개 생성되어야 하는지

    - 컨테이너
    - 필터
    - 그래픽/ 모양 : 원, 사각형, 선, 패스, 텍스트
    - 그라디언트
    - 스크립트 필터 등등 ..
    `

$ = `
    3. 요소들을 생성하는 함수
    - 초기 속성이 적용된 요소 생성
    - 요소들에 속성을 동적으로 적용
    - 요소를 반복적으로 생성
    - 요소를 동적으로 생성( 업데이트)
    - 요소들을 결합하여, 형태를 구성하기 위한 함수 (그라데이션/ 배경자르기)
    `


$ = `
    4. 요소들로 트리를 구성하고 렌더링하는 함수
    - 요소들로 만들 수 있는 형태 트리 구조로 만들고
    - 사용자 입력값에 따른 전체 비율과 좌표값 연산
    - 필요한 부분에 해당 트리를 확장 가능하도록
    - 완성된 트리를 렌더링 (차트 init)
    `