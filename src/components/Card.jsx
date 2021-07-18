import React,{useEffect,useState} from 'react'

export default function Card({info}) {
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        setIndex(0)
    },[info])
    return (
        <div className="planet-card"  style={{"--selected-color":info.color}}>
            <div className="sol">
                <img src={info.images[index]} alt={info.name+" svg"} />

            </div>
            <div className="sag">
                <section className="info">
                    <h1 className="title">{info.name.toUpperCase()}</h1>
                    <p>
                        {info.desc[index]}
                    </p>
                    <div className="source">Source: <a href={info.source} target="_blank">WikiPedia</a></div>
                    <ul>
                        <li onClick={()=>{setIndex(0)}} className={index == 0 ? "active" :""}>
                            <div className="number">01</div>
                            <div className="caption">OVERVIEW</div>
                        </li>

                        <li onClick={()=>{setIndex(1)}} className={index == 1 ? "active" :""}>
                            <div className="number">01</div>
                            <div className="caption">INTERNAL STRUCTURE</div>
                        </li>

                        <li onClick={()=>{setIndex(2)}} className={index == 2 ? "active" :""}>
                            <div className="number">01</div>
                            <div className="caption">SURFACE GEOLOGY</div>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="detail-container">
                <div className="detail-box">
                    <div className="detail-title">ROTATION TIME</div>
                    <div className="detail-caption">{info.info[0]}</div>
                </div>

                <div className="detail-box">
                    <div className="detail-title">REVOLUTION TIME</div>
                    <div className="detail-caption">{info.info[1]}</div>
                </div>

                <div className="detail-box">
                    <div className="detail-title">RADIUS</div>
                    <div className="detail-caption">{info.info[2]}</div>
                </div>

                <div className="detail-box">
                    <div className="detail-title">AVERAGE TEMP.</div>
                    <div className="detail-caption">{info.info[3]}</div>
                </div>
            </div>
        </div>
    )
}
