       
//==================================================== 參數設定部分 =======================================================
var bMoveable=true;		

var _VersionInfo="Version:2.0&#13;2.0作者:walkingpoison&#13;1.0作者: F.R.Huang(meizz)&#13;MAIL: meizz@hzcnc.com"	//版本資訊

//==================================================== WEB 頁面顯示部分 =====================================================
var strFrame;		//存放日曆層的HTML代碼
document.writeln('<iframe id=meizzDateLayer Author=wayx bgcolor=red frameborder=0 style="position: absolute; width: 144; height: 240; z-index: 9998; display: none"></iframe>');
strFrame='<style>';
strFrame+='INPUT.button{BORDER-RIGHT: #76aef0 1px solid;BORDER-TOP: #76aef0 1px solid;BORDER-LEFT: #76aef0 1px solid;';
strFrame+='BORDER-BOTTOM: #76aef0 1px solid;BACKGROUND-COLOR: #fff8ec;font-family:宋體;}';
strFrame+='TD{FONT-SIZE: 9pt;font-family:宋體;}';
strFrame+='</style>';
strFrame+='<scr' + 'ipt>';
strFrame+='var datelayerx,datelayery;	/*存放日曆控制項的滑鼠位置*/';
strFrame+='var bDrag;	/*標記是否開始拖動*/';
strFrame+='function document.onmousemove()	/*在滑鼠移動事件中，如果開始拖動日曆，則移動日曆*/';
strFrame+='{if(bDrag && window.event.button==1)';
strFrame+='	{var DateLayer=parent.document.all.meizzDateLayer.style;';
strFrame+='		DateLayer.posLeft += window.event.clientX-datelayerx;/*由於每次移動以後滑鼠位置都恢復爲初始的位置，因此寫法與div中不同*/';
strFrame+='		DateLayer.posTop += window.event.clientY-datelayery;}}';
strFrame+='function DragStart()		/*開始日曆拖動*/';
strFrame+='{var DateLayer=parent.document.all.meizzDateLayer.style;';
strFrame+='	datelayerx=window.event.clientX;';
strFrame+='	datelayery=window.event.clientY;';
strFrame+='	bDrag=true;}';
strFrame+='function DragEnd(){		/*結束日曆拖動*/';
strFrame+='	bDrag=false;}';
strFrame+='</scr' + 'ipt>';
strFrame+='<div style="z-index:9999;position: absolute; left:0; top:0;" onselectstart="return false">'
strFrame+='<span id=tmpSelectYearLayer Author=wayx style="z-index: 9999;position: absolute;top: 3; left: 19;display: none"></span>';
strFrame+='<span id=tmpSelectMonthLayer Author=wayx style="z-index: 9999;position: absolute;top: 3; left: 78;display: none"></span>';
strFrame+='<table border=1 cellspacing=0 cellpadding=0 width=140 height=160 bordercolor=#76aef0 bgcolor=#76aef0 Author="wayx">';
strFrame+='  <tr Author="wayx"><td width=142 height=23 Author="wayx" bgcolor=#FFFFFF><table border=0 cellspacing=1 cellpadding=0 width=140 Author="wayx" height=23>';
strFrame+='      <tr align=center Author="wayx"><td width=16 align=center bgcolor=#76aef0 style="font-size:12px;cursor: hand;color: #ffffff" ';
strFrame+='        onclick="parent.meizzPrevM()" title="向前翻 1 月" Author=meizz><b Author=meizz>&lt;</b>';
strFrame+='        </td><td width=60 align=center style="font-size:12px;cursor:default" Author=meizz ';
strFrame+='onmouseover="style.backgroundColor=\'#FFD700\'" onmouseout="style.backgroundColor=\'white\'" ';
strFrame+='onclick="parent.tmpSelectYearInnerHTML(this.innerText.substring(0,4))" title="點擊這裏選擇年份"><span Author=meizz id=meizzYearHead></span></td>';
strFrame+='<td width=48 align=center style="font-size:12px;cursor:default" Author=meizz onmouseover="style.backgroundColor=\'#FFD700\'" ';
strFrame+=' onmouseout="style.backgroundColor=\'white\'" onclick="parent.tmpSelectMonthInnerHTML(this.innerText.length==3?this.innerText.substring(0,1):this.innerText.substring(0,2))"';
strFrame+='        title="點擊這裏選擇月份"><span id=meizzMonthHead Author=meizz></span></td>';
strFrame+='        <td width=16 bgcolor=#76aef0 align=center style="font-size:12px;cursor: hand;color: #ffffff" ';
strFrame+='         onclick="parent.meizzNextM()" title="向後翻 1 月" Author=meizz><b Author=meizz>&gt;</b></td></tr>';
strFrame+='    </table></td></tr>';
strFrame+='  <tr Author="wayx"><td width=142 height=18 Author="wayx">';
strFrame+='<table border=1 cellspacing=0 cellpadding=0 bgcolor=#76aef0 ' + (bMoveable? 'onmousedown="DragStart()" onmouseup="DragEnd()"':'');
strFrame+=' BORDERCOLORLIGHT=#76aef0 BORDERCOLORDARK=#FFFFFF width=140 height=20 Author="wayx" style="cursor:' + (bMoveable ? 'move':'default') + '">';
strFrame+='<tr Author="wayx" align=center valign=bottom><td style="font-size:12px;color:#FFFFFF" Author=meizz>日</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>一</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>二</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>三</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>四</td>';
strFrame+='<td style="font-size:12px;color:#FFFFFF" Author=meizz>五</td><td style="font-size:12px;color:#FFFFFF" Author=meizz>六</td></tr>';
strFrame+='</table></td></tr><!-- Author:F.R.Huang(meizz) http://www.meizz.com/ mail: meizz@hzcnc.com 2002-10-8 -->';
strFrame+='  <tr Author="wayx"><td width=142 height=120 Author="wayx">';
strFrame+='    <table border=1 cellspacing=2 cellpadding=0 BORDERCOLORLIGHT=#76aef0 BORDERCOLORDARK=#FFFFFF bgcolor=#fff8ec width=140 height=120 Author="wayx">';
 var n=0; for (j=0;j<5;j++){ strFrame+= ' <tr align=center Author="wayx">'; for (i=0;i<7;i++){
          strFrame+='<td width=20 height=20 id=meizzDay'+n+' style="font-size:12px" Author=meizz onclick=parent.meizzDayClick(this.innerText,0)></td>';n++;}
          strFrame+='</tr>';}
