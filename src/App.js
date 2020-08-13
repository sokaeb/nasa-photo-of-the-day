import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header';
import Body from './Components/Body'
import Footer from './Components/Footer';
import {BASE_URL, API_KEY} from './Constants';


export default function App() {
  const [nasaData, setNasaData ] = useState({})
  // const [imgOfDay, setImgOfDay] = useState(null)
  // const [explaination, setExplaination] = useState('')
  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  // const [copyright, setCopyright] = useState('')
 
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  
// // setting title on HEADER 
// useEffect(() => {
//   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//     .then(res => {
//       setTitle(res.data.title)
//     })
//     .catch(err => {
//       debugger
//     })
// }, [])
// // setting date on HEADER
// useEffect(() => {
//   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//     .then(res => {
//       setDate(res.data.date)
//     })
//     .catch(err => {
//       debugger
//     })
// }, [])
// // setting img of day on BODY
//   useEffect(() => {
//     axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//     .then(res => {
//       setImgOfDay(res.data.url)
//     })
//     .catch(err => {
//       debugger
//     })
//   }, []);
// // setting explanation on BODY
//   useEffect(() => {
//     axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//     .then(res => {
//       setExplaination(res.data.explanation)
//       console.log(res.data.explanation)
//     })
//     .catch(err => {
//       debugger
//     })
//   }, []);
// // setting copyright on FOOTER
// useEffect(() => {
//   axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//     .then(res => {
//       setCopyright(res.data.copyright)
//     })
//     .catch(err => {
//       debugger
//     })
// }, [])

  
  return (
    <div className="App">
      <Header nasaData={nasaData} />
      <Body nasaData={nasaData} />
      <Footer nasaData={nasaData} />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}
