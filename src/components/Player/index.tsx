import styles from './styles.module.scss';

export function Player() {
  return(
    <div className={ styles.playerContainer }>
      <header>
        <img src="/img/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <div className={ styles.emptyPlayer }>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={ styles.noMedia }>
        <div className={ styles.progressBar }>
          <span>00:00</span>
          <div className={ styles.playerSlider }>
            <div className={ styles.emptySlider } />
          </div>
          <span>00:00</span>
        </div>

        <div className={ styles.playerButtons }>
          <button>
            <img src="/img/shuffle.svg" alt="Embaralhar"/>
          </button>

          <button>
            <img src="/img/play-previous.svg" alt="Tocar Anterior"/>
          </button>

          <button className={ styles.playButton }>
            <img src="/img/play.svg" alt="Tocar"/>
          </button>

          <button>
            <img src="/img/play-next.svg" alt="Tocar Próxima"/>
          </button>

          <button>
            <img src="/img/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  );
}
