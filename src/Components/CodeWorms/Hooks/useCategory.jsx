import {useState, useEffect} from 'react'

const useCategory = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://api.ecom-bd.com/allcategory')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
            setLoading(true)
        })
    },[])

    return [category, loading];
};

export default useCategory;