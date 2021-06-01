# SSH.js <small> Super SVG Helper</small>
>Super SVG Helper, so called SSH is a SVG library, makes easy to handle and modify svg elements in your web project.




### 필요한 기능 - 아이디어
>목적은 SVG와 HTML DOM 요소를 쉽게 생성하고 속성을 변형하여
화면에 적용할 수 있는 모듈을 만드는 것'


## Using SSH.js 

### 1. Chart Helper

#### 공통 기능

- 타입에 따른 Path 계산
- 유저 데이터를 이용한 X, Y 좌표 계산
- svg 요소 생성 및 속성 변경
- svg 요소에 사용자 이벤트 적용

#### Collaborators
#### 현님
---
- Init attribute 정의 
```javscript
{
    type: bar, // ["bar", "line" ...] 차트 타입 
    title: {
        text: "차트 제목",
        color: "차트색상",
        fontSize: "14px"
    },
    height: "차트 높이",
    width: "차트 넓이",
    layout: {
        padding: "10px", // 차트 컨테이너 padding 값
    },
    tooltip: {
        handler: "hover",
    },
    xAxisLabel: {
        display: true,
        text: "x축의 타이틀"
    },
    yAxisLabel: {
        display: true,
        text: "y축의 타이틀"
    },
    chartData: {
            labels: ['Jan', 'Feb', ...],
            legend: {
                display: true,
                position: "top"
            }
            datasets : [
                {
                    legend: "레전드 이름",
                    backgroundColor: "색상",
                    borderColor: "색상",
                    textColor: "색상",
                    data: [0, 10, 5, 2, 20, 30, 45],    
                }
            ]
        }    
    ],
    
    
}
```



#### 예진님
---
- 차트 타입에 따른 필요한 svg 요소 정의
``` javascript
{
    bar: {
        rect: {
            id: ['r-1', 'r-2', 'r-3'], // 데이터 갯수에 따라 id 생성
            name: 'data-rect',
            attribute: {
                "datasets의 style 속성"
            }
        },
        text: {
            id: ['title','xAxisLabel','yAxisLabel','legend']
            name: 'text',
            attribute: {
                "초기 설정의 textColor 속성들"
            }
        },
        line,
    },
    
    line: {
        path,
        text,
        line
    
    }
}

```
---
- 초기 차트 속성으로 svg 객체를 생성하고 스토어에 저장
``` javascript
const initChart = (data) =>
{
    for (const [title, value] of Object.entreis(data))
    {
        // 요소 생성함수 사용
        // title: Text 요소
        // height/ width: root svg 사이즈
        // x,y labels: Text 요소
        // chartData
    }
}

```
---
- 초기 정의된 SVG 리스트 객체의 개별 요소를 생성

``` javascript
/**
* @type svg요소 타입 (string)
* @attr svg요소 속성 (obj)
*/
const genElement = (type, attr) =>
{

    type = document.createElementNS('http://www.w3.org/2000/svg', type)

    for (const [title, value] of Object.entries(attr))
    {
        type.setAttributeNS(null, title, value)
    }

    return type

}

// svg 생성 사용예시
const svg = genElement("svg", {width: 1300 , height: 700} )


```

--
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


