
function about()
{
    var targetDiv = document.querySelector('#div1');
    window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: 'smooth'
    });
}

function projects()
{
    let element = document.querySelector('#div2');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function contact()
{
    let element = document.querySelector('#div3');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}