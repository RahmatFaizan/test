<script>
    var script = document.createElement("script");
    document.head.appendChild(script);
    script.type = "text/javascript";
    script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
    script.onload = function () {
        function changeloder() {
            document.querySelector('.app-loader').innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;

            changeloder();
            //  if(location.href.includes('iframe=1')){
            //     document.querySelector('body').classList.add('iframe');
            // }



            $('#sidebar-v2').children().eq(1).children().children().eq(0).addClass('tobewrapped');
            $('#sidebar-v2').children().eq(1).children().children().eq(1).addClass('tobewrapped');
            $('#sidebar-v2').children().eq(1).children().children().eq(2).addClass('tobewrapped');

            $('.tobewrapped').wrapAll(`<div class='side-top'></div>`);
            $('.side-top').parents().eq(0).addClass('main-top-nav');
            $('.hl_header--controls').wrapAll(`<div class='header-controls'></div>`);
            $('.side-top').children().wrapAll(`<div class='side-top-inner'></div>`);

            let main = $('.side-top');
            // logo div
            let headercontrols = $('.header-controls');
            let headercontrolsdiv = headercontrols.clone();
            headercontrolsdiv.id = 'hdctrl';
            $(main).append(headercontrolsdiv);
            $('#hl_header--help-icon').css('background', 'white');
            // location div
            $('.side-top').siblings().wrapAll(`<div class='side-top-second'></div>`);
        }
    }
</script>