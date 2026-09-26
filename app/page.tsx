"use client"
export default function Home() {
  return (
    <div style={{background:'#050505', color:'#FFD700', minHeight:'100vh', fontFamily:'Arial Black', textAlign:'center'}}>
      <div style={{height:'70vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'radial-gradient(circle,#1a1a00 0%,#050505 70%)', borderBottom:'3px solid #FFD700'}}>
        <h1 style={{fontSize:'10vw', letterSpacing:'15px', margin:0, textShadow:'0 0 40px #FFD700'}}>VANTA GOLD</h1>
        <p style={{color:'white', letterSpacing:'10px', marginTop:'10px'}}>ELITE LEAGUE PLATFORM</p>
        <div style={{marginTop:'30px', display:'flex', gap:'15px', justifyContent:'center'}}>
          <a href="#" style={{background:'#FFD700', color:'#000', padding:'15px 30px', borderRadius:'50px', textDecoration:'none', fontWeight:900}}>JOIN LEAGUE</a>
          <a href="#" style={{background:'transparent', color:'#FFD700', border:'2px solid #FFD700', padding:'15px 30px', borderRadius:'50px', textDecoration:'none', fontWeight:900}}>DISCORD</a>
        </div>
      </div>
      <div style={{maxWidth:'900px', margin:'40px auto', padding:'20px'}}>
        <div style={{background:'#111', border:'1px solid #FFD700', borderRadius:'20px', padding:'30px'}}>
          <h2 style={{color:'white'}}>🏆 BOT ONLINE</h2>
          <p style={{color:'#888', marginTop:'15px', fontFamily:'Arial'}}>Comandi: /setup /addteam /teams /removeteam /match /leaderboard</p>
          <p style={{color:'#FFD700', marginTop:'20px'}}>vanta.vercel.app - Coming Soon</p>
        </div>
      </div>
    </div>
  )
}
