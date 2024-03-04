var ten_ = document.getElementById("ten_")
var ns_ = document.getElementById("ns_")
var cccd_ = document.getElementById("cccd_")
var adres_ = document.getElementById("adres_")
var Thong_bao_login = document.getElementById("Thong_bao_login")

document.getElementById("button_cung_dz").addEventListener("click",function(){
    if(ten_.value == "" || ns_.value == "" || cccd_.value == ""|| adres_.value == "" ){
        Thong_bao_login.innerText = "thiếu thông tin"
    }else{
        document.getElementById("Cuon_dz").style.display = "none"
        document.getElementById("bai_thi").style.display = "block"
    }
})

document.getElementById("submit").addEventListener("click",function(){
    document.getElementById("bai_thi").style.display = "none"
    document.getElementById("ket_qua").style.display = "block"
    document.getElementById("link_css").setAttribute('href', 'ket_qua.css');
})
