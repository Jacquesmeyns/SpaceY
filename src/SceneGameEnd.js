
class SceneGameEnd extends Phaser.Scene {

    constructor() {

        super("SceneGameEnd");
    }

    preload(){
        
    }

    create() {

        sfx.sounds[5].play();

        //Botón para volver al menú
        this.BtnBackToMenu = this.add.text(game.config.width/2, 2*game.config.height/3, "VOLVER",{fontSize:'60px',fill:'#ffffff',}).setDepth(6).setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => this.GoBack() )
        .on('pointerup', () => this.Highlight(this.BtnBackToMenu, true) )
        .on('pointerover', () => this.Highlight(this.BtnBackToMenu, true) )
        .on('pointerout', () => this.Highlight(this.BtnBackToMenu, false) );
    }

    update(delta) {

        
    }

    Highlight(obj, b) {

        b ? obj.tint = Phaser.Display.Color.GetColor(139, 139, 139) : obj.tint = Phaser.Display.Color.GetColor(255, 255, 255);  
    }

    GoBack() {

        this.scene.stop("SceneGame");
        this.scene.start("SceneMenu");
    }
}