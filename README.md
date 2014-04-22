mochatouchgallery
=================


<div class="mainHeader">Responsive Image & Video gallery for Mobile and Touch devices</div>

  <div style="float:left; width:100%">
  	<h5 class="h3title">Options</h5>
    <ul style="list-style:circle;margin-left: 20px;">
    	<li> <h6 style="margin:5px 0;">CAPTION:</h6> To add caption to image, just add data-caption attribute <pre><code>  data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."</pre></code>  </li>
        <li> <h6 style="margin:5px 0;">BASE URL:</h6> You can set this or leave as it is. This url is used to show resources used by gallery. for e.g. close button is in folder called "resources" then this BASE URl is path to "resources" folder.
        <pre><code>base_url = 'http://phpkarma.com/mochatouchgallery/';
mochaTouch("mochatouchdefault",'default',base_url);</pre></code>  </li>
        <li> <h6 style="margin:5px 0;">Thumbnails & Target Image:</h6> You can use thumbnail and larger target images. You need to add data-src attribute to image tag.
        <pre><code> data-src="data/2.jpg" </pre></code>  </li>
    </ul>
  </div>
  
  
 <h3 class="h3title">How to use : Default Implementation <a href="http://www.phpkarma.com/mochatouchdemo/demo/demo1.html" class="demoBtn" target="_blank" >Demo</a></h3>
<h4> Include Javascript and CSS:</h4>
    
     <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
     <script type="text/javascript" src="../mochatouch.js"></script>
     <link href="../mochatouch.css" rel="stylesheet">
    
<h4>Initiate the call:</h4>
    <script>
        $(function () {
            base_url = 'http://phpkarma.com/mochatouchgallery/';
            mochaTouch("mochatouchdefault",'default',base_url);
        })
    </script>
<h4> Html:</h4>

      <div id="mochatouchdefault">
        <ul>
          <li> <img data-src="data/2.jpg"  src="data/1.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> </li>
          <li> <img src="data/2.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."> </li>
          <li>
            <video preload="none" controls poster="data/bunny.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
              <source src="data/bunny.mp4" type='video/mp4'>
            </video>
          </li>
          <li>
            <iframe src="http://www.youtube.com/embed/xs_T07_XVFk" frameborder="0" allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></iframe>
          </li>
          <li>
            <iframe src="http://player.vimeo.com/video/90444206" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></iframe>
          </li>
          <li> <img src="data/3.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."> </li>
          <li> <img src="data/4.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."> </li>
          <li> <img src="data/5.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."> </li>
          <li>
            <video preload="none" controls poster="data/bunny.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
              <source src="data/bunny.mp4" type='video/mp4'>
            </video>
          </li>
        </ul>
      </div>
  
<h3 class="h3title">How to use : Json Implementation <a href="http://www.phpkarma.com/mochatouchdemo/demo/demo2.html" class="demoBtn" target="_blank" >Demo</a></h3>
<h4> Include Javascript and CSS:</h4>
 
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
      <script type="text/javascript" src="../mochatouch.js"></script>
      <link href="../mochatouch.css" rel="stylesheet">

<h4>Initiate the call:</h4>
 
      <script>
       $(function () {
            galleryJson = '[{"type":"photo","poster": "data/0.jpg", "videourl": "", "caption": "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"type":"video","poster": "data/bunny.jpg", "videourl": "data/bunny.mp4", "caption": "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"type":"iframe","poster": "", "videourl": "http://www.youtube.com/embed/xs_T07_XVFk", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"iframe","poster": "", "videourl": "http://player.vimeo.com/video/90444206", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"photo","poster": "data/6.jpg", "videourl": "", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"photo","poster": "data/7.jpg", "videourl": "", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]';
            base_url = 'http://phpkarma.com/mochatouchgallery/';
            $("#mochatouchModal").on("click", function () {
                mochaTouch(galleryJson, 'json',base_url );
            });
        })
    </script>
<h4> Html:</h4>
      <input type="button" name="Load from JSON" value="Load from JSON" id="mochatouchModal">
   

<h3 class="h3title">How to use : Hidden Div Implementation <a href="http://www.phpkarma.com/mochatouchdemo/demo/demo3.html" class="demoBtn" target="_blank" >Demo</a></h3>
<h4> Include Javascript and CSS:</h4>
   
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
      <script type="text/javascript" src="../mochatouch.js"></script>
      <link href="../mochatouch.css" rel="stylesheet">
    
<h4>Initiate the call:</h4>

      <script>
       $(function () {
            $("#mochatouchModal").on("click", function () {
                base_url = 'http://phpkarma.com/mochatouchgallery/';
                mochaTouch("mochatouch", 'hidden',base_url);
            });
        })
    </script>
<h4> Html:</h4>
 
      <input type="button" name="Load from Hidden div" value="Load from Hidden div" id="mochatouchModal">
      <div id="mochatouch" style="display:none;">
        <ul>
          <li> <img src="data/5.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."> </li>
          <li>
            <video preload="none" controls poster="data/bunny.jpg" data-caption=Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
            <source src="data/bunny.mp4" type='video/mp4'>
            </video>
          </li>
          <li>
            <iframe src="http://www.youtube.com/embed/xs_T07_XVFk" frameborder="0" allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></iframe>
          </li>
          <li>
            <iframe src="http://player.vimeo.com/video/90444206" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></iframe>
          </li>
          <li> <img src="data/3.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."> </li>
          <li> <img src="data/4.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."> </li>
        </ul>
      </div>
   


