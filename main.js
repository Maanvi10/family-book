var m = 0;
function update()
{
    m++;
    var infamily = 5
    if(m > infamily )
    {
       m = 0;
    }
    var nextimg = family [m];
    var nextname = names [m];
    document.getElementById("pic").src = nextimg;
    document.getElementById("name").innerHTML = nextname;
}
    