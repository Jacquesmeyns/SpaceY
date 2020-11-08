class SceneGame extends Phaser.Scene {

    constructor() {

        super("SceneGame");
    }

    preload() {
        this.load.image("player", directory+"vulp_i1.png");
        this.load.image("marte", directory+"marte test.png");
        this.load.image("barra", directory+"barra.png");
        this.load.image("fondoTierra", directory+"Fondo_Tierra.png");
        
        this.load.spritesheet('componentes', directory+'componente test.png', { frameWidth: 93, frameHeight: 46 });
        this.load.spritesheet('vulpin_idle', directory+'vulpin.png', { frameWidth: 36, frameHeight: 36 });
        this.load.spritesheet('vulpin_walk', directory+'vulpin_walk.png', { frameWidth: 36, frameHeight: 36 });
    }

    create() {

        marte = this.add.image(game.config.width/4, 900, "marte");

        terraformador = this.physics.add.sprite(marte.x, marte.y, "componentes", 1);
        mina = this.physics.add.sprite(marte.x, marte.y, "componentes", 3);
        comunicaciones = this.physics.add.sprite(marte.x, marte.y, "componentes", 2);
        estacionTransporte = this.physics.add.sprite(marte.x, marte.y, "componentes", 0);

        player = this.physics.add.sprite(marte.x,485, 'vulpin_idle');

        this.add.image(3*game.config.width/4, game.config.height/2, "fondoTierra");

        objComida_M = this.add.sprite(0, 20, "barra");
        objComida_M.setOrigin(0, 0.5);
        objComida_M.setScale(nComida_M/MAX_COMIDA, 0.3);
        objComida_M.tint = comida_color;

        objO2_M = this.add.sprite(0, 45, "barra");
        objO2_M.setOrigin(0, 0.5);
        objO2_M.setScale(nO2_M/MAX_O2, 0.3);
        objO2_M.tint = O2_color;

        objMateriales_M = this.add.sprite(0, 70, "barra");
        objMateriales_M.setOrigin(0, 0.5);
        objMateriales_M.setScale(nMateriales_M/MAX_MATERIALES, 0.3);
        objMateriales_M.tint = materiales_color;

        objTerraformación = this.add.sprite(game.config.width/2, 360, "barra");
        objTerraformación.setOrigin(0.5, 0.5);
        objTerraformación.setRotation(1.57);
        objTerraformación.setScale((nTerraformacion/MAX_TERRAFORMACION)*0.3, 0.3);
        objTerraformación.tint = terraformación_color;

        player.setScale(2);
        marte.setScale(2);

        //Colocar las máquinas en marte
        terraformador.setOrigin(0.5, 9.5);
        mina.setOrigin(0.5, 9.5);
        comunicaciones.setOrigin(0.5, 9.5);
        estacionTransporte.setOrigin(0.5, 9.5);

        estacionTransporte.setRotation(0);
        terraformador.setRotation(-1.57);
        comunicaciones.setRotation(1.57);
        mina.setRotation(3.14);

        //this.physics.add.overlap(player, terraformador, colliderInteract);

        //Animations
        this.anims.create({
            key: 'vulpin_idle',
            frames: this.anims.generateFrameNumbers('vulpin_idle', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: 1,
        });

        this.anims.create({
            key: 'vulpin_walk',
            frames: this.anims.generateFrameNumbers('vulpin_walk', { start: 0, end: 10 }),
            frameRate: 10,
        });

        //Input Events
        this.cursors = this.input.keyboard.createCursorKeys();
        key_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        key_interact = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

        console.log(Phaser.Input.Keyboard.KeyCodes);
        console.log(marte);

        //this.input.keyboard.on("keydown_RIGHT", () => {
            //this.player.x++;
        //});
        //this.player.flipX = false;
        //this.player.setRotation(0);
        //this.player.setOrigin(0,1);

        //Físicas
        //this.player = this.physics.add.image(130, 100, "player");
        //this.player.setBounce(1);
        //this.player.setCollideWorldBounds(true);
        //this.player.setVelocity(20, 0);

        //console.log(this.player);
    }
    update(time, delta) {
        
        //Inputs
        //Movimiento Marte
        if (key_left.isDown) {
            marte.rotation+=0.02;
            terraformador.rotation+=0.007;
            mina.rotation+=0.007;
            comunicaciones.rotation+=0.0071;
            estacionTransporte.rotation+=0.007;
            player.flipX = true;
            player.anims.play('vulpin_walk', true);
        }
        else if (key_right.isDown) {
            marte.rotation-=0.02;
            terraformador.rotation-=0.007;
            mina.rotation-=0.007;
            comunicaciones.rotation-=0.007;
            estacionTransporte.rotation-=0.007;
            player.flipX = false;
            player.anims.play('vulpin_walk', true);
        }
        else {

            player.anims.play('vulpin_idle', true);
        }

        //Interaccionar
        if (key_interact.isDown) {

            if (mina.rotation > -0.15 && mina.rotation < 0.15) {
                if (nMateriales_M < MAX_MATERIALES) {

                    nMateriales_M++;
                    objMateriales_M.scaleX = nMateriales_M/MAX_MATERIALES;
                } 
            }
        }
    }

}