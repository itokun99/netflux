export const toggleBodyScroll = (status: boolean) => {
  if(status) {
    document.body.classList.remove('scroll-off');
    return;
  }

  document.body.classList.add('scroll-off');
};

export const getErrorMessageFromApi: (err: any) => string = (err) => {
  if(err.response) {
    if(err.response.data?.data?.error && err.response.data?.data?.error_description) {
      return `${err.response.data?.data?.error_description}, ${err.response.data.data.error}`;
    } else if(err.response.data?.message) {
      return `${err.response.data?.message}`;
    } else {
      return `${err.response.statusText}`
    }
  } else if(err.request) {
    return `No response from server, please try again`
  } else {
    return 'Something went wrong, please contact the administrator / support'
  }
}