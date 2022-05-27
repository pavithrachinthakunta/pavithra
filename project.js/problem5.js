<html>
      <head>
         <title> celsius to Fahrenheit</title>
      </head>
      <body>
      <h1>celsius to Fahrenheit</h1>
         <b>celsius:</b><inputtype="text" id="textcelsius"><br>
         <b> Fahrenheit:</b><input type="text" id="textfahrenheite"><br>
         <button onclick="convertcelsiusTofahrenheit();"convert C->F</button>
      </body>
   </html>
   <script>
      function convertCelsiusToFahrenheit() {
         var celsius = doucument.getelementbyid("textcelsius").value;
         var Fahrenheit = ((9/5)*celsius)+32;
         doucument.getelementbyid("textfahrenheite").value = f;
         }
   </script>