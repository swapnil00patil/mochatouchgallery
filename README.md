mochatouchgallery
=================


<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script type="text/javascript" src="mochatouch-min.js"></script>
    <link href="mochatouch.css" rel="stylesheet">
    <script>
        $(function () {
			baser_url = "http://phpkarma.com/mochatouch/";
            mochaTouch("mochatouchdefault",'default',baser_url);
        })
    </script>
<div id="demo">
<div class="mainHeader">IMAGE & VIDEO GALLERY FOR MOBILE AND TOUCH DEVICES</div>
  <div class="collage_wrap">
    <div class="collage" >Photo Gallery = Yes</div>
    <div class="collage" >Video Support = Yes</div>
    <div class="collage" >Mobile / Tablet Support = Yes</div>
    <div class="collage" >Desktop Support = Yes</div>
    <div class="collage" >IE Support = No</div>
    <div class="collage" >JSON = Yes</div>
    <div class="collage" >jQuery = Yes</div>
    <div class="collage" >Open Source = Yes</div>
    <div class="collage" >Customisation = Ask us!</div>
    <div class="collage" >Hire us = offcourse!</div>
  </div>
  <div class="mainHeader" style="padding: 3px;font-size: 27px;">View it in action</div>
  
  <div id="mochatouchdefault">
            <ul>
                <li>
                    <img  src="demo/data/1.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                </li>
                <li>
                    <img src="demo/data/2.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
                </li>
                <li>
                    <video preload="none" controls poster="demo/data/bunny.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
                        <source src="demo/data/bunny.mp4" type='video/mp4'>
                    </video>
                </li>
                <li>
                    <iframe src="http://www.youtube.com/embed/xs_T07_XVFk" frameborder="0" allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></iframe>
                </li>
                <li>
                    <iframe src="http://player.vimeo.com/video/90444206" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></iframe>
                </li>
                <li>
                    <img src="demo/data/3.jpg" data-caption="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
                </li>
               
            </ul>
        </div>
  <style>
            #mochatouchdefault {} #mochatouchdefault ul {
                margin: 0;
                padding: 0;
            }
            #mochatouchdefault ul li {
                float: left;
                width: 27%;
                overflow: hidden;
                height: 200px;
                margin: 1% 3%;
                position: relative;
            }
            #mochatouchdefault ul li img,
            #mochatouchdefault ul li video,
            #mochatouchdefault ul li iframe {
                width: 100%;
            }
            @media (max-width: 600px) {
                #mochatouchdefault ul li {
                    width: 44%;
                    height: 100px;
                }
            }
        </style>
  
  
  <div style="float:left; width:100%">
  	<h3 class="h3title">Options</h3>
    <ul style="list-style:circle;margin-left: 20px;">
    	<li> <h3 style="margin:5px 0;">CAPTION:</h3> To add caption to image, just add data-caption attribute <xmp style="margin:10px 0 0 0;"> <img  src="data/1.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></xmp>  </li>
        <li> <h3 style="margin:5px 0;">BASE URL:</h3> You can set this or leave as it is. This url is used to show resources used by gallery. for e.g. close button is in folder called "resources" then this BASE URl is path to "resources" folder.
        <xmp style="margin:10px 0 0 0;">base_url = 'http://phpkarma.com/mochatouchgallery/';
mochaTouch("mochatouchdefault",'default',base_url);</xmp>  </li>
        <li> <h3 style="margin:5px 0;">Thumbnails & Target Image:</h3> You can use thumbnail and larger target images. You need to add data-src attribute to image tag.
        <xmp style="margin:10px 0 0 0;"> <img data-src="data/2.jpg"  src="data/1.jpg" data-caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></xmp>  </li>
    </ul>
  </div>
  
  
  <div style="float:left; width:100%">
    <h3 class="h3title">How to use : Default Implementation <div style="display: table; float:right;"><a href="http://www.phpkarma.com/mochatouchdemo/demo/demo1.html" class="demoBtn" target="_blank" >Demo</a><a href="http://phpkarma.com/mochatouchdemo/mochatouch.zip" class="demoBtn" style="margin:0 10px;">Download</a></div></h3>
    <h4> Include Javascript and CSS:</h4>
    <xmp> 
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
      <script type="text/javascript" src="../mochatouch.js"></script>
      <link href="../mochatouch.css" rel="stylesheet">
    </xmp>
    <h4>Initiate the call:</h4>
    <xmp> 
      <script>
        $(function () {
            base_url = 'http://phpkarma.com/mochatouchgallery/';
            mochaTouch("mochatouchdefault",'default',base_url);
        })
    </script></xmp>
    <h4> Html:</h4>
    <xmp>
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
    </xmp>
    </p>
  </div>
  <div style="float:left; width:100%">
    <h3 class="h3title">How to use : Json Implementation <div style="display: table; float:right;"><a href="http://www.phpkarma.com/mochatouchdemo/demo/demo2.html" class="demoBtn" target="_blank" >Demo</a><a href="http://phpkarma.com/mochatouchdemo/mochatouch.zip" class="demoBtn" style="margin:0 10px;">Download</a></div></h3>
    <h4> Include Javascript and CSS:</h4>
    <xmp> 
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
      <script type="text/javascript" src="../mochatouch.js"></script>
      <link href="../mochatouch.css" rel="stylesheet">
    </xmp>
    <h4>Initiate the call:</h4>
    <xmp> 
      <script>
       $(function () {
            galleryJson = '[{"type":"photo","poster": "data/0.jpg", "videourl": "", "caption": "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"type":"video","poster": "data/bunny.jpg", "videourl": "data/bunny.mp4", "caption": "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"type":"iframe","poster": "", "videourl": "http://www.youtube.com/embed/xs_T07_XVFk", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"iframe","poster": "", "videourl": "http://player.vimeo.com/video/90444206", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"photo","poster": "data/6.jpg", "videourl": "", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"type":"photo","poster": "data/7.jpg", "videourl": "", "caption": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]';
            base_url = 'http://phpkarma.com/mochatouchgallery/';
            $("#mochatouchModal").on("click", function () {
                mochaTouch(galleryJson, 'json',base_url );
            });
        })
    </script></xmp>
    <h4> Html:</h4>
    <xmp>
      <input type="button" name="Load from JSON" value="Load from JSON" id="mochatouchModal">
    </xmp>
    </p>
  </div>
  <div style="float:left; width:100%">
    <h3 class="h3title">How to use : Hidden Div Implementation <div style="display: table; float:right;"><a href="http://www.phpkarma.com/mochatouchdemo/demo/demo3.html" class="demoBtn" target="_blank" >Demo</a><a href="http://phpkarma.com/mochatouchdemo/mochatouch.zip" class="demoBtn" style="margin:0 10px;">Download</a></div></h3>
    <h4> Include Javascript and CSS:</h4>
    <xmp> 
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.min.js"></script> 
      <script type="text/javascript" src="../mochatouch.js"></script>
      <link href="../mochatouch.css" rel="stylesheet">
    </xmp>
    <h4>Initiate the call:</h4>
    <xmp> 
      <script>
       $(function () {
            $("#mochatouchModal").on("click", function () {
                base_url = 'http://phpkarma.com/mochatouchgallery/';
                mochaTouch("mochatouch", 'hidden',base_url);
            });
        })
    </script></xmp>
    <h4> Html:</h4>
    <xmp>
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
    </xmp>
    </p>
  </div>
</div>


