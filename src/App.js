import './App.css';
import ResultTable from "./components/ResultTable/ResultTable"
import SearchField from "./components/SearchField/SearchField"
import statisticData from "./data/ShootingStatistic.json"
import React, { useState } from "react"

function App() {

  const [sortedData, setSortedData] = useState(initialData())
  const [searchStr, setSearchStr] = useState("")
  const [isSorted, setIsSorted] = useState({ name: false, place: false, hits: false, fireRate: false })//Reverse sort

  function initialData() {
    let sorted = []
    //Add rating for sort
    for (const data of statisticData) {
      data.rating = ((data.hits * 100) / data.shots) / data.fireRate
      data.hitsPercent = (data.hits * 100 / data.shots).toFixed(1)
    }
    //sort by rating
    sorted = statisticData.sort((a, b) => {
      return b.rating - a.rating
    })

    for (let i = 0; i < sorted.length; i++) {
      sorted[i].place = i + 1
    }
    return sorted
  }

  function sortBy(field, reverse, primer) {
    const key = primer ?
      (x) => { return primer(x[field]) } :
      (x) => { return x[field] };
    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }

  function sortHandler(e) {
    let sorted = []

    if (e.target.title === "name") {
      sorted = sortedData.slice(0).sort(sortBy("name", isSorted.name, (a) => a.toUpperCase()))
      setIsSorted({ ...isSorted, name: !isSorted.name })
    }

    if (e.target.title === "hitsPercent") {
      sorted = sortedData.slice(0).sort(sortBy("hitsPercent", isSorted.hits, parseInt))
      setIsSorted({ ...isSorted, hits: !isSorted.hits })
    }

    if (e.target.title === "fireRate") {
      sorted = sortedData.slice(0).sort(sortBy("fireRate", isSorted.fireRate, parseInt))
      setIsSorted({ ...isSorted, fireRate: !isSorted.fireRate })
    }

    if (e.target.title === "fireRate") {
      sorted = sortedData.slice(0).sort(sortBy("fireRate", isSorted.fireRate, parseInt))
      setIsSorted({ ...isSorted, fireRate: !isSorted.fireRate })
    }
    if (e.target.title === "#") {
      sorted = sortedData.slice(0).sort(sortBy("place", isSorted.place, parseInt))
      setIsSorted({ ...isSorted, place: !isSorted.place })
    }

    setSortedData(sorted)
  }


  function searchHandle(e) {
    setSearchStr(e.target.value)
  }

  function searchSubmit(e) {
    e.preventDefault()
    let filterData = []
    filterData = statisticData.filter(member => {
      return member.name.toLowerCase().includes(searchStr)
    })
    setSortedData(filterData)
    if (searchStr === "") {
      setSortedData(initialData())
    }
  }

  return (
    <div className="App">
      <div className="container">
        <SearchField searchHandle={searchHandle} searchSubmit={searchSubmit} />
        <ResultTable statisticData={sortedData} sortHandler={sortHandler} />
      </div>
    </div>
  );
}

export default App;
