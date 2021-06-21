var glob;
class superlinker{
    constructor(o = false){
        let r = {
            blankClass: 'superlink-blank',
            selfClass: 'superlink',
            hoverClass: 'hovered',
            hover: {                
                color: 'rgba(255,255,255,0.1)',
                transition: 'all 0.75s ease-in-out',
                fontResize: 1.4
            }
        }

        if(typeof(o) === 'object'){          
            if(this.checkStrings(o.blankClass)){
                r.blankClass = o.blankClass;
            }
            if(this.checkStrings(o.selfClass)){
                r.selfClass = o.selfClass;
            }
            if(this.checkStrings(o.hoverClass)){
                r.hoverClass = o.hoverClass;
            } else if(o.hoverClass ==  false){
                r.hoverClass = false;
            }

            if(typeof(o.hover) == 'object'){                
                if(this.checkStrings(o.hover.class)){
                    r.hover.class = o.hover.class;
                }
                if(this.checkStrings(o.hover.color)){
                    r.hover.color = o.hover.color;
                } else if (o.hover.color == false){
                    r.hover.color = false;
                }
                if(this.checkStrings(o.hover.transition)){
                    r.hover.transition = o.hover.transition;
                }
                if(o.hover.fontResize != null){
                    r.hover.fontResize = o.hover.fontResize;
                } else if (o.hover.fontResize == false){
                    r.hover.fontResize = false;
                }
            } else if(o.hover == false){
                r.hover = false;
            }

 

        }
        this.config = r;
        return true;

    }

    exe(blank = true, self = true){
        if(blank){
            let tags = document.getElementsByClassName(this.config.blankClass);
            this.superlinking_asign(tags);
        }
        if(self){
            let tags = document.getElementsByClassName(this.config.selfClass);
            this.superlinking_asign(tags);
        }        
        return true;
    }
    checkStrings(s){
        if(typeof(s) == 'string' && s != ''){
            return true;
        }
        return false;

    }

    superlinking_asign(o){
        if (o) {
            for(let i = 0; i < o.length; i++){
                let link = o[i].href;
                let parent = o[i].parentElement;
                // parent.setAttribute('data-target', link);
                if(this.config.hoverClass){
                    parent.classList.add(this.config.hoverClass);  
                }                              
                parent.onclick = () => { window.open(link); }
                o[i].style.transition = "all 0.75s ease-in-out";
                if(this.config.hover != false){
                    let fontsize;
                    let fontResize = this.config.hover.fontResize;                    
                    if(fontResize){
                        fontsize = parseInt(window.getComputedStyle(o[i], null).getPropertyValue('font-size'));                        
                    }     
                    let actualcolor;
                    let newcolor = this.config.hover.color;
                    if(newcolor){
                        actualcolor = window.getComputedStyle(parent, null).getPropertyValue('background-color');
                    }         

                    parent.addEventListener('mouseover', function () {
                        if(fontResize){
                            let newsize = fontsize * fontResize;
                            o[i].style.fontSize = newsize + 'px';
                        }
                        if(newcolor){
                            parent.style.backgroundColor = newcolor;
                        }                        
                        parent.style.cursor = 'pointer';
                    });

                    parent.addEventListener('mouseleave', function () {
                        if(fontResize){
                            o[i].style.fontSize = fontsize + 'px';
                        }     
                        if(newcolor){
                            parent.style.backgroundColor = actualcolor;
                        }                        
                        parent.style.cursor = 'default';
                     });
                }

            }
        }
    }


}

console.log('Superlinker is on!');