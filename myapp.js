let elements = document.getElementsByName('cssProperties');
let div = document.getElementById('modify');
function set()
{
      for( let index = 0; index < elements.length; index++ )
    {
        let cssProperties = elements[ index ].getAttribute('id');
        let cssValue = elements[ index ].value;
        div.style[ cssProperties ] = cssValue;
    }
}
document.getElementById('set').addEventListener('click',set);
