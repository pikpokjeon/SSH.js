
const Render = () =>
{
    const init = text =>
    {
        document.getElementById('chart-0').innerText = text
    }
    return { init }
}


export { Render }