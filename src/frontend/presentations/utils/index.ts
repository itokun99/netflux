export const toggleBodyScroll = (status: boolean) => {
  if(status) {
    document.body.classList.remove('scroll-off');
    return;
  }

  document.body.classList.add('scroll-off');
};