
window.onload = function(){
    var superlink = new superlinker();
    superlink.exe();
    var superlink_nc = new superlinker({
        blankClass: 'nc-superlink-blank', 
        selfClass: 'nc-superlink', 
        hover: {color: 'rgba(144, 0, 0, 0.3)', fontResize: 3}
    });
    superlink_nc.exe();
    var sl = new superlinker({blankClass: 'lb', selfClass: 'l', hoverClass: 'hovered', hover: {fontResize:false, color:false}});
    sl.exe();

    var git = new superlinker({blankClass:'mySuperLink', selfClass:'selfLink', hover:{color:'rgba(0, 176, 216, 0.648)', fontResize: 3}});
    git.exe();

}

// const windowSizing = () => {
//     const width = $(window).width();
//     const height = $(window).height();

//     const main_box = $('#main');

//     const header = $('#header').height();
//     const main = $('#main').height();
//     const footer = $('#footer').height();

//     if (header + main + footer < height) {
//         let sum = header + footer;
//         let dif = height - sum;

//         console.log('height es ' + height);
//         console.log('Footer + Header = ' + sum);
//         console.log('Main deberá medir: ' + dif);

//         main_box.height(dif + 'px');
//         console.log('main mide' + main_div.height());
//     }

// }

// const superlinking = () => {
//     const superlinks = $('.jq-superlink');
//     superlinking_asign(superlinks);
//     const superlinks_blank = $('.jq-superlink-blank');
//     superlinking_asign(superlinks_blank);

// }

// const superlinking_asign = (obj) => {

//     if (obj) {
//         obj.each((key, value) => {
//             let link = value.href;
//             let parent = value.parentElement;
//             let fontsize = parseInt(window.getComputedStyle(value, null).getPropertyValue('font-size'));
//             // parent.setAttribute('data-target', link);
//             parent.classList.add('hovered');
//             parent.onclick = () => { window.open(link); }
//             value.style.transition = "all 0.75s ease-in-out";
//             parent.addEventListener('mouseover', function () {
//                 let newsize = fontsize * 1.4;
//                 value.style.fontSize = newsize + 'px';
//             });
//             parent.addEventListener('mouseleave', function () {
//                 value.style.fontSize = fontsize + 'px';
//             });
//         });

//     }
// }