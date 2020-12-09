//import meteorito from './meteorito.js';

//const { default: Machine } = require("./Machine");

//Variables
//Directorio imágenes
var directory = "./Resources/Game/";

//Misceláneo
var nCarga = 0;
var barraCarga;
var MAX_CARGA = 100;

var toDestroy;

//Interfaz
var movTxt = 2;    //Píxeles que se mueve el texto al hacer hovering
var counter;

//Inputs
var key_left;
var key_right;
var key_up;
var key_down;
var key_interact;
var key_repair;

//Objetos
//Marte
var player;
var playerSpeed = 1;
var marte;
var fondoMarte;
var nubes;
var N_NUBES = 5;
var teclaAccion;
var maquinas;
var terraformador;
var mina;
var comunicaciones;
var estacionTransporte;
var desgaste_terraformador;
var desgaste_mina
var desgaste_comunicaciones;
var desgaste_estacionTransporte;
var flechasAmarillas;
var alertaMeteorito;
var alertaPeligroIz;
var alertaPeligroDc;
var terraformLevel;
var timerSegundos;
var timerMinutos;
var timerHoras;
var indRocas;
var indO2;
var indMat;
var indHam;
var meteoritos;

//Tierra
var controlTierra;

var fondoTierra;
var lanzadera;
var rocket;
var lanzPuerta;
var lanzCtdn;
var cargaMat;
var cargaO2;
var cargaRocas;
var cargaComida;
var paqBase;
var paqBtnComida;
var paqBtnO2;
var paqBtnMat;
var paqBtnEnv;
var paqPasarela;
var ddrBase;
var ddrFlecha_0;
var ddrFlecha_1;
var ddrFlecha_2;
var ddrBtnMat;
var ddrBtnO2;
var ddrBtnComida;
var controlBase;
var controlKey;	
var controlPass;
var controlTerr;
var controlMina;
var controlRocket;
var controlCom;
var pantalla;
var pantallaPlano;

//Barra terraformación
var nTerraformacion = 0;
var indTerra;
var MAX_TERRAFORMACION = 1000;
var txtTerraformacion;

//Barra cargamento cohete
var objCohete;
var nCoheteMat = 330;
var objCoheteMat;
var MAX_COHETEMAT = 350;
var txtCoheteMat;
var spdCargarCohete = 0.25;
var coheteMat_color = Phaser.Display.Color.GetColor(150, 103, 34);

//Recursos Marte
var nComida_M = 100;
var objComida_M;
var MAX_COMIDA = 150;
var txtComida_M;

var nRocas_M = 100;
var objRocas_M;
var MAX_ROCAS = 200;
var txtRocas_M;

var nMaterial_M = 0;
var objMaterial_M;
var MAX_MATERIAL = 100;
var txtMaterial_M;

//Barra carga
var repairBar_color = Phaser.Display.Color.GetColor(160, 190, 55);
var repairBar_color2 = Phaser.Display.Color.GetColor(225, 164, 13);

//Recursos Tierra


//Musica
var musica;

var startSfxRun = false;
/////////////////////

var music;


//Particulas
var emitterStorm;
var emitterMachines = []; // 0 - Cohete || 1 - Radio || 2 - Mina || 3 - Terraformador

class SceneGame extends Phaser.Scene {
    
    constructor() {

        super("SceneGame");
    }