strFrame+='      <tr align=center Author="wayx">';
for (i=35;i<39;i++)strFrame+='<td width=20 height=20 id=meizzDay'+i+' style="font-size:12px" Author=wayx onclick="parent.meizzDayClick(this.innerText,0)"></td>';
strFrame+='        <td colspan=3 align=right Author=meizz><span onclick=parent.closeLayer() style="font-size:12px;cursor: hand"';
strFrame+='         Author=meizz title="' + _VersionInfo + '"><u>關閉</u></span>&nbsp;</td></tr>';
strFrame+='    </table></td></tr>';
strFrame+='<tr Author="wayx"><td Author="wayx">';
strFrame+='<span id=temHM></span>';
strFrame+='</td></tr>';
strFrame+='<tr Author="wayx"><td Author="wayx">';
strFrame+='        <table border=0 cellspacing=1 cellpadding=0 width=100% Author="wayx" bgcolor=#FFFFFF>';
strFrame+='          <tr Author="wayx"><td Author=meizz align=left><input Author=meizz type=button class=button value="<<" title="向前翻 1 年" onclick="parent.meizzPrevY()" ';
strFrame+='             onfocus="this.blur()" style="font-size: 12px; height: 20px"><input Author=meizz class=button title="向前翻 1 月" type=button ';
strFrame+='             value="< " onclick="parent.meizzPrevM()" onfocus="this.blur()" style="font-size: 12px; height: 20px"></td><td ';
strFrame+='             Author=meizz align=center><input Author=meizz type=button class=button value=今天 onclick="parent.meizzToday()" ';
strFrame+='             onfocus="this.blur()" title="當前日期" style="font-size: 12px; height: 20px; cursor:hand"></td><td ';
strFrame+='             Author=meizz align=right><input Author=meizz type=button class=button value=" >" onclick="parent.meizzNextM()" ';
strFrame+='             onfocus="this.blur()" title="向後翻 1 月" class=button style="font-size: 12px; height: 20px"><input ';
strFrame+='             Author=meizz type=button class=button value=">>" title="向後翻 1 年" onclick="parent.meizzNextY()"';
strFrame+='             onfocus="this.blur()" style="font-size: 12px; height: 20px"></td>';
strFrame+='</tr></table></td></tr></table></div>';

