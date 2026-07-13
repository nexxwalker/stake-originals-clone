import { Link } from 'react-router-dom'
import '../styles/home.css'

const games = [
    { id: 'crash', name: 'Crash', image: '/images/crash.avif', path: '/crash', rtp: '97% RTP', volatility: 'High volatility' },
    { id: 'plinko', name: 'Plinko', image: '/images/plinko.avif', path: '/plinko', rtp: '96% RTP', volatility: 'Medium volatility' },
    { id: 'dino', name: 'Dino', image: '/images/dino.avif', path: '/dino', rtp: '96% RTP', volatility: 'Low volatility' },
    { id: 'mines', name: 'Mines', image: '/images/mines.avif', path: '/mines', rtp: '96% RTP', volatility: 'Medium volatility' },
    { id: 'dice', name: 'Dice', comingSoon: true },
    { id: 'limbo', name: 'Limbo', comingSoon: true },
]

const categories = ['Stake Originals', 'Popular', 'New', 'Slots', 'Live Casino', 'Table Games', 'Jackpot', 'Providers']

function GameCard({ game }) {
    const cardContent = <>
        <div className="stake-card-image">
            {game.image ? (
                <img src={game.image} alt={`${game.name} game`} className="game-art-image" />
            ) : (
                <div className="game-art-placeholder" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" /></svg>
                </div>
            )}
            {!game.comingSoon && <div className="card-overlay"><span className="play-btn" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="black"><path d="M8 5v14l11-7z" /></svg></span></div>}
        </div>
        <div className="stake-card-footer">
            <div>
                <span className="game-name">{game.name}</span>
                {game.rtp && <div className="game-meta"><span>{game.rtp}</span><span>{game.volatility}</span></div>}
            </div>
            {game.comingSoon ? <span className="badge-coming-soon">Coming soon</span> : <span className="card-play-label" aria-hidden="true">Play <span>→</span></span>}
        </div>
    </>

    if (game.comingSoon) return <div className="stake-card is-coming-soon">{cardContent}</div>

    return <Link to={game.path} className="stake-card">{cardContent}</Link>
}

function HomePage() {
    const focusGames = () => requestAnimationFrame(() => document.getElementById('stake-originals')?.focus())

    return (
        <div className="home-page-container">
            <section className="home-page-hero">
                <div className="hero-content">
                    <div className="hero-copy">
                        <div className="hero-badge"><span className="dot" /> Four instant-play originals</div>
                        <h1>Play Stake Originals.<br /><span>Built for the next round.</span></h1>
                        <p className="hero-desc">Provably fair games, instant play, and virtual points only. Pick a game and start playing in seconds.</p>
                        <div className="hero-actions">
                            <button type="button" className="hero-btn hero-btn-primary">Register Instantly</button>
                            <a className="hero-btn hero-btn-secondary" href="#stake-originals" onClick={focusGames}>Explore Games</a>
                        </div>
                    </div>
                    <div className="hero-artwork">
                        <img src="/images/casino-chip.svg" alt="Casino chip and coin" />
                    </div>
                </div>
            </section>

            <nav className="game-category-nav" aria-label="Game categories">
                <div className="game-category-list">
                    {categories.map((category, index) => (
                        <button key={category} type="button" className={`game-category-chip ${index === 0 ? 'active' : ''}`} aria-pressed={index === 0}>{category}</button>
                    ))}
                </div>
            </nav>

            <section id="stake-originals" className="home-section" tabIndex="-1">
                <div className="section-header-copy">
                    <p className="section-kicker">Play now</p>
                    <h2>Stake Originals</h2>
                    <p>Four fast games. Pick your style and play with virtual points.</p>
                </div>
                <div className="stake-games-grid">
                    {games.map((game) => <GameCard key={game.id} game={game} />)}
                </div>
            </section>
        </div>
    )
}

export default HomePage
