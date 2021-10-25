//封装一个ajax请求
function ajax(options) {
  //创建XMLHttpRequest对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
  } else {
    var xhr = new ActiveXObject();
  }

  //初始化参数的内容
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = options.dataType || 'json';
  var params = options.data;

  //发送请求
  if (options.type == 'GET') {
    xhr.open('GET', options.url + '?' + params, true);
    xhr.send(null);
  } else if (options.type == 'POST') {
    xhr.open('POST', options.url, true);
    xhr.send(params);
    // xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")//规定输出为键值对的形式
  }

  //接收请求
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.fail && options.fail(status);
      }
    }
  };
}

function ajax1(options) {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject();
  }
  options = options || {};
  options.type = (options.type || 'get').toUpperCase();
  options.dataType = options.dataType || 'json';
  const params = options.data;
  if (options.type === 'GET') {
    xhr.open('GET', options.url + '?' + params, true);
    xhr.send();
  } else {
    xhr.open('POST', options.url, true);
    xhr.send(params);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readysSate == 4 && xhr.status == 200) {
      options.success && options.success(xhr.responseText);
    } else {
      options.fail && options.fail(xhr.responseText);
    }
  };
}