window.frames.meizzDateLayer.document.writeln(strFrame);
window.frames.meizzDateLayer.document.close();		//解決ie進度條不結束的問題

//==================================================== WEB 頁面顯示部分 ======================================================
var outObject;
var outButton;		//點擊的按鈕
var outDate="";		//存放物件的日期
var odatelayer=window.frames.meizzDateLayer.document.all;		//存放日曆物件
function setday(tt,flag,obj) //主調函數
{
    debugger;
	if (arguments.length >  2){alert("對不起！傳入本控制項的參數太多！");return;}
	if (arguments.length == 0){alert("對不起！您沒有傳回本控制項任何參數！");return;}
	var dads  = document.all.meizzDateLayer.style;
	var th = tt;
	var ttop  = tt.offsetTop;     //TT控制項的定位點高
	var thei  = tt.clientHeight;  //TT控制項本身的高
	var tleft = tt.offsetLeft;    //TT控制項的定位點寬
	var ttyp  = tt.type;          //TT控制項的類型
	while (tt = tt.offsetParent){ttop+=tt.offsetTop; tleft+=tt.offsetLeft;}
	dads.top  = (ttyp=="image")? ttop+thei : ttop+thei+6;
	dads.left = tleft;	
 /*	outObject = (arguments.length == 2) ? th : obj;
	outButton = (arguments.length == 2) ? null : th;
 */		//設定外部點擊的按鈕
 outObject = th;
 outButton = null;
	//根據當前輸入框的日期顯示日曆的年月
	if(flag=="datetime"){
	   var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
	}else{
	   var reg = /^(\d+)-(\d{1,2})-(\d{1,2})$/; 
	}  
	
	var r = outObject.value.match(reg); 
	if(r!=null){
		r[2]=r[2]-1; 
		var d= new Date(r[1], r[2],r[3]); 
		if(d.getFullYear()==r[1] && d.getMonth()==r[2] && d.getDate()==r[3]){
			outDate=d;		//保存外部傳入的日期
		}
		else outDate="";
			 meizzSetDay(r[1],r[2]+1);	
			
	     if(flag=="datetime"){				
			tmpSelectHrMu(r[4],r[5]);
		}else{
		   odatelayer.temHM.innerHTML="";
		}
		
	}
	else{	  
		outDate="";
		meizzSetDay(new Date().getFullYear(), new Date().getMonth() + 1);	
		if(flag=="datetime"){	//默认时间	   
			tmpSelectHrMu(new Date().getHours(),new Date().getMinutes());			
		}else{
		   odatelayer.temHM.innerHTML="";
		}		  		
	}
	dads.display = '';   
	event.returnValue=false;
}

var MonHead = new Array(12);    		   //定義陽歷中每個月的最大天數
    MonHead[0] = 31; MonHead[1] = 28; MonHead[2] = 31; MonHead[3] = 30; MonHead[4]  = 31; MonHead[5]  = 30;
    MonHead[6] = 31; MonHead[7] = 31; MonHead[8] = 30; MonHead[9] = 31; MonHead[10] = 30; MonHead[11] = 31;

var meizzTheYear=new Date().getFullYear(); //定義年的變數的初始值
var meizzTheMonth=new Date().getMonth()+1; //定義月的變數的初始值
var meizzWDay=new Array(39); 
//function document.onclick() //任意點擊時關閉該控制項	//ie6的情況可以由下面的切換焦點處理代替
//{  
//  with(window.event)
//  { if (srcElement.getAttribute("Author")==null && srcElement != outObject && srcElement != outButton)
//    closeLayer();
//  }
//}

