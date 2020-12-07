class SceneContact extends Phaser.Scene {

    constructor() {

        super("SceneContact");
    }

    create() {

        this.JacquesButton = this.add.text(game.config.width/2, game.config.height+300, 'Jacques David Meyns Villaldea', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.enterJacques() )
        .on('pointerover', () => this.enterButtonHoverState(this.JacquesButton) )
        .on('pointerout', () => this.enterButtonRestState(this.JacquesButton) );
        this.JacquesButton.setOrigin(0.5);
        this.easeMe(this.JacquesButton, this, 1);

        this.SofiButton = this.add.text(game.config.width/2, game.config.height+300, 'Sofía de Vega Gimenez', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.enterSofi() )
        .on('pointerover', () => this.enterButtonHoverState(this.SofiButton) )
        .on('pointerout', () => this.enterButtonRestState(this.SofiButton) );
        this.SofiButton.setOrigin(0.5);
        this.easeMe(this.SofiButton, this, 2);

        this.PepeButton = this.add.text(game.config.width/2, game.config.height+300, 'José Pintado Murillo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.enterPepe() )
        .on('pointerover', () => this.enterButtonHoverState(this.PepeButton) )
        .on('pointerout', () => this.enterButtonRestState(this.PepeButton) );
        this.PepeButton.setOrigin(0.5);
        this.easeMe(this.PepeButton, this, 3);

        this.ManuButton = this.add.text(game.config.width/2 , game.config.height+300, 'Manuel Mantecón Polo', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.enterManu() )
        .on('pointerover', () => this.enterButtonHoverState(this.ManuButton) )
        .on('pointerout', () => this.enterButtonRestState(this.ManuButton) );
        this.ManuButton.setOrigin(0.5);
        this.easeMe(this.ManuButton, this, 4);

        this.backButton = this.add.text(game.config.width/2, game.config.height+300, 'Atrás', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.enterBack() )
        .on('pointerover', () => this.enterButtonHoverState(this.backButton) )
        .on('pointerout', () => this.enterButtonRestState(this.backButton) );
        this.backButton.setOrigin(0.5);
        this.easeMe(this.backButton, this, 5);

    }

    //LINK
openExternalLink (name)
{
    var url = 'https://'+ encodeURIComponent(name) +'.itch.io/' ;
    var s = window.open(url, '_blank');
    if (s && s.focus)
    {
        s.focus();

    }
    else if (!s)
    {
        window.location.href = url;
    }
}

//INTERACCION
    enterJacques() {
        sfx.sounds[0].play();
        this.openExternalLink('surissian');
    }
    enterSofi() {
        sfx.sounds[0].play();
        this.openExternalLink('sufeichan');
    }
    enterPepe() {
        sfx.sounds[0].play();
        this.openExternalLink('pepepmcc');
    }
    enterManu() {
        sfx.sounds[0].play();
        this.openExternalLink('manutoarts');
    }

    enterBack() {
        sfx.sounds[0].play();
        this.scene.start('SceneMenu');
    }

    enterButtonHoverState(boton) {
        sfx.sounds[1].play();
        boton.setStyle({ fill: '#ff0'});
        boton.x = boton.x+movTxt;
        boton.y = boton.y+movTxt;
    }
    
    enterButtonRestState(boton) {
        boton.setStyle({ fill: '#0f0' });
        boton.x = boton.x-movTxt;
        boton.y = boton.y-movTxt;
    }

    easeMe(boton,scene,nOp) {
        var endX;
        var endY;
        switch (nOp)
        {
            case 1: endX = game.config.width / 2; endY = (game.config.height/8)*2; break;
            case 2: endX = game.config.width / 2; endY = (game.config.height/8)*3; break;
            case 3: endX = game.config.width / 2; endY = (game.config.height/8)*4; break;
            case 4: endX = game.config.width / 2; endY = (game.config.height/8)*5; break;
            case 5: endX = game.config.width / 2; endY = (game.config.height/8)*6; break;
            default: break;
        }
        scene.tweens.add({
            targets: boton,
            x: endX,
            y: endY,
            delay: nOp * 100,
            //aplha: {start: game.config.width / 2, to: game.config.width / 8},
            duration: 500,
            ease: 'Expo.easeOut',
            repeat: 0,
            yoyo: false,
            //delay:delay,
    
            //onComplete: this.EnterOnMachine.bind(this)
        });
    }

}