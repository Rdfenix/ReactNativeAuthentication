interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fdafdsafdfdsfsdfsdfsdfds',
        user: {
          name: 'Rudnei',
          email: 'rudnei@email.com',
        },
      });
    }, 2000);
  });
}
