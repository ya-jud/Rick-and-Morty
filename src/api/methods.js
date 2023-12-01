export const getData = async (url) => {
  let fromApiData
  await fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => fromApiData = data)
    .catch(error => console.error(error))
    .finally(() => {
      console.log('Data received!')
    })
  return fromApiData
}