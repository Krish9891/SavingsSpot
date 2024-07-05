import { Deal } from "../../app/models/deal"
import DealList from "./DealList";
import { useState, useEffect } from "react";


export default function Catalog() {
    const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    fetch('https://localhost:7012/api/Deals')
      .then(response => response.json())
      .then(data => setDeals(data))
    
  },[])

  function addDeals(){
    setDeals(prevState => [...prevState, 
    {
    dealId:prevState.length + 100,
    active:true,
    description:'some description',
    title: 'deal ' + (prevState.length+1), 
    currentPrice: (prevState.length*100)+100,
    discount:50,
    mrp:100,
    url:'http://picsum.photos/200'
    }
    ])
  } 

    return (
        <>
        <DealList deals={deals}/>
        </>
    )
} 