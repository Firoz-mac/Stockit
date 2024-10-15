import React, { useEffect, useState } from 'react'
import styles from "./Feed.module.css"
import { getImageUrl } from '../../utils'
import topSellers from '../../data/topSellers.json'

function Feed() {

    const [clickeddata, setClickedData]=useState({
        img:"companyLogo/apple.png",
        stname:"Apple",
        stockprice:"$100",
        stockreturnvalue:"+0.85%"
    })

    return (
        <section className={styles.container}>
            <p>My Portfolio</p>
            <div className={styles.topSelling}>
                {
                    topSellers.map((item, index) => {
                        return (
                            <div onClick={()=>{

                                setClickedData((pre)=>({
                                    ...pre,
                                    img:item.imageSrc,
                                    stockprice:item.stockprice,
                                    stockreturnvalue:item.returnvalue,
                                    stname:item.stockname
                                })
                                    
                                )
    
                                console.log(clickeddata)

                            }} className={styles.topSellingCard} key={index}>
                                <div className={styles.stockNameSection}>
                                    <div className={styles.logoSection}>
                                        <img className={styles.cardLogo} src={getImageUrl(item.imageSrc)} alt="logo" />
                                    </div>
                                    <p className={styles.stockName}>{item.stockname}</p>
                                </div>
                                <div className={styles.stockRateSection}>
                                    <div className={styles.tag}>
                                        <p className={styles.stockRate}>Total Shares</p>
                                        <p className={styles.stockRate}>Total Retern</p>
                                    </div>
                                    <div className={styles.rate}>
                                        <p className={styles.stockRate}>{item.stockprice}</p>
                                        <p className={styles.stockRate}>{item.returnvalue}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }



            </div>
            <div className={styles.bottomSelling}>
                <div className={styles.selectedSection}>
                    <div className={styles.selectedCardTop}>
                        <div className={styles.selectedCardTopLeft}>
                            <div className={styles.selectedCardTopLeftProfile}>
                                <img className={styles.cardLogo} src={getImageUrl(clickeddata.img)} alt="logo" />
                            </div>
                            <div className={styles.selectedCardTopLeftProfileName}>
                                <p>{clickeddata.stname}</p>
                                <p className={styles.selectedCardTopLeftProfiletext}>{clickeddata.stockreturnvalue}</p>
                            </div>
                        </div>
                        <div className={styles.selectedCardTopRight}>
                            <p className={styles.selectedCardTopLeftProfiletextRate}>{clickeddata.stockprice}</p>
                        </div>
                    </div>
                    <div className={styles.selectedCardDividingLine}></div>
                    <div className={styles.selectedCardGraphSection}>
                        <img className={styles.graph} src={getImageUrl("graph/graph.png")} alt="graph" />
                    </div>
                </div>
                <div className={styles.watchlistSection}>
                    <div className={styles.watlistHead}>
                        <p>My Watchlist</p>
                        <p>+</p>
                    </div>
                    {
                        topSellers.map((items,index)=>{
                            return(
                                <>
                                    <div className={styles.watchlistCard} key={index}>
                                        <div className={styles.wLeft}>
                                            <div className={styles.wCardLogo}>
                                                <img className={styles.cardLogo} src={getImageUrl(items.imageSrc)} alt="logo" />
                                                
                                            </div>
                                            <p>{items.stockname}</p>
                                        </div>
                                        <div className={styles.wRight}>
                                            <p>{items.stockprice}</p>
                                            <p>{items.returnvalue}</p>
        
                                        </div>
                                        
                                    </div>
                                    <div className={styles.selectedCardDividingLine}></div>
                                </>
                            )
                        })
                    }

                    <div></div>
                </div>
            </div>
            <div></div>

        </section>
    )
}

export default Feed
