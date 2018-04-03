<pre name="code" class="html"><%@ page language="java" contentType="text/html; charset=utf-8"
                                       pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Index Page</title>
  <script type='text/javascript' src='/dwr/engine.js'></script>
  <script type='text/javascript' src='/dwr/interface/helloworldService.js'></script>
  <script type='text/javascript' src='/dwr/util.js'></script>
</head>
<body>

<button onclick="sayHello()">hello</button>
<%--<button onclick="sendmsg()">send</button>--%>

<script type="text/javascript">

  var sayHello = function(){

    return  helloworldService.sayHello("Rongbo_J",callBack);

  }
  var callBack = function(data)
  {
      alert(data);
  }
</script>
</body>
</html>