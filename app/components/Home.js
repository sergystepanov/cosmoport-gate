// @flow
import React, {Component} from 'react';
import {Tile, Box} from 're-bulma';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.top}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

        <Tile context="isAncestor">
          <Tile context="isParent" size="is2">
            <Tile context="isChild" className={`${styles.block} ${styles.label}`}>
              <div>Вход</div>
            </Tile>
          </Tile>

          <Tile context="isParent" size="is7">
            <Tile context="isChild" className={styles.block}>
              <p className="title">2</p>
            </Tile>
          </Tile>

          <Tile context="isParent">
            <Tile context="isChild" className={`${styles.block} ${styles.label}`}>
              <div className="title">Время до отправки</div>
            </Tile>
          </Tile>
        </Tile>

        <Tile context="isAncestor">
          <Tile>
            <Tile context="isParent" size="is2">
              <Tile context="isChild" className={`${styles.block} ${styles.number}`}>
                <div>9</div>
              </Tile>
            </Tile>
            <Tile context="isParent" isVertical size="is7">
              <Tile context="isChild" className={styles.block}>
                <p className="title">5</p>
              </Tile>
              <Tile context="isChild" className={styles.block}>
                <p className="title">6</p>
              </Tile>
              <Tile context="isChild" className={styles.block}>
                <p className="title">7</p>
              </Tile>
            </Tile>
            <Tile context="isParent">
              <Tile context="isChild" className={styles.block}>
                <p className="title">8</p>
              </Tile>
            </Tile>
          </Tile>
        </Tile>

        <div className={styles.middleBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at
          erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam,
          consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
          eleifend, nunc dui porta orci, quis semper odio felis ut quam. Suspendisse
          varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
          Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et
          sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla
          luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim
          turpis. Sed eget varius ligula, at volutpat tortor.
        </div>

        <div className={styles.bottomBlock}>
          <div>Следующий рейс</div>

          <div className={styles.nextInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

      </div>
    );
  }
}
