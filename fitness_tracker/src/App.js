import SortButton from "./components/Buttons/SortButton";
import ActivityList from "./components/List/List";
import Body from "./components/UI/Body";
import Header from "./components/UI/Header";
import {useState,useRef} from 'react'
import Modal from 'react-modal'
import styles from './App.module.css'


Modal.setAppElement('#modal')

function App() {
  const [activity,setActivity]=useState([{id:0,time:100,distance:1000},{id:1,time:50,distance:100}])
  const [showModal,setShowModal]=useState(false);
  const durationRef=useRef();
  const distanceRef=useRef();

  function ShowHandler(){
    if(showModal) setShowModal(false);
    else setShowModal(true);
  }

  function AddHandler(){
    setShowModal(false);
    setActivity(prev=>{
      return [...prev,{id:prev.length,time:durationRef.current.value,distance:distanceRef.current.value}]
    })
  }

  function durationSort(){
    setActivity((prev)=>{
      return [...prev].sort(function( a , b){
        if(a.time > b.time) return 1;
        if(a.time < b.time) return -1;
        return 0;
    })
    })
  }

  function distanceSort(){
    setActivity((prev)=>{
      return [...prev].sort(function( a , b){
        if(a.distance > b.distance) return 1;
        if(a.distance < b.distance) return -1;
        return 0;
    })
    })
  }

  function deleteHandler(id){
    setActivity(prev=>{
      return prev.filter(item=>item.id!==id)
    })
  }

  return (
    <>
      <Header></Header>
      <Body>
        <SortButton title1={"Sort by: Duration"} title2={"Sort by: Distance"} sort1={durationSort} sort2={distanceSort}></SortButton>
        <ActivityList array={activity} onAdd={ShowHandler} deleteData={deleteHandler}></ActivityList>
        <Modal isOpen={showModal} style={customStyles}>
          <input placeholder="Duration" type="number" ref={durationRef} className={styles.input}></input>
          <input placeholder="Distance" type="number" ref={distanceRef} className={styles.input}></input>
          <div>
            <button onClick={ShowHandler} className={styles.button}>Cancel</button>
            <button onClick={AddHandler}  className={styles.button}>Submit</button>
          </div>
        </Modal>
      </Body>
      </>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default App;
