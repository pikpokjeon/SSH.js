const Render = () => {

    const paddingSize = 20;

    const init = (id, data, options) => {

        const element = document.getElementById(id);
        const width = parseInt(element.offsetWidth);
        const height = parseInt(element.offsetHeight);
        const size = { width, height };

        // 데이터 모으기

        // svg 영역 생성
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', size.width);
        svg.setAttribute('height', size.height);
        element.appendChild(svg);
        console.log(svg);

        // x축 그리기
        const x = document.createElementNS(svg.namespaceURI, 'line');
        x.setAttribute('x1', '0');
        x.setAttribute('y1', '0');
        x.setAttribute('x2', '100');
        x.setAttribute('y2', '0');
        x.setAttribute('stroke', 'blue');
        x.setAttribute('stroke-width', '5');
        svg.appendChild(x);

        // 눈금 그리기 (width 를 데이터 갯수로 나눈다)

        // 라벨 표시하기

        // 데이터 그리기 (라인)

        // 데이터 그리기 (바)

        // 툴팁 표시

        // 퍼센트 옵션 구현

        // 스택 옵션 구현
 
        if (options.series.type === 'bar') {
        }

        // x축
        const createXaxis = () => {
        }

        // y축
        const createYaxis = (y) => {
        }
    }

    return { init }

}

export { Render }
