import { Date } from "prismic-reactjs";


export function renderDateFormat(date){
    if(date!==null){
        return new Intl.DateTimeFormat('en-US',
        {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(Date(date));
    }
    return "-";
    
}
export function renderTime(date){
    return Intl.DateTimeFormat('en-US', {
        hour: "numeric",
        minute: "numeric"
    }).format(Date(date));
}


