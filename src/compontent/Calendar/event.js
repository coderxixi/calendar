let target = null;

let flag = null;
export default (container,handler) => {

  container.onclick = function (e) {

    const tar = e.target
    const className = tar.className;
    if (className.includes('current-day')) {
      if (flag) {
        flag.className = flag.className.replace(' selected', '')
      }
       flag=tar
      tar.className += ' selected';
      handler&&handler(tar.dataset.date)
      console.log('className', className,tar.dataset.date);
    }
  
  }


}