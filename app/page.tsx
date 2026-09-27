"use client"
import { useState, useEffect } from 'react'
export default function Home() {
  const [leagues, setLeagues] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/api/leagues').then(r=>r.json()).then(d=>{ setLeagues(d||[]); setLoading(false) }).catch(()=>setLoading(false))
  }, [])
  return (
    <div style={{background:'#050505', color:'#FFD700', minHeight:'100vh', fontFamily:'Arial Black'}}>
      <div style={{height:'60vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'radial-gradient(ellipse at center,#1a1a00 0%,#050505 70%)', borderBottom:'3px solid #FFD700', textAlign:'center'}}>
        <h1 style={{fontSize:'10vw', letterSpacing:'12px', margin:0, textShadow:'0 0 40px #FFD700'}}>VANTA GOLD</h1>
        <p style={{color:'white', letterSpacing:'10px'}}>ELITE LEAGUE NETWORK</p>
      </div>
      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'40px 20px'}}>
        <h2 style={{color:'white'}}>🏆 LEGHE ATTIVE - {loading?'...':leagues.length}</h2>
        {leagues.length===0 ? (
          <div style={{background:'#0a0a0a', border:'1px dashed #333', padding:'50px', textAlign:'center', borderRadius:'20px', color:'#666', fontFamily:'Arial'}}>
            Nessuna lega ancora.<br/>Fai /setup nel tuo Discord per apparire qui!
          </div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px'}}>
            {leagues.map(l=>(
              <div key={l.id} style={{background:'#111', border:'1px solid #222', borderRadius:'15px', padding:'20px', borderLeft:'4px solid #FFD700'}}>
                <h3 style={{color:'white', margin:0}}>{l.name}</h3>
                <p style={{color:'#666', fontFamily:'Arial', fontSize:'11px'}}>{l.guildId} • {l.teamCount||0} squadre</p>
                <a href={`/league/${l.id}`} style={{background:'#FFD700', color:'#000', padding:'10px 20px', borderRadius:'20px', textDecoration:'none', fontSize:'11px'}}>VEDI LEGA →</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
