import {useState, useEffect} from 'react'

const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allcategory')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
            setLoading(true)
        })
    },[])

    return [category, loading];
};

export default useCategory;