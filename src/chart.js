1. 이뤄야 할 것
    - DOM 조작
svg와 html DOM을 편리하게 구성할 수 있는 조작 함수를 생성
엘리먼트를 생성
엘리먼트 속성을 부여
엘리먼트에 이벤트를 부여
엘리먼트로 DOM 트리를 구성

    - 플러그인
데이터 필터
포맷 - 날짜, 숫자단위, 가격단위
숫자 필터 - 최소, 최대, 평균, 일정 범위 내의 커스텀 계산
이터러블 - 위와 같음
오브젝트 - 키와 밸류 값을 분리하여 적용(차트 예시로 키는 라벨 밸류는 데이터)

2. 차트를 만들 수 있는 구성
    - 1. 필요한 데이터
        - 차트 타입에 필요한 svg 요소
            - 각 svg 요소별 속성, 이벤트, 스타일
                - 차트 x / y축 필요한 데이터(객체 배열)

                    - 2. 필요한 기능 / 이벤트
                        - 차트에 데이터를 표시하는 부분이 전체에서 절대값 / 상대값으로 표현
                            - 위의 방식에 따른 그리드의 위치 변화를 다르게.세로 / 가로 표현
                                - 데이터의 시각적 요소(예: 차트의 바, 라벨, 데이터 텍스트)에 마우스 호버시 포커스
                                    - 데이터의 시각적 요소를 이용해 최소, 최대, 평균 과 같은 데이터를 재 시각화 / 툴팁박스 / 레전드에 표현
                                        - 데이터 구간 선택시 구간에 대한 정보만 툴팁에 표시
                                            ``` javascript
const svg = ssh.create('svg')
    .attr({ height, width, viewbox: `0 0 ${ width } ${ height } ` }).toChart

const bar = ssh.group('name').create('rect').type('histogram')
const line = ssh.group('name2').create('path').type('curve')

const axis = svg.group({ x: ['cost', { visibility: 'hiddne' }], y: ['price', { color: 'red' }] })


const chart1 = svg.appendAll(bar)
    .data('legendTitle1', [{ x: 'A', y: 1 }, { x: 'C', y: 2 }])
    .attr({ background: 'red' })
    .animate({})

const chart2 = svg.appendAll(line)
    .data('legendTitle2', [{ x: 'B', y: 3 }, { x: 'A', y: 4 }])

const option = {
    grid: ['x'],
    data: 'relative',
    tooltip: [chart2],
    hover: {
        tooltipBox: {
            data: ['avg', 'max', 'min'],
            chart: [chart1, chart2]
        }
    },
    click: {
        focus: {
            chart: [chart2]
        }
    }
}
```