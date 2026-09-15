import{
  WaveGroup
} from './wavegroup.js';

class App{
  constructor(){
    this.canvas = document.getElementById('test');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.WaveGroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }
  
  resize(){
    let MainWidth = document.getElementById('jsWidth')
    this.stageWidth = MainWidth.offsetWidth;
    this.stageHeight = document.body.clientHeight/11.3;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight; /*총길이*/
    this.ctx.scale(1, 1);

    this.WaveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t){
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.WaveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};