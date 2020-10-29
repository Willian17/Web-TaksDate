

function formatDate(deliveryDate: string){
  const [dataString, timeComplete] = deliveryDate.split(' ')
  const [hour, minutes , , turn] = timeComplete.split(':')
  console.log(timeComplete)
  const ambient = process.env.NODE_ENV

  var dataStringFormated = dataString
  var timeFormated = `${hour}:${minutes}`
  if(ambient == 'production'){
     const [month, day, year] =  dataString.split('/')
     dataStringFormated = `${day}/${month}/${year}`

     timeFormated = `${hour}:${minutes} ${turn}`
  }
  


  const dateFormated = {
    date: dataStringFormated,
    time: timeFormated
  }
  return dateFormated
}

export default formatDate