//function document.onkeyup()		//按Esc鍵關閉，切換焦點關閉
//  {   
//    if (window.event.keyCode==27){
//		if(outObject)outObject.blur();
//		closeLayer();
//	}
//	else if(document.activeElement)
//		if(document.activeElement.getAttribute("Author")==null && document.activeElement != outObject && document.activeElement != outButton)
//		{
//			closeLayer();
//		}
//  }
  
 function tmpSelectHrMu(vt,vs){       
        var strHrMu=" &nbsp;<select name=hur style='font-size: 12px'>";
		for(var t=0;t<24;t++){
		var tr="0"+t.toString();
		tr=tr.substring(tr.length-2,tr.length);
		strHrMu+="<option value=" + tr;
		if(vt==t){
			strHrMu+=" selected";
		}
		strHrMu+=">" +tr +"</option>";
		}
		strHrMu+="</select>&nbsp;時&nbsp;&nbsp;<select name=sec style='font-size: 12px'>";
		for(var t=0;t<60;t++){
		tr="0"+t.toString();
		tr=tr.substring(tr.length-2,tr.length);
		strHrMu+="<option value=" + tr;
		if(vs==t){
			strHrMu+=" selected";
		}
		strHrMu+=">" +tr +"</option>";
		}
		strHrMu+='</select>&nbsp;分'; 
		odatelayer.temHM.innerHTML=strHrMu;
 } 
  

function meizzWriteHead(yy,mm)  //往 head 中寫入控制項的年與月
  {
	odatelayer.meizzYearHead.innerText  = yy + " 年";
    odatelayer.meizzMonthHead.innerText = mm + " 月";
  }

function tmpSelectYearInnerHTML(strYear) //年份的下拉清單
{
  if (strYear.match(/\D/)!=null){alert("年份輸入參數不是數位！");return;}
  //var m = (strYear) ? strYear : new Date().getFullYear();
  var m = new Date().getFullYear();  
  if (m < 1000 || m > 9999) {alert("年份值不在 1000 到 9999 之間！");return;}
  var n = m - 100;
  if (n < 1000) n = 1000;
  if (n + 120 > 9999) n = 9974;
  var s = "<select Author=meizz name=tmpSelectYear style='font-size: 12px' "
     s += "onblur='document.all.tmpSelectYearLayer.style.display=\"none\"' "
     s += "onchange='document.all.tmpSelectYearLayer.style.display=\"none\";"
     s += "parent.meizzTheYear = this.value; parent.meizzSetDay(parent.meizzTheYear,parent.meizzTheMonth)'>\r\n";
  var selectInnerHTML = s;
  for (var i = n; i < n + 120; i++)
  {
    if (i == m)
       {selectInnerHTML += "<option Author=wayx value='" + i + "' selected>" + i + "年" + "</option>\r\n";}
    else {selectInnerHTML += "<option Author=wayx value='" + i + "'>" + i + "年" + "</option>\r\n";}
  }
  selectInnerHTML += "</select>";
  odatelayer.tmpSelectYearLayer.style.display="";
  odatelayer.tmpSelectYearLayer.innerHTML = selectInnerHTML;
  odatelayer.tmpSelectYear.focus();
}

function tmpSelectMonthInnerHTML(strMonth) //月份的下拉清單
{
  if (strMonth.match(/\D/)!=null){alert("月份輸入參數不是數位！");return;}
  var m = (strMonth) ? strMonth : new Date().getMonth() + 1;
  var s = "<select Author=meizz name=tmpSelectMonth style='font-size: 12px' "
     s += "onblur='document.all.tmpSelectMonthLayer.style.display=\"none\"' "
     s += "onchange='document.all.tmpSelectMonthLayer.style.display=\"none\";"
     s += "parent.meizzTheMonth = this.value; parent.meizzSetDay(parent.meizzTheYear,parent.meizzTheMonth)'>\r\n";
  var selectInnerHTML = s;
  for (var i = 1; i < 13; i++)
  {
    if (i == m)
       {selectInnerHTML += "<option Author=wayx value='"+i+"' selected>"+i+"月"+"</option>\r\n";}
    else {selectInnerHTML += "<option Author=wayx value='"+i+"'>"+i+"月"+"</option>\r\n";}
  }
  selectInnerHTML += "</select>";
  odatelayer.tmpSelectMonthLayer.style.display="";
  odatelayer.tmpSelectMonthLayer.innerHTML = selectInnerHTML;
  odatelayer.tmpSelectMonth.focus();
}

function closeLayer()               //這個層的關閉
  {
    document.all.meizzDateLayer.style.display="none";
  }

function IsPinYear(year)            //判斷是否閏平年
  {
    if (0==year%4&&((year%100!=0)||(year%400==0))) return true;else return false;
  }

