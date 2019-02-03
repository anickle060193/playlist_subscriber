const API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000';

export async function login( username: string, password: string )
{
  const params = new URLSearchParams();
  params.set( 'username', username );
  params.set( 'password', password );
  let response = await fetch( `${API_URL}/api/login`, { method: 'POST', body: params } );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  return data;
}

export async function signUp( username: string, password: string )
{
  const params = new URLSearchParams();
  params.set( 'username', username );
  params.set( 'password', password );
  let response = await fetch( `${API_URL}/api/signup`, { method: 'POST', body: params } );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  return data;
}
