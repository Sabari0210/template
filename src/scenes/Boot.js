import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    init(){
         //  Inject our CSS
         var element = document.createElement('style');

         document.head.appendChild(element);
         var sheet = element.sheet;
 
         var styles1 = '@font-face { font-family: "Playground"; src: url("fonts/Playground.ttf") format("truetype"); }\n';
 
         sheet.insertRule(styles1, 0);
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
        this.load.image('frame', 'assets/frame.png');
        this.load.image('intro', 'assets/intro.png');
        this.load.script('webfont', 'lib/webfont.js');
    }

    create ()
    {
        this.scene.start('Preloader');

        WebFont.load({

            custom: {
                families: ['Playground']

            },
            active: function() {

                // _this.scene.stop('preload');
                // _this.scene.launch('GameScene');
            }
        });
    }
}
