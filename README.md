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

#### svg 렌더링 테스트
```
npm install --save-dev parcel // parcel 설치
npm run parcel
```

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
 ### 1. 차트에 필요한 요소
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




### 2. 차트 정의 방식
- [x] 6월 18일


## 차트 생성 초기정의
``` javascript
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
```





### 3. 차트 생성에 필요한 것들은 무엇이 있을까?
- [x] 6월 26일 회의

1. 차트 옵션에서 함수가 필요한 부분을 나눈다

2. 차트 생성에 필요한 요소들을 분류한다
    https://developer.mozilla.org/ko/docs/Web/SVG/Element

3. 요소들을 생성하는 함수

4. 요소들로 트리를 구성하고 렌더링하는 함수

5. 이벤트 핸들러    

###  4. 차트 초기 SVG 요소 렌더링하는 함수 설계
- [ ] 7월 4일 회의
- [ ] 7월 2일 금요일까지 제출
- [ ] github-pages에 배포

1. 각자 render-name.js 파일 이름으로 모듈을 작성
2. index.js 파일에서 모듈을 불러와 초기화
3. 회의시 설계 마무리

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