    preload() {
        /*
        //SceneGame//
        this.load.image("player", directory+"vulp_i1.png");
        this.load.image("marte", directory+"marte test.png");
        this.load.image("barra", directory+"barra.png");
        
        this.load.spritesheet('componentes', directory+'componente test.png', { frameWidth: 93, frameHeight: 46 });
        this.load.spritesheet('stelonauta_idle', directory+'spritesheet_idle_repintado.png', { frameWidth: 361, frameHeight: 361 });
        this.load.spritesheet('stelonauta_run', directory+'spritesheet_run_repintado.png', { frameWidth: 361, frameHeight: 361 });


        
        //UI MARTE
        this.load.image("fondoMarte", directory+"ui_M_bck.png" );
        this.load.image("nube", directory+"ui_M_nubes.png" );
        this.load.image("teclaAccion", directory+"ui_M_actionbox.png" );
        this.load.image("alertaMeteorito", directory+"ui_M_meteorito.png" );
        this.load.image("Meteorito", directory+"meteorito.png");
        this.load.image("terraformLevel", directory+"ui_M_terrafomlevel.png" );
        this.load.image("alertaPeligro", directory+"ui_M_dangerArrow.png" );
        this.load.image("timerSegundos", directory+"ui_M_segundos.png" );
        this.load.image("timerMinutos", directory+"ui_M_minutos.png" );
        this.load.image("timeHoras", directory+"ui_M_horas.png" );
        this.load.spritesheet("indicadores", directory+"M_indicators.png", { frameWidth: 145, frameHeight: 145 });
        this.load.image("flechasAmarillas", directory+"FlechasAmarillas.png" );
        
        //UI TIERRA
        this.load.image("fondoTierra", directory+"ui_T_bck.png" );
        this.load.image("lanzadera", directory+"ui_T_Lanzadera.png" );
        this.load.image("lanzaderaPuerta", directory+"ui_T_Lanzadera_door.png" );
        this.load.image("lanzaderaPuertaRecursos", directory+"ui_T_Lanzadera_door_2.png" );
        this.load.image("lanzaderaCountdown", directory+"ui_T_countdown.png" );
        this.load.spritesheet("payloads", directory+"ui_T_payloads.png", { frameWidth: 52, frameHeight: 37 });
        this.load.image("paqueteriaBase", directory+"ui_T_Paqueteria_contadores.png" );
        this.load.image("paqueteriaBaseTubo", directory+"ui_T_Paqueteria_contadores_tubo.png" );
        this.load.image("paqueteriaBotonComida", directory+"ui_T_Paqueteria_comida.png" );
        this.load.image("paqueteriaBotonO2", directory+"ui_T_Paqueteria_o2.png" );
        this.load.image("paqueteriaBotonMat", directory+"ui_T_Paqueteria_materiales.png" );
        this.load.image("paqueteriaBotonEnviar", directory+"ui_T_Paqueteria_enviar.png" );
        this.load.image("paqueteriaPasarela", directory+"ui_T_Paqueteria_pasarela.png" );
        this.load.image("ddrBaseTubo", directory+"ui_T_DDR1.png" );
        this.load.image("ddrBase", directory+"ui_T_DDR2.png" );
        this.load.image("ddrFlecha_0", directory+"ui_T_DDR_arrow.png" );
        this.load.image("ddrFlecha_1", directory+"ui_T_DDR_arrow.png" );
        this.load.image("ddrFlecha_2", directory+"ui_T_DDR_arrow.png" );
        this.load.image("ddrBotonMat", directory+"ui_T_DDR_materiales.png" );
        this.load.image("ddrBotonO2", directory+"ui_T_DDR_o2.png" );
        this.load.image("ddrBotonComida", directory+"ui_T_DDR_comida.png" );
        this.load.image("controlBase", directory+"ui_T_control_pannel.png" );
        this.load.image("controlKey", directory+"ui_T_control_key.png" );
        this.load.image("controlPass", directory+"ui_T_control_pass.png" );
        this.load.image("controlTerr", directory+"ui_T_control_TERR.png" );
        this.load.image("controlMina", directory+"ui_T_control_MINA.png" );
        this.load.image("controlRocket", directory+"ui_T_control_ROCKET.png" );
        this.load.image("controlCom", directory+"ui_T_control_COM.png" );
        this.load.image("pantalla", directory+"ui_T_pantalla.png" );
        this.load.image("pantallaMapa", directory+"ui_T_pantalla_plano.png" );
        this.load.image("rocket", directory+"ui_T_rocket.png" );
        this.load.image("antena", directory+"antena.png" );
        this.load.image("mina", directory+"mina.png" );
        this.load.image("terraformador", directory+"terraformador.png" );

        this.load.image("rocketRoto", directory+"cohete_roto.png" );
        this.load.image("rocketPolvo", directory+"cohete_polvo.png" );
        this.load.image("antenaRoto", directory+"antena_rota.png" );
        this.load.image("antenaPolvo", directory+"antena_polvo.png" );
        this.load.image("minaRoto", directory+"mina_rota.png" );
        this.load.image("minaPolvo", directory+"mina_polvo.png" );
        this.load.image("terraformadorRoto", directory+"terraformador_roto.png" );
        this.load.image("terraformadorPolvo", directory+"terraformador_polvo.png" );
        this.load.spritesheet("movimientoCohete", directory+"movimiento_cohete.png", { frameWidth: 44, frameHeight: 29 });

        //MUSICA
        ///*
        this.load.audio('MusicMenu', ['./Resources/Audio/Music/space walk.ogg']);
        this.load.audio('MusicIngame', ['./Resources/Audio/Music/Pioneers meets Space.ogg']);
        this.load.audio('MusicTutorial', ['./Resources/Audio/Music/Roboxel - Space Music.ogg']);

        //Ambient noise
        this.load.audio('SfxTerraformer', ['./Resources/Audio/SFX/Mars/Machines/Terraformer.ogg']);
        this.load.audio('apolo11Ambient', ['./Resources/Audio/SFX/Common/apolo11Ambient.ogg']);

        //SFX
        this.load.audio('SfxWalk', ['./Resources/Audio/SFX/Mars/sfx_step_grass.ogg']);
        this.load.audio('SfxArrive', ['./Resources/Audio/SFX/Fanfare/arrive.ogg']);
        this.load.audio('SfxClick', ['./Resources/Audio/SFX/Common/click.ogg']);
        this.load.audio('SfxHover', ['./Resources/Audio/SFX/Common/hover.ogg']);
        this.load.audio('SfxLeave', ['./Resources/Audio/SFX/Fanfare/leave.ogg']);
        this.load.audio('SfxReceive', ['./Resources/Audio/SFX/Fanfare/receive.ogg']);
        this.load.audio('SfxSend', ['./Resources/Audio/SFX/Fanfare/send.ogg']);
        this.load.audio('SfxPipe', ['./Resources/Audio/SFX/Earth/pipe.ogg']);
        this.load.audio('SfxTakeOff', ['./Resources/Audio/SFX/Earth/space_ship.ogg']);
        this.load.audio('SfxLanding', ['./Resources/Audio/SFX/Mars/landing.ogg']);
        this.load.audio('SfxMeteorHit', ['./Resources/Audio/SFX/Mars/DeathFlash.ogg']);
        this.load.audio('SfxAlarm', ['./Resources/Audio/SFX/Mars/Alarm_Loop_01.ogg']);
        //Fanfare
        this.load.audio('SfxWin', ['./Resources/Audio/SFX/Fanfare/win.ogg']);
        this.load.audio('SfxLose', ['./Resources/Audio/SFX/Fanfare/lose.ogg']);
    
        //*/
        this.load.image('spark', './Resources/snowflake.png');
    }

