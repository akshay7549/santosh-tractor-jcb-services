const galleryButtons=[...document.querySelectorAll('[data-gallery-index]')];
const photoViewer=document.querySelector('#photo-viewer');
if(photoViewer&&typeof photoViewer.showModal==='function'){
  const viewerImage=document.querySelector('#photo-viewer-image');
  const viewerCaption=document.querySelector('#photo-viewer-caption');
  const viewerCount=document.querySelector('#photo-viewer-count');
  const closePhoto=photoViewer.querySelector('.photo-close');
  let activePhoto=0;
  let returnFocus=null;
  const showPhoto=index=>{
    activePhoto=(index+galleryButtons.length)%galleryButtons.length;
    const card=galleryButtons[activePhoto];
    const image=card.querySelector('img');
    viewerImage.src=image.src;
    viewerImage.alt=image.alt;
    viewerCaption.textContent=card.querySelector('.real-photo-caption>span').textContent;
    viewerCount.textContent=`ASLI TASVEEREIN · ${activePhoto+1} / ${galleryButtons.length}`;
  };
  galleryButtons.forEach((button,index)=>button.addEventListener('click',()=>{
    returnFocus=button;
    showPhoto(index);
    photoViewer.showModal();
    document.documentElement.classList.add('photo-viewer-open');
    closePhoto.focus();
  }));
  closePhoto.addEventListener('click',()=>photoViewer.close());
  photoViewer.querySelector('.photo-prev').addEventListener('click',()=>showPhoto(activePhoto-1));
  photoViewer.querySelector('.photo-next').addEventListener('click',()=>showPhoto(activePhoto+1));
  photoViewer.addEventListener('keydown',event=>{
    if(event.key==='ArrowRight'){event.preventDefault();showPhoto(activePhoto+1);}
    if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(activePhoto-1);}
  });
  photoViewer.addEventListener('click',event=>{
    if(event.target===photoViewer){const bounds=photoViewer.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)photoViewer.close();}
  });
  photoViewer.addEventListener('close',()=>{
    document.documentElement.classList.remove('photo-viewer-open');
    if(returnFocus)returnFocus.focus({preventScroll:true});
  });
}else{
  galleryButtons.forEach(button=>button.addEventListener('click',()=>window.open(button.querySelector('img').src,'_blank','noopener')));
}
