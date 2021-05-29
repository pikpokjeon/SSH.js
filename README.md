# SSH.js <small> Super SVG Helper</small>
>Super SVG Helper, so called SSH is a SVG library, makes easy to handle and modify svg elements in your web project.




### 필요한 기능 - 아이디어
>목적은 SVG와 HTML DOM 요소를 쉽게 생성하고 속성을 변형하여
화면에 적용할 수 있는 모듈을 만드는 것



### 1. Chart 요소 

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
    title: "차트 제목",
    height: "차트 높이",
    width: "차트 넓이",
    xAxisLabel: {
        display: true,
        text: "x축의 타이틀"
    },
    yAxisLabel: {
        display: true,
        text: "y축의 타이틀"
    },
    
    chartData: [
        {
            legend: "레전드 이름",
            fill: "색상",
            data: [0, 10, 5, 2, 20, 30, 45],
            
            
        }    
    ],
    
    
}
```



#### 예진님
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
        // chartData: legend:Text
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

    for (const [t, v] of Object.entries(attr))
    {
        type.setAttributeNS(null, t, v)
    }

    return type

}

// rect 생성 사용예시
const rect = genElement("rect", {width: 50, height: 100} )


```


### Using SSH.js benefits

1. 사전에 정의한 SVG 정보 객체로 쉽게 SVG 요소를 생성
