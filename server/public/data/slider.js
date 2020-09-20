const slidesDiv = document.querySelector(".slider-div");

slidesImages.map((slide) => {
  var li = `
  <li data-index="rs-18" data-transition="zoomin" data-slotamount="7"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"  data-thumb="images/slider/slide3.jpeg"  data-rotate="0"  data-saveperformance="off"  data-title="Perfectly Responsive" data-description="">
  <!-- MAIN IMAGE -->
  <img src="images/slider/slide3.jpeg"  alt=""  data-bgposition="center center" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" class="rev-slidebg" data-no-retina>
  <!-- LAYERS -->
  <!-- LAYER NR. BG -->
  <div class="tp-caption tp-shape tp-shapewrapper   rs-parallaxlevel-0" 
                  id="slide-270-layer-10" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                  data-width="full"
                  data-height="full"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" 
                  data-transform_out="s:300;s:300;" 
                  data-start="750" 
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  data-responsive="off"
                  style="z-index: 5;background-color:rgba(0, 0, 0, 0.25);border-color:rgba(0, 0, 0, 0.50);"> </div>
  <!-- LAYER NR. 1 -->
  <div class="tp-caption tp-shape tp-shapewrapper   tp-resizeme rs-parallaxlevel-0" 
                  id="slide-18-layer-9" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['15','15','15','15']" 
                  data-width="500"
                  data-height="140"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power4.easeInOut;" 
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                  data-mask_in="x:0px;y:0px;" 
                  data-mask_out="x:inherit;y:inherit;" 
                  data-start="2000" 
                  data-responsive_offset="on" 
                  style="z-index: 5;background-color:rgba(29, 29, 29, 0.85);border-color:rgba(0, 0, 0, 0.50);"> </div>
  <!-- LAYER NR. 2 -->
  <div class="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-0" 
                  id="slide-18-layer-1" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                  data-fontsize="['70','70','70','35']"
                  data-lineheight="['70','70','70','50']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;" 
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" 
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
                  data-start="1000" 
                  data-splitin="chars" 
                  data-splitout="none" 
                  data-responsive_offset="on" 
                  data-elementdelay="0.05" 
                  style="z-index: 6; white-space: nowrap;">We Will Design It </div>
  <!-- LAYER NR. 3 -->
  <div class="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0" 
                  id="slide-18-layer-4" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['52','51','51','31']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                  data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                  data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
                  data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
                  data-start="1500" 
                  data-splitin="none" 
                  data-splitout="none" 
                  data-responsive_offset="on" 
                  style="z-index: 7; white-space: nowrap;">Available On It.Next </div>
  </li>
              `;
  slidesDiv.innerHTML += li;
});
