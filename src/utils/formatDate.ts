function formatDate(deliveryDate: string){
  console.log(deliveryDate)
  const [dataString, timeComplete] = deliveryDate.split(' ')
  const [hour, minutes] = timeComplete.split(':')



  const dateFormated = {
    date: dataString,
    time: `${hour}:${minutes}`
  }
  return dateFormated
}

export default formatDate