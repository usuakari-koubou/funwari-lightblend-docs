import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CompareSlider from '@site/src/components/CompareSlider';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <CompareSlider
          onSrc="/img/hero_on.png"
          offSrc="/img/hero_off.png"
          alt="ワールドの見た目"
        />
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/">
            ドキュメントを見る
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://usuakari.booth.pm/">
            BOOTH で入手
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '本物の調光のような消え方',
    image: '/img/scene_off.png',
    description:
      '点灯用と消灯用のライトマップを焼き分けてクロスフェード。' +
      '明るい場所ほど最後まで灯って見える、輝度依存のディミングカーブを備えます。' +
      'Light Volumes・Reflection Probe・ライト・発光も一緒に切り替わります。',
  },
  {
    title: '6ステップのガイドつき',
    image: '/img/overview.png',
    description:
      'メインウィンドウのガイドを上から進めるだけでセットアップが完了。' +
      'オレンジのボタンが常に「次の一手」を指すので、迷いません。' +
      'Bakery と Unity 標準ライトマッパーの両対応で、切り替えは焼き直すだけ。',
  },
  {
    title: '工程の状態をいつでも一望',
    image: '/img/dashboard.png',
    description:
      'ダッシュボードが各工程の完了・要再実行を見張ります。' +
      'シーンを変更すると、やり直しが必要な工程だけに案内が出ます。',
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={useBaseUrl(image)} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function WhyBaked() {
  return (
    <section className={styles.whyBaked}>
      <div className="container">
        <Heading as="h2" className="text--center">
          ライトを増やさず、焼いた光を切り替える
        </Heading>
        <p className={clsx('text--center', styles.whyBakedLead)}>
          リアルタイムライトのオン・オフで消灯を作ると、ライトの数だけ描画負荷が増え、
          間接光のない硬い絵になります。ふんわり消灯ギミックは、点灯・消灯それぞれを
          ベイクした2枚のライトマップをクロスフェードします。
        </p>
        <div className={styles.compareWrap}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th></th>
                <th>リアルタイムライトの消灯</th>
                <th>ふんわり消灯ギミック</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>描画負荷</th>
                <td>ライトの数だけ描画負荷が積み上がる</td>
                <td>ライト0本のまま。負荷はテクスチャの合成ぶんだけ</td>
              </tr>
              <tr>
                <th>見た目</th>
                <td>直接光のみ。間接光や柔らかい影は出ない</td>
                <td>バウンス光・面光源・影までベイクの品質そのまま。消灯後の「残り明かり」も焼ける</td>
              </tr>
              <tr>
                <th>アバターへの光</th>
                <td>ライトが当たる範囲だけ。負荷はさらに増える</td>
                <td>Light Volumes が明るさを連動。映り込みも Reflection Probe ごと切り替え</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="VRChatワールド用ライトマップ切り替えツール。点灯と消灯のクロスフェードを、6ステップのガイドで。">
      <HomepageHeader />
      <main>
        <WhyBaked />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
