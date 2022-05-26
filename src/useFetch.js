import {useState,useEffect} from 'react';

const useFetch =(url)=>{
    const [data,setData]=useState(null);
    const [Loading,setLoading]=useState(true);
    const [error,setErr]= useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("could not fetch")
            }
            return res.json();
        }).then((data)=>{
            setData(data);
            setLoading(false);
            setErr(null);
    }).catch(err=>{
        setErr(err.message)
        setLoading(false)
    })
    },[url])
    return {data,Loading,error}
}

export default useFetch;