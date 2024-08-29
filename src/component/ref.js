const addToCartHandler = async(item) =>{
    submitCartHandler(item);
    //  const response = await axios.post('https://e-commerce3-30722-default-rtdb.firebaseio.com/cart.json',
    //   item
    //  )
    
   }
  //  const res=async() =>{ 
  //   const resp2=  await axios.get('https://e-commerce3-30722-default-rtdb.firebaseio.com/cart.json')
  //   let products =Object.values(resp2.data)
  //   console.log(products,"from line no. 85");
  //   const productsKeys =Object.keys(resp2.data)
  //   console.log(productsKeys, "from line no. 87");

  //   products=products.map((pdata,index) =>{
  //     pdata.id = productsKeys[index];
  //     return pdata;
  //  })
  //  console.log(products ,"updated cart data");
  //   restoreCartHandler(products);
  // //   const resp3=await resp2.json();
  // console.log(resp2, "from line no. 88");
  // // }
  // // res();
  //   }
   useEffect(() =>{
  //   const res=async() =>{ 
  //   const resp2=  await axios.get('https://react-http-6b09e-default-rtdb.firebaseio.com/cart.json')
  //   //  submitCartHandler(resp2)
  //   const resp3=await resp2.json();
  // console.log(resp3, "from line no. 82");
  // // }
  res();
    // }
},[])
   console.log(FormData);