function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("experimental-webgl");
  

  var vertices = [
      //4
      -0.5, 0.9,  
      -0.7, 0.5,
      -0.5, 0.5,
      -0.5, 0.2,

      //9
      0.25, 0.2, 
      0.5, 0.2, 
      0.5, 0.9,
      0.25, 0.9,
      0.25, 0.6,
      0.5, 0.6,

      //N
      -0.8, -0.8, //kiri (kiri kanan)se
      -0.75, -0.7, //kanan (atas bawah)
      -0.7, -0.8, //kecil pertama kiri kecil kedua kanan
      -0.74, -0.7,//kecil atas
      -0.69, -0.8,
      -0.64, -0.7,
      -0.64, -0.69,
      -0.74, -0.69,
      -0.69, -0.6,
      -0.68, -0.6,
      -0.63, -0.69,
      -0.58, -0.6,
      -0.68, -0.59,
      -0.58, -0.59,
      -0.63, -0.5,
      -0.57, -0.59,
      -0.52, -0.5,
      -0.62, -0.5,
      -0.56, -0.59,
      -0.51, -0.5,
      -0.46, -0.59,
      -0.56, -0.6,
      -0.46, -0.6,
      -0.51, -0.7,
      -0.4, -0.7,
      -0.45, -0.6,
      -0.50, -0.7,
      -0.39, -0.7,
      -0.44, -0.6,
      -0.35, -0.6,
      -0.395, -0.5,
      -0.44, -0.59,
      -0.35, -0.59,
      -0.385, -0.5,
      -0.295, -0.5,
      -0.34, -0.59,
      -0.38, -0.49,
      -0.295, -0.49,
      -0.34, -0.4,
      -0.25, -0.4,
      -0.285, -0.49,
      -0.33, -0.4,

      //O
      0.15, -0.59,
      0.35, -0.6,
      0.45, -0.4,
      0.8, -0.59,
      0.58, -0.6,
      0.45, -0.4,
      0.15, -0.6,
      0.45, -0.8,
      0.35, -0.61,
      0.8, -0.6,
      0.58, -0.61,
      0.45, -0.8,
   
    

  ];

 


  //created a linked-list for storing the vertices data in the GPU realm
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);

//vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main () {
      gl_PointSize = 10.0;
      gl_Position = vec4(aPosition, 0.0, 1.0);
      //gl Position -> final destination for storing 
      // positional data for renderen vertex

    }
  `;
    //vertex shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    //fragment shader
    var fragmentShaderCode = `
      precision mediump float;
          void main () {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
            //Blue = R:0, G:0, B:1, A:1
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  

    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

          //Teach the GPU how to collect 
          //The positional values from ARRAY_BUFFER
          //for each vertex being processed
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(aPosition);  


    //gl.clearColor(1.0, 0.75, 0.79, 1.0);
   // gl.clear(gl.COLOR_BUFFER_BIT);
 
    gl.drawArrays(gl.LINE_LOOP, 0, 4);
    gl.drawArrays(gl.LINE_STRIP, 4, 6);
    gl.drawArrays(gl.TRIANGLES, 10, 42);
    gl.drawArrays(gl.TRIANGLES, 52, 12);
        //POINT
        //LINES
        //LINE_LOOP
        //LINE_STRIP
        //TRIANGLES
        //TRIANGLES_STRIP
        //TRIANGLE_FAN
        }      
