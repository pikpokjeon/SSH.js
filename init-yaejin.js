// Chart.init(data, chartOptions)


//차트에 사용될/ 커스텀화 할 수 있는 데이터 저장소
const initData = {}

const store = (initState, charts) =>
{
    const innerStore = [
        {
            [chartName]: {
                type: '',
                title: '',
                data: [],
                options: {},
                states: {}
            }
        }
    ]
    const initSet = (data, charts) => 
    {
        charts.forEach(chart => { })
    }

    const update = (chart, data) => { }

    return initStore

}


// 타입에 맞는 필요한 엘리먼트 리스트 생성
const svgLists = (types) =>
{
    const svgelemList = {}
    const genSVGList = (types) => { }
    return genSVGList(types, svgelemList)

}



// svg 차트에 필요한 요소 생성과 렌더링

const genSVGElements = (list, option) => { }
const genPath = (data, size) => { }
const renderSVG = (elems, size) => { }



// svg events 설정 예시
const events = [
    {
        'eventArea': {
            action: '',
            isAdded: false,

        },
        'tooltips': {
            action: '',
            isAdded: false,
        }
    }
]
const setEvents = (list, options) => { }





const props = ['차트 생성에 필요한 함수들']
const Use = (props) => { } // 함수 외 공통으로 쓰이는 객체를 복사

const Chart = (props, Use) => (store, data, option) =>
{
    const _ = Use(props)
    const store = {}

    //넘겨진 함수들 사용
    const init = (store, data, option) => { }

    return { init }


}
//초기
const chart = Chart(props, Use)

//사용자 사용
chart.init(store, data, option)
chart.render()
