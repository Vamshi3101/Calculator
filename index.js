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
document.addEventListener("keydown",(event)=>{
    if(event.key=='='){
        try{
            string = eval(string);
        }
        catch(error){
            string = "Undefined";
        }
    }
    else if(event.key=='C' || event.key=='c')string = "";
    else if(event.key>='0' && event.key<='9')string+=event.key;
    else if(event.key=='+' || event.key=='-' || event.key=='/' || event.key=='*')string+=event.key;
    document.querySelector(".inp").value = string;
})