import { useState , useEffect} from 'react'
import './App.css'
import { data } from 'autoprefixer'

function App() {

const[animal,setAnimal] = useState("")
const[location,setLocation] = useState("")
const[breed,setBreed] = useState("")
const[findlocation,setfindlocation] = useState([])
const[findbreed,setfindbreed] = useState([])
const [displaydata,setdisplaydata] = useState([]);
let findlocations;
const searchfunction = (e)=>{
  e.preventDefault();
  setdisplaydata(findbreed)
  // console.log("ok",);
  
}
useEffect(()=>{
  requestPets()
},[animal,location,breed])



const locationfunction = (e)=>{
  setLocation(e.target.value)
}

  async function requestPets(){
    const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const data = await response.json();
      findlocations = data.pets
    
    setfindlocation(findlocations)
    console.log(findlocations);
    setfindbreed(findlocations)   
      }




  return (
    <>
    <h1 className=' text-center text-3xl font-bold font-mono '>Buy Your Favourite Pets</h1>
    <form className="max-w-sm mx-auto shadow-md my-3 bg-slate-800 p-3 formdiv">
    <div className="mb-5 my-3">
      <label
        htmlFor="email"
        className="block mb-2 font-medium text-gray-90 text-white  w-1/3 p-2 rounded-lg text-lg"
      >
        Your Animal
      </label>
      <input
        type="text"
        id="email"
        className=" border border-gray-200 rounded-lg  block w-full p-2.5"
        placeholder="Enter Animal"
        required=""
        onChange={(e) => setAnimal(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <select name="animals" id="animals" className=' w-full shadow-md my-3 p-3 rounded-lg'
      onChange={locationfunction}
>
        {
           findlocation.map((data,ind)=>(

           <option value={data.city} key={ind}>{data.city}</option>

           ))
        }
       
      </select>
    
    </div>

    <div className="mb-5">
    <select name="animals" id="animals" className=' w-full shadow-md my-3 p-3 rounded-lg' onChange={(e)=>setBreed(e.target.value)} >
      {
  
        findbreed.map((data,ind)=>(

          <option value={data.breed} key={ind}>{data.breed}</option>

          ))
      }
      </select>
    </div>
      <div className="flex items-center justify-center">
      <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 text-center flex justify-center mb-2 p-2 rounded-md" onClick={searchfunction}>
      Search
    </button>
      </div>
  </form>
  


{/* ============product card============================ */}
<div className=' flex w-full justify-center flex-wrap'>
{
  // console.log(displaydata)
  displaydata.map((data,ind)=>(

 
<div key={ind} className=' flex w-full justify-center flex-wrap'>
  <div class="w-full max-w-sm  border border-gray-200 rounded-lg shadow  bg-lime-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={data.images[0]} alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div>
        <p className=' text-white text-3xl'>Animal: <span>{data.animal}</span></p>
        <p className=' text-white text-3xl'>Breed: <span>{data.breed}</span></p>
        <p className=' text-white text-3xl'>Name: <span>{data.name}</span></p>
        <p className=' text-white text-3xl'>City: <span>{data.city}</span></p>
        </div>
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.description}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532  0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>




</div>

))
}

</div>
{/* ===========================product card========================== */}











    </>
  )
}

export default App
