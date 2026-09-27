"use client"
import { useState } from 'react'

export default function Home() {
  const [teams] = useState([
    { name: "VANTA PRIME", w: 12, l: 2, pts: 36 },
    { name: "GOLD KINGS", w: 10, l: 4, pts: 30 },
    { name: "SHADOW ELITE", w: 9, l: 5, pts: 27 },
    { name: "NEON WOLVES", w: 8, l: 6, pts: 24 },
  ])

  return (
    <div style={{background:'#050505', color:'#FFD700', minHeight:'100vh', fontFamily:'Arial Black', overflowX:'hidden'}}>

      {/* HERO */}
      <div style={{height:'85vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'radial-gradient(ellipse at center,#1a1a00 0%,#050505 70%)', borderBottom:'3px solid #FFD700', position:'relative', textAlign:'center'}}>
        <div style={{position:'absolute', top:'20px', right:'20px', background:'#111', border:'1px solid #00ff00', padding:'8px 15px', borderRadius:'20px', fontSize:'10px', color:'#00ff00'}}>● BOT ONLINE</div>
        <h1 style={{fontSize:'11vw', letterSpacing:'15px', margin:0, textShadow:'0 0 40px #FFD700, 0 0 80px #FFD700', animation:'glow 2s infinite alternate'}}>VANTA GOLD</h1>
        <p style={{color:'white', letterSpacing:'12px', marginTop:'10px', fontSize:'14px'}}>ELITE LEAGUE PLATFORM</p>
        <p style={{color:'#666', fontFamily:'Arial', marginTop:'15px', letterSpacing:'2px', fontSize:'12px'}}>DISCORD BOT • LEAGUE SYSTEM • LIVE RANKING</p>

        <div style={{marginTop:'40px', display:'flex', gap:'15px', flexWrap:'wrap', justifyContent:'center'}}>
          <a href="https://discord.gg/TUO_INVITO" target="_blank" style={{background:'#FFD700', color:'#000', padding:'16px 32px', borderRadius:'50px', textDecoration:'none', fontWeight:900, boxShadow:'0 0 20px #FFD700'}}>JOIN DISCORD</a>
          <a href="#leaderboard" style={{background:'transparent', color:'#FFD700', border:'2px solid #FFD700', padding:'16px 32px', borderRadius:'50px', textDecoration:'none', fontWeight:900}}>LIVE LEAGUES</a>
        </div>

        <div style={{marginTop:'40px', display:'flex', gap:'20px'}}>
          <div style={{background:'#111', border:'1px solid #333', padding:'15px 25px', borderRadius:'12px', textAlign:'center'}}><span style={{color:'white', fontSize:'10px', display:'block', letterSpacing:'2px'}}>COMMANDS</span><b>6 ACTIVE</b></div>
          <div style={{background:'#111', border:'1px solid #333', padding:'15px 25px', borderRadius:'12px', textAlign:'center'}}><span style={{color:'white', fontSize:'10px', display:'block', letterSpacing:'2px'}}>TEAMS</span><b>{teams.length} REGISTERED</b></div>
          <div style={{background:'#111', border:'1px solid #333', padding:'15px 25px', borderRadius:'12px', textAlign:'center'}}><span style={{color:'white', fontSize:'10px', display:'block', letterSpacing:'2px'}}>THEME</span><b>GOLD ELITE</b></div>
        </div>
      </div>

      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'40px 20px'}}>

        {/* COMMANDS */}
        <h2 style={{color:'white', letterSpacing:'6px', fontSize:'18px', marginBottom:'20px'}}>⚡ BOT COMMANDS</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'15px', marginBottom:'50px'}}>
          {['/setup','/addteam','/teams','/removeteam','/match','/leaderboard'].map(c => (
            <div key={c} style={{background:'linear-gradient(145deg,#111,#080808)', border:'1px solid #333', borderRadius:'12px', padding:'20px', textAlign:'center'}}>
              <code style={{color:'#FFD700', fontSize:'16px'}}>{c}</code>
            </div>
          ))}
        </div>

        {/* LEADERBOARD */}
        <h2 id="leaderboard" style={{color:'white', letterSpacing:'6px', fontSize:'18px', marginBottom:'20px'}}>🏆 LIVE LEADERBOARD</h2>
        <div style={{background:'#0a0a0a', border:'1px solid #FFD700', borderRadius:'20px', padding:'20px', marginBottom:'50px'}}>
          <div style={{display:'grid', gridTemplateColumns:'50px 1fr 80px 80px 80px', color:'#666', fontSize:'10px', letterSpacing:'2px', padding:'10px 15px', borderBottom:'1px solid #222'}}>
            <span>#</span><span>TEAM</span><span>W</span><span>L</span><span>PTS</span>
          </div>
          {teams.map((t,i) => (
            <div key={t.name} style={{display:'grid', gridTemplateColumns:'50px 1fr 80px 80px 80px', padding:'15px', borderBottom:'1px solid #111', alignItems:'center', background: i===0? 'linear-gradient(90deg,#1a1a00,transparent)' : 'transparent'}}>
              <span style={{color: i===0? '#FFD700' : 'white'}}>#{i+1}</span>
              <span style={{color:'white', fontSize:'14px'}}>{t.name}</span>
              <span style={{color:'#00ff00'}}>{t.w}</span>
              <span style={{color:'#ff4444'}}>{t.l}</span>
              <span style={{color:'#FFD700', fontWeight:900}}>{t.pts}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:'radial-gradient(circle,#1a1a00,#050505)', border:'2px solid #FFD700', borderRadius:'25px', padding:'40px', textAlign:'center'}}>
          <h2 style={{color:'white', fontSize:'24px', letterSpacing:'4px', margin:0}}>READY TO JOIN?</h2>
          <p style={{color:'#888', fontFamily:'Arial', margin:'15px 0 30px'}}>Entra nel Discord, registra il tuo team con /addteam e scala la classifica.</p>
          <a href="https://discord.gg/TUO_INVITO" target="_blank" style={{background:'#FFD700', color:'#000', padding:'18px 40px', borderRadius:'50px', textDecoration:'none', fontWeight:900, fontSize:'16px', display:'inline-block'}}>ENTRA IN VANTA GOLD →</a>
          <p style={{color:'#333', fontSize:'10px', marginTop:'20px', letterSpacing:'3px'}}>vanta-gold.vercel.app • BOT-HOSTING ONLINE • VERIFIED</p>
        </div>

      </div>

      <style>{`@keyframes glow { from { text-shadow: 0 0 20px #FFD700; } to { text-shadow: 0 0 40px #FFD700, 0 0 80px #FFD700; } }`}</style>
    </div>
  )
}
