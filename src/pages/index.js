import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
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
        <img
          className={styles.heroImage}
          src={useBaseUrl('/img/compare_on_off.png')}
          alt="点灯と消灯の比較"
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="VRChatワールド用ライトマップ切り替えツール。点灯と消灯のクロスフェードを、6ステップのガイドで。">
      <HomepageHeader />
      <main>
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
