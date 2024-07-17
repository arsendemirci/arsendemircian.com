export const validation = {
  email: {
    required: 'Please enter a valid email',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email',
    },
  },
  subject: {
    required: 'Please enter the subject!',
  },
  name: {
    required: 'Please enter your name!',
  },
  message: {
    required: 'Please enter your message!',
  },
};
