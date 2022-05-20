let arrowDowns = document.querySelectorAll('.arrowdown');
let hidden = document.querySelectorAll('.hidden');
let clickable = document.querySelectorAll('.clickable');
let dropdownText = document.querySelectorAll('.dropdownText');
let flag = false;





for(let i = 0; i < clickable.length; i++){
    clickable[i].addEventListener('click',function(e){
        if(flag == false){
            for(let i = 0; i < hidden.length;i++){
                hidden[i].style.display = 'none';
                arrowDowns[i].style.transform = "initial";
            }
            hidden[i].style.display = 'block';
            arrowDowns[i].style.transform = "rotate(180deg)"
            flag = true;
            console.log(flag)
        } else{
            arrowDowns[i].style.transform = "initial";
            hidden[i].style.display = 'none';
            flag = false;
            console.log(flag);
        }
        
    })
}