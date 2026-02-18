import './App.css';
import heroPlaceholder from './assets/hero-placeholder.svg';

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">SW</span>
            <div>
              <span className="brand-name">STARWRECKER</span>
              <span className="brand-sub">Heavy Recovery & Road Service</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#dispatch">出動</a>
            <a href="#coverage">対応範囲</a>
            <a href="#cases">実績</a>
            <a href="#company">会社概要</a>
            <a href="#recruit">採用</a>
            <a href="#contact" className="nav-cta">緊急連絡</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">INCIDENT RESPONSE / 24-7</span>
              <h1>
                緊急現場を
                <br />
                収束させる
                <span>プロフェッショナル</span>
              </h1>
              <p>
                初動スピード、大型車・特殊車両への対応、安全管理まで。
                事故・故障・災害時の現場復旧を一括で担います。
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="#contact">緊急連絡をする</a>
                <a className="btn ghost" href="#capability">対応範囲を見る</a>
              </div>
              <div className="hero-rail">
                <div>
                  <span className="rail-label">平均初動</span>
                  <strong>15分</strong>
                </div>
                <div>
                  <span className="rail-label">年間出動</span>
                  <strong>2,300+</strong>
                </div>
                <div>
                  <span className="rail-label">復旧成功率</span>
                  <strong>98%</strong>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="photo-frame">
                <img
                  className="photo-image"
                  src={heroPlaceholder}
                  alt="レッカー車の現場写真"
                />
              </div>
              <div className="callout">
                <div>
                  <span>大型車対応</span>
                  <strong>OK</strong>
                </div>
                <div>
                  <span>夜間作業</span>
                  <strong>OK</strong>
                </div>
                <div>
                  <span>危険物</span>
                  <strong>相談</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dispatch" className="section dispatch">
          <div className="container dispatch-layout">
            <div className="dispatch-intro">
              <span className="eyebrow">Dispatch Flow</span>
              <h2>初動から復旧までの流れ</h2>
              <p>現場判断と安全確保を同時に進行し、最短で復旧へ。</p>
              <div className="dispatch-stat">
                <span>平均初動</span>
                <strong>15分</strong>
                <em>出動判断まで</em>
              </div>
              <div className="dispatch-strip">
                <span>24H</span>
                <span>大型 50t</span>
                <span>夜間対応</span>
              </div>
            </div>
            <div className="dispatch-steps">
              <div className="dispatch-step">
                <div className="step-index">01</div>
                <div className="step-body">
                  <h3>指令受付</h3>
                  <p>状況確認と現場情報の共有を即時に実施。</p>
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">02</div>
                <div className="step-body">
                  <h3>出動判断</h3>
                  <p>車両サイズと道路状況から最適チームを配置。</p>
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">03</div>
                <div className="step-body">
                  <h3>現場復旧</h3>
                  <p>牽引・姿勢補正・破片回収まで一括対応。</p>
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">04</div>
                <div className="step-body">
                  <h3>再開支援</h3>
                  <p>交通再開と報告まで、安全確保を徹底。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coverage" className="section capability">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Coverage</span>
              <h2>大型・特殊案件に強い対応範囲</h2>
            </div>
            <div className="cap-grid">
              <article className="cap-card">
                <h3>大型車・特装車</h3>
                <p>トレーラー、バス、特殊車両の姿勢補正と搬送。</p>
                <div className="cap-meta">HEAVY DUTY / 50t</div>
              </article>
              <article className="cap-card">
                <h3>夜間・悪天候</h3>
                <p>視界不良でも安全を確保する専任班が出動。</p>
                <div className="cap-meta">NIGHT OPS / 365</div>
              </article>
              <article className="cap-card">
                <h3>現場安全管理</h3>
                <p>破片回収、通行規制の調整、二次被害防止。</p>
                <div className="cap-meta">SAFETY FIRST</div>
              </article>
            </div>
            <div className="cap-banner">
              <div>
                <strong>法人運行支援</strong>
                <span>専用ホットラインと月次レポートで運行を可視化。</span>
              </div>
              <a className="btn ghost" href="#contact">法人相談をする</a>
            </div>
          </div>
        </section>

        <section id="cases" className="section cases">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Case Board</span>
              <h2>直近の復旧実績</h2>
            </div>
            <div className="case-grid">
              <article className="case-card">
                <div className="case-title">高速道路 / 夜間</div>
                <h3>大型トラック横転の復旧</h3>
                <p>通行止めを最小化し、2時間で回収と清掃を完了。</p>
              </article>
              <article className="case-card">
                <div className="case-title">市街地 / 多重事故</div>
                <h3>交差点での多重事故対応</h3>
                <p>3台同時牽引と安全確保を並行、交通再開を40%短縮。</p>
              </article>
              <article className="case-card">
                <div className="case-title">物流 / 早朝</div>
                <h3>配送車のエンジントラブル</h3>
                <p>代替車両手配と積荷移管で遅延を最小化。</p>
              </article>
              <article className="case-card highlight">
                <div className="case-title">建設現場 / 特殊</div>
                <h3>重機の移送・回収</h3>
                <p>斜面スタックを解除し、その日のうちに作業再開。</p>
              </article>
            </div>
          </div>
        </section>

        <section id="recruit" className="section recruit">
          <div className="container recruit-inner">
            <div>
              <span className="eyebrow">Recruit</span>
              <h2>その一台が、誰かの希望になる</h2>
              <p>
                呼ばれたら、迷わない。
                <br />
                ピンチの現場に駆けつける。
                <br />
                その瞬間、誰かのヒーローになる。
                <br />
                そんな想いを持つ仲間を、私たちは本気で募集しています。
              </p>
              <a className="btn primary" href="#contact">採用について相談する</a>
            </div>
            <div className="recruit-panel">
              <div>
                <span>募集職種</span>
                <strong>レッカーオペレーター / 現場管理</strong>
              </div>
              <div>
                <span>勤務地</span>
                <strong>本社拠点・主要高速沿線</strong>
              </div>
              <div>
                <span>待遇</span>
                <strong>資格手当、夜間手当、研修制度</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="section company">
          <div className="container company-inner">
            <div className="section-head">
              <span className="eyebrow">Company</span>
              <h2>会社概要</h2>
              <p>現場第一の運用体制で、迅速・安全・確実な復旧を支援。</p>
            </div>
            <div className="company-grid">
              <div className="company-card">
                <span>会社名</span>
                <strong>株式会社スター・レッカー</strong>
              </div>
              <div className="company-card">
                <span>設立</span>
                <strong>2008年4月</strong>
              </div>
              <div className="company-card">
                <span>代表</span>
                <strong>代表取締役 星野 太郎</strong>
              </div>
              <div className="company-card">
                <span>事業内容</span>
                <strong>レッカー / ロードサービス / 現場復旧</strong>
              </div>
              <div className="company-card">
                <span>保有車両</span>
                <strong>大型レッカー 6台 / 中型 8台</strong>
              </div>
              <div className="company-card">
                <span>拠点</span>
                <strong>本社・主要高速沿線 4拠点</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>一本の連絡で、現場は動き出す</h2>
              <p>
                事故・故障・緊急搬送のご相談は24時間受付。
                法人契約や運行支援もお気軽にお問い合わせください。
              </p>
              <div className="contact-cards">
                <div>
                  <span>緊急連絡</span>
                  <strong>0120-000-911</strong>
                </div>
                <div>
                  <span>法人窓口</span>
                  <strong>info@starwrecker.jp</strong>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="会社名" aria-label="会社名" />
              <input type="text" placeholder="ご担当者名" aria-label="ご担当者名" />
              <input type="email" placeholder="メールアドレス" aria-label="メールアドレス" />
              <textarea placeholder="お問い合わせ内容" rows="4" aria-label="お問い合わせ内容" />
              <button className="btn primary" type="submit">送信する</button>
            </form>
          </div>
        </section>

        <section className="section info">
          <div className="container info-inner">
            <div>
              <span className="eyebrow">Company</span>
              <h2>拠点情報</h2>
            </div>
            <div className="info-grid">
              <div>
                <span>本社</span>
                <strong>〒100-0000 東京都千代田区1-2-3</strong>
              </div>
              <div>
                <span>代表連絡先</span>
                <strong>03-0000-0000</strong>
              </div>
              <div>
                <span>受付時間</span>
                <strong>24時間365日</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand-footer">STARWRECKER</div>
          <div className="footer-links">
            <a href="#dispatch">出動</a>
            <a href="#coverage">対応範囲</a>
            <a href="#cases">実績</a>
            <a href="#company">会社概要</a>
            <a href="#contact">問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
