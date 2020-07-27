
export const fetchFunc = (url, fetchMethod, fetchBody) => {
  if(fetchMethod === 'GET'){
    return fetch(url)
      .then(res => res.json());
  }
  
  if(fetchMethod === 'POST'){
    return fetch(url, {
      method: 'POST',
      body: fetchBody,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  }

  if(fetchMethod === 'PUT'){
    return fetch(url, {
      method: 'PUT',
      body: fetchBody,
      headers: {
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  }

  if(fetchMethod === 'PATCH'){
    return fetch(url, {
      method: 'PUT',
      body: fetchBody,
      headers: {
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  }

  if(fetchMethod === 'DELETE'){
    return fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json());
  }
};

