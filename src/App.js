import react,{useState} from 'react'
import "./App.css";
function App() {

      let [teaLeaves,setTeaLeaves] = useState();
      let [coffeepowder,setCoffeePowder] = useState();
      let [sugar,setSugar] = useState();
      let [milk,setMilk] = useState();
      let [water,setWater] = useState();


      let [tea,setTea] = useState();
      let [coffee,setCoffee] = useState();
      let [sug,setSug] = useState();
      let [mil,setMil] = useState();
      let [wat,setWat] = useState();


      let [cat,setCat] = useState();
      let [quant,setQuant] = useState(); 
      let [issug,setIsSug] = useState(0); 
      

      let [teaLeavesbill,setTeaLeavesbill] = useState(0);
      let [coffeepowderbill,setCoffeePowderbill] = useState(0);
      let [sugarbill,setSugarbill] = useState(0);
      let [milkbill,setMilkbill] = useState(0);
      let [waterbill,setWaterbill] = useState(0);

      let [teadata,setTeaLeaveData] = useState(0);
      let [coffeedata,setCoffeeData] = useState(0);
      let [sugardata,setSugarData] = useState(0);
      let [milkdata,setMilkData] = useState(0);
      let [waterdata,setWaterData] = useState(0);


      
       function showalert()
       {
         
       }

      function bill()
      {

            console.log(cat)
              if(cat== "sc")
              {
                if(issug)
            {

              
              console.log("fjdskg"+sugarbill)
              
            }
                milkbill = 50 * quant;
                coffeepowderbill = 4*quant;
                waterbill = 100 * quant;
              }
              else if(cat == "lc")
              {
                if(issug)
            {
              setSugarbill(2 * quant);
              sugarbill = 1.5 * quant;
            }
                milkbill = 60 * quant;
                coffeepowderbill = 2*quant;
                waterbill = 100 * quant;
              }
              else if(cat == "st")
              {
                if(issug)
                {
    
                  sugarbill = 2 * quant;
                }
                milkbill = 30 * quant;
                teaLeavesbill = 4*quant;
                waterbill = 150 * quant;

              }
              else if(cat = "lt")
              {
                if(issug)
                {
                  sugarbill = 1.5 * quant;
                }
                milkbill = 40 * quant;
                teaLeavesbill = 3*quant;
                waterbill = 150 * quant;
              }

            var ans ;
              ans = tea - teaLeavesbill;
              if(ans >0)
              {
                setTea(tea)
                teadata = ans + teadata;

              }
              else
              {
                
                alert("sorry reduce amount of tea or reduce quantity ")
              }
              ans = coffee -  coffeepowderbill;
              if(ans >0)
              {
                setCoffee(coffee)
                coffeedata = coffeedata +ans;
              }
              else
              {
                
                alert("sorry reduce amount of coffee or reduce quantity ")
              }
              ans = sug - sugarbill;
              if(ans >0)
              {
                setSug(sug)
                
                sugardata = sugardata  + ans;
              }
              else
              {
                
                alert("sorry reduce amount of sugar or reduce quantity  ")
              }
              ans = mil - milkbill;
              if(ans >0)
              {
                setMil(mil)
                milkdata = milkdata + ans;
              }
              else
              {
                
                alert("sorry reduce amount of Milk or reduce quantity  ")
              }
              ans = wat - waterbill;
              if(ans >0)
              {
                setWat(wat)
               
                waterdata = waterdata+ans;
              }
              else
              {
                
                alert("sorry reduce amount of Water or reduce quantity ")
              }

            
             
            
            
      }
      function handleStock ()
      {
  
        setTea(teaLeaves)
        
        setCoffee(coffeepowder)
        setSug(sugar)
        setMil(milk)
        setWat(water)
      }
  return (
    <>
      <div className="dispense">
        <h3 className="head">DISPENSE</h3>
        <div className="selectItem">
          <span className="">Select Item</span>
         
          <select name="" id="" onChange={event=>{
                setCat(event.target.value)
          }}>
            <option value="none">selectbelow</option>
            <option value="sc">Strong Coffee</option>
            <option value="lc">Light Coffee</option>
            <option value="st">Strong Tea</option>
            <option value="lt">Light Tea</option>
            
            
          
          </select>
        </div>
        <br />
        <span className="inputLabel">Quantity </span>
        <input type="number" placeholder="0" onChange={event =>
        {
          setQuant(parseInt(event.target.value))
        }}/>
        <br />
        <input className="sugDis" type="checkbox" onClick={event=>{
                setIsSug(true)
          }}/>
        <span className="ms-1">With Sugar</span>

        

      </div>

            <button className="buttDis"  onClick={bill}>dispense</button>
            <button className="buttDis">Clear</button>
      




      {/* //////////////////stock refil div//////////////// */}
      <div className="stockRef">
      <h3 className="head">STOCK REFIL</h3>


      <span className="inputLabel">Tea Leaves Quantity </span>
        <input type="number" placeholder="0"  onChange={event=>{
          setTeaLeaves(parseInt(event.target.value))
          
          }
        }  />
        <br />
         <br />
        <span className="inputLabel">Coffee Powder Quantity: </span>
        <input type="number" placeholder="0"  onChange={event=>
          setCoffeePowder(parseInt(event.target.value))
        }/>
        <br />
         <br />
        <span className="inputLabel">Sugar Quantity </span>
        <input type="number" placeholder="0"  onChange={event=>
          setSugar(parseInt(event.target.value))
        }/>
        <br />
         <br />
        <span className="inputLabel">Milk Quantity </span>
        <input type="number" placeholder="0"  onChange={event=>
          setMilk(parseInt(event.target.value))
        }/>
        <br />
         <br />
        <span className="inputLabel">Water Quantity </span>
        <input type="number" placeholder="0"  onChange={event=>
          setWater(parseInt(event.target.value))
        }/>
        <br />
         <br />
         <button className="buttDis" onClick={handleStock}>Refil</button>
            <button className="buttDis">Clear</button>
      </div>


      {/* ///////////stock report /////// */}

      <div className="stockReport">
      <h3 className="head">STOCk REPORT</h3>

            <p className="inputLabel" >Stock Consumed</p>
            <span className="inputLabel">Tea Leaves  : </span>
           <span>{teadata}</span>
            <br />
            
            <span className="inputLabel">Coffee Powder  : </span>
           <span>{coffeedata}</span>
            <br />
            
            <span className="inputLabel">Sugar  : </span>
           <span>{sugardata}</span>
            <br />
           
            <span className="inputLabel">Milk : </span>
           <span>{milkdata}</span>
            <br />
            <span className="inputLabel">Water : </span>
           <span>{waterdata}</span>
            <br />




            <br />
            <br />
            <br />

            <p className="inputLabel" >Stock Remaining</p>
            <span className="inputLabel">Tea Leaves  : </span>
           <span>{tea}</span>
            <br />
            
            <span className="inputLabel">Coffee Powder  : </span>
           <span>{coffee}</span>
            <br />
            
            <span className="inputLabel">Sugar  : </span>
           <span>{sug}</span>
            <br />
           
            <span className="inputLabel">Milk : </span>
           <span>{mil}</span>
            <br />
            <span className="inputLabel">Water : </span>
           <span>{wat}</span>
            <br />
            <br />
            <br />
            <br />




            <p className="inputLabel" >Leakage Information</p>     
            <span className="inputLabel">Milk : </span>
           <span>0</span>
            <br />
            <span className="inputLabel">Water : </span>
           <span>0</span>
            <br />


      </div>


    </>
  );
}

export default App;
