let target=null;


export default (container)=>{

 
  container.addEventListenter('click',(e)=>{
  
    console.log(container);
    const tar=e.target;
    const className=tar.className
    console.log('e',e);
    if(className.includes('current-day')){
      if(target){
        target.className= target.className.replace(' selected','')
      }
      target=tar
      tar.className=' selected'
      console.log('6666');
    }
  },false);
}