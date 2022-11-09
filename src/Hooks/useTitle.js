import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title=`${title} - Tech Training Hub`;
    }, [title])
};

export default useTitle;