var body = document.body

var cuong1 = document.getElementById("cuong1")
var cuong2 = document.getElementById("cuong2")


body.addEventListener("click",function(){

    if( cuong1.src === "https://png.pngtree.com/thumb_back/fw800/back_pic/00/04/53/9556248b4747950.png" ){
        cuong1.src = "https://img6.thuthuatphanmem.vn/uploads/2022/03/03/background-mau-loang-nghe-thuat_092448180.jpg"
    }else{
        cuong1.src = "https://png.pngtree.com/thumb_back/fw800/back_pic/00/04/53/9556248b4747950.png"
    }
    if( cuong2.src === "https://png.pngtree.com/thumb_back/fw800/back_pic/00/04/53/9556248b4747950.png" ){
        cuong2.src = "https://img6.thuthuatphanmem.vn/uploads/2022/03/03/background-mau-loang-nghe-thuat_092448180.jpg"
    }else{
        cuong2.src = "https://png.pngtree.com/thumb_back/fw800/back_pic/00/04/53/9556248b4747950.png"
    }
})