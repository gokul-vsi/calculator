function display(val)
{
    document.getElementById('input').value = document.getElementById('input').value + val;
}
function remove()
{
    document.getElementById('input').value = "";
}
function cal()
{
    var userinput = document.getElementById('input').value;
    var result = eval(userinput);
    
    document.getElementById('input').value=result;
}