function GetMonthCount(year,month)  //閏年二月爲29天
  {
    var c=MonHead[month-1];if((month==2)&&IsPinYear(year)) c++;return c;
  }
function GetDOW(day,month,year)     //求某天的星期幾
  {
    var dt=new Date(year,month-1,day).getDay()/7; return dt;
  }

function meizzPrevY()  //往前翻 Year
  {
    if(meizzTheYear > 999 && meizzTheYear <10000){meizzTheYear--;}
    else{alert("年份超出範圍（1000-9999）！");}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzNextY()  //往後翻 Year
  {
    if(meizzTheYear > 999 && meizzTheYear <10000){meizzTheYear++;}
    else{alert("年份超出範圍（1000-9999）！");}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzToday()  //Today Button
  {
	var today;
    meizzTheYear = new Date().getFullYear();
    meizzTheMonth ="0" + (new Date().getMonth()+1);
    meizzTheMonth=meizzTheMonth.substring(meizzTheMonth.length-2,meizzTheMonth.length);
    today="0" +new Date().getDate();
    today=today.substring(today.length-2,today.length);
    //meizzSetDay(meizzTheYear,meizzTheMonth);
    if(outObject){
        if(odatelayer.hur==null){
		    outObject.value=meizzTheYear + "-" + meizzTheMonth + "-" + today;
		}else{
		    outObject.value=meizzTheYear + "-" + meizzTheMonth + "-" + today + " " + odatelayer.hur.value+":"+odatelayer.sec.value;
		}    
    }
    closeLayer();
  }
function meizzPrevM()  //往前翻月份
  {
    if(meizzTheMonth>1){meizzTheMonth--}else{meizzTheYear--;meizzTheMonth=12;}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }
function meizzNextM()  //往後翻月份
  {
    if(meizzTheMonth==12){meizzTheYear++;meizzTheMonth=1}else{meizzTheMonth++}
    meizzSetDay(meizzTheYear,meizzTheMonth);
  }

function meizzSetDay(yy,mm)   //主要的寫程式**********
{
  meizzWriteHead(yy,mm);
  //設置當前年月的公共變數爲傳入值
  meizzTheYear=yy;
  meizzTheMonth=mm;
  
  for (var i = 0; i < 39; i++){meizzWDay[i]=""};  //將顯示框的內容全部清空
  var day1 = 1,day2=1,firstday = new Date(yy,mm-1,1).getDay();  //某月第一天的星期幾
  for (i=0;i<firstday;i++)meizzWDay[i]=GetMonthCount(mm==1?yy-1:yy,mm==1?12:mm-1)-firstday+i+1	//上個月的最後幾天
  for (i = firstday; day1 < GetMonthCount(yy,mm)+1; i++){meizzWDay[i]=day1;day1++;}
  for (i=firstday+GetMonthCount(yy,mm);i<39;i++){meizzWDay[i]=day2;day2++}
  for (i = 0; i < 39; i++)
  { var da = eval("odatelayer.meizzDay"+i)     //書寫新的一個月的日期星期排列
    if (meizzWDay[i]!="")
      { 
		//初始化邊框
		da.borderColorLight="#76aef0";
		da.borderColorDark="#FFFFFF";
		if(i<firstday)		//上個月的部分
		{
			da.innerHTML="<b><font color=gray>" + meizzWDay[i] + "</font></b>";
			da.title=(mm==1?12:mm-1) +"月" + meizzWDay[i] + "日";
			da.onclick=Function("meizzDayClick(this.innerText,-1)");
			if(!outDate)
				da.style.backgroundColor = ((mm==1?yy-1:yy) == new Date().getFullYear() && 
					(mm==1?12:mm-1) == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate()) ?
					 "#FFD700":"#e0e0e0";
			else
			{
				da.style.backgroundColor =((mm==1?yy-1:yy)==outDate.getFullYear() && (mm==1?12:mm-1)== outDate.getMonth() + 1 && 
				meizzWDay[i]==outDate.getDate())? "#00ffff" :
				(((mm==1?yy-1:yy) == new Date().getFullYear() && (mm==1?12:mm-1) == new Date().getMonth()+1 && 
				meizzWDay[i] == new Date().getDate()) ? "#FFD700":"#e0e0e0");
				//將選中的日期顯示爲凹下去
				if((mm==1?yy-1:yy)==outDate.getFullYear() && (mm==1?12:mm-1)== outDate.getMonth() + 1 && 
				meizzWDay[i]==outDate.getDate())
				{
					da.borderColorLight="#FFFFFF";
					da.borderColorDark="#76aef0";
				}
			}
		}
		else if (i>=firstday+GetMonthCount(yy,mm))		//下個月的部分
		{
			da.innerHTML="<b><font color=gray>" + meizzWDay[i] + "</font></b>";
			da.title=(mm==12?1:mm+1) +"月" + meizzWDay[i] + "日";
			da.onclick=Function("meizzDayClick(this.innerText,1)");
			if(!outDate)
				da.style.backgroundColor = ((mm==12?yy+1:yy) == new Date().getFullYear() && 
					(mm==12?1:mm+1) == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate()) ?
					 "#FFD700":"#e0e0e0";
			else
			{
				da.style.backgroundColor =((mm==12?yy+1:yy)==outDate.getFullYear() && (mm==12?1:mm+1)== outDate.getMonth() + 1 && 
				meizzWDay[i]==outDate.getDate())? "#00ffff" :
				(((mm==12?yy+1:yy) == new Date().getFullYear() && (mm==12?1:mm+1) == new Date().getMonth()+1 && 
				meizzWDay[i] == new Date().getDate()) ? "#FFD700":"#e0e0e0");
				//將選中的日期顯示爲凹下去
				if((mm==12?yy+1:yy)==outDate.getFullYear() && (mm==12?1:mm+1)== outDate.getMonth() + 1 && 
				meizzWDay[i]==outDate.getDate())
				{
					da.borderColorLight="#FFFFFF";
					da.borderColorDark="#76aef0";
				}
			}
		}
		else		//本月的部分
		{
			da.innerHTML="<b>" + meizzWDay[i] + "</b>";
			da.title=mm +"月" + meizzWDay[i] + "日";
			da.onclick=Function("meizzDayClick(this.innerText,0)");		//給td賦予onclick事件的處理
			//如果是當前選擇的日期，則顯示亮藍色的背景；如果是當前日期，則顯示暗黃色背景
			if(!outDate)
				da.style.backgroundColor = (yy == new Date().getFullYear() && mm == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate())?
					"#FFD700":"#e0e0e0";
			else
			{
				da.style.backgroundColor =(yy==outDate.getFullYear() && mm== outDate.getMonth() + 1 && meizzWDay[i]==outDate.getDate())?
					"#00ffff":((yy == new Date().getFullYear() && mm == new Date().getMonth()+1 && meizzWDay[i] == new Date().getDate())?
					"#FFD700":"#e0e0e0");
				//將選中的日期顯示爲凹下去
				if(yy==outDate.getFullYear() && mm== outDate.getMonth() + 1 && meizzWDay[i]==outDate.getDate())
				{
					da.borderColorLight="#FFFFFF";
					da.borderColorDark="#76aef0";
				}
			}
		}
        da.style.cursor="hand"
      }
    else{da.innerHTML="";da.style.backgroundColor="";da.style.cursor="default"}
  }
}

function meizzDayClick(n,ex)  //點擊顯示框選取日期，主輸入函數*************
{
  var yy=meizzTheYear;
  var mm = parseInt(meizzTheMonth)+ex;	//ex表示偏移量，用於選擇上個月份和下個月份的日期
	//判斷月份，並進行對應的處理
	if(mm<1){
		yy--;
		mm=12+mm;
	}
	else if(mm>12){
		yy++;
		mm=mm-12;
	}
	
  if (mm < 10){mm = "0" + mm;}
  if (outObject)
  {
    if (!n) {//outObject.value=""; 
      return;}
    if ( n < 10){n = "0" + n;}
    if(odatelayer.hur!=null){
       outObject.value= yy + "-" + mm + "-" + n + " " + odatelayer.hur.value+":"+odatelayer.sec.value; //注：在這裏你可以輸出改成你想要的格式
    }else{
       outObject.value= yy + "-" + mm + "-" + n;
    }   
    closeLayer(); 
  }
  else {closeLayer(); alert("您所要輸出的控制項物件並不存在！");}
}
//應用舉例：<input name="sdate" value="" readonly onfocus="setday(this)">
	
			
	
	