var string = "";
const li = document.querySelectorAll(".btn");
for(var i = 0;i<li.length;i++){
    li[i].addEventListener("click",function(){
        var k = (this.innerHTML);
        if(k==='=')
        {
            try{
                string = eval(string);
            }
            catch(error){
                string = "Undefined";
            }
        }
        else if(k==='C')string = "";
        else string+=k;
        document.querySelector(".inp").value = string;
    })
}