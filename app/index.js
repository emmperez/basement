import '../sass/style.scss';
import Loader from './animations/Loader';

class App {
    constructor() {
       this._animate();
    }

    _animate() {
        new Loader();
    }
}

new App();