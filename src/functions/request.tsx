export async function sendRequest(url:string) {
    try{
        const response = await fetch(url, {
            method: 'GET'
        });
        const responseData = await response.json();
        return responseData;
        //setLoadedData(responseData.results);
        //pagination
        /*if(responseData.count%10 !== 0){
            var pags:number = Math.floor(responseData.count/10) + 1;
            setPages(pags);
        }*/
    } catch(err){
        console.log(err);
    }
};