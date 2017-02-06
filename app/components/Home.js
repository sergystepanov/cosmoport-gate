// @flow
import React, {Component} from 'react';
import {Tile, Box} from 're-bulma';

import styles from './Home.css';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import Countdown from './Countdown/Countdown';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img alt="" src="../resources/logo_v0.svg"/>
          </div>
          <DateTimeDisplay/>
        </div>

        <Tile context="isAncestor">
          <Tile context="isParent" size="is2">
            <Tile context="isChild" className={`${styles.block} ${styles.label}`}>
              <div>Gate</div>
            </Tile>
          </Tile>

          <Tile context="isParent" size="is7">
            <Tile context="isChild" className={styles.property_block}>
              <div className={styles.event_property__title}>
                Type
              </div>
              <div className={styles.event_property__value}>
                123
              </div>
            </Tile>
          </Tile>

          <Tile context="isParent">
            <Tile context="isChild" className={`${styles.block} ${styles.label}`}>
              <div className="title">Time to ETD</div>
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
            <Tile context="isParent" isVertical size="is7" className={styles.block_holder}>
              <Tile
                context="isChild"
                className={`${styles.property_block} ${styles.inner_block}`}>
                <div className={styles.event_property__title}>
                  Destination
                </div>
                <div className={styles.event_property__value}>
                  123
                </div>
              </Tile>
              <Tile
                context="isChild"
                className={`${styles.property_block} ${styles.inner_block}`}>
                <div className={styles.event_property__title}>
                  Duration
                </div>
                <div className={styles.event_property__value}>
                  123
                </div>
              </Tile>
              <Tile
                context="isChild"
                className={`${styles.property_block} ${styles.inner_block}`}>
                <div className={styles.event_property__title}>
                  Status
                </div>
                <div className={styles.event_property__value}>
                  123
                </div>
              </Tile>
            </Tile>
            <Tile context="isParent">
              <Tile context="isChild" className={`${styles.block} ${styles.number}`}>
                <Countdown minutes={1000}/>
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

          <div className={styles.next_block}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

      </div>
    );
  }
}
