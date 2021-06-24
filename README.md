#  SSH.js [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fpikpokjeon%2FSSH&count_bg=%23FFAD0F&title_bg=%23555555&icon=&icon_color=%23984040&title=%EB%B0%A9%EB%AC%B8%EC%9E%90&edge_flat=true)](https://hits.seeyoufarm.com)
<small> Super SVG Helper, so called SSH is a SVG library, makes easy to handle and modify svg elements in your web project.</small>

## 기능과 특징
> <strong>SVG와 HTML DOM 요소를 쉽게 생성하고 속성을 변형하여
화면에 적용할 수 있는 모듈</strong>로서 데이터 시각화를 편리하게 구성하도록 한다.

#### collaborators 
|  팀원 | 아이디 |
| -------- | -------- |
|전예진 |  [pikpokjeon](https://github.com/pikpokjeon)|
|  현|  [ Aiden-leee](https://github.com/Aiden-leee)| 
|  김진희|  [ dev-jinheekim](https://github.com/dev-jinheekim)| 


---
## 차트 프로젝트

| 토픽 | 규칙 | 레퍼런스 |
| -------- | -------- | -------- |
|1. 스터디 방법  |- 각자 맡은 토픽에 따른 설명과, 부가 코트를 작성합니다. <br /> - 다음 회의까지 각 대분류 토픽의 폴더에 마크다운으로 작성한 결과물을 제출합니다.|```파일명: [토픽이름]---[이름] ```<br /> ``` 위치: /agenda/chart/파일명.md``` <br />토픽 : 차트 초기정의 <br /> 설명: ...  <br /> 코드: 1. ... 2. ...  |
|2. 토픽 설명 | - 비교 가능한 코드가 있다면 어떤 차이점이 있는지 서술합니다<br /> - 이해를 돕기위한 코드조각을 첨부합니다|
|3. 회의 방법  |- 매주 한번 온라인 미팅을 통해 각자 준비한 코드를 화면공유를 통해 리뷰하는 시간을 갖습니다.  <br />- 유닛 테스트 툴을 사용하셔도 좋습니다. 함수가 작동하는 것을 보여주세요. |플랫폼: gather.town <br /> 방식: 화면공유로 정리한 내용을 발표하고, JS 런타임 환경에서 함수가 작동하는 것을 시연합니다.    <br />  |
| 4. 마지막 단계 | - 회의 마지막 단계에, 자신이 가장 자신있는 토픽을 선택합니다.<br />   | svg 요소 생성 함수 코드짜기..|
---

## List to study
- [ ] 시작 날짜
- [x] 완료 시 체크
 ### [ ] 1. 차트에 필요한 요소
 - [x] 6월 6일
 
- chart

    기능
        - 그리드 ( 가로/ 세로 )
        - 레전드 
        - 초기 로딩 애니메이션
        - 제로라인(음수포함)

    포맷
        - 날짜 (yyyy-MM-dd, yy/mm/dd, mm/dd ...)
        - 숫자 단위 (1K, 10M, 10B,  원, $, USD...)
        숫자 소수점 단위

- Bar
    option
    - stacks : 
        - Y축에 해당하는 데이터의 절대값으로 표시
        - Y축 전체를 기준으로 데이터의 상대값을 표시 

    기능
    - stacks 절대값 / 상대값 표현
    - stack 영역 마우스 호버 ( 해당 영역 포커스 )
    - 툴팁: 해당 영역 bar 데이터 정보
    -    툴팁 호버
    - 전체 툴팁 표시
    - 선 호버
    - 선 영역 구분표시

- Line ( path )
    - curves
    - stacks
    - arcs




### [ ] 2. 차트 정의 방식
- [ ] 6월 18일

#### 정의
- 차트를 만든다. 문서가 없어도 사용가능할 정도로 직관적이고 일관성있게 만든다.
- x축과 y축의 데이터 갯수는 일치해야한다.
- 차트 옵션은 stacked, percentage가 있다.
- 툴팁은 formatter를 이용하여 값을 전달받아 커스터마이징이 가능하다.
- 레전드, 툴팁, 그리드 등의 스타일은 기본 스타일로 우선 제공한다.
 + 데이터 변경을 위한 함수 추가가 필요함.

```javascript
xAxis = ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04', '2021-06-05'];

chartOptions = {
    title: {
        text: '판매량',
    },
    series: [
        {
            type: 'line || bar',
            legend: '사과',
            values: {
                x: xAxis,
                y: [10, 20, 30 , 40, 10],
            },
        },
        {
            type: 'line || bar',
            legend: '바나나',
            values: {
                x: xAxis,
                y: [15, 25, 35 , 45, 15],
            },
        },
        {
            type: 'line || bar',
            legend: '딸기',
            values: {
                x: xAxis,
                y: [1, 2, 3 , 4, 1],
            },
        },
    ],
    axis: {
        x: {
            name: '과일의 종류', // 축 이름
        },
        y: {
            name: '판매개수', // 축 이름
            labels: '{value}개', // 레이블 커스터마이징
        },
    },
    options: {
        stack: true,
        percent: true,
        tooltip: {
            formatter: (value) => { return customValue; }, // 툴팁 커스터마이징
        },
    },
}

chart.init(chartOptions);
```
#### 요소 생성
예시
``` javascript
const svg = ssh.create('svg')
    .attr({ height, width, viewbox: `0 0 ${ width } ${ height } ` }).toChart

const bar = ssh.group('name').create('rect').type('histogram')
const line = ssh.group('name2').create('path').type('curve')

const axis = svg.group('axis').axis({ x: ['cost', { visibility: 'hiddne' }], y: ['price', { color: 'red' }] })


const chart1 = svg.appendAll(bar)
    .data('legendTitle1', [{ x: 'A', y: 1 }, { x: 'C', y: 2 }])
    .attr({ background: 'red' })
    .animate({})

const chart2 = svg.appendAll(line)
    .data('legendTitle2', [{ x: 'B', y: 3 }, { x: 'A', y: 4 }])

```


## 현

#### 차트 
최소한의 설정으로 차트를 만들수 있어야하고 라이브러리를 사용하는 사용자가 쉽게 사용 할수 있어야 한다. 
확장성을 고려하여 개발

#### 차트의 요구사항
javascript 및 svg 지원해야함 ie 9 이상
차트를 그릴 html DOM 필수
차트 유형 필수 입력
차트 속성 미입력시 default 로 적용
객체 형태로 데이터 전달
차트 데이터 형태 

```
data = [
    {
        “date”: “10-01”,
        “population”: 240
    },
    {
        “date”: “10-02”,
        “population”: 550
    },
    {
        “date”: “10-03”,
        “population”: 950
    }
]
```
#### 항목
value와 category를 설정
레전드, 툴팁, 그리드, default 스타일
변경은 chartOptions 를 객체 형태로 전달

#### 차트 유형
컬럼,라인 차트

#### 차트의 옵션 기능
format - 날짜, 숫자단위, 가격단위
legend - 범례
tooltip - 마우스 오버시 나오는 툴팁 박스
grid - 기본 라인 디자인
컬럼차트 - stacked 유형
라인차트 - curve, step, point

``` javascript 
chartOptions = {
	title: {
		text: ‘테스트’
	},
	series: [
               { 
			type: 'line',
		  	value: ‘population’,	
			category: ‘date’,
			title: ‘text’,
			
		},
		{ 
			type: 'bar',
		  	value: ‘other’,	
			category: ‘item’,
			title: ‘text’
		},
    	],
	event: {
		legend: [
			display: true,
		],
		tooltip: [
			display: true,
		],
		cursor: [
			display: true
		]
	}
}

SSH(data, chartoptions);
```

## 진희

```
## 작업 쪼개기

### 축

* series 로 받은 데이터를 기준으로 x, y 축의 max 값을 계산한다.
* x, y축을 만들고 레이블을 표시한다.
* x 축에 따른 index 값 계산

### 눈금과 눈금선

* x, y 값을 기준으로 적정한 간격을 계산한다. (적정한 간격의 정책 정의 필요)
* 눈금, 눈금선을 표시한다.
* 눈금선에 해당하는 축의 값을 표시한다.

### 차트

* 라인
  * 데이터에 해당하는 값의 불릿 표시한다.
  * 데이터 간의 연결 션을 표시한다.

* 바
  * 데이터에 해당하는 값의 바를 표시한다.

### 옵션 만들기

* 스택
* 퍼센트

### 액션 만들기

* 호버시 툴팁
* 호버시 그리드
* 데이터 변경 대응
```


``` javascript
const data = [
    {
        “date”: “10-01”,
        “population”: 240
    },
    {
        “date”: “10-01”,
        “population2”: 140
    },
    {
        “date”: “10-02”,
        “population”: 550
    },
    {
        “date”: “10-03”,
        “population”: 950
    }
]

const chartOptions = {
    title: {
        text: '판매량',
    },
    series: [
        {
            type: 'line || bar',
            value: ‘population’,
            category: ‘date’,
        },
        {
            type: 'line || bar',
            value: ‘totalSales’,
            category: ‘date’,
        },
    ],
    options: {
        event: {
            tooltip: [
                display: true, // default false
                formatter: (value) => { return customValue; }, // 툴팁 커스터마이징
            ],
            cursor: [
                display: true // default false
                format: ['vertical', 'horizontal', 'cross']
            ]
        },
        // size: {width: 1500, height: 750}, 스크립트로 함수에 사이즈 가져옴 HTML으로 사이즈 정함
        responsive: true,
        legend: true,
        subType: bar 이면 stack, line 이면 curve, stack, straight,
        percent: true, // 절대값/ 상대값 표시
    },
}

Chart.init(data, chartOptions)
```





### [ ] 3. 차트 정의 객체에 필요한 요소생성
- [ ] 

* 차트에 필요한 html요소
* 차트에 필요한 svg요소
* 엘리먼트에 속성으 부여하는 함수
* 엘리먼트를 생성하는 함수
* 차트 구성에 필요한 데이터
* 차트 요소 생성에 필요한 함수

### [ ] 4. HTML요소 생성
* 사전에 필요한 html요소를 동적으로 생성

###  [ ] 5. SVG요소 생성
- 차트에 필요한 SVG요소를 생성하는 함수
- 생성된 SVG에 속성을 부여하는 방법

###  [ ] 6. 차트에 필요한 함수
 - [ ] 동적 데이터에 따른 x/y좌표 path를 만들어주는 함수

- 
### Commit Convention
```
      [ keyword ] : 커밋 내용 (파일이름)
      keywords : 
                  docs : 문서화,
                  style : 스타일 관련,
                  build : 빌드와 배포,
                  fix: 에러 수정,
                  feature: 기능 추가,
                  refactor: 코드 개선
```
