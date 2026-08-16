import {useCallback, useRef, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * 点灯/消灯のビフォーアフタースライダー。
 * 下層に消灯、上層に点灯を重ね、境界位置で点灯側を clip する。
 * 画像内ではマウス位置に境界が追従する（タッチはなぞって移動）。
 */
export default function CompareSlider({onSrc, offSrc, alt}) {
  const [pos, setPos] = useState(58);
  const containerRef = useRef(null);

  const onImg = useBaseUrl(onSrc);
  const offImg = useBaseUrl(offSrc);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerMove = useCallback(
    (event) => {
      // マウスはホバーで追従、タッチは指が触れている間だけ move が来る
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  const onPointerDown = useCallback(
    (event) => {
      updateFromClientX(event.clientX);
    },
    [updateFromClientX],
  );

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}>
      <img className={styles.image} src={offImg} alt={alt + '（消灯）'} draggable={false} />
      <img
        className={styles.image}
        src={onImg}
        alt={alt + '（点灯）'}
        draggable={false}
        style={{clipPath: `inset(0 ${100 - pos}% 0 0)`}}
      />
      <div className={styles.divider} style={{left: `${pos}%`}}>
        <div className={styles.handle} aria-hidden="true">
          ⟨ ⟩
        </div>
      </div>
      <span className={`${styles.label} ${styles.labelOn}`}>点灯</span>
      <span className={`${styles.label} ${styles.labelOff}`}>消灯</span>
      <span className={styles.hint}>なぞって比較</span>
      <input
        className={styles.range}
        type="range"
        min="0"
        max="100"
        value={Math.round(pos)}
        onChange={(event) => setPos(Number(event.target.value))}
        aria-label="点灯と消灯の比較スライダー"
      />
    </div>
  );
}
