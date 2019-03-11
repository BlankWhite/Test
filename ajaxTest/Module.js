function send() {
    var testname = $("#testname").val();
    //$.getJSON({
    //    url: "IndexHandler.ashx",
    //    data: { testname: testname }
    //    //success: function (data) {
    //    //    $("#testno").empty();
    //    //    $.each(data, function (i) {
    //    //        $("#testno").append("<option value='" + data[i][0] + "'>" + data[i][1] + "</option>");
    //    //    });
    //    //}
    //});
$.getJSON('IndexHandler.ashx', {
    testname: $("#testname").val()
    }).done(function (data) {
        //$("#testno").empty();
        $.each(data, function (i) {
            var option = "<option value='" + data[i][0] + "'>" + data[i][1] + "</option>"; 
            $("#testno").append(option);
        });
    });
}

$('td').css('color', 'red');
$('.highlight').css('background-color', 'red');
//$('#Button1')[0].value = '';

$('*').css('color', 'green');
$('#slide').css('border-bottom', '2px solid black');
 
$('.SampleClass').hide(5000);
$('#slide,p').css('color', 'red');

$("#testname").change(function () {
    send();
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message:'页面加载与' + new Date().toLocaleDateString()
    }
})
var app3 = new Vue({
    el: '#app-3',
    data: {
        senn:true
    }
})
var Vm = new Vue({
    
})
var example1 = new Vue({
    el: '#example-1',
    data: {
        counter:0
    }
})
var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        warn: function(message, event) {
            if (event) event.preventDefault();
            alert(message);

        }
    }

});
Vue.component('todo-item',
    {
        props: ['todo'],
        template: '<li>{{todo.text}}</li>'
    })
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});

window.onload = function () {
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementById('test-file-info');
    var preview = document.getElementById('test-image-preview');


    fileInput.addEventListener('change', function () {
        console.log('change...');
        preview.style.backgroundImage = '';
        if (!fileInput.value) {
            info.innerHTML = '没有选择文件';
            return;
        }
        var file = fileInput.files[0];
        info.innerHTML = '文件:' + file.name + '<br>' + '大小:' + file.size + '<br>' + '修改:' + file.lastModifiedDate;
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('不是有效的图片文件!');
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            console.log('reader.onload');
            var data = e.target.result;
            preview.style.backgroundImage = 'url(' + data + ')';
        };
        reader.readAsDataURL(file);
    });
};

$('#test-image-preview').bind('click',
    function () {
        //$('#slide p').slideUp('slow').slideDown('slow');
        //$('#div1').slideToggle(2000);
        //$(this).css('background-color', 'red');
        //$('#table1 td').each(function() {
        //    alert(this.innerHTML);
        //});
        var jqxhr = $.post('IndexHandler.ashx', {
            data: 'data'
        });
    });
$("#input").change(function() {
    var value = $("#input").val();
    var reg = /^[a-zA-Z]$/;
    if (reg.test(value) === false) {
        alert("只能输入字母，请重新输入");
        //return false
    }
});



