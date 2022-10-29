let target = null;

let flag = null;
export default (container) => {

  container.onclick = function (e) {

    const tar = e.target
    const className = tar.className;
    if (className.includes('current-day')) {
      if (flag) {
        flag.className = flag.className.replace(' selected', '')
      }
       flag=tar
      tar.className += ' selected';
      console.log('className', className);
    }
  }


}