    create() {
        /*
        musica = this.sound.add('MusicMenu');
        musica.volume = 0;
        musica.loop = true;
        musica.play();
        sfx = {
            loop: true,
            volume: 1,
            sounds: [
                        this.sound.add('SfxClick'),     //[0]
                        this.sound.add('SfxHover'),
                        this.sound.add('SfxTerraformer'),
                        this.sound.add('SfxWalk'),
                        this.sound.add('SfxWin'),
                        this.sound.add('SfxLose'),      //[5]
                        this.sound.add('SfxArrive'),
                        this.sound.add('SfxLeave'),
                        this.sound.add('SfxReceive'),
                        this.sound.add('SfxSend'),
                        this.sound.add('SfxPipe'),      //[10]
                        this.sound.add('SfxTakeOff'),
                        this.sound.add('SfxLanding'),
                        this.sound.add('SfxMeteorHit'),
                        this.sound.add('SfxAlarm')
                    ]
        };

        sfx.sounds.forEach(element => {
            element.volume = sfx.volume;
        });

        sfx.sounds[2].loop = sfx.loop;
        sfx.sounds[3].loop = sfx.loop;
        sfx.sounds[8].loop = true;
        sfx.sounds[14].loop = true;
        sfx.sounds[12].volume = 0.3;
        sfx.sounds[2].volume = 0;
        sfx.sounds[8].volume = 0;
        //*/

        //Musica
        let volumen;
        if(musica!=undefined){
            musica.stop();
            volumen = musica.volume;
            musica = [];
        }

        musica[0] = this.sound.add('MusicIngame');
        musica[0].loop = true;
        musica[0].volume = volumen;
        musica[0].play();
        musica[1] = this.sound.add('apolo11Ambient');
        musica[1].loop = true;
        musica[1].volume = 0.2;
        musica[1].play();

        //PLAY a los sonidos de las máquinas
        sfx.sounds[2].play();
        sfx.sounds[8].play();

        //Animaciones
        this.anims.create({
            key: 'stelonauta_idle',
            frames: this.anims.generateFrameNumbers('stelonauta_idle', { start: 0, end: 59 }),
            frameRate: 18,
            //repeat: 1,
        });

        this.anims.create({
            key: 'stelonauta_run',
            frames: this.anims.generateFrameNumbers('stelonauta_run', { start: 0, end: 20 }),
            frameRate: 30,
        });

        this.anims.create({
            key: 'movimientoTerraformador',
            frames: this.anims.generateFrameNumbers('movimientoTerraformador', { start: 0, end: 10 }),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'movimientoAntena',
            frames: this.anims.generateFrameNumbers('movimientoAntena', { start: 0, end: 10 }),
            frameRate: 4,
            repeat: -1,
        });
        this.anims.create({
            key: 'movimientoMina',
            frames: this.anims.generateFrameNumbers('movimientoMina', { start: 0, end: 10 }),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'movimientoCohete',
            frames: this.anims.generateFrameNumbers('movimientoCohete', { start: 0, end: 8 }),
            frameRate: 15,
            repeat: 0,
        });
        this.anims.create({
            key: 'movimientoCoheteReverse',
            frames: this.anims.generateFrameNumbers('movimientoCohete', { start: 8, end: 0 }),
            frameRate: 15,
            repeat: 0,
        });
        

        //MARTE
		// ui_M_bck
        fondoMarte = this.add.image(407, 450, "fondoMarte").setDepth(-2);

        //Inicialización planeta
        marte = this.add.image(game.config.width/4, 1250, "marte").setScale(3).setDepth(-2);

        //Cohete en Marte
        objCohete = new Rocket(this, marte.x, marte.y);

        //Inicialización máquinas
        maquinas = new Array(4);
        estacionTransporte = new StationMachine(this, marte.x, marte.y);
        terraformador = new TerraformMachine(this, marte.x, marte.y, 1);
        comunicaciones = new CommsMachine(this, marte.x, marte.y, 2);
        mina = new MineMachine(this, marte.x, marte.y, 3);
        maquinas[0] = estacionTransporte;
        maquinas[1] = terraformador;
        maquinas[2] = comunicaciones;
        maquinas[3] = mina;

        //Nubes
        nubes = new Array(N_NUBES);
        
        for(var i=0; i<N_NUBES; i++) {

            nubes[i] = new Cloud(this);
            
        }

        //
        meteoritos = new Array();

        //TIERRA
        controlTierra = new EarthControl(this, 0, 0, 8);
        //controlTierra.PushFromMars();
		
		
		
		
		// ui_M_actionbox: Tecla de acción
        //
		
		// ui_M_dangerArrow
		alertaPeligroIz = this.add.image(665, 365, "alertaPeligro").setVisible(false);
		
		// ui_M_dangerArrow_1
		alertaPeligroDc = this.add.image(144, 365, "alertaPeligro").setScale(-1,1).setVisible(false); // *************************************************FLIP EJE VERTICAL!
    
        //Contador tiempo restante
        counter = new Counter(this, 10*60);
        
        

        //jugador
        player = this.physics.add.sprite(marte.x,marte.y-620, 'stelonauta_idle').setScale(0.6);
        
 
        //Indicadores recursos
        indTerra = new ResourceIndicator(this, 401, 787, 3, 0, 1);
        indHam = new ResourceIndicator(this, 109, 74, 0, nComida_M, MAX_COMIDA);
        indRocas = new ResourceIndicator(this, 109, 166, 1, nRocas_M, MAX_ROCAS);
        indMat = new ResourceIndicator(this, 109, 256, 2, nMaterial_M, MAX_MATERIAL);

        
        

        //Cargamento cohete
        objCoheteMat = new Bar(this, game.config.width/4 - 70, player.y + 10, nCoheteMat, MAX_COHETEMAT, 0.5, 0.5, coheteMat_color, true);
        objCoheteMat.obj.setRotation(-1.57);

        //Barra de carga
        barraCarga = new Bar(this, player.x-40, player.y-50, nCarga, MAX_CARGA, 0.3, 0.1, -1, false);        

        //Input events
        this.cursors = this.input.keyboard.createCursorKeys();
        key_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        key_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        key_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        key_interact = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        key_repair = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
        //Genera meteoritos cada x ms (TESTING)
        //var timedEvent = this.time.addEvent({ delay: 3000, callback: genMeteors, callbackScope: this, loop: true });


        //PARTÍCULAS TORMENTA
        emitterStorm = this.add.particles('spark').createEmitter({
            x: {min: 0, max: 1500},
            y: 0,
            blendMode: 'COLOR',
            scale: { start: 0.2, end: 0 },
            tint: 0x50ff6a00,
            speedX: { min: -500, max: -900 },
            speedY: { min: 500, max: 1500 },
            quantity: 100,
            on: false
        });

        

        //Cohete        [0]
        emitterMachines[0] = this.add.particles('spark');
        emitterMachines[0].createEmitter({
            x: 300,
            y: 300,
            blendMode: 'SCREEN',
            scale: { start: 0.2, end: 0 },
            speedX: { min: -200, max: 200 },
            speedY: { min: -100, max: -300 },
            quantity: 5,
            lifespan: 2000,
            on: false
        });
        
        emitterMachines[0].posX = emitterMachines[0].x;
        emitterMachines[0].posY = emitterMachines[0].y;

        //emitterMachines[0].startFollow(player);
///*
        //Radio         [1]
        emitterMachines[1] = this.add.particles('spark');
        emitterMachines[1].createEmitter({
            x: 300,
            y: 300,
            blendMode: 'SCREEN',
            scale: { start: 0.2, end: 0 },
            speedX: { min: -200, max: 200 },
            speedY: { min: -100, max: -300 },
            quantity: 5,
            lifespan: 2000,
            on: false
        });
        
        emitterMachines[1].posX = emitterMachines[1].x;
        emitterMachines[1].posY = emitterMachines[1].y;
    

        //Mina          [2]
        emitterMachines[2] = this.add.particles('spark');
        emitterMachines[2].createEmitter({
            x: 300,
            y: 300,
            blendMode: 'SCREEN',
            scale: { start: 0.2, end: 0 },
            speedX: { min: -200, max: 200 },
            speedY: { min: -100, max: -300 },
            quantity: 5,
            lifespan: 2000,
            on: false
        });
        
        emitterMachines[2].posX = emitterMachines[2].x;
        emitterMachines[2].posY = emitterMachines[2].y;
    

        //Terraformador [3]
        emitterMachines[3] = this.add.particles('spark');
        emitterMachines[3].createEmitter({
            x: 300,
            y: 300,
            blendMode: 'SCREEN',
            scale: { start: 0.2, end: 0 },
            speedX: { min: -200, max: 200 },
            speedY: { min: -100, max: -300 },
            quantity: 5,
            lifespan: 2000,
            on: false
        });
        
        emitterMachines[3].posX = emitterMachines[3].x;
        emitterMachines[3].posY = emitterMachines[3].y;

        emitterMachines.forEach(element => {
            element.setDepth(-1);
        });


    //*/
        /*
        this.input.on('pointerDown', function (pointer) {
            //emitter.setPosition(Phaser.Math.Between(0, game.config.width), 0)
            emitterStorm.emitZoneIndex = 1;
            emitterStorm.active = false;
            console.log("APAGA");
        });
        //*/
    
        /*
        this.input.on('pointerdown', function (pointer) {
            emitZoneIndex = (emitZoneIndex + 1) % emitZones.length;
            emitter.setEmitZone(emitZones[emitZoneIndex]);
            emitter.explode();
        });
        //*/
    
        //emitter.setEmitZone(emitZones[emitZoneIndex]); 
    
    }
    update(time, delta) {
        //console.log(maquinas[0].isSending);

        controlTierra.pantallaPlano.rotation+=delta/16000;
        //DEBUG PARTICULAS
        /*if (key_left.isDown) {
            //Apaga
            emitterStorm.on = false;
        }
        else if (key_right.isDown) {
            //Enciende
            emitterStorm.on = true;
        }*/

        //emitter.setPosition(Phaser.Math.Between(0, game.config.width), 0)
        //MARTE
        //Inputs
        //Movimiento de Marte

        if (key_left.isDown) {
            //Rotación de los elementos de Marte
            updateRotations(1, delta);
            //marte.rotation += 1*delta/1500*playerSpeed;
            //Cohete
            emitterMachines[0].posX = marte.x + 700 * Math.cos(-1.57 + marte.rotation);
            emitterMachines[0].posY = marte.y + 700 * Math.sin(-1.57 + marte.rotation);
            //Terraformador
            emitterMachines[1].posX = marte.x + 700 * Math.cos(3.14 + marte.rotation);
            emitterMachines[1].posY = marte.y + 700 * Math.sin(3.14 + marte.rotation);
            //Comunicaciones
            emitterMachines[2].posX = marte.x + 570 * Math.cos(marte.rotation);
            emitterMachines[2].posY = marte.y + 570 * Math.sin(marte.rotation);
            //Mina
            emitterMachines[3].posX = marte.x + 870 * Math.cos(1.57 + marte.rotation);
            emitterMachines[3].posY = marte.y + 870 * Math.sin(1.57 + marte.rotation);
            //emitterMachines[0].emitParticleAt(emitterMachines[0].posX, emitterMachines[0].posY);
        }
        else if (key_right.isDown) {
            //Rotación de los elementos de Marte
            updateRotations(-1, delta);
            //marte.rotation += -1*delta/1500*playerSpeed;
            //Cohete
            emitterMachines[0].posX = marte.x + 700 * Math.cos(-1.57 + marte.rotation);
            emitterMachines[0].posY = marte.y + 700 * Math.sin(-1.57 + marte.rotation);
            //Terraformador
            emitterMachines[1].posX = marte.x + 700 * Math.cos(3.14 + marte.rotation);
            emitterMachines[1].posY = marte.y + 700 * Math.sin(3.14 + marte.rotation);
            //Comunicaciones
            emitterMachines[2].posX = marte.x + 570 * Math.cos(marte.rotation);
            emitterMachines[2].posY = marte.y + 570 * Math.sin(marte.rotation);
            //Mina
            emitterMachines[3].posX = marte.x + 870 * Math.cos(1.57 + marte.rotation);
            emitterMachines[3].posY = marte.y + 870 * Math.sin(1.57 + marte.rotation);
            //emitterMachines[0].emitParticleAt(emitterMachines[0].posX, emitterMachines[0].posY);
        }
        else {

            player.anims.play('stelonauta_idle', true);
            
        }
        //if(maquina[i].isRota == true)
        /*  emitterMachines[0].emitParticleAt(emitterMachines[0].posX, emitterMachines[0].posY);
          emitterMachines[1].emitParticleAt(emitterMachines[1].posX, emitterMachines[1].posY);
          emitterMachines[2].emitParticleAt(emitterMachines[2].posX, emitterMachines[2].posY);
          emitterMachines[3].emitParticleAt(emitterMachines[3].posX, emitterMachines[3].posY);
        */
        //console.log("Pos X: " + emitterMachines[0].posX + "\nPos Y: " + emitterMachines[0].posY);
        

        if ((key_left.isDown || key_right.isDown) && !startSfxRun) {
            startSfxRun = true;
            sfx.sounds[3].play();
        }
        if (key_left.isUp && key_right.isUp) {
            startSfxRun = false;
            sfx.sounds[3].stop();
        }

        //Meteoritos
        for(var i=0; i < meteoritos.length; i++) {
 
            meteoritos[i].Update();
        }
        
        //////////////////////////////
        //Interaccionar con máquinas//
        //////////////////////////////
        //Mostrar tecla interacción
        /*if (!(maquinas[0].canInteract() || maquinas[1].canInteract() || maquinas[2].canInteract() || maquinas[3].canInteract()) && maquinas[0].isSending) {

            teclaAccion.setVisible(false);
        }*/

        //Acciones de cada máquina
        for(i = 0; i < 4; i++) {

            maquinas[i].update(delta);
            if(maquinas[i].isBroken == true)
                emitterMachines[i].emitParticleAt(emitterMachines[i].posX, emitterMachines[i].posY);
        }

        ///////////
        //Pasivas//
        ///////////

        //Nubes
        for(var i=0; i<N_NUBES; i++) {
            nubes[i].Update();
        }

        //Desgaste máquinas//(mejor en sus clases)
        

        //Desgaste hambre//
        indHam.size = Phaser.Math.Clamp(indHam.size - delta/2500, 0, indHam.maxSize); 
        indHam.Update();

        if (indHam.size <= 0)
            DefeatCondition(this);


        //TIERRA
        controlTierra.Update(delta);
    }

    
}

