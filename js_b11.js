let ngay = Number(prompt("nhap ngay sinh "));
let thang = Number(prompt("nhap thang sinh "));
	if(ngay<1 || ngay >31){
		alert("ngay khong hop le");
	}
	if(thang <1 || thang >12){
		alert("thang khong hop le");
	}
	if((ngay <=31) && ((ngay >=20 && thang ==1) || (ngay<=18 && thang==2))){
		alert("cung bao binh");
	}
	else if((ngay <=28) && ((ngay >=19 && thang ==2) || (ngay<=20 && thang==3))){
		alert("cung song ngu");
	}
	else if((ngay <=31) && ((ngay >=21 && thang ==3) || (ngay<=20 && thang==4))){
		alert("cung bach duong");
	}
	else if((ngay <=31) && ((ngay >=21 && thang ==4) || (ngay<=20 && thang==5))){
		alert("cung kim nguu");
	}
	else if((ngay <=31) && ((ngay >=21 && thang ==5) || (ngay<=21 && thang==6))){
		alert("cung song tu");
	}
	else if((ngay <=31) && ((ngay >=22 && thang ==6) || (ngay<=22 && thang==7))){
		alert("cung cu giai");
	}
	else if((ngay <=31) && ((ngay >=23 && thang ==7) || (ngay<=22 && thang==8))){
		alert("cung su tu");
	}
	else if((ngay <=31) && ((ngay >=23 && thang ==8) || (ngay<=22 && thang==9))){
		alert("cung xu nu");
	}
	else if((ngay <=31) && ((ngay >=23 && thang ==9) || (ngay<=23 && thang==10))){
		alert("cung thien binh");
	}
	else if((ngay <=31) && ((ngay >=24 && thang ==10) || (ngay<=22 && thang==11))){
		alert("cung bo cap");
	}
	else if((ngay <=31) && ((ngay >=23 && thang ==11) || (ngay<=21 && thang==12))){
		alert("cung nhan ma");
	}
	else if((ngay <=31) && ((ngay >=22 && thang ==12) || (ngay<=19 && thang==1))){
		alert("cung ma ket");
	}