import './App.css';
import { useState, useEffect } from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import gen1 from './assets/12826.png';
import gen2 from './assets/14375.png';
import gen3 from './assets/14500.png';
import gen4 from './assets/14504.png';
import gen5 from './assets/18127.png';
import gen6 from './assets/18133.png';
import gen7 from './assets/27830.png';
import gen8 from './assets/28073.png';
import contactBg from './assets/615893.jpg';

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const dispatchImages = [img10, img11, img12, img13];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [recruitModalOpen, setRecruitModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-mark">
              <img src="/logo.png" alt="STARWRECKER" />
            </span>
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
        <section className="hero" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-kicker">INCIDENT RESPONSE / 24-7</span>
              <h1>
                確かな技術で、
                <br />
                現場を守る。
                <span>一つひとつを確実に。</span>
              </h1>
              <p>
                事故・故障対応から車両製作まで。
                <br />
                専門技術と責任ある対応で現場を支えます。
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
            <div className="hero-visual" />
          </div>
        </section>

        <section id="dispatch" className="section dispatch">
          <div className="container dispatch-layout">
            <div className="dispatch-intro">
              <span className="eyebrow">Dispatch Flow</span>
              <h2>出動から搬送までの流れ</h2>
              <p>
                状況確認から車両選定、現場対応、搬送まで。
                <br />
                専門知識と経験に基づいた判断で、迅速かつ安全に対応します。
                <br />
                一つひとつの工程を確実に積み重ね、確かな復旧へ導きます。
              </p>
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
                  <p>事故・故障状況を正確に把握し、迅速な初動体制を整えます。</p>
                </div>
                <div className="step-icon">
                  <img src={dispatchImages[0]} alt="指令受付の現場" />
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">02</div>
                <div className="step-body">
                  <h3>出動判断</h3>
                  <p>車両状況と道路環境を総合判断し、最適な車両と人員を手配します。</p>
                </div>
                <div className="step-icon">
                  <img src={dispatchImages[1]} alt="出動判断の準備" />
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">03</div>
                <div className="step-body">
                  <h3>作業</h3>
                  <p>安全確保を最優先に、状況に応じた確実な作業を実施します。</p>
                </div>
                <div className="step-icon">
                  <img src={dispatchImages[2]} alt="作業の様子" />
                </div>
              </div>
              <div className="dispatch-step">
                <div className="step-index">04</div>
                <div className="step-body">
                  <h3>搬送</h3>
                  <p>車両状態を確認しながら、安全かつ責任を持って搬送します。</p>
                </div>
                <div className="step-icon">
                  <img src={dispatchImages[3]} alt="搬送の様子" />
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
            <div className="cap-general">
              <div className="cap-general-head">
                <h3>一般的なトラブルも幅広く対応</h3>
                <p>落車・脱輪・バッテリー上がり・スペア交換まで、日常のトラブルにも即対応します。</p>
              </div>
              <div className="cap-general-list">
                <div className="cap-general-item">
                  <img src={gen8} alt="落車・スタック" />
                  <span>落車・スタック</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen7} alt="脱輪" />
                  <span>脱輪</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen4} alt="スペア交換" />
                  <span>スペア交換</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen2} alt="バッテリー上がり" />
                  <span>バッテリー上がり</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen1} alt="燃料切れ" />
                  <span>燃料切れ</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen6} alt="鍵閉じ込み" />
                  <span>鍵閉じ込み</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen3} alt="タイヤバースト" />
                  <span>タイヤバースト</span>
                </div>
                <div className="cap-general-item">
                  <img src={gen5} alt="事故対応" />
                  <span>事故対応</span>
                </div>
              </div>
            </div>
            <div className="cap-grid">
              <article className="cap-card">
                <div className="cap-icon">
                  <svg viewBox="0 0 64 64" width="64" height="64">
                    {/* キャブ */}
                    <rect x="10" y="20" width="16" height="14" rx="2" fill="currentColor" opacity="0.8" />
                    {/* ウィンドウ */}
                    <rect x="12" y="22" width="6" height="5" fill="white" opacity="0.6" />
                    <rect x="19" y="22" width="5" height="5" fill="white" opacity="0.6" />
                    {/* ボディ */}
                    <rect x="26" y="24" width="28" height="10" fill="currentColor" opacity="0.8" />
                    {/* ホイール */}
                    <circle cx="18" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="38" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    {/* アクスル */}
                    <line x1="18" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>
                <h3>大型車・特装車</h3>
                <p>トレーラー、バス、特殊車両の姿勢補正と搬送。</p>
                <div className="cap-meta">HEAVY DUTY / 50t</div>
              </article>
              <article className="cap-card">
                <div className="cap-icon">
                  <svg viewBox="0 0 64 64" width="64" height="64">
                    {/* 懐中電灯 */}
                    <rect x="22" y="12" width="6" height="16" fill="currentColor" opacity="0.8" />
                    <circle cx="25" cy="30" r="8" fill="currentColor" opacity="0.3" />
                    <circle cx="25" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                    {/* ビーム */}
                    <path d="M 20 32 L 10 48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <path d="M 25 32 L 25 50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 30 32 L 40 48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    {/* 星（24時間対応） */}
                    <path d="M 45 15 L 47 22 L 54 23 L 48 28 L 50 35 L 45 31 L 40 35 L 42 28 L 36 23 L 43 22 Z" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
                <h3>夜間・悪天候</h3>
                <p>視界不良でも安全を確保する専任班が出動。</p>
                <div className="cap-meta">NIGHT OPS / 365</div>
              </article>
              <article className="cap-card">
                <div className="cap-icon">
                  <svg viewBox="0 0 64 64" width="64" height="64">
                    {/* 警告三角形 */}
                    <path d="M 32 8 L 54 50 L 10 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    {/* ！マーク */}
                    <circle cx="32" cy="38" r="2" fill="currentColor" />
                    <rect x="31" y="24" width="2" height="10" fill="currentColor" />
                    {/* コーン */}
                    <path d="M 20 48 L 23 32 L 17 48 Z" fill="currentColor" opacity="0.6" />
                    <path d="M 44 48 L 47 32 L 41 48 Z" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>
                <h3>現場安全管理</h3>
                <p>破片回収、通行規制の調整、二次被害防止。</p>
                <div className="cap-meta">SAFETY FIRST</div>
              </article>
            </div>
            <div className="cap-banner">
              <div>
                <strong>法人専用サポート窓口</strong>
                <span>保険会社様・ディーラー様・法人車両管理ご担当者様へ。<br />専用窓口による迅速対応と出動実績の共有で、継続的な運行支援を行います。</span>
              </div>
              <a
                className="btn ghost"
                href="/contact-corporate.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                業務提携・法人契約のご相談
              </a>
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
              <a className="btn primary" onClick={() => setRecruitModalOpen(true)} style={{ cursor: 'pointer' }}>募集詳細を見る</a>
            </div>
            <div className="recruit-panel">
              <div>
                <span>募集職種</span>
                <strong>一般事務 / 製造板金 / ドライバー</strong>
              </div>
              <div>
                <span>勤務地</span>
                <strong>栃木県栃木市</strong>
              </div>
              <div>
                <span>待遇</span>
                <strong>資格手当、昇給賞与あり</strong>
              </div>
            </div>
          </div>
        </section>

        {recruitModalOpen && (
          <div className="modal-overlay" onClick={() => setRecruitModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setRecruitModalOpen(false)}>&times;</button>

              <div className="modal-header">
                <span className="eyebrow">Job Information</span>
                <h2>採用情報</h2>
                <p>ピンチの現場に駆けつけるプロフェッショナルを募集しています。</p>
              </div>

              <div className="recruit-jobs">
                <article className="job-card">
                  <h3>一般事務（パート）</h3>
                  <div className="job-section">
                    <h4>仕事内容</h4>
                    <p>レッカー車・大型特殊車両を支えるオフィスワーク。電話対応、データ入力、書類整理など。未経験でも安心してスタートできます。</p>
                  </div>
                  <div className="job-section">
                    <h4>働きやすいポイント</h4>
                    <ul className="job-list">
                      <li>週3日〜OK、扶養内も相談可能</li>
                      <li>未経験・ブランクOK</li>
                      <li>子育てとの両立可能、学校行事も考慮</li>
                      <li>職場近くにスーパーあり、買い物に便利</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>勤務条件</h4>
                    <ul className="job-list">
                      <li>勤務地：栃木県栃木市大町20-46</li>
                      <li>勤務時間：9:00〜18:00（週3日〜5日で相談可）</li>
                      <li>休日：土日休み、夏期・年末年始・連休あり</li>
                      <li>給与：時給1,150円〜（試用期間3ヶ月：時給1,068円）</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>待遇・応募資格</h4>
                    <ul className="job-list">
                      <li>社会保険完備（健康・厚生・雇用・労災）</li>
                      <li>交通費支給（規定あり）</li>
                      <li>要普通免許、学歴不問</li>
                    </ul>
                  </div>
                </article>

                <article className="job-card">
                  <h3>製造板金（正社員）</h3>
                  <div className="job-section">
                    <h4>仕事内容</h4>
                    <p>特殊車輛（レッカー車・大型車）のボディ製造・組立・鈑金・塗装作業。未経験からプロの技術を身につけられます。</p>
                  </div>
                  <div className="job-section">
                    <h4>未経験でも安心</h4>
                    <ul className="job-list">
                      <li>OJT研修で工具の使い方から丁寧に指導</li>
                      <li>簡単な補助作業からスタート</li>
                      <li>チームで協力、困った時もすぐ聞ける環境</li>
                      <li>スキルアップ支援・資格取得補助制度あり</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>勤務条件</h4>
                    <ul className="job-list">
                      <li>勤務地：栃木県栃木市大町20-46</li>
                      <li>勤務時間：9:00〜18:00（日勤のみ）</li>
                      <li>休日：週休2日制（日曜+他1日）、祝日、夏期・年末年始</li>
                      <li>給与：月給270,000〜350,000円（未経験250,000円～）</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>待遇・応募資格</h4>
                    <ul className="job-list">
                      <li>社会保険完備、昇給・賞与あり</li>
                      <li>交通費支給（規定あり）</li>
                      <li>要普通免許、学歴・経験・資格不問</li>
                    </ul>
                  </div>
                </article>

                <article className="job-card">
                  <h3>レッカー車ドライバー（正社員）</h3>
                  <div className="job-section">
                    <h4>仕事内容</h4>
                    <p>故障・事故車の移動・搬送、応急処置対応。「車の救急隊」として社会貢献度が高く、未経験からプロを目指せます。</p>
                  </div>
                  <div className="job-section">
                    <h4>未経験からプロへ</h4>
                    <ul className="job-list">
                      <li>充実の資格取得補助制度（牽引免許など）</li>
                      <li>安心のスタートアップ研修、ベテラン先輩と同行</li>
                      <li>頑張り次第で高収入（月給50万円も可能）</li>
                      <li>お客様から直接感謝される、やりがい満点の仕事</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>勤務条件</h4>
                    <ul className="job-list">
                      <li>勤務地：栃木県栃木市大町20-46</li>
                      <li>勤務時間：シフト制・実働8時間（9:30〜/13:00〜/23:00〜）</li>
                      <li>休日：完全週休2日制、夏期・年末年始・連休</li>
                      <li>給与：月給285,000〜500,000円（試用期間3ヶ月：月給230,000円）</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>待遇・応募資格</h4>
                    <ul className="job-list">
                      <li>社会保険完備、昇給・賞与、制服貸与</li>
                      <li>交通費支給（規定あり）、免許取得支援制度</li>
                      <li>準中型免許又は普通免許、40歳以下</li>
                    </ul>
                  </div>
                </article>

                <article className="job-card">
                  <h3>レッカー車ドライバー（アルバイト）</h3>
                  <div className="job-section">
                    <h4>仕事内容</h4>
                    <p>故障・事故車の移動・搬送、応急処置対応。「車の救急隊」として社会貢献度が高く、未経験からプロを目指せます。</p>
                  </div>
                  <div className="job-section">
                    <h4>未経験からプロへ</h4>
                    <ul className="job-list">
                      <li>充実の資格取得補助制度（牽引免許など）</li>
                      <li>安心のスタートアップ研修、ベテラン先輩と同行</li>
                      <li>週4日〜勤務OK、柔軟なシフト対応</li>
                      <li>お客様から直接感謝される、やりがい満点の仕事</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>勤務条件</h4>
                    <ul className="job-list">
                      <li>勤務地：栃木県栃木市大町20-46</li>
                      <li>勤務時間：シフト制・実働8時間（9:30〜/13:00〜/23:00〜）</li>
                      <li>休日：週4日〜勤務、シフト相談可</li>
                      <li>給与：時給1,200円〜</li>
                    </ul>
                  </div>
                  <div className="job-section">
                    <h4>待遇・応募資格</h4>
                    <ul className="job-list">
                      <li>社会保険完備、制服貸与</li>
                      <li>交通費支給（規定あり）、免許取得支援制度</li>
                      <li>準中型免許又は普通免許</li>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="recruit-process">
                <h3>採用までの流れ</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-num">1</div>
                    <div className="step-text">
                      <strong>応募</strong>
                      <p>お問い合わせフォームから職種を選んでご応募ください</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num">2</div>
                    <div className="step-text">
                      <strong>面接</strong>
                      <p>当社にてお会いし、職務内容や待遇について詳しくお伝えします</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-num">3</div>
                    <div className="step-text">
                      <strong>内定・入社</strong>
                      <p>各研修を経て実務へ。サポート体制を整えて迎えます</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recruit-cta">
                <h3>興味をお持ちの方はこちら</h3>
                <a className="btn primary" href="/apply.html">応募・ご相談</a>
              </div>
            </div>
          </div>
        )}

        <section id="company" className="section company">
          <div className="container company-inner">
            <div className="section-head">
              <span className="eyebrow">Company</span>
              <h2>会社概要</h2>
              <p>乗用車から大型・特殊車両まで幅広く対応し、確かな技術と体制で現場復旧を行っています。</p>
            </div>
            <div className="company-grid">
              <div className="company-card">
                <span>会社名</span>
                <strong>有限会社ロイヤルサービス スターレッカー栃木</strong>
              </div>
              <div className="company-card">
                <span>設立</span>
                <strong>2008年4月</strong>
              </div>
              <div className="company-card">
                <span>代表</span>
                <strong>代表取締役社長 澁谷 治朗</strong>
              </div>
              <div className="company-card">
                <span>事業内容</span>
                <strong>レッカー、ロードサービス、特殊車両等の製造・板金</strong>
              </div>
              <div className="company-card">
                <span>保有車両</span>
                <strong>6台</strong>
              </div>
              <div className="company-card">
                <span>拠点</span>
                <strong>栃木県栃木市大町20-46</strong>
              </div>
            </div>
            <div className="company-map" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <iframe
                title="会社所在地マップ"
                src="https://www.google.com/maps?q=%E6%A0%83%E6%9C%A8%E7%9C%8C%E6%A0%83%E6%9C%A8%E5%B8%82%E5%A4%A7%E7%94%BA20-46&output=embed"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: '12px', maxWidth: '900px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5em' }}>※地図は本社所在地の例です。実際の住所に合わせて調整可能です。</div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact" style={{backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
                  <a className="contact-phone" href="tel:0282224949" aria-label="緊急連絡 0282-22-4949 に発信">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                      <path d="M 6 3 L 9 3 L 11 7 L 9 9 C 10.5 12 12 13.5 15 15 L 17 13 L 21 15 L 21 18 C 21 19.1 20.1 20 19 20 C 11.3 19.6 4.4 12.7 4 5 C 4 3.9 4.9 3 6 3 Z" fill="currentColor" />
                    </svg>
                    <strong>0282-22-4949</strong>
                  </a>
                </div>
                <div>
                  <span>法人窓口</span>
                  <strong>info@starwrecker.jp</strong>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="お名前" aria-label="お名前" />
              <input type="email" placeholder="メールアドレス" aria-label="メールアドレス" />
              <textarea placeholder="お問い合わせ内容" rows="4" aria-label="お問い合わせ内容" />
              <button className="btn primary" type="submit">送信する</button>
            </form>
          </div>
        </section>

        <section id="apply" className="section contact apply-section">
          <div className="container contact-inner">
            <div className="contact-copy">
              <span className="eyebrow">Apply</span>
              <h2>応募専用フォーム</h2>
              <p>
                ご応募・ご相談はこちらからお送りください。
                内容を確認後、担当よりご連絡いたします。
              </p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="お名前" aria-label="お名前" />
              <input type="email" placeholder="メールアドレス" aria-label="メールアドレス" />
              <input type="tel" placeholder="電話番号" aria-label="電話番号" />
              <input type="text" placeholder="希望職種" aria-label="希望職種" />
              <textarea placeholder="応募・ご相談内容" rows="4" aria-label="応募・ご相談内容" />
              <button className="btn primary" type="submit">応募する</button>
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
                <strong>栃木県栃木市大町20-46</strong>
              </div>
              <div>
                <span>代表連絡先</span>
                <strong>0282-25-0001</strong>
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