function genMeteors() {

    //var delay = 0;
    for(var i=0; i < 3; i++) {
 
        meteoritos[i] = new Meteor(this);
    }
}
function updateRotations(sign, delta) {

    for(var i=0; i<N_NUBES; i++) {
        nubes[i].obj.rotation += sign*delta/1000*playerSpeed;
    }
    for(var i=0; i < meteoritos.length; i++) {
        meteoritos[i].obj.rotation += sign*delta/1500*playerSpeed;
    }
    
    marte.rotation+=sign*delta/1500*playerSpeed;
    objCohete.obj.rotation+=sign*delta/1500*playerSpeed;

    for (i=0; i<4; i++) {

        maquinas[i].obj.setRotation(maquinas[i].obj.rotation + sign*delta/1500*playerSpeed);
        //Update sonidos
        var beta = maquinas[i].obj.rotation < 0 ? maquinas[i].obj.rotation * -1: maquinas[i].obj.rotation ;
        if(beta < 0.8)
        {
            var volumen = (0.8 - beta)/0.8;
            if(volumen<0.02)
                volumen = 0;
            switch(i)
            {
                case 0: //Cohete

                    break;
                case 1: //Terraformador
                case 3: //Mina
                    sfx.sounds[2].volume = volumen;
                    break;
                case 2: //Comunicaciones
                    sfx.sounds[8].volume = volumen;
                    break;
            }
            
        }
    }

    sign===1 ? player.flipX = false : player.flipX = true;
    player.anims.play('stelonauta_run', true);

    //Desgaste extra hambre
    indHam.size = Phaser.Math.Clamp(indHam.size - delta/2500, 0, indHam.maxSize); 
    indHam.Update();
}

function DestroyOnScene(obj) {

    obj.destroy();
}

//Acciones condiciones victoria/derrota
function VictoryCondition(that){
    sfx.sounds.forEach(element => {
        element.stop();
    });
    musica[0].stop();
    musica[1].stop();
    sfx.sounds[4].play();
    that.scene.launch('SceneGameEnd');
    that.scene.pause('SceneGame');
    
}

function DefeatCondition(that){
    sfx.sounds.forEach(element => {
        element.stop();
    });
    musica[0].stop();
    musica[1].stop();
    sfx.sounds[5].play();
    that.scene.launch('SceneGameEnd');
    that.scene.pause('SceneGame');
}
